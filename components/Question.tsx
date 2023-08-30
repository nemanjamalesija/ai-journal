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
      <form onSubmit={submitHandler}>
        <input
          disabled={loading}
          type="text"
          value={value}
          onChange={onChangeHandler}
          placeholder="Ask a question"
          className="border border-black/20 px-4 py-2 text-lg rounded-lg mr-3"
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-yellow-400 px-4 py-2 rounded-lg text-lg text-black font-semibold"
        >
          Ask
        </button>
      </form>
      {loading && <Spinner />}

      {response && <div className="">{response}</div>}
    </div>
  );
};

export default Question;
