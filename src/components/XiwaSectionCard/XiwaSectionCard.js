import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './XiwaSectionCard.scss';

export const XiwaSectionCard = ({
    id,
    className,
    heading,
    description,
    url,
    imageUrl,
}) => (
    <div
        id={id}
        className={classnames(className, 'xiwa-section-card')}
    >
        <a
            className="xiwa-section-card__inner"
            href={url}
        >
            <div className="xiwa-section-card__content">
                <h1 className="xiwa-section-card__heading">{heading}</h1>
                <div className="xiwa-section-card__description">{description}</div>
            </div>
            {imageUrl && (
                <img
                    className="xiwa-section-card__image"
                    src={imageUrl}
                    alt={heading}
                />
            )}
        </a>
    </div>
);

XiwaSectionCard.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    heading: PropTypes.string.isRequired,
    description: PropTypes.string,
    url: PropTypes.string,
    imageUrl: PropTypes.string,
};

XiwaSectionCard.defaultProps = {
    url: '#',
    imageUrl: undefined,
};

export default XiwaSectionCard;
