'use client';

import { createNewEntry } from '@/app/utils/api';
import { pDisplay } from '@/app/utils/fonts';
import { useRouter } from 'next/navigation';

const NewEntryCard = () => {
  const router = useRouter();

  async function clickHandler() {
    const data = await createNewEntry();
    router.push(`/journal/${data.id}`);
  }

  return (
    <div className="cursor-pointer overflow-hidden rounded-lg bg-white shadow">
      <div className="px-4 py-5" onClick={clickHandler}>
        <span className="text-3xl" style={{ fontFamily: pDisplay.className }}>
          New Entry
        </span>
      </div>
    </div>
  );
};

export default NewEntryCard;
