'use client';
import React from 'react';

const Question = () => {
  const [value, setValue] = React.useState('');

  const onChangeHandler = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={value}
          onChange={onChangeHandler}
          placeholder="Ask a question"
          className="border border-black/20 px-4 py-2 text-lg rounded-lg mr-3"
        />
        <button
          type="submit"
          className="bg-yellow-400 px-4 py-2 rounded-lg text-lg text-black font-semibold"
        >
          Ask
        </button>
      </form>
    </div>
  );
};

export default Question;
