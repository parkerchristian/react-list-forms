import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';

export default function Colors({ colors }) {
  const colorList = colors.map(color => {
    return (
      <li key={color.name}>
        <Color name={color.name} rgb={color.rgb} />
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
