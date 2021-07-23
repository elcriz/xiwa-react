import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './XiwaCollection.scss';

export const XiwaCollection = ({
    id,
    className,
    variant,
    children,
    isLarge,
}) => (
    <div
        id={id}
        className={classnames(className, 'xiwa-collection', {
            'xiwa-collection--xl': isLarge,
            'xiwa-collection--one-fourth': variant === 'oneFourth',
            'xiwa-collection--one-third': variant === 'oneThird',
            'xiwa-collection--one-half': variant === 'oneHalf',
        })}
    >
        {children}
    </div>
);

XiwaCollection.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        'oneFourth',
        'oneThird',
        'oneHalf'
    ]),
    children: PropTypes.node.isRequired,
    isLarge: PropTypes.bool,
};

export default XiwaCollection;
