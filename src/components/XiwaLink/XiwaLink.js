import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './XiwaLink.scss';

const Icon = ({
  icon,
}) => (
  <span className="xiwa-link__icon">
    {icon}
  </span>
);

const Content = ({
  leftIcon,
  rightIcon,
  children,
}) => (
  <React.Fragment>
    {leftIcon && (<Icon icon={leftIcon} />)}
      <span>{children}</span>
    {rightIcon && (<Icon icon={rightIcon} />)}
  </React.Fragment>
);

export const XiwaLink = ({
  id,
  className,
  to,
  children,
  onClick,
  leftIcon,
  rightIcon,
  isButton,
  isAlternative,
  isDiscrete,
  hasPointer,
  ...rest
}) => {
  const props = {
    id,
    className: classnames(className, 'xiwa-link xiwalink--button', {
      'xiwa-link--alt': isAlternative,
      'xiwa-link--discrete': isDiscrete,
      'xiwa-link--with-pointer': hasPointer,
    }),
    onClick,
    leftIcon,
    rightIcon,
    ...rest
  };

  if (isButton) {
    return (
      <button
        {...rest}
        id={id}
        className={props.className}
        onClick={onClick}
      >
        <Content {...props}>
          {children}
        </Content>
      </button>
    );
  }

  return (
    <a
      {...rest}
      id={id}
      className={props.className}
      href={to}
      onClick={onClick}
    >
      <Content {...props}>
        {children}
      </Content>
    </a>
  );
};

XiwaLink.defaultProps = {
  to: '#'
};

XiwaLink.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
  isButton: PropTypes.bool,
  isAlternative: PropTypes.bool,
  isDiscrete: PropTypes.bool,
  hasPointer: PropTypes.bool,
};

export default XiwaLink;
