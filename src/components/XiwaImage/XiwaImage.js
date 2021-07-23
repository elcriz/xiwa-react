import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './XiwaImage.scss';

export const XiwaImage = ({
  id,
  className,
  src,
  alt,
  isRound,
  isCovering,
  isHiddenOnHand,
  ...rest
}) => (
  <img
    {...rest}
    id={id}
    className={classnames(className, 'xiwa-image', {
      'xiwa-image--circular': isRound,
      'xiwa-image--cover': isCovering,
      'xiwa-image--hidden-on-hand': isHiddenOnHand,
    })}
    src={src}
    alt={alt}
  />
);

XiwaImage.defaultProps = {
  isRound: false,
  isCovering: false,
  isHiddenOnHand: false,
};

XiwaImage.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  isRound: PropTypes.bool,
  isCovering: PropTypes.bool,
  isHiddenOnHand: PropTypes.bool,
};

export default XiwaImage;
