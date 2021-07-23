import React from 'react';
import PropTypes from 'prop-types';
import './XiwaDisclosureList.scss';

const getRandomInteger = (maximum) =>
  Math.floor(Math.random() * Math.floor(maximum));

const getIdFromItem = (item) => {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')
  const preSlug = `${getRandomInteger(Date.now())}${item}`;

  return preSlug.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(p, c => b.charAt(a.indexOf(c)))
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

export const XiwaDisclosureListItem = ({
  heading,
  children,
}) => {
  const id = getIdFromItem(heading);

  const handleClick = (event) => {
    window.location.hash = `#${id}`;
    event.preventDefault();
  };

  return (
    <>
      <dt className="xiwa-disclosure-list__term">
        <a
          className="xiwa-disclosure-list__anchor"
          href={`#${id}`}
          onClick={handleClick}
        >
          {heading}
        </a>
      </dt>
      <dd
        id={id}
        className="xiwa-disclosure-list__description"
      >
        {children}
      </dd>
    </>
  );
};

XiwaDisclosureListItem.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired
};

export default XiwaDisclosureListItem;
