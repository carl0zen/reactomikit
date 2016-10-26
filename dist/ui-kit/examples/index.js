(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../layout', './form', './topbar', './typography', './main', './layout', './base'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../layout'), require('./form'), require('./topbar'), require('./typography'), require('./main'), require('./layout'), require('./base'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.layout, global.form, global.topbar, global.typography, global.main, global.layout, global.base);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _layout, _form, _topbar, _typography, _main, _layout2, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _form2 = _interopRequireDefault(_form);

  var _topbar2 = _interopRequireDefault(_topbar);

  var _typography2 = _interopRequireDefault(_typography);

  var _main2 = _interopRequireDefault(_main);

  var _layout3 = _interopRequireDefault(_layout2);

  var _base2 = _interopRequireDefault(_base);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var displayName = 'UI Kit';
  var defaultProps = {};
  var propTypes = {};

  var UIKit = function UIKit() {
    return _react2.default.createElement(
      _layout.App,
      null,
      _react2.default.createElement(_topbar2.default, null),
      _react2.default.createElement(
        _layout.View,
        null,
        _react2.default.createElement(_main2.default, null),
        _react2.default.createElement(_typography2.default, null),
        _react2.default.createElement(_form2.default, null),
        _react2.default.createElement(_layout3.default, null),
        _react2.default.createElement(_base2.default, null)
      )
    );
  };

  UIKit.displayName = displayName;
  UIKit.defaultProps = defaultProps;
  UIKit.propTypes = propTypes;

  exports.default = UIKit;
});