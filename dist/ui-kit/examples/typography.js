(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../layout', '../helpers', '../typography', '../base', '../components/code'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../layout'), require('../helpers'), require('../typography'), require('../base'), require('../components/code'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.layout, global.helpers, global.typography, global.base, global.code);
    global.typography = mod.exports;
  }
})(this, function (exports, _react, _layout, _helpers, _typography, _base, _code) {
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

  var TypographyExample = function TypographyExample() {
    return _react2.default.createElement(
      _layout.Panel,
      null,
      _react2.default.createElement(
        _typography.Title,
        null,
        'Typography'
      ),
      _react2.default.createElement(
        _helpers.Padder,
        null,
        _react2.default.createElement(
          _helpers.Inline,
          null,
          _react2.default.createElement(
            _typography.H1,
            null,
            ' Heading h1 '
          ),
          _react2.default.createElement(
            _code2.default,
            null,
            '<H1>Heading h1</H1>'
          )
        ),
        _react2.default.createElement(
          _helpers.Inline,
          null,
          _react2.default.createElement(
            _typography.H2,
            null,
            ' Heading h2 '
          ),
          _react2.default.createElement(
            _code2.default,
            null,
            '<H2>Heading h2</H2>'
          )
        ),
        _react2.default.createElement(
          _helpers.Inline,
          null,
          _react2.default.createElement(
            _typography.H3,
            null,
            ' Heading h3 '
          ),
          _react2.default.createElement(
            _code2.default,
            null,
            '<H3>Heading h3</H3>'
          )
        ),
        _react2.default.createElement(
          _helpers.Inline,
          null,
          _react2.default.createElement(
            _typography.H4,
            null,
            ' Heading h4 '
          ),
          _react2.default.createElement(
            _code2.default,
            null,
            '<H4>Heading h4</H4>'
          )
        ),
        _react2.default.createElement(
          _helpers.Inline,
          null,
          _react2.default.createElement(
            _typography.H4,
            null,
            ' Code '
          ),
          _react2.default.createElement(
            _code2.default,
            null,
            'if this then than'
          )
        ),
        _react2.default.createElement(
          _helpers.Inline,
          null,
          _react2.default.createElement(
            _base.Link,
            null,
            'Some awesome link '
          ),
          _react2.default.createElement(
            _code2.default,
            null,
            '<Link>Link</Link>'
          )
        ),
        _react2.default.createElement(
          _helpers.Inline,
          null,
          _react2.default.createElement(
            _typography.P,
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          ),
          _react2.default.createElement(
            _code2.default,
            null,
            '<P>\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit,\n  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris\n  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n  culpa qui officia deserunt mollit anim id est laborum.\n</P>\n'
          )
        ),
        _react2.default.createElement(
          _helpers.Inline,
          null,
          _react2.default.createElement(
            _typography.Headline,
            null,
            ' Headline'
          ),
          _react2.default.createElement(
            _code2.default,
            null,
            '<Headline> Headline</Headline>'
          )
        ),
        _react2.default.createElement(
          _helpers.Inline,
          null,
          _react2.default.createElement(
            _typography.Powered,
            null,
            ' Powered'
          ),
          _react2.default.createElement(
            _code2.default,
            null,
            '<Powered> Powered</Powered>'
          )
        ),
        _react2.default.createElement(
          _helpers.Inline,
          null,
          _react2.default.createElement(
            _typography.Footnote,
            null,
            ' Footnote'
          ),
          _react2.default.createElement(
            _code2.default,
            null,
            '<Footnote> Footnote</Footnote>'
          )
        )
      )
    );
  };

  exports.default = TypographyExample;
});