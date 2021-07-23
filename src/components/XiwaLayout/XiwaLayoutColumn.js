import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './XiwaLayout.scss';

export const XiwaLayoutColumn = ({
  id,
  className,
  children,
  size,
  variant,
  verticalAlignment,
  horizontalAlignment,
  hasBottomPadding,
}) => (
  <div
    id={id}
    className={classnames(className, 'xiwa-layout__column', {
      'xiwa-layout__column--one-fourth': size === 'oneFourth',
      'xiwa-layout__column--one-third': size === 'oneThird',
      'xiwa-layout__column--two-thirds': size === 'twoThirds',
      'xiwa-layout__column--one-half': size === 'oneHalf',
      'xiwa-layout__column--primary': variant === 'primary',
      'xiwa-layout__column--secondary': variant === 'secondary',
      'xiwa-layout__column--to-middle': verticalAlignment === 'middle',
      'xiwa-layout__column--to-bottom': verticalAlignment === 'bottom',
      'xiwa-layout__column--to-right': horizontalAlignment === 'right',
      'xiwa-layout__column--centered': horizontalAlignment === 'center',
      'xiwa-layout__column--with-bottom-padding': hasBottomPadding,
    })}
  >
    {children}
  </div>
);

XiwaLayoutColumn.defaultProps = {
  size: undefined,
  variant: undefined,
  verticalAlignment: undefined,
  horizontalAlignment: undefined,
  hasBottomPadding: false,
};

XiwaLayoutColumn.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf([
    'oneFourth',
    'oneThird',
    'twoThirds',
    'oneHalf'
  ]),
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
  ]),
  verticalAlignment: PropTypes.oneOf([
    'middle',
    'bottom',
  ]),
  horizontalAlignment: PropTypes.oneOf([
    'center',
    'right',
  ]),
  hasBottomPadding: PropTypes.bool,
};

export default XiwaLayoutColumn;
