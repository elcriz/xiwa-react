import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './XiwaRating.scss';

export const XiwaRating = ({
    className,
    value,
}) => (
    <aside
        className={classnames(className, 'xiwa-rating')}
        title={`${value} van 5 sterren`}
    >
        {Array.apply(null, Array(5)).map((slot, index) => (
            <span
                key={index}
                className={classnames('xiwa-rating__star', {
                    'xiwa-rating__star--ticked': index < value
                })}
            />
        ))}
    </aside>
);

XiwaRating.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    value: PropTypes.oneOf([0, 1, 2, 3, 4, 5])
};

XiwaRating.defaultProps = {
    className: undefined,
    value: 0,
};

export default XiwaRating;
