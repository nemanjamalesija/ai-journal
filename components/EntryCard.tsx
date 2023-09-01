import { lato } from '@/app/utils/lato';

const EntryCard = ({ entry }) => {
  const date = new Date(entry.createdAt).toDateString();
  return (
    <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow text-lg">
      <div className="px-4 py-5">{date}</div>
      <div className="px-4 py-5">{entry.analysis?.summary || 'Summary'}</div>
      <div className="px-4 py-4" style={{ color: entry.analysis?.color || '' }}>
        {entry.analysis?.mood || 'mood'}
      </div>
    </div>
  );
};

export default EntryCard;
