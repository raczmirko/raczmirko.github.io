import { Box, Chip, Divider, List, ListItem, Typography, ListItemIcon } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { isValidElement } from "react";
import { paragraphSize, subTitleSize } from "../assets/styles";

const CustomBlockWithTitle = ({ title, body }) => {
    if (body === null || body.length === 0 || body === undefined) return;
    return (
        <Box sx={{ mb: 2 }}>
            <Divider sx={{ mb: 3 }}>
                <Chip label={title} size="string" variant='outlined' sx={{ fontSize: '20px' }}/>
            </Divider>
            {Array.isArray(body) ? (
                <List>
                    {body.map((elt, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <ChevronRightIcon />
                            </ListItemIcon>
                            <Typography sx={{ fontSize: paragraphSize }}>{elt}</Typography>
                        </ListItem>
                    ))}
                </List>
                ) : typeof body === 'string' ? (
                <Typography sx={{ fontSize: paragraphSize }}>{body}</Typography>
                ) : (
                isValidElement(body) && body
            )}
        </Box>
    )
}

export default CustomBlockWithTitle;