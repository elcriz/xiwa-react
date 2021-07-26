import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './XiwaSegmentedControl.scss';

export const XiwaSegmentedControl = ({
  id,
  className,
  label,
  options,
  value,
  onChange,
  isSmall,
  isInline,
  ...rest
}) => {
	const isMultiSelect = value && Array.isArray(value);
	const [currentValue, setValue] = useState(value
		|| (isMultiSelect ? [] : '')
	);

    const handleChange = (newValue, isChecked) => {
		if (!isMultiSelect) {
			setValue(newValue);
			return;
		}
		setValue(oldValues => ([
			...oldValues.filter(foundValue => foundValue !== newValue),
			newValue
		].filter(foundValue => isChecked
			? foundValue !== newValue : true
		)));
	};

	React.useEffect(() => {
		if (onChange) {
			onChange(currentValue);
		}
	}, [currentValue, onChange]);

  return (
    <div
      {...rest}
      className={classnames(className, 'xiwa-segmented-control', {
        'xiwa-segmented-control--inline': isInline,
        'xiwa-segmented-control--small': isSmall,
      })}
    >
      {label && (
        <div className="xiwa-segmented-control__label-box">
          <label className="xiwa-segmented-control__label">
              {label}
          </label>
        </div>
      )}
      <div className="xiwa-segmented-control__items">
        {options.map((optionValue, index) => {
          const optionId = `${id}-${index}`;
          const serializedOptionValue = typeof optionValue === 'object' ? Object.keys(optionValue)[0] : optionValue;
          const inputLabel = typeof optionValue === 'object' ? optionValue[Object.keys(optionValue)] : optionValue;
          const checked = isMultiSelect
            ? (currentValue.indexOf(serializedOptionValue) !== -1)
            : (currentValue === serializedOptionValue);

          return (
            <label
              key={index}
              className={`xiwa-segmented-control__item${value === serializedOptionValue ? ' is-selected' : ''}`}
              htmlFor={optionId}
            >
              <input
                id={optionId}
                className="xiwa-segmented-control__input"
                name={id}
                value={serializedOptionValue}
                checked={checked}
                type={isMultiSelect ? 'checkbox' : 'radio'}
                onChange={(event) => {
                  handleChange(event.target.value, checked);
                }}
              />
              <span className="xiwa-segmented-control__input-label">
                {inputLabel}
              </span>
            </label>
          );
        })}
      </div>
    </div>
  );
};

XiwaSegmentedControl.defaultProps = {
  isSmall: false,
  isInline: false,
};

XiwaSegmentedControl.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ])
  ).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.string
    )
  ]),
  onChange: PropTypes.func,
  isInline: PropTypes.bool,
  isSmall: PropTypes.bool,
};

export default XiwaSegmentedControl;
