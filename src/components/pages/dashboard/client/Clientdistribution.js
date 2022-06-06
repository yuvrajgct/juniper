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
    InputLabel,
    TableHead,
    TableRow,
    MenuItem,
    FormHelperText,
    Typography,
    FormControl as MuiFormControl,
    Select,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { spacing } from "@mui/system";

//import DashboardLayout from "../../layouts/Dashboard";

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);
const FormControlSpacing = styled(MuiFormControl)(spacing);

const FormControl = styled(FormControlSpacing)`
  min-width: 18px;
`;
const CustomTableCell = styled(TableCell)`
  &.${tableCellClasses.head} {
    background: ${(props) => props.theme.palette.common.black};
    color: ${(props) => props.theme.palette.common.red};
  }
  &.${tableCellClasses.body} {
    font-size: 10px;
  }
`;

const CustomTableRow = styled(TableRow)`
  &:nth-of-type(odd) {
    background-color: rgba(0, 0, 0, 0.025);
  }
`;

// Data
let id = 0;
function createData(name, invoices) {
    id += 1;
    return { id, name, invoices };
}

const rows = [
    createData("New Delhi", 12),
    createData("Mumbai", 23),
    createData("Ahemdabad", 34),
    createData("Lucknow", 45),
    createData("Chennai", 33),
    createData("Banglore", 33),
    createData("Hyderabad", 33),
];

const handleChange = (event) => {
    setAge(event.target.value);
};

var selectstyle = {
    height: '2px',
}

const PendingInvoices = ({ theme }) => {
    return (
        <Card mb={6}>
            <CardContent pb={1}>
                <Typography variant="h6" gutterBottom>
                    <Grid container spacing={6}>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl>
                            Client Distribution
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} lg={6} xl align="right" style={selectstyle}>
                            <FormControl >
                                <InputLabel id="demo-simple-select-helper-label" >Table</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={10}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Typography>
                {/* <Typography variant="body2" gutterBottom>
                    A simple example with no frills.
                </Typography> */}
            </CardContent>
            <Paper>
                <Table>
                    {/* <TableHead>
                        <TableRow>
                            <TableCell>Client Name</TableCell>
                            <TableCell align="right">No. Of Invoice</TableCell>
                        </TableRow>
                    </TableHead> */}
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.invoices}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Card>


    );
};
export default withTheme(PendingInvoices);
