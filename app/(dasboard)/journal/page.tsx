import { getUserFromClerkID } from '@/app/utils/auth';
import { prisma } from '../../utils/db';
import NewEntryCard from '@/components/NewEntryCard';
import EntryCard from '@/components/EntryCard';
import Link from 'next/link';
import { analyze } from '@/app/utils/ai';

async function getEntries() {
  const user = await getUserFromClerkID();

  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  // if no entries, returns empty array
  return entries;
}

const JournalPage = async () => {
  const entries = await getEntries();

  return (
    <div className="p-10 bg-zinc-400/10 h-full">
      <h2 className="text-3xl mb-8">Journal</h2>
      <div className="grid grid-cols-3 gap-4 ">
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
