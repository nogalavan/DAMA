import { Card, Typography, Stack, Table, TableContainer, TableHead, TableCell, TableRow, TableBody, useTheme } from "@mui/material";

interface PurchaesItem {
    name: string;
    date: string;
    amount: number;
}

export const purchaesItems = [
    {
        name: 'deveops',
        date: new Date().toLocaleDateString(),
        amount: -30
    },
    {
        name: 'deveops',
        date: new Date().toLocaleDateString(),
        amount: 30
    },
    {
        name: 'deveops',
        date: new Date().toLocaleDateString(),
        amount: 30
    },
    {
        name: 'deveops',
        date: new Date().toLocaleDateString(),
        amount: 30
    },
    {
        name: 'deveops',
        date: new Date().toLocaleDateString(),
        amount: -30
    },
    {
        name: 'deveops',
        date: new Date().toLocaleDateString(),
        amount: 30
    },
    {
        name: 'deveops',
        date: new Date().toLocaleDateString(),
        amount: 30
    },
    {
        name: 'deveops',
        date: new Date().toLocaleDateString(),
        amount: 30
    },
    {
        name: 'deveops',
        date: new Date().toLocaleDateString(),
        amount: -30
    },
    {
        name: 'deveops',
        date: new Date().toLocaleDateString(),
        amount: -30
    },
    {
        name: 'deveops',
        date: new Date().toLocaleDateString(),
        amount: 30
    },
    {
        name: 'deveops',
        date: new Date().toLocaleDateString(),
        amount: 30
    },
];

const PurchasesHistory = () => { 
    const theme = useTheme();

    return (
    <Stack width='100%' justifyContent='center' alignItems='center'>
        <Card sx={{height: '350px', width: '70%'}}>
            <TableContainer sx={{maxHeight: '350px'}} >
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{backgroundColor: theme.palette.info.main}}>שם מוצר</TableCell>
                            <TableCell sx={{backgroundColor: theme.palette.info.main}}>תאריך רכישה / קנייה</TableCell>
                            <TableCell sx={{backgroundColor: theme.palette.info.main}}>כמות</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {purchaesItems.map(({name, amount, date}) => 
                        <TableRow>
                            <TableCell>{name}</TableCell>
                            <TableCell>{date}</TableCell>
                            <TableCell sx={{direction: 'rtl', color: amount > 0 ? 'green' : 'red'}}>{amount}</TableCell>
                        </TableRow>)}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <Stack>
                <Stack direction='row' sx={{m: '10px 0', pr: '15px'}}>
                    <Typography variant='subtitle1' sx={{ fontWeight: 'bold', width: '215px'}}>שם מוצר</Typography>
                    <Typography variant='subtitle1' sx={{ fontWeight: 'bold', width: '215px' }}>תאריך רכישה / קנייה</Typography>
                    <Typography variant='subtitle1' sx={{ fontWeight: 'bold', width: '200px' }}>כמות</Typography>
                </Stack>
                <Stack sx={{maxHeight: '300px', overflow: 'auto'}}>
                    {purchaesItems.map(({name, amount, date}) => 
                    <Stack direction='row' justifyContent='space-around'>
                        <Typography variant='subtitle1'>{name}</Typography>
                        <Typography variant='subtitle1'>{date}</Typography>
                        <Typography variant='subtitle1'>{amount}</Typography>
                    </Stack>)}
                </Stack>
            </Stack> */}
        </Card>
    </Stack>)
}

export default PurchasesHistory;