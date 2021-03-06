import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import classNames from 'classnames';
import React from 'react';
import isRequiredForA11y from 'prop-types-extra/lib/isRequiredForA11y';
import { useBootstrapPrefix } from './ThemeProvider';
var defaultProps = {
  placement: 'right'
};
var Tooltip = React.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      placement = _ref.placement,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      arrowProps = _ref.arrowProps,
      _ = _ref.scheduleUpdate,
      _1 = _ref.outOfBoundaries,
      props = _objectWithoutPropertiesLoose(_ref, ["bsPrefix", "placement", "className", "style", "children", "arrowProps", "scheduleUpdate", "outOfBoundaries"]);

  bsPrefix = useBootstrapPrefix(bsPrefix, 'tooltip');
  return React.createElement("div", _extends({
    ref: ref,
    style: style,
    role: "tooltip",
    "x-placement": placement,
    className: classNames(className, bsPrefix, "bs-tooltip-" + placement)
  }, props), React.createElement("div", _extends({
    className: "arrow"
  }, arrowProps)), React.createElement("div", {
    className: bsPrefix + "-inner"
  }, children));
});
Tooltip.defaultProps = defaultProps;
Tooltip.displayName = 'Tooltip';
export default Tooltip;