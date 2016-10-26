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
    global.base = mod.exports;
  }
})(this, function (exports, _styledComponents, _theme) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Label = exports.Logo = exports.Link = exports.Button = exports.Menu = undefined;

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  var _theme2 = _interopRequireDefault(_theme);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _templateObject = _taggedTemplateLiteral(['\n  line-height: ', ';\n  position: relative;\n\n  a {\n    background: ', ';\n    padding: 20px 2em;\n    cursor: pointer;\n    color: ', ';\n    letter-spacing: 3px;\n    text-transform: uppercase;\n    font-size: ', ';\n    font-weight: 600;\n    transition:\n      background-color ', ',\n      padding ', ',\n      border ', ';\n\n    &:hover {\n      background-color: ', ';\n      color: ', ';\n      border-bottom: 3px solid ', ';\n      border-collapse: collapse;\n      padding: 7px 2em;\n  }\n}\n'], ['\n  line-height: ', ';\n  position: relative;\n\n  a {\n    background: ', ';\n    padding: 20px 2em;\n    cursor: pointer;\n    color: ', ';\n    letter-spacing: 3px;\n    text-transform: uppercase;\n    font-size: ', ';\n    font-weight: 600;\n    transition:\n      background-color ', ',\n      padding ', ',\n      border ', ';\n\n    &:hover {\n      background-color: ', ';\n      color: ', ';\n      border-bottom: 3px solid ', ';\n      border-collapse: collapse;\n      padding: 7px 2em;\n  }\n}\n']),
      _templateObject2 = _taggedTemplateLiteral(['\n  border: 1px solid white;\n  font-family: inherit;\n  font-size: 12px;\n  cursor: pointer;\n  display: inline-block;\n  text-transform: uppercase;\n  letter-spacing: 0;\n  font-weight: 700;\n  outline: none;\n  position: relative;\n\n  transition:\n    background-color ', ',\n    opacity ', ';\n  text-transform: uppercase;\n  padding: 10px 20px;\n  margin: 0;\n  border-radius: 3px;\n  text-align: center;\n  background-color: ', ';\n  color: ', ';\n\n  ', '\n\n  ', '\n\n  &:hover,\n  &:focus {\n    border: 1px solid ', ';\n    color: ', ';\n    background-color: ', ';\n\n    ', '\n  }\n\n  ', '\n'], ['\n  border: 1px solid white;\n  font-family: inherit;\n  font-size: 12px;\n  cursor: pointer;\n  display: inline-block;\n  text-transform: uppercase;\n  letter-spacing: 0;\n  font-weight: 700;\n  outline: none;\n  position: relative;\n\n  transition:\n    background-color ', ',\n    opacity ', ';\n  text-transform: uppercase;\n  padding: 10px 20px;\n  margin: 0;\n  border-radius: 3px;\n  text-align: center;\n  background-color: ', ';\n  color: ', ';\n\n  ', '\n\n  ', '\n\n  &:hover,\n  &:focus {\n    border: 1px solid ', ';\n    color: ', ';\n    background-color: ', ';\n\n    ', '\n  }\n\n  ', '\n']),
      _templateObject3 = _taggedTemplateLiteral(['\n  color: ', ';\n\n  &:hover {\n    color: ', ';\n  }\n'], ['\n  color: ', ';\n\n  &:hover {\n    color: ', ';\n  }\n']),
      _templateObject4 = _taggedTemplateLiteral(['\n  width: 130px;\n'], ['\n  width: 130px;\n']),
      _templateObject5 = _taggedTemplateLiteral(['\n  background: red;\n'], ['\n  background: red;\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var color = _theme2.default.color,
      font = _theme2.default.font,
      nav = _theme2.default.nav,
      menu = _theme2.default.menu,
      transition = _theme2.default.transition,
      button = _theme2.default.button;
  var Menu = exports.Menu = _styledComponents2.default.nav(_templateObject, nav.height, menu.background, color.white, font.small, transition, transition, transition, color.secondary, color.white, color.white);

  var Button = exports.Button = _styledComponents2.default.button(_templateObject2, transition, transition, color.info, color.white, function (props) {
    return props.primary && '\n    background-color: ' + color.primary + ';\n  ';
  }, function (props) {
    return props.disabled && '\n    color: ' + color.base + ';\n    opacity: 0.4\n    background-color: ' + color.white + ';\n    pointer-events: none;\n  ';
  }, color.info, color.info, color.white, function (props) {
    return props.primary && '\n      border-color: ' + color.primary + ';\n      background-color: ' + color.white + ';\n      color: ' + color.primary + ';\n      ';
  }, function (props) {
    return props.rounded && '\n    width: ' + button.roundedSize + ';\n    height: ' + button.roundedSize + ';\n    max-width: ' + button.roundedSize + ';\n    min-width: ' + button.roundedSize + ';\n    border-radius: 50%;\n    line-height: ' + button.roundedSize + ';\n    padding: 0;\n  ';
  });

  var Link = exports.Link = _styledComponents2.default.a(_templateObject3, color.link, color.link);

  var Logo = exports.Logo = _styledComponents2.default.img(_templateObject4);

  var Label = exports.Label = _styledComponents2.default.label(_templateObject5);
});