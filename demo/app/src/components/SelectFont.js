import React from 'react';

import { webFontFamilies } from '../constants/webfonts';

export default class SelectFont extends React.Component {
  handleChangeFontFamily = (evt) => {
    this.props.onChangeFontFamily(evt.target.value);
  };

  handleChangeFontSize = (evt) => {
    this.props.onChangeFontSize(evt.target.value);
  };

  createOptions = (fonts) => (
    fonts.map((font, i) => (
      <optgroup key={i} className={webFontFamilies[font].className}>
        <option value={`'${font}'`}>
          {webFontFamilies[font].name}
        </option>
      </optgroup>
    ))
  );

  render() {
    const fonts = this.props.activeFonts;
    const { fontFamily, fontSize } = this.props.activeObject;

    return (
      <div>Font
        <label>Typeface
          <select value={fontFamily} onChange={this.handleChangeFontFamily}>
            {this.createOptions(fonts)}
          </select>
        </label>
        <label>Size
          <input
            type="number"
            value={fontSize}
            onChange={this.handleChangeFontSize}
          />
        </label>
      </div>
    );
  }
}

SelectFont.propTypes = {
  activeObject: React.PropTypes.object,
  activeFonts: React.PropTypes.array,
  onChangeFontFamily: React.PropTypes.func,
  onChangeFontSize: React.PropTypes.func,
};


