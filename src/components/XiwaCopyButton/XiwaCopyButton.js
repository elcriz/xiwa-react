import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import XiwaButton from '../XiwaButton/XiwaButton';

export const XiwaCopyButton = ({
  id,
  className,
  label,
  content,
  onDone,
}) => {
  const [isCopied, setIsCopied] = React.useState(false);

  React.useEffect(() => {
    if (isCopied) {
      onDone();
      setTimeout(() => {
        setIsCopied(false);
      }, 2500);
    }
  }, [isCopied]);

  return (
    <div
      id={id}
      className={classnames(className, 'xiwa-copy-button')}
    >
      <CopyToClipboard
        className="xiwa-copy-button__container"
        text={content}
        onCopy={() => {
          setIsCopied(true);
        }}
      >
        <XiwaButton
          className="xiwa-copy-button__xiwa-button"
          size="80"
          leftIcon={isCopied && (
            <FontAwesomeIcon
              className="xiwa-button__icon"
              icon={faCheck}
            />
          )}
          isDisabled={isCopied}
          isOutlined
          isSubordinate
        >
          {isCopied && 'Gekopieerd'}
          {!isCopied && `${label ? `${label} kopiëren` : 'Kopiëren'}`}
        </XiwaButton>
      </CopyToClipboard>
    </div>
  );
};

XiwaCopyButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  content: PropTypes.string.isRequired,
  onDone: PropTypes.func,
};

export default XiwaCopyButton;
