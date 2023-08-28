import { getUserFromClerkID } from '@/app/utils/auth';
import { prisma } from '@/app/utils/db';
import { NextResponse } from 'next/server';

export async function PATCH(request, { params }) {
  const user = await getUserFromClerkID();
  const { content } = await request.json();

  const updatedEntry = await prisma.journalEntry.update({
    where: {
      userId: user.id,
      id: params.id,
    },
    data: {
      content,
    },
  });

  return NextResponse.json({ data: updatedEntry });
}
