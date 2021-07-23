import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './XiwaPanel.scss';

export const XiwaPanel = ({
  id,
  className,
  variant,
  heading,
  subHeading,
  children,
  actions,
  hasCenteredContent,
  hasJustifiedActions,
  hasStickyActions,
  isLoading,
  isElevated,
  isSticky,
}) => (
  <div
    id={id}
    className={classnames(className, 'xiwa-panel', {
      'xiwa-panel--alternative': variant === 'alternative',
      'xiwa-panel--centered': hasCenteredContent,
      'xiwa-panel--sticky-actions': hasStickyActions,
      'xiwa-panel--loading': isLoading,
      'xiwa-panel--elevated': isElevated,
      'xiwa-panel--sticky': isSticky,
    })}
  >
    {heading && (
      <header className="xiwa-panel__header">
        <h1 className="xiwa-panel__heading">
          {heading}
        </h1>
        {subHeading && (
          <div className="xiwa-panel__sub-heading">
            {subHeading}
          </div>
        )}
      </header>
    )}
    {children && (
      <div className="xiwa-panel__content">
        {children}
      </div>
    )}
    {actions && (
      <aside
        className={classnames('xiwa-panel__actions', {
          'xiwa-panel__actions--justified': hasJustifiedActions,
        })}
      >
        {actions}
      </aside>
    )}
  </div>
);

XiwaPanel.defaultProps = {
  hasCenteredContent: false,
  hasJustifiedActions: false,
  hasStickyActions: false,
  isLoading: false,
  isElevated: false,
  isSticky: false,
};

XiwaPanel.propTypes = {
  /**
   * Specify an optional id attribute to be added to the panel
   */
  id: PropTypes.string,
  /**
   * Specify an optional (CSS) classname to be added to the panel
   */
  className: PropTypes.string,
  /**
   * Specify the variant of the button
   */
  variant: PropTypes.oneOf([
    'alternative'
  ]),
  heading: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  subHeading: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  childen: PropTypes.node,
  actions: PropTypes.node,
  hasCenteredContent: PropTypes.bool,
  hasJustifiedActions: PropTypes.bool,
  /**
   * Set to 'true' to make the actions (e.g. buttons) sticky. This means they will attach to the bottom edge of the viewport.
   */
  hasStickyActions: PropTypes.bool,
  isLoading: PropTypes.bool,
  isElevated: PropTypes.bool,
  isSticky: PropTypes.bool,
};

export default XiwaPanel;
