import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './XiwaBand.scss';

export const XiwaBand = ({
  id,
  className,
  children,
  isLarge,
  isLargeAtTop,
  isLargeAtBottom,
  isAlternative,
}) => (
  <section
    id={id}
    className={classnames(className, 'xiwa-band', {
      'xiwa-band--xl': isLarge,
      'xiwa-band--top-xl': isLargeAtTop,
      'xiwa-band--bottom-xl': isLargeAtBottom,
      'xiwa-band--alt': isAlternative,
    })}
  >
    {children}
  </section>
);

XiwaBand.defaultProps = {
  isLarge: undefined,
};

XiwaBand.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  isLarge: PropTypes.bool,
  isLargeAtTop: PropTypes.bool,
  isLargeAtBottom: PropTypes.bool,
  isAlternative: PropTypes.bool,
};

export default XiwaBand;
