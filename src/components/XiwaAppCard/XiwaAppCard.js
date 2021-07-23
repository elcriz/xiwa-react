import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import XiwaRating from '../XiwaRating/XiwaRating';
import './XiwaAppCard.scss';

export const XiwaAppCard = ({
    id,
    className,
    heading,
    information,
    url,
    ratingValue,
    iconImageUrl,
}) => (
    <div
        id={id}
        className={classnames(className, 'xiwa-app-card')}
    >
        <a
            className="xiwa-app-card__inner"
            href={url}
            title={heading}
        >
            <div className="xiwa-app-card__description">
                <h1 className="xiwa-app-card__heading">{heading}</h1>
                <div className="xiwa-app-card__information">
                    {information}
                </div>
                {ratingValue !== undefined && (
                    <XiwaRating
                        className="xiwa-app-card__rating"
                        value={ratingValue}
                    />
                )}
            </div>
            {iconImageUrl && (
                <div className="xiwa-app-card__icon-container">
                    <img
                        className="xiwa-app-card__icon"
                        src={iconImageUrl}
                        alt={heading}
                    />
                </div>
            )}
        </a>
    </div>
);

XiwaAppCard.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    heading: PropTypes.string.isRequired,
    information: PropTypes.string,
    url: PropTypes.string,
    ratingValue: PropTypes.oneOf([undefined, 0, 1, 2, 3, 4, 5]),
    iconImageUrl: PropTypes.string,
};

XiwaAppCard.defaultProps = {
    url: '#',
    ratingValue: undefined,
    iconImageUrl: undefined,
};

export default XiwaAppCard;
