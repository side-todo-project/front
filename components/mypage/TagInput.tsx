import React from 'react';

const TagInput = ({ tags }) => {
  const tagValue = tags.join('');

  return (
    <div>
      <p>tag</p>
      <input type="text" value={tagValue} onChange={() => {}} />
    </div>
  );
};

export default TagInput;
