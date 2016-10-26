(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', './ui-kit/base'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('./ui-kit/base'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.base);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _base) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // Demo component
  // this is only example component
  // you can find tests in __test__ folder

  var App = function App() {
    return _react2.default.createElement(
      'div',
      { className: 'my-component' },
      _react2.default.createElement(
        _base.Button,
        null,
        'Voy'
      )
    );
  };

  exports.default = App;
});