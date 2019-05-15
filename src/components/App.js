import React, { PureComponent } from 'react';
import Colors from './Colors';

export default class App extends PureComponent {
  render() {
    const colors = [
      { name: 'red', rgb: { red: 255, green: 0, blue: 0 } },
      { name: 'green', rgb: { red: 0, green: 255, blue: 0 } },
      { name: 'blue', rgb: { red: 0, green: 0, blue: 255 } }
    ];
    return (
      <Colors colors={colors}/>
    );
  }
}
