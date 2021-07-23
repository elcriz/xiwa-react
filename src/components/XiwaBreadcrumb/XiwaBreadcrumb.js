import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { XiwaLink } from '../XiwaLink/XiwaLink';
import './XiwaBreadcrumb.scss';

const ListItem = ({
  to,
  label,
}) => (
  <li className="xiwa-breadcrumb__list-item">
    {!to && (
      <span>
        {label}
      </span>
    )}
    {to && (
      <XiwaLink
        to={to}
        isDiscrete
      >
        {label}
      </XiwaLink>
    )}
  </li>
);

export const XiwaBreadcrumb = ({
  id,
  className,
  offsetPath,
  offsetLabel,
  items,
}) => {
  const itemsToRender = [
    { to: offsetPath, label: offsetLabel },
    ...items
  ];

  return (
    <nav
      id={id}
      className={classnames(className, 'xiwa-breadcrumb')}
    >
      <ul className="xiwa-breadcrumb__list">
        {itemsToRender.map((item, itemIndex) => (
          <ListItem
            key={itemIndex}
            {...item}
          />
        ))}
      </ul>
    </nav>
  );
};

XiwaBreadcrumb.defaultProps = {
  offsetPath: '/',
  offsetLabel: 'Home',
};

XiwaBreadcrumb.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  offsetPath: PropTypes.string,
  offsetLabel: PropTypes.string,
  items: PropTypes.array,
};

export default XiwaBreadcrumb;
