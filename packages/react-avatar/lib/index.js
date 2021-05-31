"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NuSkeleton = exports.NuImg = exports.NuContainer = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Container = _interopRequireDefault(require("./Container"));

var _Img = _interopRequireDefault(require("./Img"));

var _Skeleton = _interopRequireDefault(require("./Skeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Container.default.displayName = 'NuContainer';
_Container.default.defaultProps = {};
_Container.default.propTypes = {
  /** 容器元素 */
  Component: _propTypes.default.node,
  acss: _propTypes.default.string,
  acssWhenSize: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
var NuContainer = _Container.default;
exports.NuContainer = NuContainer;
_Img.default.displayName = 'NuImg';
_Img.default.defaultProps = {};
_Img.default.propTypes = {
  /** 当没有 size 的时候会变成自适应 */
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  acss: _propTypes.default.string,

  /** 图片路径 */
  src: _propTypes.default.string,

  /** 图片加载失败执行 */
  onError: _propTypes.default.func,

  /** 图片加载失败输出 */
  placeholder: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func])
};
var NuImg = _Img.default;
exports.NuImg = NuImg;
_Skeleton.default.displayName = 'NuSkeleton';
_Skeleton.default.defaultProps = {};
_Skeleton.default.propTypes = {
  /** 容器元素 */
  Component: _propTypes.default.node,
  acss: _propTypes.default.string,
  size: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
var NuSkeleton = _Skeleton.default;
exports.NuSkeleton = NuSkeleton;