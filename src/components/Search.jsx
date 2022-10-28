import TextareaAutosize from 'react-textarea-autosize';
import React from "react";

const Search = () => {
  return (
    <div className="border-dotted">
      <TextareaAutosize id="searchbar" />
    </div>
  );
};

export default Search;
