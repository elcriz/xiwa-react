import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './XiwaContent.scss';

export const XiwaContent = ({
  id,
  className,
  children,
  hasCenteredContent,
  isNarrow,
  isCentered,
  isAlternative,
  ...rest
}) => (
  <div
    id={id}
    className={classnames(className, 'xiwa-content', {
      'xiwa-content--centering': hasCenteredContent,
      'xiwa-content--limited-width': isNarrow,
      'xiwa-content--centered': isCentered,
      'xiwa-content--light': isAlternative,
    })}
    {...rest}
  >
    {children}
  </div>
);

XiwaContent.defaultProps = {
  hasCenteredContent: false,
  isNarrow: false,
  isCentered: false,
  isAlternative: false,
};

XiwaContent.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  hasCenteredContent: PropTypes.bool,
  isNarrow: PropTypes.bool,
  isCentered: PropTypes.bool,
  isAlternative: PropTypes.bool,
};

export default XiwaContent;
