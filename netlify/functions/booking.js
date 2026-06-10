const requiredFields = ["checkIn", "checkOut", "guests", "room", "name", "phone"];

const clean = (value) => String(value || "").trim().slice(0, 500);

const json = (statusCode, body) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
});

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return json(405, { ok: false, message: "Method not allowed" });
  }

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { ok: false, message: "Invalid booking data" });
  }

  const booking = {
    id: `COZY-${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: "New",
    checkIn: clean(body.checkIn),
    checkOut: clean(body.checkOut),
    guests: clean(body.guests),
    room: clean(body.room),
    name: clean(body.name),
    phone: clean(body.phone),
    email: clean(body.email),
    notes: clean(body.notes),
    source: clean(body.source || "website"),
  };

  const missing = requiredFields.filter((field) => !booking[field]);
  if (missing.length) {
    return json(400, { ok: false, message: `Missing fields: ${missing.join(", ")}` });
  }

  if (booking.checkIn >= booking.checkOut) {
    return json(400, { ok: false, message: "Check-out must be after check-in" });
  }

  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    console.log("Booking captured in test mode:", booking);
    return json(200, { ok: true, mode: "test", bookingId: booking.id });
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: process.env.BOOKING_WEBHOOK_SECRET || "",
      booking,
    }),
  });

  if (!response.ok) {
    const message = await response.text().catch(() => "Google Sheet webhook failed");
    console.error("Google Sheet webhook failed:", message);
    return json(502, { ok: false, message: "Could not save booking request" });
  }

  return json(200, { ok: true, mode: "live", bookingId: booking.id });
};
