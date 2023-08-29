import { getUserFromClerkID } from '@/app/utils/auth';
import { prisma } from '@/app/utils/db';
import Editor from '@/components/Editor';
import React from 'react';

const getEntry = async (id) => {
  const user = await getUserFromClerkID();
  const entry = await prisma.journalEntry.findUnique({
    where: {
      userId: user.id,
      id,
    },
    include: {
      analysis: true,
    },
  });

  return entry;
};

const EntryPage = async ({ params }) => {
  const entry = await getEntry(params.id);

  return (
    <div className="h-full w-full ">
      <Editor entry={entry} />
    </div>
  );
};

export default EntryPage;
