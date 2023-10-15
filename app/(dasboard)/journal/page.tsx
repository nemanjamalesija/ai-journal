import { getUserFromClerkID } from '@/app/utils/auth';
import { prisma } from '../../utils/db';
import NewEntryCard from '@/components/NewEntryCard';
import EntryCard from '@/components/EntryCard';
import Link from 'next/link';
import Question from '@/components/Question';
import { pDisplay } from '@/app/utils/fonts';

async function getEntries() {
  const user = await getUserFromClerkID();

  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
    include: { analysis: true },
  });

  // if no entries, returns empty array
  return entries;
}

const JournalPage = async () => {
  const entries = await getEntries();

  return (
    <div className="py-5 px-10 bg-zinc-400/10 min-h-full max-h-min">
      <h2 className="text-3xl mb-8" style={{ fontFamily: pDisplay.className }}>
        Journal
      </h2>
      <div className="my-8">
        <Question />
      </div>
      <div className="grid grid-cols-3 gap-4">
        <NewEntryCard />
        {entries.map((entry) => (
          <Link key={entry.id} href={`journal/${entry.id}`}>
            <EntryCard entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JournalPage;
