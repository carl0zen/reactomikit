(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-highlight', 'styled-components'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-highlight'), require('styled-components'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactHighlight, global.styledComponents);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _reactHighlight, _styledComponents) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _templateObject = _taggedTemplateLiteral(['\n  /*\n  Date: 17.V.2011\n  Author: pumbur <pumbur@pumbur.net>\n  */\n\n  pre {\n    margin: 0;\n  }\n\n  .hljs {\n    display: block;\n    overflow-x: auto;\n    padding: 0.5em;\n    background: #222;\n    border-radius: 3px;\n  }\n\n  .hljs,\n  .hljs-subst {\n    color: #aaa;\n  }\n\n  .hljs-section {\n    color: #fff;\n  }\n\n  .hljs-comment,\n  .hljs-quote,\n  .hljs-meta {\n    color: #444;\n  }\n\n  .hljs-string,\n  .hljs-symbol,\n  .hljs-bullet,\n  .hljs-regexp {\n    color: #ffcc33;\n  }\n\n  .hljs-number,\n  .hljs-addition {\n    color: #00cc66;\n  }\n\n  .hljs-built_in,\n  .hljs-builtin-name,\n  .hljs-literal,\n  .hljs-type,\n  .hljs-template-variable,\n  .hljs-attribute,\n  .hljs-link {\n    color: #32aaee;\n  }\n\n  .hljs-keyword,\n  .hljs-selector-tag,\n  .hljs-name,\n  .hljs-selector-id,\n  .hljs-selector-class {\n    color: #6644aa;\n  }\n\n  .hljs-title,\n  .hljs-variable,\n  .hljs-deletion,\n  .hljs-template-tag {\n    color: #bb1166;\n  }\n\n  .hljs-section,\n  .hljs-doctag,\n  .hljs-strong {\n    font-weight: bold;\n  }\n\n  .hljs-emphasis {\n    font-style: italic;\n  }\n\n'], ['\n  /*\n  Date: 17.V.2011\n  Author: pumbur <pumbur@pumbur.net>\n  */\n\n  pre {\n    margin: 0;\n  }\n\n  .hljs {\n    display: block;\n    overflow-x: auto;\n    padding: 0.5em;\n    background: #222;\n    border-radius: 3px;\n  }\n\n  .hljs,\n  .hljs-subst {\n    color: #aaa;\n  }\n\n  .hljs-section {\n    color: #fff;\n  }\n\n  .hljs-comment,\n  .hljs-quote,\n  .hljs-meta {\n    color: #444;\n  }\n\n  .hljs-string,\n  .hljs-symbol,\n  .hljs-bullet,\n  .hljs-regexp {\n    color: #ffcc33;\n  }\n\n  .hljs-number,\n  .hljs-addition {\n    color: #00cc66;\n  }\n\n  .hljs-built_in,\n  .hljs-builtin-name,\n  .hljs-literal,\n  .hljs-type,\n  .hljs-template-variable,\n  .hljs-attribute,\n  .hljs-link {\n    color: #32aaee;\n  }\n\n  .hljs-keyword,\n  .hljs-selector-tag,\n  .hljs-name,\n  .hljs-selector-id,\n  .hljs-selector-class {\n    color: #6644aa;\n  }\n\n  .hljs-title,\n  .hljs-variable,\n  .hljs-deletion,\n  .hljs-template-tag {\n    color: #bb1166;\n  }\n\n  .hljs-section,\n  .hljs-doctag,\n  .hljs-strong {\n    font-weight: bold;\n  }\n\n  .hljs-emphasis {\n    font-style: italic;\n  }\n\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var Root = _styledComponents2.default.div(_templateObject);

  var displayName = 'Code';
  var defaultProps = {};
  var propTypes = {
    children: _react.PropTypes.node
  };

  var component = function component(props) {
    return _react2.default.createElement(
      Root,
      null,
      _react2.default.createElement(
        _reactHighlight2.default,
        null,
        props.children
      )
    );
  };

  component.displayName = displayName;
  component.defaultProps = defaultProps;
  component.propTypes = propTypes;
  exports.default = component;
});