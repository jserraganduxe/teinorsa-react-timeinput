"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatToMilliseconds = exports.millisecondsToFormat = exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

require("./src/styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ReactTimeInput =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactTimeInput, _Component);

  function ReactTimeInput() {
    _classCallCheck(this, ReactTimeInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReactTimeInput).apply(this, arguments));
  }

  _createClass(ReactTimeInput, [{
    key: "render",
    value: function render() {
      var myProps = {
        divKey: this.props.divKey !== undefined ? this.props.divKey : 1,
        inputProps: this.props.inputProps != undefined ? this.props.inputProps : {},
        renderHours: this.props.renderHours !== undefined ? this.props.renderHours : true,
        renderMinutes: this.props.renderMinutes !== undefined ? this.props.renderMinutes : true,
        renderSeconds: this.props.renderSeconds !== undefined ? this.props.renderSeconds : true,
        defaultValue: this.props.defaultValue !== undefined ? this.props.defaultValue : '',
        worksInMilliseconds: this.props.worksInMilliseconds !== undefined ? this.props.worksInMilliseconds : true,
        styled: this.props.styled !== undefined ? this.props.styled : false
      };

      var changeInput = function changeInput(e) {
        if (e.currentTarget.value < 10) {
          e.currentTarget.value = '0' + e.currentTarget.value;
        }

        if (!e.currentTarget.classList.contains('react-timeinput-hours') && e.currentTarget.value > 59) {
          e.currentTarget.value = 59;
        }

        var parent = e.currentTarget.parentNode;
        var hours = parent.querySelector('.react-timeinput-hours').value;
        var minutes = parent.querySelector('.react-timeinput-minutes').value;
        var seconds = parent.querySelector('.react-timeinput-seconds').value;
        var input = '';

        if (myProps.worksInMilliseconds) {
          input = formatToMilliseconds(hours, minutes, seconds);
        } else {
          input = hours + ':' + minutes + ':' + seconds;
        }

        parent.parentNode.querySelector('input').value = input;
      };

      var myhours = '00';
      var myminutes = '00';
      var myseconds = '00';

      if (myProps.defaultValue !== '') {
        var result = myProps.defaultValue;

        if (myProps.worksInMilliseconds) {
          result = millisecondsToFormat(parseInt(myProps.defaultValue));
        }

        result = result.split(':');
        myhours = result[0] !== undefined ? result[0] : '00';
        myminutes = result[1] !== undefined ? result[1] : '00';
        myseconds = result[2] !== undefined ? result[2] : '00';
      } else {
        myProps.defaultValue = myhours + ':' + myminutes + ':' + myseconds;
      }

      return _react["default"].createElement("div", {
        className: 'react-timeinput' + (myProps.styled ? ' react-timeinput-styled' : ''),
        id: 'react-timeinput-' + myProps.divKey
      }, _react["default"].createElement("input", _extends({
        type: "hidden"
      }, myProps.inputProps, {
        defaultValue: myProps.defaultValue
      })), _react["default"].createElement("div", {
        className: "react-timeinput-visible"
      }, _react["default"].createElement("input", {
        type: myProps.renderHours ? 'number' : 'hidden',
        onChange: changeInput,
        min: "0",
        className: "react-timeinput-hours",
        defaultValue: myhours
      }), myProps.styled && myProps.renderHours ? _react["default"].createElement("span", {
        className: "react-timeinput-separator"
      }, ":") : '', _react["default"].createElement("input", {
        type: myProps.renderMinutes ? 'number' : 'hidden',
        onChange: changeInput,
        className: "react-timeinput-minutes",
        defaultValue: myminutes,
        max: "59",
        min: "0"
      }), myProps.styled && myProps.renderMinutes ? _react["default"].createElement("span", {
        className: "react-timeinput-separator"
      }, ":") : '', _react["default"].createElement("input", {
        type: myProps.renderSeconds ? 'number' : 'hidden',
        onChange: changeInput,
        className: "react-timeinput-seconds",
        defaultValue: myseconds,
        max: "59",
        min: "0"
      }), myProps.styled && myProps.renderSeconds ? _react["default"].createElement("span", {
        className: "react-timeinput-separator"
      }, ":") : ''));
    }
  }]);

  return ReactTimeInput;
}(_react.Component);

ReactTimeInput.propTypes = {
  divKey: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  inputProps: _propTypes["default"].object,
  renderHours: _propTypes["default"].bool,
  renderMinutes: _propTypes["default"].bool,
  renderSeconds: _propTypes["default"].bool,
  defaultValue: _propTypes["default"].string,
  worksInMilliseconds: _propTypes["default"].bool,
  styled: _propTypes["default"].bool
};
var _default = ReactTimeInput;
exports["default"] = _default;

var millisecondsToFormat = function millisecondsToFormat(it) {
  var hours = Math.floor(it / 1000 / 60 / 60);
  var minutes = 0;
  var seconds = 0;
  it -= hours * 1000 * 60 * 60;

  if (it > 0) {
    minutes = Math.floor(it / 1000 / 60);
    it -= minutes * 1000 * 60;

    if (it > 0) {
      seconds = Math.floor(it / 1000);
    }
  }

  hours = ('0' + hours).slice(-2);
  minutes = ('0' + minutes).slice(-2);
  seconds = ('0' + seconds).slice(-2);
  var calctime = hours + ':' + minutes + ':' + seconds;
  return calctime;
};

exports.millisecondsToFormat = millisecondsToFormat;

var formatToMilliseconds = function formatToMilliseconds(hours, minutes, seconds) {
  var date = new Date(0);
  date.setHours(parseInt(hours) + 1);
  date.setMinutes(parseInt(minutes));
  date.setSeconds(parseInt(seconds));
  date = (0, _moment["default"])(date);
  var date2 = (0, _moment["default"])(new Date(0));
  var diff = date.diff(date2);
  return diff;
};

exports.formatToMilliseconds = formatToMilliseconds;
