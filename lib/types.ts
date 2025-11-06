// src/lib/types.ts
export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message?: string;
};

export type Review = {
  id: string;
  name: string;
  email?: string;
  rating: number;
  comment: string;
  date: string; // YYYY-MM-DD
};
