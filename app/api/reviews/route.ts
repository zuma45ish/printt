// src/app/api/reviews/route.ts
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import type { Review } from '@/lib/types';

const DATA_FILE = path.resolve(process.cwd(), 'data', 'reviews.json');

export async function GET() {
  try {
    const raw = await fs.readFile(DATA_FILE, 'utf-8');
    const reviews: Review[] = JSON.parse(raw || '[]');
    return NextResponse.json(reviews);
  } catch (err) {
    console.error('Reviews GET error:', err);
    // If file missing or parse error, return empty list
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, rating, comment, clientId, email } = body as Partial<Review & { clientId?: string; email?: string }>;

    if (!name || !rating || !comment || !email) {
      return NextResponse.json({ error: 'name, rating, comment and email are required' }, { status: 400 });
    }

    const raw = await fs.readFile(DATA_FILE, 'utf-8').catch(() => '[]');
    const reviewsArray = (JSON.parse(raw || '[]') as Array<Record<string, unknown>> || []);

    // Normalize email for comparison
    const normalizedEmail = String(email).trim().toLowerCase();

    // Check for duplicate by email
    const duplicateByEmail = reviewsArray.find((r) => typeof r.email === 'string' && String(r.email).trim().toLowerCase() === normalizedEmail);
    if (duplicateByEmail) {
      return NextResponse.json({ error: 'A review with this email already exists' }, { status: 409 });
    }

    const id = clientId ? clientId : `r${Date.now()}`;
    const date = new Date().toISOString().slice(0, 10);
  const newReview: Record<string, unknown> = { id, name, email: normalizedEmail, rating: Number(rating), comment, date };
  if (clientId) newReview.clientId = clientId;

    reviewsArray.unshift(newReview);

  await fs.writeFile(DATA_FILE, JSON.stringify(reviewsArray, null, 2), 'utf-8');

    return NextResponse.json(newReview, { status: 201 });
  } catch (err) {
    console.error('Reviews POST error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
