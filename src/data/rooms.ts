import roomsContent from "./content/rooms.json";

export type Room = {
  title: string;
  slug: string;
  priceFrom: string;
  guests: string;
  viewType: string;
  shortDescription: string;
  longDescription: string;
  amenities: string[];
  mainImage: string;
  bookingUrl: string;
  featured: boolean;
};

export const rooms: Room[] = roomsContent.rooms;
