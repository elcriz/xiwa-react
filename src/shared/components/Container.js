import React from 'react';
import PropTypes from 'prop-types';

export const Container = ({
  children,
  hasNoPadding,
  isNarrow,
  isTransparent,
  isAlternative,
  width,
  height,
}) => (
  <div style={{
    padding: hasNoPadding ? 'auto' : '16px',
    backgroundColor: isTransparent
      ? 'auto'
      : isAlternative ? 'rgb(103, 36, 131)' : 'rgb(245, 245, 245)',
    maxWidth: isNarrow ? '230px' : 'none',
    width,
    height,
  }}>
    {children}
  </div>
);

Container.defaultPropr = {
  hasNoPadding: false,
  isNarrow: false,
  isTransparent: false,
  isAlternative: false,
  width: 'auto',
  height: 'auto',
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  hasNoPadding: PropTypes.bool,
  isNarrow: PropTypes.bool,
  isTransparent: PropTypes.bool,
  isAlternative: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Container;
