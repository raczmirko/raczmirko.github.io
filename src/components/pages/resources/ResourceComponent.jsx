// ResourceTable.js
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import MobileResources from './MobileResources';
import ResourceTable from './ResourceTable';

const ResourceComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return isMobile ? <MobileResources /> : <ResourceTable />;
};

export default ResourceComponent;
