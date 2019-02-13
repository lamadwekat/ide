import * as monaco from 'monaco-editor';
import PropTypes from 'prop-types';
import React from 'react';
import { processSize } from './utils/processSize'
import '../navbar.css'
function noop() { }

class MonacoEditor extends React.Component {
  constructor(props) {
    super(props);
    this.containerElement = undefined;
    this.__current_value = props.value;
    
  }

  componentDidMount() {
    this.initMonaco();
  }



  componentWillUnmount() {
    this.destroyMonaco();
  }

  editorWillMount() {
    const { editorWillMount } = this.props;
    const options = editorWillMount(monaco);
    return options || {};
  }

  editorDidMount(editor) {
    this.props.editorDidMount(editor, monaco);
    editor.onDidChangeModelContent((event) => {
      const value = editor.getValue();

      // Always refer to the latest value
      this.__current_value = value;

      // Only invoking when user input changed
      if (!this.__prevent_trigger_change_event) {
        this.props.onChange(value, event);
      }
    });
  }

  initMonaco() {
    const value = this.props.value !== null ? this.props.value : this.props.defaultValue;
    const { language, theme, options } = this.props;
    if (this.containerElement) {
      // Before initializing monaco editor
      Object.assign(options, this.editorWillMount());
      this.editor = monaco.editor.create(this.containerElement, {
        value,
        language,
        ...options
      });
      if (theme) {
        monaco.editor.setTheme(theme);
      }
      // After initializing monaco editor
      this.editorDidMount(this.editor);
    }
  }

  destroyMonaco() {
    if (typeof this.editor !== 'undefined') {
      this.editor.dispose();
    }
  }

  assignRef = (component) => {
    this.containerElement = component;
  };

  render() {
    const { width, height } = this.props;
    const fixedWidth = processSize(width);
    const fixedHeight = processSize(height);
    const style = {
      width: fixedWidth,
      height: fixedHeight,
      
    };

    return (<div className="ed"><div  ref={this.assignRef} style={style} className="react-monaco-editor-container"  /> </div>);
  }
}


MonacoEditor.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  language: PropTypes.string,
  theme: PropTypes.string,
  options: PropTypes.object,
  editorDidMount: PropTypes.func,
  editorWillMount: PropTypes.func,
  onChange: PropTypes.func
};


const options = {
  selectOnLineNumbers: true,  
  roundedSelection: false,
  readOnly: false,
  cursorStyle: 'line',
  automaticLayout: false,
  copyWithSyntaxHighlighting:true,
  formatOnPaste:true,
  colorDecorators:true,

};
const language ="cpp"

function onChange(newValue) {
  return newValue;


}

MonacoEditor.defaultProps = {
  width: '700',
  height: '500',
  value: '',
  defaultValue: '',
  language: language,
  theme: 'vs-dark',
  options: options,
  editorDidMount: noop,
  editorWillMount: noop,
  onChange: onChange
};

export default MonacoEditor;


