import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './XiwaTabs.scss';

const getIndexedId = (id, index) =>
  `tab-${id ? `${id}-` : ''}${index}`;

export const XiwaTabs = ({
  id,
  className,
  options,
  value,
  children,
}) => {
  const [openIndex, setOpenIndex] = React.useState(
    value ? options.indexOf(value) : 0
  );

  const indexedChildren = children ? React.Children
    .map(
      children.filter(Boolean),
      (panel, panelIndex) => React.cloneElement(panel, {
        id: getIndexedId(id, panelIndex),
        isCurrent: openIndex === panelIndex
      })
    ) : null;

  React.useEffect(() => {
    if (id) {
      try {
        const existingElements = document.querySelectorAll('[id="${id}"]');
        if (existingElements && existingElements.length > 0) {
          throw new Error('A Xiwa Tabs instance with the same id already exists on the page');
        }
      } catch ({ name, message }) {
        console.error(`${name}: ${message}`);
      }
    }
  }, []);

  return (
    <div
      id={id}
      className={classnames(className, 'xiwa-tabs')}
    >
      {options && options.length > 1 && (
        <nav className="xiwa-tabs__selectors">
          {options.map((label, optionIndex) => (
            <button
              key={optionIndex}
              id={`select-${getIndexedId(id, optionIndex)}`}
              className={classnames('xiwa-tabs__selector', {
                'is-current': openIndex === optionIndex,
              })}
              onClick={(event) => {
                event.preventDefault();
                setOpenIndex(optionIndex);
              }}
              role="tab"
              aria-selected={openIndex === optionIndex}
              controls={getIndexedId(id, optionIndex)}
            >
              <span>{label}</span>
            </button>
          ))}
        </nav>
      )}
      <div className="xiwa-tabs__container">
        {indexedChildren}
      </div>
    </div>
  );
};

XiwaTabs.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.string,
  ),
  value: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default XiwaTabs;
