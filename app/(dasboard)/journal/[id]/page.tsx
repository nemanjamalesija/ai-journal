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

  const { mood, summary, color, subject, negative } = entry?.analysis;

  const analysisData = [
    {
      name: summary,
      value: mood,
    },

    {
      name: 'Subject',
      value: subject,
    },

    {
      name: 'Mood',
      value: mood,
    },

    {
      name: 'Negative',
      value: negative ? 'True' : 'False',
    },
  ];

  return (
    <div className="h-full w-full grid grid-cols-3">
      <div className="col-span-2">
        <Editor entry={entry} />
      </div>
      <div className="border-l border-black/10 ">
        <div style={{ backgroundColor: color }} className="px-6 py-10">
          <h2 className="text-2xl">Analysis</h2>
        </div>
        <div>
          <ul>
            {analysisData.map((el) => (
              <li
                key={el.name}
                className="flex items-center justify-between px-2 py-4 border-b border-t border-black/10"
              >
                <span className="text-lg  font-semibold">{el.name}</span>
                <span>{el.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EntryPage;
