import React from 'react';

import { createDevTools } from 'redux-devtools';
import FilterableLogMonitor from 'redux-devtools-filterable-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-0"
    changePositionKey="ctrl-9"
  >
    <FilterableLogMonitor />
  </DockMonitor>
);
