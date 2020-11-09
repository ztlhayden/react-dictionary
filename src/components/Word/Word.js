import React from "react";
import styled from "styled-components";

import PhoneticItem from "./atoms/PhoneticItem";
import TextInput from "../atoms/TextInput";
import Button from "../atoms/Button";

const Part = styled.p`
  font-size: 0.95em;
`;

const Example = styled.p`
  font-style: italic;
`;

const Definition = styled.p`
  font-size: 1.1em;
`;

class Word extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      loading: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.lookupWord = this.lookupWord.bind(this);
  }

  async lookupWord(e) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${
      this.state.userInput
    }`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ word: data[0], loading: false });
  }

  handleChange(event) {
    this.setState({ userInput: event.target.value });
  }

  render() {
    return (
      <div>
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
            value={this.state.userInput}
            onChange={this.handleChange}
          />
          <Button onClick={this.lookupWord}>Search</Button>
        </div>

        {this.state.loading || !this.state.word ? (
          <div className="definition-wrapper">Waiting...</div>
        ) : (
          <div className="definition-wrapper">
            <h2>{this.state.word.word}</h2>
            <h3>Phonetics</h3>
            <div className="phonetic-wrapper">
              {this.state.word.phonetics.map(phonetic => (
                <PhoneticItem text={phonetic.text} audio={phonetic.audio} />
              ))}
            </div>
            <div>
              <h3>Definitions</h3>
              {this.state.word.meanings.map(meaning => (
                <div>
                  <Part>{meaning.partOfSpeech}</Part>
                  {meaning.definitions.map(def => (
                    <div>
                      <Definition>{def.definition}</Definition>
                      <Example class="example">{def.example}</Example>
                      {def.synonyms && (
                        <>
                          <span>Synonyms</span>
                          <ul>
                            {def.synonyms.map(syn => (
                              <li>{syn}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Word;
