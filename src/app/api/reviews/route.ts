// Temporarily disabled due to static export issues
/*
export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

import { NextResponse } from 'next/server';

interface Review {
  text: string;
  author_name: string;
  rating: number;
  time: number;
  profile_photo_url: string;
  relative_time_description: string;
}

async function translateText(text: string): Promise<string> {
  try {
    const response = await fetch('https://translation.googleapis.com/language/translate/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: text,
        source: 'en',
        target: 'tr',
        key: process.env.GOOGLE_TRANSLATE_API_KEY,
      }),
    });

    const data = await response.json();
    return data.data.translations[0].translatedText;
  } catch (error) {
    console.error('Translation error:', error);
    return text;
  }
}

export async function GET() {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=YOUR_PLACE_ID&fields=reviews&key=${process.env.GOOGLE_PLACES_API_KEY}`
    );

    const data = await response.json();

    if (!data.result || !data.result.reviews) {
      throw new Error('No reviews found');
    }

    const reviews: Review[] = await Promise.all(
      data.result.reviews.map(async (review: any) => ({
        text: await translateText(review.text),
        author_name: review.author_name,
        rating: review.rating,
        time: review.time,
        profile_photo_url: review.profile_photo_url,
        relative_time_description: review.relative_time_description,
      }))
    );

    return NextResponse.json({ result: { reviews } });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}
*/

// Empty export to keep the file
export {}; 