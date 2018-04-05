import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ObjectDetailSidebar from '../components/ObjectDetailSidebar';
import * as objectActions from '../actions/fabricObject';

const ObjectDetailSidebarContainer = ({ activeFonts, activeObject, objectActions }) => (
  <ObjectDetailSidebar
    activeObject={activeObject}
    activeFonts={activeFonts}
    onChangePositionLeft={objectActions.setLeft}
    onChangePositionTop={objectActions.setTop}
    onChangeSizeWidth={objectActions.setWidth}
    onChangeSizeHeight={objectActions.setHeight}
    onChangeFontFamily={objectActions.setFontFamily}
    onChangeFontSize={objectActions.setFontSize}
  />
);

const mapStateToProps = (state) => ({
  activeObject: state.activeObject,
  activeFonts: state.fonts.active,
});

const mapDispatchToProps = (dispatch) => ({
  objectActions: bindActionCreators(objectActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ObjectDetailSidebarContainer);
