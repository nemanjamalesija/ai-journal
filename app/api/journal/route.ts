import { getUserFromClerkID } from '@/app/utils/auth';
import { prisma } from '@/app/utils/db';
import { NextResponse } from 'next/server';

export async function POST() {
  const user = await getUserFromClerkID();
  const entry = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: 'Write about your day!',
    },
  });

  return NextResponse.json({ data: entry });
}
