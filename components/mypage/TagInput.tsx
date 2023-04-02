import React from 'react';
import TextInput from '../common/TextInput';

const TagInput = ({ tags }) => {
  const tagValue = tags.join('');

  return (
    <div>
      <p>tag</p>
      <TextInput type="text" value={tagValue} onChange={() => {}} />
    </div>
  );
};

export default TagInput;
