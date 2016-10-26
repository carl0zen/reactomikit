(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'styled-components', './theme'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('styled-components'), require('./theme'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledComponents, global.theme);
    global.form = mod.exports;
  }
})(this, function (exports, _styledComponents, _theme) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Textarea = exports.Input = undefined;

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  var _theme2 = _interopRequireDefault(_theme);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _templateObject = _taggedTemplateLiteral(['\n  ', '\n'], ['\n  ', '\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var color = _theme2.default.color,
      font = _theme2.default.font;


  var textInput = function textInput(props) {
    return '\n  color: ' + (props.error ? color.white : color.base) + ';\n  background-color: ' + (props.error ? color.alert : color.white) + ';\n  outline: none;\n  font-size: ' + font.base + ';\n  border: 1px solid ' + (props.error ? color.alert : color.border) + ';\n  border-radius: 3px;\n  opacity: ' + (props.disabled ? 0.3 : 1) + ';\n  padding: 15px;\n  transition:\n    background-color 300ms ease,\n    color 300ms ease;\n\n  &:focus {\n    background-color: #FFF;\n    box-shadow: 0 0 4px rgba(0,0,0,0.1);\n    color: ' + color.base + '\n}\n\n  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */\n    color: ' + (props.error ? color.white : color.base) + ';\n}\n\n  &::-moz-placeholder { /* Firefox 19+ */\n    color: ' + (props.error ? color.white : color.base) + ';\n}\n\n  &:-ms-input-placeholder { /* IE 10+ */\n    color: ' + (props.error ? color.white : color.base) + ';\n}\n\n  &:-moz-placeholder { /* Firefox 18- */\n    color: ' + (props.error ? color.white : color.base) + ';\n}\n';
  };

  var Input = exports.Input = _styledComponents2.default.input(_templateObject, function (props) {
    return textInput(props);
  });

  var Textarea = exports.Textarea = _styledComponents2.default.textarea(_templateObject, function (props) {
    return textInput(props);
  });
});