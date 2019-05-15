import React from 'react';
import PropTypes from 'prop-types';

const hexFromColor = color => {
  return `${color.toString(16).padStart(2, 0)}`.toUpperCase();
};

const hexFromRGB = (rgb) => {
  return `#${hexFromColor(rgb.red)}${hexFromColor(rgb.green)}${hexFromColor(rgb.blue)}`;
};

export default function Color({ name, rgb }) {
  const hex = hexFromRGB(rgb);

  const styling = {
    display: 'inline-block',
    backgroundColor: hex,
    width: '0.8em',
    height: '0.8em'
  };

  return (
    <dl>
      <dt>NAME</dt>
      <dd>{name || hex} <div style={styling}></div></dd>

      <dt>HEX</dt>
      <dd>{hex}</dd>

      <dt>RGB</dt>
      <dd>
        <p>R - {rgb.red}</p>
        <p>G - {rgb.green}</p>
        <p>B - {rgb.blue}</p>
      </dd>
    </dl>
  );
}

Color.propTypes = {
  name: PropTypes.string,
  rgb: PropTypes.shape({
    red: PropTypes.number.isRequired,
    green: PropTypes.number.isRequired,
    blue: PropTypes.number.isRequired,

  })
};
