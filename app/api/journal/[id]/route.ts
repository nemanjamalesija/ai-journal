import { analyze } from '@/app/utils/ai';
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

  const analysis = await analyze(updatedEntry.content);

  const updatedAnalysis = await prisma.analysis.upsert({
    where: {
      entryId: updatedEntry.id,
    },
    update: { ...analysis },
    create: {
      userId: user.id,
      entryId: updatedEntry.id,
      ...analysis,
    },
  });

  return NextResponse.json({
    data: { ...updatedEntry, analysis: updatedAnalysis },
  });
}
