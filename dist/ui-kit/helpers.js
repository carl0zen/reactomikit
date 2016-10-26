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
    global.helpers = mod.exports;
  }
})(this, function (exports, _styledComponents, _theme) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.HighlightBorders = exports.Relative = exports.Center = exports.Column = exports.Inline = exports.Padder = undefined;

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  var _theme2 = _interopRequireDefault(_theme);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _templateObject = _taggedTemplateLiteral(['\n  padding: 2em;\n'], ['\n  padding: 2em;\n']),
      _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n\n  > * {\n    flex: 1;\n  }\n'], ['\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  flex-wrap: wrap;\n\n  > * {\n    flex: 1;\n  }\n']),
      _templateObject3 = _taggedTemplateLiteral(['\n  flex-direction: column;\n  justify-content: initial;\n  &:last-child {\n    margin: 0;\n  }\n\n  h3 {\n    flex-grow: 0;\n  }\n'], ['\n  flex-direction: column;\n  justify-content: initial;\n  &:last-child {\n    margin: 0;\n  }\n\n  h3 {\n    flex-grow: 0;\n  }\n']),
      _templateObject4 = _taggedTemplateLiteral(['\n  text-align: center;\n  margin: 0 auto;\n'], ['\n  text-align: center;\n  margin: 0 auto;\n']),
      _templateObject5 = _taggedTemplateLiteral(['\n  position: relative;\n'], ['\n  position: relative;\n']),
      _templateObject6 = _taggedTemplateLiteral(['\n  border: 3px solid ', ';\n'], ['\n  border: 3px solid ', ';\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var color = _theme2.default.color;
  var Padder = exports.Padder = _styledComponents2.default.section(_templateObject);

  var Inline = exports.Inline = _styledComponents2.default.div(_templateObject2);

  var Column = exports.Column = (0, _styledComponents2.default)(Inline)(_templateObject3);

  var Center = exports.Center = _styledComponents2.default.div(_templateObject4);

  var Relative = exports.Relative = _styledComponents2.default.div(_templateObject5);

  var HighlightBorders = exports.HighlightBorders = _styledComponents2.default.div(_templateObject6, color.alert);
});