import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './XiwaArticleCard.scss';

export const XiwaArticleCard = ({
    id,
    className,
    heading,
    description,
    url,
    imageUrl,
    isInverted,
    hasBorder,
    hasStretchBackground,
    hasShortenedDescription,
}) => {
    const containerStyle = hasStretchBackground && imageUrl
        ? { backgroundImage: `url('${imageUrl}')` }
        : undefined;

    return (
        <div
            id={id}
            className={classnames(className, 'xiwa-article-card', {
                'xiwa-article-card--inverted': isInverted,
                'xiwa-article-card--with-border': hasBorder,
                'xiwa-article-card--stretch-background': hasStretchBackground
            })}
            style={containerStyle}
            data-test="01"
        >
            <a
                className="xiwa-article-card__inner"
                href={url}
            >
                <h1 className="xiwa-article-card__heading">{heading}</h1>
                <div
                    className={classnames('xiwa-article-card__description', {
                        'xiwa-article-card__description--shortened-single-line': hasShortenedDescription
                    })}
                >
                    {description}
                </div>
                {!hasStretchBackground && imageUrl && (
                    <img
                        className="xiwa-article-card__image"
                        src={imageUrl}
                        alt={heading}
                    />
                )}
            </a>
        </div>
    );
};

XiwaArticleCard.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    heading: PropTypes.string.isRequired,
    description: PropTypes.string,
    url: PropTypes.string,
    imageUrl: PropTypes.string,
    isInverted: PropTypes.bool,
    hasBorder: PropTypes.bool,
    hasStretchBackground: PropTypes.bool,
    hasShortenedDescription: PropTypes.bool,
};

XiwaArticleCard.defaultProps = {
    url: '#',
    imageUrl: undefined,
    isInverted: false,
    hasBorder: false,
    hasStretchBackground: false,
    hasShortenedDescription: false,
};

export default XiwaArticleCard;
