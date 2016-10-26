(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'react-highlight', './styles.scss'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('react-highlight'), require('./styles.scss'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactHighlight, global.styles);
    global.index = mod.exports;
  }
})(this, function (exports, _react, _reactHighlight, _styles) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactHighlight2 = _interopRequireDefault(_reactHighlight);

  var _styles2 = _interopRequireDefault(_styles);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var displayName = 'Code';
  var defaultProps = {};
  var propTypes = {
    children: _react.PropTypes.node
  };

  var component = function component(props) {
    return _react2.default.createElement(
      'div',
      { className: _styles2.default.root },
      _react2.default.createElement(
        _reactHighlight2.default,
        null,
        props.children
      )
    );
  };

  component.displayName = displayName;
  component.defaultProps = defaultProps;
  component.propTypes = propTypes;
  exports.default = component;
});