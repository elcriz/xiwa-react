import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './XiwaDisclosureList.scss';

export const XiwaDisclosureList = ({
  id,
  className,
  children,
  ...rest
}) => (
  <dl
    {...rest}
    id={id}
    className={classnames(className, 'xiwa-disclosure-list')}
  >
    {children}
  </dl>
);

XiwaDisclosureList.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default XiwaDisclosureList;
