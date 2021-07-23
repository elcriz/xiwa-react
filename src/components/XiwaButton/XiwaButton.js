import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './XiwaButton.scss';

export const XiwaButton = ({
    id,
    className,
    title,
    type,
    tabIndex,
    children,
    variant,
    size,
    leftIcon,
    rightIcon,
    isSkeleton,
    isDisabled,
    isOutlined,
    isSubordinate,
    isLoading,
    onClick,
    ...rest
}) => (
    <button
        id={id}
        className={classnames(className, 'xiwa-button', {
            'xiwa-button--primary': variant === 'primary',
            'xiwa-button--secondary': variant === 'secondary',
            'xiwa-button--tertiary': variant === 'tertiary',
            'xiwa-button--error-confirmation': variant === 'error-confirmation',
            'xiwa-button--outlined': isOutlined,
            'xiwa-button--subordinate': isSubordinate,
            'xiwa-button--loading': isLoading && !isSkeleton,
            'xiwa-button--80': size === '80',
            'xiwa-button--90': size === '90',
            'xiwa-button--100': size === '200',
            'xiwa-button--200': size === '200',
            'xiwa-button--300': size === '300',
        })}
        title={title}
        type={type}
        tabIndex={tabIndex}
        disabled={isDisabled}
        onClick={!isLoading ? onClick : undefined}
        {...rest}
    >
        {leftIcon}
        <span className="xiwa-button__content">
          {children}
        </span>
        {rightIcon}
    </button>
);

XiwaButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  tabIndex: PropTypes.number,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'error-confirmation']),
  size: PropTypes.oneOf(['80', '90', '100', '200', '300']),
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  isSkeleton: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isOutlined: PropTypes.bool,
  isSubordinate: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
};

XiwaButton.defaultProps = {
    type: 'button',
    tabIndex: 0,
    isDisabled: false,
    isOutlined: false,
    isSubordinate: false,
    isLoading: false,
    isSkeleton: false,
    onClick: undefined,
};

export default XiwaButton;
