import React from 'react';

import SelectFont from './SelectFont';
// import { SketchPicker } from 'react-color';

export default class ObjectDetailSidebar extends React.Component {
  handleChangePositionLeft = (evt) => {
    this.props.onChangePositionLeft(evt.target.value);
  };

  handleChangePositionTop = (evt) => {
    this.props.onChangePositionTop(evt.target.value);
  };

  handleChangeSizeWidth = (evt) => {
    this.props.onChangeSizeWidth(evt.target.value);
  };
  handleChangeSizeHeight = (evt) => {
    this.props.onChangeSizeHeight(evt.target.value);
  };

  handleChangeFontFamily = (value) => {
    this.props.onChangeFontFamily(value);
  };

  handleChangeFontSize = (value) => {
    this.props.onChangeFontSize(value);
  };

  renderText() {
    return (
      <div>
        <SelectFont
          activeFonts={this.props.activeFonts}
          activeObject={this.props.activeObject}
          onChangeFontFamily={this.handleChangeFontFamily}
          onChangeFontSize={this.handleChangeFontSize}
        />
        {this.renderCommonParts()}
      </div>
    );
  }

  renderCommonParts() {
    const { left, top, width, height } = this.props.activeObject;
    return (
      <div>
        <div>Position
          <label>X
            <input
              id="position_x"
              type="number"
              value={left}
              onChange={this.handleChangePositionLeft}
            />
          </label>
          <label>Y
            <input
              id="position_y"
              type="number"
              value={top}
              onChange={this.handleChangePositionTop}
            />
          </label>
        </div>
        <div>Size
          <label>Width
            <input
              id="scale"
              type="number"
              value={width}
              onChange={this.handleChangeSizeWidth}
            />
          </label>
          <label>Height
            <input
              id="scale"
              type="number"
              value={height}
              onChange={this.handleChangeSizeHeight}
            />
          </label>
        </div>
      </div>
    );
  }

  render() {
    const { type } = this.props.activeObject;
    let sidebar = this.renderCommonParts();
    if (type === 'i-text') {
      sidebar = this.renderText();
    }
    return (
      <div id="ObjectDetailSideBar">
        {sidebar}
      </div>
    );
  }
}

ObjectDetailSidebar.propTypes = {
  onChangePositionLeft: React.PropTypes.func,
  onChangePositionTop: React.PropTypes.func,
  onChangeSizeWidth: React.PropTypes.func,
  onChangeSizeHeight: React.PropTypes.func,
  onChangeFontFamily: React.PropTypes.func,
  onChangeFontSize: React.PropTypes.func,
  activeObject: React.PropTypes.object,
  activeFonts: React.PropTypes.array,
};



