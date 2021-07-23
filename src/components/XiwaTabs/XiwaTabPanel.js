import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './XiwaTabs.scss';

export const XiwaTabPanel = ({
  id,
  children,
  isCurrent,
}) => (
  <section
    id={id}
    className={classnames('xiwa-tabs__panel', {
      'is-current': isCurrent,
    })}
    hidden={!isCurrent ? 'hidden' : undefined}
    role="tabpanel"
    tabIndex="0"
    aria-labelledby={`select-${id}`}
  >
    {children}
  </section>
);

XiwaTabPanel.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  isCurrent: PropTypes.bool,
};

export default XiwaTabPanel;
