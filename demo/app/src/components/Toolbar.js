import React from 'react';
import { fabric } from 'fabric';

export default class Toolbar extends React.Component {
  handleExportClick = () => {
    this.props.onToDataURL();
  };

  handleSquareClick = () => {
    const rect = new fabric.Rect({
      top: 10,
      left: 10,
      width: 50,
      height: 50,
      fill: 'red',
    });
    this.props.onAddObject(rect);
  };

  handleTextClick = () => {
    const iText = new fabric.IText('');
    this.props.onAddObject(iText);
    iText.enterEditing();
  };

  handleImageFileChange = (e) => {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onload = (event) => {
      const image = event.target.result;
      fabric.Image.fromURL(image, (img) => {
        this.props.onAddObject(img);
      });
    };

    reader.readAsDataURL(file);
  };

  render() {
    const { url } = this.props;
    return (
      <div id="toolBar">
        <a className="button" href={url} download="image.jpg" onClick={this.handleExportClick}>Download</a>
        <button onClick={this.handleSquareClick}>Square</button>
        <button onClick={this.handleTextClick}>Text</button>
        <label htmlFor="imageFile" className="button">
          Upload Image
          <input
            id="imageFile"
            type="file"
            onChange={this.handleImageFileChange}
            className="display-none"
          />
        </label>
      </div>
    );
  }
}

Toolbar.propTypes = {
  onToDataURL: React.PropTypes.func,
  onAddObject: React.PropTypes.func,
  url: React.PropTypes.string,
};
