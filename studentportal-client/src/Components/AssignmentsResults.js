import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import LoadingPage from './LoadingPage';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';



const AssignmentsResults = () => {
    const { getAccessTokenSilently } = useAuth0();
    const [assignments, setAssignments] = useState(null);

    useEffect(() => {
        console.log("fetching data for Assignment Results...");
        const fetchData = async () => {
            const accessToken = await getAccessTokenSilently({
                audience: "https://dev-2sq5ot8u.us.auth0.com/api/v2/",
                scope: "read:users"
            });
            let response = null;
            try {
                response = await fetch(`https://localhost:7119/Material/GetAssignments`, {
                    headers: { Authorization: `Bearer ${accessToken}` }
                });
            } catch (e) {
                console.log("Unhandled error:", e.message);
                return;
            }
            console.log(response);
            if (response.status !== 200) {
                setAssignments({ errorMessage: `Code: ${response.status}` });
            } else {
                const data = await response.json();
                console.log(data);
                if (data.length === 0) {
                    setAssignments({ errorMessage: `There are no assigments so far` });
                    return;
                }
                setAssignments(data);
            }
        };
        fetchData();
    }, []);

    if (assignments === null) {
        return <LoadingPage message={`Fetching assignments list`} />
    }


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    return (
        <>
            <h1>Assignment Results</h1>
            <TableContainer sx={{ minWidth: 200, maxWidth: 1000, margin: "auto" }}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Assignment</StyledTableCell>
                            <StyledTableCell align="center">Result</StyledTableCell>
                            <StyledTableCell align="center">Submitted</StyledTableCell>
                            <StyledTableCell align="center">Deadline</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {assignments.map((assignment) => (
                            <StyledTableRow key={assignment.name}>
                                <StyledTableCell component="th" scope="row">
                                    {assignment.name}
                                </StyledTableCell>
                                <StyledTableCell align="center">
                                    {assignment.passState
                                        ? <CheckCircleOutlinedIcon style={{ color: 'green' }} />
                                        : <CancelOutlinedIcon style={{ color: 'red' }} />}
                                </StyledTableCell>
                                <StyledTableCell align="center">{(new Date(assignment.submitionDate)).toLocaleString()}</StyledTableCell>
                                <StyledTableCell align="center">{(new Date(assignment.deadline)).toLocaleString()}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default AssignmentsResults;