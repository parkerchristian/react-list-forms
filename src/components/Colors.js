import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

export default function Colors({ colors }) {
  const colorList = colors.map((color, index) => {
    return (
      <li key={`${index}-${color}`}>
        <Color name={color.name} hex={color.hex} />
      </li>
    );
  });

  return (
    <ul>
      {colorList}
    </ul>
  );
}

Colors.propTypes = {
  colors: PropTypes.array.isRequired
};
