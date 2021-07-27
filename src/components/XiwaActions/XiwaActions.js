import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './XiwaActions.scss';

export const XiwaActions = ({
  id,
  className,
  children,
  isCentered,
  isAlignedToTheRight,
  ...rest
}) => (
  <aside
    {...rest}
    id={id}
    className={classnames(className, 'xiwa-actions', {
      'xiwa-actions--centered': isCentered,
      'xiwa-actions--to-right': isAlignedToTheRight,
    })}
  >
    {children}
  </aside>
);

XiwaActions.defaultProps = {
  isCentered: false,
  isAlignedToTheRight: false,
};

XiwaActions.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  isCentered: PropTypes.bool,
  isAlignedToTheRight: PropTypes.bool,
};

export default XiwaActions;
