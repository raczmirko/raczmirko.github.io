import { Box, Chip, Divider, List, ListItem, Typography, ListItemIcon } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { isValidElement } from "react";

const CustomBlockWithTitle = ({ title, body }) => {
    return (
        <Box sx={{ mb: 1 }}>
            <Divider sx={{ mb: 1 }}>
                <Chip label={title} size="small" variant='outlined' />
            </Divider>
            {Array.isArray(body) ? (
                <List>
                    {body.map((elt, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <ChevronRightIcon />
                            </ListItemIcon>
                            <Typography variant="body2">{elt}</Typography>
                        </ListItem>
                    ))}
                </List>
                ) : typeof body === 'string' ? (
                <Typography variant="body2">{body}</Typography>
                ) : (
                isValidElement(body) && body
            )}
        </Box>
    )
}

export default CustomBlockWithTitle;