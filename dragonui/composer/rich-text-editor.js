import React from "react";
import Draft from "draft-js";
import styled from "styled-components"
import {
  ScrollView,
  Relative,
  Padder,
  Panel,
  Spacer
} from "../index";

import theme from "../theme"

const {Editor, EditorState, RichUtils} = Draft;
const { color } = theme;

const EditorContainer = styled(Relative)`
  font-size: 120%;
  max-height: ${props => props.maxHeight ? props.maxHeight : '300px'};
  .public-DraftEditorPlaceholder-root {
    position: absolute;
    pointer-events: none;
  }
  .RichEditor-blockquote{
    position: relative;
    margin: 1em 0;
    padding-left: 1.5em;
    font-style: italic;
    &:before {
      font-family: cursive;
      color: ${color.border};
      content: '"';
      font-size: 3em;
      display: inline-block;
      vertical-align: middle;
      position: absolute;
      margin-left: -0.5em;
      margin-top: -12px;
    }
  }
  .public-DraftStyleDefault-ul {
    list-style-type: initial;
    padding-left: 1em;
  }
  .public-DraftStyleDefault-ol {
    list-style-type: decimal;
    padding-left: 1em;
  }
  .public-DraftStyleDefault-pre {
    pre {
      margin: 0.5em 0;
    }
  }
`;

const RichEditor = styled.div`
  position: relative;
`;

const Controls = styled.div`
  .RichEditor-controls {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .RichEditor-activeButton {
    background-color: ${color.border};
    border-radius: 20px;
  }
  .RichEditor-styleButton {
    border-radius: 5px;
    padding: 3px 7px;
    cursor: pointer;
    transition:
      border-radius 300ms ease,
      background-color 300ms ease;
    &.h1 {font-size: 155%}
    &.h2 {font-size: 145%}
    &.h3 {font-size: 135%}
    &.h4 {font-size: 125%}
    &.h5 {font-size: 115%}
    &.h6 {font-size: 105%}
    &.bold {font-weight: bold}
    &.italic {font-style: italic}
    &.underline {text-decoration: underline}
    &.monospace,
    &.code {font-family: Monospace}
  }
`;

class RichTextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    
    this.focus = () => this.refs.editor.focus();
    this.onChange = (editorState) => this.setState({editorState});
    
    this.handleKeyCommand = (command) => this._handleKeyCommand(command);
    this.onTab = (e) => this._onTab(e);
    this.toggleBlockType = (type) => this._toggleBlockType(type);
    this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
  }
  
  _handleKeyCommand(command) {
    const {editorState} = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }
  
  _onTab(e) {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  }
  
  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(
        this.state.editorState,
        blockType
      )
    );
  }
  
  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    );
  }
  
  render() {
    const {editorState} = this.state;
    
    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = 'RichEditor-editor';
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }
    
    return (
      <RichEditor className="RichEditor-root">
        <ScrollView height="40vh" className={className} onClick={this.focus}>
          <EditorContainer>
            <Padder amount="1em">
              <Editor
                blockStyleFn={getBlockStyle}
                customStyleMap={styleMap}
                editorState={editorState}
                handleKeyCommand={this.handleKeyCommand}
                onChange={this.onChange}
                onTab={this.onTab}
                placeholder="Tell a story..."
                ref="editor"
                spellCheck={true}
              />
            </Padder>
          </EditorContainer>
        </ScrollView>
        <Controls>
          <Panel noborder borderTop>
            <Padder amount="0.5em 1em">
              <Spacer amount="0 3px">
                <BlockStyleControls
                  editorState={editorState}
                  onToggle={this.toggleBlockType}
                />
              </Spacer>
              <Spacer amount="3px">
                <InlineStyleControls
                  editorState={editorState}
                  onToggle={this.toggleInlineStyle}
                />
              </Spacer>
            </Padder>
          </Panel>
        </Controls>
      </RichEditor>
    );
  }
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
    default: return null;
  }
}

class StyleButton extends React.Component {
  constructor() {
    super();
    this.onToggle = (e) => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }
  
  render() {
    let className = `RichEditor-styleButton ${this.props.label.toLowerCase()}`;
    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }
    
    return (
      <span className={className} onMouseDown={this.onToggle}>
        {this.props.label}
      </span>
    );
  }
}

const BLOCK_TYPES = [
  {label: 'H1', style: 'header-one'},
  {label: 'H2', style: 'header-two'},
  {label: 'H3', style: 'header-three'},
  {label: 'H4', style: 'header-four'},
  {label: 'Blockquote', style: 'blockquote'},
  {label: 'UL', style: 'unordered-list-item'},
  {label: 'OL', style: 'ordered-list-item'},
  {label: 'Code Block', style: 'code-block'},
];

const BlockStyleControls = (props) => {
  const {editorState} = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
  
  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};

var INLINE_STYLES = [
  {label: 'Bold', style: 'BOLD'},
  {label: 'Italic', style: 'ITALIC'},
  {label: 'Underline', style: 'UNDERLINE'},
  {label: 'Monospace', style: 'CODE'},
];

const InlineStyleControls = (props) => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type =>
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};

export default RichTextEditor