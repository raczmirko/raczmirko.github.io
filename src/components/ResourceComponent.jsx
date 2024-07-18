// ResourceTable.js
import React from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ResourceTable from './ResourceTable';
import MobileResources from './MobileResources';

const ResourceComponent = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return isMobile ? <MobileResources /> : <ResourceTable />;
};

export default ResourceComponent;
