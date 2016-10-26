(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../helpers', '../layout', '../typography', '../base', '../components/code'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../helpers'), require('../layout'), require('../typography'), require('../base'), require('../components/code'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.helpers, global.layout, global.typography, global.base, global.code);
    global.base = mod.exports;
  }
})(this, function (exports, _react, _helpers, _layout, _typography, _base, _code) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _code2 = _interopRequireDefault(_code);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var BaseExample = function BaseExample() {
    return _react2.default.createElement(
      _layout.Panel,
      null,
      _react2.default.createElement(
        _typography.Title,
        null,
        'Base'
      ),
      _react2.default.createElement(_base.Link, null),
      _react2.default.createElement(_base.Logo, null),
      _react2.default.createElement(_base.Label, null),
      _react2.default.createElement(
        _helpers.Padder,
        null,
        _react2.default.createElement(
          _typography.H2,
          null,
          'Menu'
        ),
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
        ),
        _react2.default.createElement(
          _typography.H2,
          null,
          'Classic Buttons'
        ),
        _react2.default.createElement(
          _helpers.Inline,
          null,
          _react2.default.createElement(
            _base.Button,
            null,
            'Normal Button'
          ),
          _react2.default.createElement(
            _base.Button,
            { primary: true },
            'Primary Button'
          ),
          _react2.default.createElement(
            _base.Button,
            { disabled: true },
            'Disabled Button'
          )
        ),
        _react2.default.createElement(
          _helpers.Inline,
          null,
          _react2.default.createElement(
            _code2.default,
            null,
            '<Button>Normal Button</Button>'
          ),
          _react2.default.createElement(
            _code2.default,
            null,
            '<Button primary>Primary Button</Button>'
          ),
          _react2.default.createElement(
            _code2.default,
            null,
            '<Button disabled>Disabled Button</Button>'
          )
        ),
        _react2.default.createElement(
          _typography.H2,
          null,
          'Rounded Buttons'
        ),
        _react2.default.createElement(
          _helpers.Inline,
          null,
          _react2.default.createElement(
            _helpers.Inline,
            null,
            _react2.default.createElement(
              _base.Button,
              { rounded: true },
              'B'
            ),
            _react2.default.createElement(
              _code2.default,
              null,
              '<Button rounded>B</Button>'
            )
          ),
          _react2.default.createElement(
            _helpers.Inline,
            null,
            _react2.default.createElement(
              _base.Button,
              { rounded: true, primary: true },
              'A'
            ),
            _react2.default.createElement(
              _code2.default,
              null,
              '<Button rounded primary>B</Button>'
            )
          ),
          _react2.default.createElement(
            _helpers.Inline,
            null,
            _react2.default.createElement(
              _base.Button,
              { rounded: true, primary: true, disabled: true },
              'C'
            ),
            _react2.default.createElement(
              _code2.default,
              null,
              '<Button rounded primary disabled>C</Button>'
            )
          )
        )
      )
    );
  };

  exports.default = BaseExample;
});