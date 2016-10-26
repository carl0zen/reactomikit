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
    global.typography = mod.exports;
  }
})(this, function (exports, _styledComponents, _theme) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Powered = exports.Footnote = exports.Headline = exports.Code = exports.Title = exports.P = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.headingsSharedProperties = undefined;

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  var _theme2 = _interopRequireDefault(_theme);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _templateObject = _taggedTemplateLiteral(['\n  ', '\n  font-size: 3.5em;\n  color: black;\n  font-weight: 100;\n'], ['\n  ', '\n  font-size: 3.5em;\n  color: black;\n  font-weight: 100;\n']),
      _templateObject2 = _taggedTemplateLiteral(['\n  ', '\n  font-size: 2em;\n  line-height: 2.5em;\n  font-weight: 400;\n  position: relative;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n'], ['\n  ', '\n  font-size: 2em;\n  line-height: 2.5em;\n  font-weight: 400;\n  position: relative;\n  margin-top: 0.5em;\n  margin-bottom: 0.5em;\n']),
      _templateObject3 = _taggedTemplateLiteral(['\n  ', '\n  font-size: 1.5em;\n  font-weight: 100;\n'], ['\n  ', '\n  font-size: 1.5em;\n  font-weight: 100;\n']),
      _templateObject4 = _taggedTemplateLiteral(['\n  ', '\n  font-size: 1.5em;\n  font-weight: 500;\n'], ['\n  ', '\n  font-size: 1.5em;\n  font-weight: 500;\n']),
      _templateObject5 = _taggedTemplateLiteral(['\n  line-height: 21px;\n  font-size: ', ';\n  margin: 10px 0;\n'], ['\n  line-height: 21px;\n  font-size: ', ';\n  margin: 10px 0;\n']),
      _templateObject6 = _taggedTemplateLiteral(['\n  background-color: ', ';\n  color: ', ';\n  align-items: center;\n  justify-content: flex-start;\n  padding: 1em 2em;\n  letter-spacing: 5px;\n  text-transform: uppercase;\n  font-weight: 600;\n\n  &:before {\n    display: block;\n    content: \'\';\n  }\n'], ['\n  background-color: ', ';\n  color: ', ';\n  align-items: center;\n  justify-content: flex-start;\n  padding: 1em 2em;\n  letter-spacing: 5px;\n  text-transform: uppercase;\n  font-weight: 600;\n\n  &:before {\n    display: block;\n    content: \'\';\n  }\n']),
      _templateObject7 = _taggedTemplateLiteral(['\n  font-family: ', ';\n  white-space: pre-wrap;\n  background: rgba(103, 38, 92, 0.08);\n  padding: 10px 20px;\n  margin: 0;\n  border-radius: 3px;\n  font-weight: 500;\n  font-size: ', ';\n  color: #A9A4A8;\n  display: inline-block;\n  vertical-align: middle;\n'], ['\n  font-family: ', ';\n  white-space: pre-wrap;\n  background: rgba(103, 38, 92, 0.08);\n  padding: 10px 20px;\n  margin: 0;\n  border-radius: 3px;\n  font-weight: 500;\n  font-size: ', ';\n  color: #A9A4A8;\n  display: inline-block;\n  vertical-align: middle;\n']),
      _templateObject8 = _taggedTemplateLiteral(['\n  font-family: Helvetica Neue;\n  font-weight: 100;\n  font-size: 1.3em;\n  padding: 1em 0;\n  max-width: 1100px;\n'], ['\n  font-family: Helvetica Neue;\n  font-weight: 100;\n  font-size: 1.3em;\n  padding: 1em 0;\n  max-width: 1100px;\n']),
      _templateObject9 = _taggedTemplateLiteral(['\n  font-size: 0.5em;\n  opacity: 0.7;\n'], ['\n  font-size: 0.5em;\n  opacity: 0.7;\n']),
      _templateObject10 = _taggedTemplateLiteral(['\n  font-size: 0.7em;\n  opacity: 0.8;\n'], ['\n  font-size: 0.7em;\n  opacity: 0.8;\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var font = _theme2.default.font,
      color = _theme2.default.color,
      headings = _theme2.default.headings;
  var headingsSharedProperties = exports.headingsSharedProperties = '\n  font-family: ' + headings.family + ';\n  color: ' + font.color + ';\n  line-height: 190%;\n';

  var H1 = exports.H1 = _styledComponents2.default.h1(_templateObject, headingsSharedProperties);

  var H2 = exports.H2 = _styledComponents2.default.h2(_templateObject2, headingsSharedProperties);

  var H3 = exports.H3 = _styledComponents2.default.h3(_templateObject3, headingsSharedProperties);

  var H4 = exports.H4 = _styledComponents2.default.h4(_templateObject4, headingsSharedProperties);

  var P = exports.P = _styledComponents2.default.p(_templateObject5, font.base);

  var Title = exports.Title = _styledComponents2.default.header(_templateObject6, function (props) {
    return props.dark ? color.black : color.secondary;
  }, color.white);

  var Code = exports.Code = _styledComponents2.default.code(_templateObject7, font.code, font.base);

  var Headline = exports.Headline = _styledComponents2.default.div(_templateObject8);

  var Footnote = exports.Footnote = _styledComponents2.default.small(_templateObject9);

  var Powered = exports.Powered = _styledComponents2.default.small(_templateObject10);
});