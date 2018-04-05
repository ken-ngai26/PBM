import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';

import Canvas from '../components/Canvas';
import Toolbar from './ToolbarContainer';
import ObjectDetailSidebar from './ObjectDetailSidebarContainer';

import * as objectHandlerActions from '../actions/objectHandler';
import * as fabricCanvasActions from '../actions/fabricCanvas';
import * as fontsActions from '../actions/fonts';

class App extends React.Component {
  componentDidMount() {
    const { fabricCanvas, objectHandlers, fontsActions } = this.props;
    fontsActions.initialize();
    fabricCanvas.on('object:selected', (evt) => objectHandlers.selected(evt.target));
    fabricCanvas.on('object:moving', (evt) => objectHandlers.moving(evt.target));
    fabricCanvas.on('object:modified', (evt) => objectHandlers.modified(evt.target));
    fabricCanvas.on('object:scaling', (evt) => objectHandlers.scaling(evt.target));
    fabricCanvas.on('selection:cleared', () => objectHandlers.cleared());
  }

  render() {
    const { fabricCanvasActions } = this.props;

    return (
      <div>
        <Toolbar />
        <div className="container">
          <div className="row">
            <div ref="canvasWrapper" className={classNames('ten', 'columns')}>
              <Canvas initialize={fabricCanvasActions.initialize} width={500} height={500} />
            </div>
            <div className={classNames('two', 'columns')} >
              <ObjectDetailSidebar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fabricCanvas: React.PropTypes.any,
  objectHandlers: React.PropTypes.any,
  fontsActions: React.PropTypes.any,
};

const mapStateToProps = state => ({
  fabricCanvas: state.fabricCanvas,
});

const mapDispatchToProps = (dispatch) => ({
  objectHandlers: bindActionCreators(objectHandlerActions, dispatch),
  fabricCanvasActions: bindActionCreators(fabricCanvasActions, dispatch),
  fontsActions: bindActionCreators(fontsActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
