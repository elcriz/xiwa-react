import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './XiwaSkeleton.scss';

export const XiwaSkeleton = ({
    id,
    className,
    variant,
    isFullWidth,
    isFullHeight
}) => (
    <span
        id={id}
        className={classnames(className, 'xiwa-skeleton', {
            'xiwa-skeleton--text': variant === 'text',
            'xiwa-skeleton--figure': variant === 'figure',
            'xiwa-skeleton--full-width': isFullWidth,
            'xiwa-skeleton--full-height': isFullHeight
        })}
    />
);

XiwaSkeleton.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        'text',
        'figure'
    ]),
    isFullWidth: PropTypes.bool,
    isFullHeight: PropTypes.bool,
};

XiwaSkeleton.defaultProps = {
    variant: 'text',
    isFullWidth: false,
    isFullHeight: false,
};

export default XiwaSkeleton;
