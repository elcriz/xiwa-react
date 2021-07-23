import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import XiwaButton from '../XiwaButton/XiwaButton';
import './XiwaModal.scss';

export const XiwaModal = ({
  className,
  children,
  heading,
  confirmLabel,
  closeLabel,
  onConfirm,
  onClose,
  hasContentPadding,
  ...rest
}) => {
  const handleOverlayClick = ({ target }) => {
    const { dataset } = target;
    if (dataset.overlay) {
      onClose();
    }
  };

  return (
    <div
      {...rest}
      className={classnames(className, 'xiwa-modal', {
        'xiwa-modal--with-content-padded': hasContentPadding,
      })}
      onClick={handleOverlayClick}
      data-overlay
    >
      <div className="xiwa-modal__inner">
        <header className="xiwa-modal__header">
          <h1 className="xiwa-modal__heading">{heading}</h1>
        </header>
        <div className="xiwa-modal__content">
          {children}
        </div>
        <div
          className={classnames('xiwa-modal__actions', {
            'xiwa-modal__actions--with-single-action': !onConfirm,
          })}
        >
          <XiwaButton
            className="xiwa-modal__button"
            variant={onConfirm ? 'secondary' : 'primary'}
            onClick={onClose}
          >
            {closeLabel}
          </XiwaButton>
          {onConfirm && (
            <XiwaButton
              className="xiwa-modal__button"
              variant="primary"
              onClick={onConfirm}
            >
              {confirmLabel}
            </XiwaButton>
          )}
        </div>
        <button
          className="xiwa-modal__button xiwa-modal__button--close"
          title="Sluiten"
          type="button"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

XiwaModal.defaultProps = {
  confirmLabel: 'Bevestigen',
  closeLabel: 'Sluiten',
  hasContentPadding: true,
};

XiwaModal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
  confirmLabel: PropTypes.string,
  closeLabel: PropTypes.string,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func.isRequired,
  hasContentPadding: PropTypes.bool,
};

export default XiwaModal;
