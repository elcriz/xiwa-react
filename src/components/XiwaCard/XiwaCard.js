import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { XiwaLink } from '../XiwaLink/XiwaLink';
import './XiwaCard.scss';

export const XiwaCard = ({
  id,
  className,
  href,
  secondaryHref,
  target,
  mediaUrl,
  mediaAlt,
  iconUrl,
  title,
  subTitle,
  excerpt,
  secondaryActionLabel,
  size,
  hasContentCentered,
  isElevated,
}) => (
  <div
    id={id}
    className={classnames(className, 'xiwa-card', {
      'xiwa-card--90': size === 90,
      'xiwa-card--centered': hasContentCentered,
      'xiwa-card--elevated': isElevated,
    })}
  >
    <div className="xiwa-card__actions">
      <a
        className="xiwa-card__primary-action"
        href={href}
        target={target}
      >
        {mediaUrl && (
          <div className="xiwa-card__media">
            <img
              src={mediaUrl}
              alt={mediaAlt || title}
            />
          </div>
        )}
        <header className="xiwa-card__header">
          {iconUrl && (
            <img
              className="xiwa-card__icon"
              src={iconUrl}
              alt={title}
            />
          )}
          <div className="xiwa-card__heading-group">
            <h1 className="xiwa-card__title">
              {title}
            </h1>
            {subTitle && (
              <div className="xiwa-card__sub-title">
                {subTitle}
              </div>
            )}
            {excerpt && (
              <p className="xiwa-card__excerpt">
                {excerpt}
              </p>
            )}
          </div>
        </header>
      </a>
      {secondaryHref && (
        <aside className="xiwa-card__supplemental-actions">
          <XiwaLink
            className="xiwa-card__xiwa-link"
            to={secondaryHref}
            isAlternative
            hasPointer
          >
            {secondaryActionLabel || 'Meer informatie'}
          </XiwaLink>
        </aside>
      )}
    </div>
  </div>
);

XiwaCard.defaultProps = {
  href: '#',
  target: '_self',
  hasContentCentered: false,
  isElevated: false,
};

XiwaCard.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  secondaryHref: PropTypes.string,
  target: PropTypes.oneOf([
    '_blank',
    '_self',
  ]),
  mediaUrl: PropTypes.string,
  mediaAlt: PropTypes.string,
  iconUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  excerpt: PropTypes.string,
  secondaryActionLabel: PropTypes.string,
  size: PropTypes.oneOf([
    90,
  ]),
  hasContentCentered: PropTypes.bool,
  isElevated: PropTypes.bool,
};

export default XiwaCard;
