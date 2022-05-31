import React from "react";
import styled from "@emotion/styled";
import NextLink from "next/link";
import { Helmet } from "react-helmet-async";
import { withTheme } from "@emotion/react";
import {
    Collapse,
    Grid,
    Link,
    List,
    ListItemIcon,
    ListSubheader,
    Avatar as MuiAvatar,
    Breadcrumbs as MuiBreadcrumbs,
    Card as MuiCard,
    CardContent as MuiCardContent,
    Divider as MuiDivider,
    ListItem,
    ListItemButton as MuiListItemButton,
    ListItemText as MuiListItemText,
    Typography,
} from "@mui/material";
import {
    BeachAccess as BeachAccessIcon,
    Drafts as DraftsIcon,
    ExpandLess as ExpandLessIcon,
    ExpandMore as ExpandMoreIcon,
    WbIncandescent as WbIncandescentIcon,
    Work as WorkIcon,
    Send as SendIcon,
    StarBorder as StarBorderIcon,
} from "@mui/icons-material";
import { spacing } from "@mui/system";



const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const ListItemButton = styled(MuiListItemButton)(spacing);

const Avatar = styled(MuiAvatar)(spacing);

const ListItemText = styled(MuiListItemText)(spacing);
var cardStyle = {
    height: '300px',
}
const Insight = ({ theme }) => {
    return (
        <Card mb={6} style={cardStyle}>
            <CardContent pb={0}>
                <Typography variant="h6" gutterBottom>
                    Insights
                </Typography>
            </CardContent>

            <List>
                <ListItem>
                    <Avatar mr={3}>
                        <WbIncandescentIcon />
                    </Avatar>
                    {/* <ListItemText primary="Photos" secondary="Jan 9, 2014" /> */}
                    <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                </ListItem>
                <ListItem>
                    <Avatar mr={3}>
                        <WbIncandescentIcon />
                    </Avatar>
                    <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                </ListItem>
                <ListItem>
                    <Avatar mr={3}>
                        <WbIncandescentIcon />
                    </Avatar>
                    <ListItemText primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                </ListItem>
            </List>
        </Card>
    );
}
export default withTheme(Insight);
