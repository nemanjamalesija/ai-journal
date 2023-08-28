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
  });

  return entry;
};

const EntryPage = async ({ params }) => {
  const entry = await getEntry(params.id);
  return <Editor entry={entry} />;
};

export default EntryPage;
