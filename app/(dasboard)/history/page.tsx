import { getUserFromClerkID } from '@/app/utils/auth';
import { prisma } from '@/app/utils/db';

const getData = async () => {
  const user = await getUserFromClerkID();
  const analyses = await prisma.analysis.findMany({
    where: {
      userId: user.id,
    },
    select: {
      sentimentScore: true,
    },
  });

  const sum = analyses.reduce((acc, el) => acc + el.sentimentScore, 0);
  const avg = Math.round(sum / analyses.length);

  return { analyses, avg };
};

const History = async () => {
  const { avg, analyses } = await getData();

  console.log(analyses, avg);
  return <div>History: {avg}</div>;
};

export default History;
