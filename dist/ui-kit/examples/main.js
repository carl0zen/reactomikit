(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../layout', '../typography', '../helpers', '../base', 'components/logo'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../layout'), require('../typography'), require('../helpers'), require('../base'), require('components/logo'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.layout, global.typography, global.helpers, global.base, global.logo);
    global.main = mod.exports;
  }
})(this, function (exports, _react, _layout, _typography, _helpers, _base, _logo) {
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

  var MainExample = function MainExample() {
    return _react2.default.createElement(
      _layout.Viewport,
      null,
      _react2.default.createElement(_logo2.default, null),
      _react2.default.createElement(
        _typography.Headline,
        null,
        'Themable, Native, Atomic, Reusable, Universal and easily extensible UI-Toolkit'
      ),
      _react2.default.createElement(
        _typography.Powered,
        null,
        'powered by React and ',
        _react2.default.createElement(
          _base.Link,
          { target: '_blank', href: 'https://github.com/styled-components/styled-components' },
          'styled-components'
        )
      ),
      _react2.default.createElement(
        _typography.Footnote,
        null,
        'built with \uD83D\uDC9A by ',
        _react2.default.createElement(
          _base.Link,
          { target: '_blank', href: 'https://github.com/carlosepp' },
          'perezpriego'
        )
      ),
      _react2.default.createElement(
        _helpers.Center,
        null,
        _react2.default.createElement(
          _typography.Code,
          null,
          'npm install react-ui-kit --save'
        )
      )
    );
  };

  exports.default = MainExample;
});