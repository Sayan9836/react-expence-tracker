import React, { useState, useContext} from 'react'
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { ExpenseTrackerContext } from '../../../context/context'
import useStyles from './Styles'
import { v4 as uuidv4 } from 'uuid';
import { incomeCategories, expenseCategories } from '../../../constants/categories';
import FormatDate from '../../../utils/FormatDate';

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: FormatDate(new Date()),
}
const Form = () => {

    const classes = useStyles();
    const [formData, setFormData] = useState(initialState);
    const { addTransaction } = useContext(ExpenseTrackerContext);
   

    const createTransactions = () => {
        const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() };
        addTransaction(transaction);
        setFormData(initialState);
    }

    const SelectedCategories = formData.type === 'Income' ? incomeCategories : expenseCategories;

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align='center' variant='subtitle2' gutterBottom>
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth variant='standard'>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expence">Expences</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth variant='standard'>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                        {
                            SelectedCategories.map((c) => <MenuItem key={c.type} value={c.type}>{c.type}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6} gutterBottom>
                <TextField type="number" label="Amount" value={formData.amount} fullWidth variant='standard' onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
            </Grid>
            <Grid item xs={6} gutterBottom>
                <TextField type="date" label="Date" value={FormatDate(formData.date)} fullWidth variant='standard' onChange={(e) => setFormData({ ...formData, date: FormatDate(e.target.value) })} />
            </Grid>
            <Button className={classes.button} variant="outlined" color='primary' fullWidth onClick={createTransactions}>Create</Button>
        </Grid>
    )
}

export default Form
