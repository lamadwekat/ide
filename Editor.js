import React, { Component } from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/monokai';
import '../navbar.css';
function onChange(newValue) {
    const code = newValue;

}

export default class Editor extends Component {
  render() {
    return (
      <div className="editor">
      <AceEditor
    mode="java"
    theme="monokai"
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{$blockScrolling: true}}
    setOptions={{
        enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableSnippets: true,
  showLineNumbers: true,
  tabSize: 4,
  }}
  />
      </div>
    )
  }
}
