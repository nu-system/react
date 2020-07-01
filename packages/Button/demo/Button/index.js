import "@_nu/css-button";
import "@_nu/css-button/css/skins/bootstrap.css";
import "@_nu/css-button/css/skins/loading.css";
import "@_nu/css-button/css/skins/webnovel.css";
import NuButton from "../../src/index";
import classname from "classnames";

NuButton.defaultProps.onBeforeReturn = function(props) {
  // variant is one of _fill | _ghost | _link
  let variant = "_fill";
  ["_ghost", "_link"].forEach((item) => {
    if (props.className?.indexOf(item) > -1) {
      variant = item;
    }
  });
  props.className = classname("nu_btn", variant, props.className);
  return props;
};

export default NuButton;
