(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', '../helpers', '../layout', '../typography', '../components/code/index'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('../helpers'), require('../layout'), require('../typography'), require('../components/code/index'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.helpers, global.layout, global.typography, global.index);
    global.layout = mod.exports;
  }
})(this, function (exports, _react, _helpers, _layout, _typography, _index) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _index2 = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var LayoutExample = function LayoutExample() {
    return _react2.default.createElement(
      _layout.Panel,
      null,
      _react2.default.createElement(
        _typography.Title,
        null,
        'Layout'
      ),
      _react2.default.createElement(
        _helpers.Padder,
        null,
        _react2.default.createElement(
          _typography.H2,
          null,
          'Topbar'
        ),
        _react2.default.createElement(
          _layout.Topbar,
          null,
          _react2.default.createElement(
            _typography.Title,
            null,
            'Custom Toolbar'
          )
        ),
        _react2.default.createElement(
          _helpers.Inline,
          null,
          _react2.default.createElement(
            _helpers.Inline,
            null,
            _react2.default.createElement(
              _helpers.Column,
              null,
              _react2.default.createElement(
                _typography.H3,
                null,
                'JSX'
              ),
              _react2.default.createElement(
                _index2.default,
                { innerHTML: true, className: 'html' },
                '<Topbar>\n  <Title>Custom Toolbar</Title>\n</Topbar>\n'
              )
            ),
            _react2.default.createElement(
              _helpers.Column,
              null,
              _react2.default.createElement(
                _typography.H3,
                null,
                'Styled Component'
              ),
              _react2.default.createElement(
                _index2.default,
                null,
                'export const Topbar = styled.header`\n  background: ${nav.background};\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  height: ${nav.height};\n\n  img {\n    width: 230px;\n  }\n`;'
              )
            )
          )
        ),
        _react2.default.createElement(
          _typography.H2,
          null,
          'Panel'
        ),
        _react2.default.createElement(
          _helpers.Inline,
          null,
          _react2.default.createElement(
            _layout.Panel,
            null,
            'Some panel with white content'
          ),
          _react2.default.createElement(
            _layout.Panel,
            { dark: true },
            'Some panel with dark content'
          )
        ),
        _react2.default.createElement(
          _typography.H2,
          null,
          'View'
        ),
        _react2.default.createElement(
          _helpers.Relative,
          null,
          _react2.default.createElement(
            _layout.ScrollView,
            null,
            _react2.default.createElement(
              _layout.View,
              { bg: 'red' },
              _react2.default.createElement(
                _typography.Title,
                null,
                'Some title'
              ),
              _react2.default.createElement(
                _layout.Panel,
                null,
                'This is some view content'
              )
            )
          )
        ),
        _react2.default.createElement(
          _typography.H2,
          null,
          'Viewport'
        ),
        _react2.default.createElement(_layout.Viewport, null),
        _react2.default.createElement(
          _typography.H2,
          null,
          'ScrollView'
        ),
        _react2.default.createElement(
          _helpers.Inline,
          null,
          _react2.default.createElement(
            _index2.default,
            null,
            '<ScrollView />'
          ),
          _react2.default.createElement(
            _index2.default,
            null,
            '<ScrollView horizontal/>'
          )
        ),
        _react2.default.createElement(
          _helpers.Inline,
          null,
          _react2.default.createElement(
            _layout.ScrollView,
            { height: '200px', width: '50%' },
            _react2.default.createElement(
              _typography.P,
              null,
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            ),
            _react2.default.createElement(
              _typography.P,
              null,
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            )
          ),
          _react2.default.createElement(
            _layout.ScrollView,
            { horizontal: true, height: '200px', width: '50' },
            _react2.default.createElement(
              _typography.P,
              null,
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            ),
            _react2.default.createElement(
              _typography.P,
              null,
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            )
          )
        )
      )
    );
  };

  exports.default = LayoutExample;
});