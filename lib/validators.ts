// src/lib/validators.ts
import type { ContactPayload } from './types';

export function validateContact(p: ContactPayload) {
  const errors: string[] = [];
  if (!p.name || p.name.trim().length < 2) errors.push('invalid name');
  if (!p.email || !/^\S+@\S+\.\S+$/.test(p.email)) errors.push('invalid email');
  return errors;
}
