import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './XiwaBox.scss'

export const XiwaBox = ({
  id,
  className,
  size,
  children,
  hasBorder,
  hasTopPadding,
  hasBottomPadding,
  hasLeftPadding,
  hasRightPadding,
}) => (
  <div
    id={id}
    className={classnames(className, 'xiwa-box', {
      'xiwa-box--with-border': hasBorder,
      'xiwa-box--with-top-padding': hasTopPadding,
      'xiwa-box--with-bottom-padding': hasBottomPadding,
      'xiwa-box--with-left-padding': hasLeftPadding,
      'xiwa-box--with-right-padding': hasRightPadding,
      'xiwa-box--90': size === 90,
    })}
  >
    {children}
  </div>
);

XiwaBox.defaultProps = {
  size: undefined,
  hasBorder: false,
  hasTopPadding: false,
  hasBottomPadding: false,
  hasLeftPadding: false,
  hasRightPadding: false,
};

XiwaBox.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.oneOf([90]),
  children: PropTypes.node.isRequired,
  hasTopPadding: PropTypes.bool,
  hasBottomPadding: PropTypes.bool,
  hasLeftPadding: PropTypes.bool,
  hasRightPadding: PropTypes.bool,
};

export default XiwaBox;
