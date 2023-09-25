'use client';
import { askQuestion } from '@/app/utils/api';
import React from 'react';
import Spinner from './Spinner';

const Question = () => {
  const [value, setValue] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [response, setResponse] = React.useState('');

  const onChangeHandler = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    const answer = await askQuestion(value);
    setValue('');
    setResponse(answer);
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="w-full flex items-center">
        <input
          disabled={loading}
          type="text"
          value={value}
          onChange={onChangeHandler}
          placeholder="Ask a question about your journal entries"
          className="border border-black/20 px-4 py-2 text-lg rounded-lg mr-3 outline-none w-full"
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-700 hover:text-white transition-all duration-200  px-4 py-2 rounded-lg text-lg text-black font-semibold capitalize"
        >
          Ask
        </button>
      </form>
      {loading && <Spinner />}

      {!response && (
        <div className="mt-3">
          <p className="">Ex: How was I feeling on August 31 2023?</p>
        </div>
      )}

      {response && (
        <div className="mt-3">
          <p className="">{response}</p>
        </div>
      )}
    </div>
  );
};

export default Question;
