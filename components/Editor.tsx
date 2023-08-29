'use client';
import React from 'react';
import { useAutosave } from 'react-autosave';

import { updateEntry } from '@/app/utils/api';

const Editor = ({ entry }) => {
  const [value, setValue] = React.useState(entry.content);
  const [isLoading, setIsLoading] = React.useState(false);

  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true);
      const updated = await updateEntry(entry.id, _value);
      setIsLoading(false);
    },
  });

  return (
    <div className="w-full h-full">
      {isLoading && <div>Loading...</div>}
      <textarea
        className="w-full h-full p-8 text-xl outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Editor;
