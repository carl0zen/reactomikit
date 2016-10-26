(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../layout', '../typography', '../form', '../helpers', '../components/code'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../layout'), require('../typography'), require('../form'), require('../helpers'), require('../components/code'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.layout, global.typography, global.form, global.helpers, global.code);
    global.form = mod.exports;
  }
})(this, function (exports, _react, _layout, _typography, _form, _helpers, _code) {
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

  var FormExample = function FormExample() {
    return _react2.default.createElement(
      _layout.Panel,
      null,
      _react2.default.createElement(
        _typography.Title,
        null,
        'Form'
      ),
      _react2.default.createElement(
        _helpers.Padder,
        null,
        _react2.default.createElement(
          _typography.H2,
          null,
          'Inputs'
        ),
        _react2.default.createElement(
          _helpers.Inline,
          null,
          _react2.default.createElement(_form.Input, { placeholder: 'type...' }),
          _react2.default.createElement(_form.Input, { error: true, placeholder: 'type...' }),
          _react2.default.createElement(_form.Input, { disabled: true, placeholder: 'type...' })
        ),
        _react2.default.createElement(
          _helpers.Inline,
          null,
          _react2.default.createElement(
            _code2.default,
            null,
            '<Input placeholder="type..." />'
          ),
          _react2.default.createElement(
            _code2.default,
            null,
            '<Input error placeholder="type..." />'
          ),
          _react2.default.createElement(
            _code2.default,
            null,
            '<Input disabled placeholder="type..." />'
          )
        ),
        _react2.default.createElement(
          _typography.H2,
          null,
          'TextArea'
        ),
        _react2.default.createElement(
          _helpers.Inline,
          null,
          _react2.default.createElement(_form.Textarea, { placeholder: 'Type your text' }),
          _react2.default.createElement(_form.Textarea, { error: true, placeholder: 'Type your text' }),
          _react2.default.createElement(_form.Textarea, { disabled: true, placeholder: 'Type your text' })
        ),
        _react2.default.createElement(
          _helpers.Inline,
          null,
          _react2.default.createElement(
            _code2.default,
            null,
            '<Textarea placeholder="Type your text" />'
          ),
          _react2.default.createElement(
            _code2.default,
            null,
            '<Textarea error placeholder="Type your text" />'
          ),
          _react2.default.createElement(
            _code2.default,
            null,
            '<Textarea disabled placeholder="Type your text" />'
          )
        )
      )
    );
  };

  exports.default = FormExample;
});