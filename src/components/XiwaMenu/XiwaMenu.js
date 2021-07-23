import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './XiwaMenu.scss';

export const XiwaMenu = ({
  id,
  className,
  heading,
  items,
  ...rest
}) => (
  <div
    {...rest}
    id={id}
    className={classnames(className, 'xiwa-menu')}
  >
    <h2 className="xiwa-menu__heading">
      {heading}
    </h2>
    {items && (
      <nav className="xiwa-menu__items">
        {items.map(({
          to,
          label,
          ...other
        }, itemIndex) => (
          <a
            {...other}
            key={itemIndex}
            className="xiwa-menu__item"
            href={to}
          >
            {label}
          </a>
        ))}
      </nav>
    )}
  </div>
);

XiwaMenu.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  heading: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  items: PropTypes.array,
};

export default XiwaMenu;
