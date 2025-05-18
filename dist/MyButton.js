"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var MyButton = function MyButton(_ref) {
  var label = _ref.label,
    onClick = _ref.onClick,
    _ref$backgroundColor = _ref.backgroundColor,
    backgroundColor = _ref$backgroundColor === void 0 ? "#007bff" : _ref$backgroundColor,
    _ref$color = _ref.color,
    color = _ref$color === void 0 ? "#fff" : _ref$color;
  var style = {
    padding: "10px 20px",
    backgroundColor: backgroundColor,
    color: color,
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px"
  };
  return /*#__PURE__*/_react["default"].createElement("button", {
    style: style,
    onClick: onClick
  }, label);
};
var _default = exports["default"] = MyButton;