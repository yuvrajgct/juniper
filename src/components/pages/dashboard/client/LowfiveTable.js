import React from "react";
import styled from "@emotion/styled";
import NextLink from "next/link";
import { Helmet } from "react-helmet-async";
import { withTheme } from "@emotion/react";

import {
    Grid,
    Link,
    Breadcrumbs as MuiBreadcrumbs,
    Card as MuiCard,
    CardContent as MuiCardContent,
    Divider as MuiDivider,
    Paper as MuiPaper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { spacing } from "@mui/system";
import { getLowestclient } from "../../../../API/Clientapi";

//import DashboardLayout from "../../layouts/Dashboard";

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

const CustomTableCell = styled(TableCell)`
  &.${tableCellClasses.head} {
    background: ${(props) => props.theme.palette.common.black};
    color: ${(props) => props.theme.palette.common.red};
  }
  &.${tableCellClasses.body} {
    font-size: 14px;
  }
`;

const CustomTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.025);
  }
`;

// Data
let id = 0;
function createData(name, amount) {
    id += 1;
    return { id, name, amount };
}




const rows = [
    createData("Blue Scouts", '$1200'),
    createData("Blue Link", '$800'),
    createData("Red", '$600'),
    createData("One", '$550'),
    createData("BLueone", '$500',),
];
var cardStyle = {
    height: '200px',
}
const SimpleTable = ({ theme }) => {

    React.useEffect(() => {
        getAllLowestclient();
    }, []);

    const getAllLowestclient = async () => {
        const response = await getLowestclient({ org_id: 1 });
        if (response.status === 200) {
            if (response.data && response.data != undefined) {
                console.log("----", response.data);
            }
        } else {
        }
    };

    return (
        <Card mb={6} style={cardStyle}>
            <CardContent pb={1}>
                <Typography variant="h6" gutterBottom>
                    <Grid container spacing={6}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl>
                            Lowest 5 Paying Clients
                        </Grid>
                    </Grid>
                </Typography>
            </CardContent>
            <Paper>
                <Table height={120} columnWidth={20}>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Card>


    );
};
export default withTheme(SimpleTable);
