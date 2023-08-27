import { currentUser } from '@clerk/nextjs';
import { prisma } from '../utils/db';
import { redirect } from 'next/navigation';
import Loading from './loading';

async function createNewUser() {
  const currUser = await currentUser();

  const match = await prisma.user.findUnique({
    where: {
      clerkId: currUser!.id as string,
    },
  });

  if (!match) {
    await prisma.user.create({
      data: {
        clerkId: currUser!.id,
        email: currUser!.emailAddresses[0].emailAddress,
      },
    });
  }

  redirect('/journal');
}

const NewUser = async () => {
  await createNewUser();

  return <Loading />;
};

export default NewUser;
