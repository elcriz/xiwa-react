import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './XiwaDropDownMenu.scss';

export const XiwaDropDownMenu = ({
    className,
    options,
    defaultValue,
    size,
    maxWidth,
    onChange,
    isValid,
    isDisabled,
    isHidden,
    ...props
}) => (
    <div
        {...props}
        className={classnames(className, 'xiwa-drop-down-menu', {
            'xiwa-drop-down-menu--90': size === 90,
            'xiwa-drop-down-menu--max-width-60': maxWidth === 60,
            'xiwa-drop-down-menu--max-width-70': maxWidth === 70,
            'xiwa-drop-down-menu--max-width-80': maxWidth === 80,
            'xiwa-drop-down-menu--max-width-90': maxWidth === 90,
            'is-valid': isValid,
            'is-invalid': isValid === false,
            'is-hidden': isHidden,
        })}
    >
        <select
            className="xiwa-drop-down-menu__select"
            disabled={!!isDisabled}
            defaultValue={defaultValue}
            onChange={onChange}
        >
            {options && options.map(({ key, value }, optionIndex) => (
                <option
                    key={optionIndex}
                    className="xiwa-drop-down-menu__option"
                    value={value || undefined}
                >
                    {key}
                </option>
            ))}
        </select>
    </div>
);

XiwaDropDownMenu.propTypes = {

    /**
     * Class name.
     */
    className: PropTypes.string,

    /**
     * Size.
     */
    size: PropTypes.oneOf([90]),

    /**
     * Maximum width.
     */
    maxWidth: PropTypes.oneOf([60, 70, 80, 90]),

    /**
     * Menu validity state.
     */
    isValid: PropTypes.bool,

    /**
     * Is the dropdown menu disabled or not.
     */
    isDisabled: PropTypes.bool,
    isHidden: PropTypes.bool,

    /**
     * Options.
     */
    options: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]),
    })).isRequired,

    /**
     * Default value.
     */
    defaultValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    /**
     * Gets called when the user (re)selects an option.
     * @param {any} event The selected option value
     */
    onChange: PropTypes.func
};

XiwaDropDownMenu.defaultProps = {
    size: undefined,
    maxWidth: undefined,
    isValid: undefined,
    isDisabled: false,
    isHidden: false,
};

export default XiwaDropDownMenu;
