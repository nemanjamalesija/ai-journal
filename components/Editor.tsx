'use client';
import React from 'react';
import { useAutosave } from 'react-autosave';

import { updateEntry } from '@/app/utils/api';
import Spinner from './Spinner';

const Editor = ({ entry }) => {
  const [value, setValue] = React.useState(entry.content);
  const [isLoading, setIsLoading] = React.useState(false);
  const [analysis, setAnalysis] = React.useState(entry.analysis);

  const { mood, summary, color, subject, negative } = analysis;

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

  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true);
      const data = await updateEntry(entry.id, _value);
      setAnalysis(data.analysis);
      setIsLoading(false);
    },
  });

  return (
    <div className="w-full h-full grid grid-cols-3">
      <div className="col-span-2">
        {isLoading && <Spinner />}
        <textarea
          className="w-full h-full p-8 text-xl outline-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
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

export default Editor;
