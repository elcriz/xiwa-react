import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './XiwaHeader.scss';

export const XiwaHeader = ({
  id,
  className,
  heading,
  subHeading,
  size,
  hasCenteredContent,
  ...rest
}) => (
  <header
    {...rest}
    id={id}
    className={classnames(className, 'xiwa-header', {
      'xiwa-header--90': size === 90,
      'xiwa-header--centered': hasCenteredContent,
    })}
  >
    <h1 className="xiwa-header__heading">
      {heading}
    </h1>
    {subHeading && (
      <div className="xiwa-header__sub-heading">
        {subHeading}
      </div>
    )}
  </header>
);

XiwaHeader.defaultProps = {
  hasCenteredContent: false,
};

XiwaHeader.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string,
  size: PropTypes.oneOf([
    90,
  ]),
  hasCenteredContent: PropTypes.bool,
};

export default XiwaHeader;
