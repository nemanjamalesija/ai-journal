import { getUserFromClerkID } from '@/app/utils/auth';
import { prisma } from '../../utils/db';

async function getEntries() {
  const user = await getUserFromClerkID();

  if (!user) return 0;

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

  if (entries === 0) return <h1>No user found</h1>;

  return <div>journal</div>;
};

export default JournalPage;
