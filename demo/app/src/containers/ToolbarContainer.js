import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Toolbar from '../components/Toolbar';
import * as canvasActions from '../actions/fabricCanvas';


const ToolbarContainer = ({ url, canvasActions }) => (
  <Toolbar url={url} onAddObject={canvasActions.addObject}
           onToDataURL={canvasActions.toDataURL}
  />
);

ToolbarContainer.propTypes = {
};

const mapStateToProps = (state) => ({
  url: state.exportObject.url,
});

const mapDispatchToProps = (dispatch) => ({
  canvasActions: bindActionCreators(canvasActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolbarContainer);
