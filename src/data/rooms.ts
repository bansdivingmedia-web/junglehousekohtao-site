import roomsContent from "./content/rooms.json";

export type Room = {
  title: string;
  slug: string;
  category: string;
  bedType: string;
  status?: string;
  priceFrom: string;
  guests: string;
  viewType: string;
  shortDescription: string;
  longDescription: string;
  amenities: string[];
  mainImage: string;
  gallery?: string[];
  bookingUrl: string;
  featured: boolean;
};

export const rooms: Room[] = roomsContent.rooms;
