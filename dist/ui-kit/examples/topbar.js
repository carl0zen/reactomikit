(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../layout', '../base', '../assets/logo.svg'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../layout'), require('../base'), require('../assets/logo.svg'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.layout, global.base, global.logo);
    global.topbar = mod.exports;
  }
})(this, function (exports, _react, _layout, _base, _logo) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _logo2 = _interopRequireDefault(_logo);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var TopbarExample = function TopbarExample() {
    return _react2.default.createElement(
      _layout.Topbar,
      null,
      _react2.default.createElement(_base.Logo, { src: _logo2.default }),
      _react2.default.createElement(
        _base.Menu,
        null,
        _react2.default.createElement(
          _base.Link,
          null,
          'Theme'
        ),
        _react2.default.createElement(
          _base.Link,
          null,
          'Helpers'
        ),
        _react2.default.createElement(
          _base.Link,
          null,
          'Layout'
        ),
        _react2.default.createElement(
          _base.Link,
          null,
          'Typography'
        ),
        _react2.default.createElement(
          _base.Link,
          null,
          'Buttons'
        ),
        _react2.default.createElement(
          _base.Link,
          null,
          'Buttons'
        )
      )
    );
  };

  exports.default = TopbarExample;
});