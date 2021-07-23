import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './XiwaContainer.scss';

export const XiwaContainer = ({
  id,
  className,
  children,
  hasBorder,
  hasTopMargin,
  hasBottomMargin,
  isAlternative,
}) => (
  <div
    id={id}
    className={classnames(className, 'xiwa-container', {
      'xiwa-container--with-border': hasBorder,
      'xiwa-container--with-top-margin': hasTopMargin,
      'xiwa-container--with-bottom-margin': hasBottomMargin,
      'xiwa-container--alt': isAlternative,
    })}
  >
    {children}
  </div>
);

XiwaContainer.defaultProps = {
  hasBorder: false,
  hasTopMargin: false,
  hasBottomMargin: false,
  isAlternative: false,
};

XiwaContainer.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  hasBorder: PropTypes.bool,
  hasTopMargin: PropTypes.bool,
  hasBottomMargin: PropTypes.bool,
  isAlternative: PropTypes.bool,
};

export default XiwaContainer;
