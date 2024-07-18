import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import resources from '../assets/resources.json';
import { Link } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

const ResourceTable = () => {
    
    const columns = [
        { field: 'Category', headerName: 'Category', width: 150 },
        { field: 'Name', headerName: 'Name', width: 200 },
        {
            field: 'Language',
            headerName: 'Language',
            width: 50,
            renderHeader: () => <LanguageIcon />,
        },
        {
          field: 'Link',
          headerName: 'Link',
          width: 150,
          renderCell: (params) => (
            <Link href={params.value} target="_blank" rel="noopener noreferrer">
              {params.value}
            </Link>
          )
        },
        { 
            field: 'Description', 
            headerName: 'Description', 
            flex: 1,
            renderCell: (params) => (
              <div style={{ whiteSpace: 'normal', wordWrap: 'break-word', lineHeight: '1.5', display: 'flex', alignItems: 'center', height: '100%' }}>
                {params.value}
              </div>
            ),
        }
    ];

    const rows = resources.map((resource, index) => ({
        id: index, // Ensure each row has a unique id
        ...resource
    }));

    return (
        <Box sx={{ height: 600, width: '100%' }}>
            <DataGrid
                autoHeight 
                rows={rows}
                columns={columns}
                pageSizeOptions={[10, 25, 50, 100]}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {showQuickFilter: true, csvOptions: { fileName: 'okrim_resources_export' } },
                }}
                initialState={{
                    pagination: { paginationModel: { pageSize: 10 } },
                    density: 'comfortable'
                }}
            />
        </Box>
    )
}

export default ResourceTable;