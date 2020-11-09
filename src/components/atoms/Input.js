import React from "react";

import TextInput from "./TextInput";
import Button from "./Button";

const Input = () => {
  return (
    <div className="input-wrapper">
      <label for="word-input" hidden>
        Word
      </label>
      <TextInput
        className="word-input"
        type="text"
        name="word-input"
        id="word-input"
        placeholder="Word"
      />
      <Button>Search</Button>
    </div>
  );
};

export default Input;
