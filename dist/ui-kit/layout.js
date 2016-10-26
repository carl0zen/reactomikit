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
    global.layout = mod.exports;
  }
})(this, function (exports, _styledComponents, _theme) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = exports.Viewport = exports.View = exports.ScrollView = exports.Panel = exports.Topbar = undefined;

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  var _theme2 = _interopRequireDefault(_theme);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _templateObject = _taggedTemplateLiteral(['\n  background: ', ';\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  height: ', ';\n\n  img {\n    width: 230px;\n  }\n'], ['\n  background: ', ';\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  height: ', ';\n\n  img {\n    width: 230px;\n  }\n']),
      _templateObject2 = _taggedTemplateLiteral(['\n  background: white;\n  color: ', ';\n  font-size: ', ';\n  font-weight: 300;\n\n  ', '\n'], ['\n  background: white;\n  color: ', ';\n  font-size: ', ';\n  font-weight: 300;\n\n  ', '\n']),
      _templateObject3 = _taggedTemplateLiteral(['\n  overflow: hidden;\n  font-family: ', ';\n  -webkit-overflow-scrolling: touch;\n  height: ', ';\n  width: ', ';\n  overflow-y: auto;\n  ', '\n'], ['\n  overflow: hidden;\n  font-family: ', ';\n  -webkit-overflow-scrolling: touch;\n  height: ', ';\n  width: ', ';\n  overflow-y: auto;\n  ', '\n']),
      _templateObject4 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: ', ';\n  right: 0;\n  left: 0;\n  bottom: 0;\n  font-size: ', ';\n\n  ', '\n'], ['\n  position: absolute;\n  top: ', ';\n  right: 0;\n  left: 0;\n  bottom: 0;\n  font-size: ', ';\n\n  ', '\n']),
      _templateObject5 = _taggedTemplateLiteral(['\n  font-family: Avenir Next;\n  font-weight: 400;\n  height: 100vh;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  display: flex;\n  font-size: 3em;\n  background-color: ', ';\n  color: ', ';\n'], ['\n  font-family: Avenir Next;\n  font-weight: 400;\n  height: 100vh;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  display: flex;\n  font-size: 3em;\n  background-color: ', ';\n  color: ', ';\n']),
      _templateObject6 = _taggedTemplateLiteral(['\n  *, & {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n'], ['\n  *, & {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var color = _theme2.default.color,
      nav = _theme2.default.nav,
      font = _theme2.default.font;
  var Topbar = exports.Topbar = _styledComponents2.default.header(_templateObject, nav.background, nav.height);

  var Panel = exports.Panel = _styledComponents2.default.article(_templateObject2, color.black, font.base, function (props) {
    return props.dark && '\n    color: ' + color.white + ';\n    background-color: ' + color.black + ';\n  ';
  });

  var ScrollView = exports.ScrollView = _styledComponents2.default.section(_templateObject3, font.family, function (props) {
    return props.height ? props.height : 'auto';
  }, function (props) {
    return props.width ? props.width : '100%';
  }, function (props) {
    return props.horizontal && '\n    white-space: nowrap;\n    overflow-x: auto;\n    overflow-y: hidden;\n    ';
  });

  var View = exports.View = (0, _styledComponents2.default)(ScrollView)(_templateObject4, nav.height, font.base, function (props) {
    return props.bg && '\n    background-color: ' + props.bg + ';\n  ';
  });

  var Viewport = exports.Viewport = _styledComponents2.default.section(_templateObject5, color.black, color.white);

  var App = exports.App = _styledComponents2.default.div(_templateObject6);
});