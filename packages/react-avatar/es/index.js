import PropTypes from 'prop-types';
import Container from './Container';
import Img from './Img';
import Skeleton from './Skeleton';
Container.displayName = 'NuContainer';
Container.defaultProps = {};
Container.propTypes = {
  /** 容器元素 */
  Component: PropTypes.node,
  acss: PropTypes.string,
  acssWhenSize: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
var NuContainer = Container;
Img.displayName = 'NuImg';
Img.defaultProps = {};
Img.propTypes = {
  /** 当没有 size 的时候会变成自适应 */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  acss: PropTypes.string,

  /** 图片路径 */
  src: PropTypes.string,

  /** 图片加载失败执行 */
  onError: PropTypes.func,

  /** 图片加载失败输出 */
  placeholder: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};
var NuImg = Img;
Skeleton.displayName = 'NuSkeleton';
Skeleton.defaultProps = {};
Skeleton.propTypes = {
  /** 容器元素 */
  Component: PropTypes.node,
  acss: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
var NuSkeleton = Skeleton;
export { NuContainer, NuImg, NuSkeleton };