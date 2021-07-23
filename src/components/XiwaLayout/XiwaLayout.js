import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './XiwaLayout.scss';

export const XiwaLayout = ({
  id,
  className,
  children,
  isLarge,
  hasLargeGap,
}) => (
  <div
    id={id}
    className={classnames(className, 'xiwa-layout', {
      'xiwa-layout--xl': isLarge,
      'xiwa-layout--large-gap': hasLargeGap,
    })}
  >
    {children}
  </div>
);

XiwaLayout.defaultProps = {
  isLarge: false,
  hasLargeGap: false,
};

XiwaLayout.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  isLarge: PropTypes.bool,
  hasLargeGap: PropTypes.bool,
};

export default XiwaLayout;
