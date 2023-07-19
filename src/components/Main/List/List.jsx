import React, { useContext } from 'react'
import { List as MUIList, ListItem, ListItemText, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton, Slide, useTheme } from '@mui/material'
import { Delete, MoneyOff } from '@material-ui/icons'
import { ExpenseTrackerContext } from '../../../context/context'
import { green, red } from '@mui/material/colors';
import useStyles from './styles';

const List = () => {
    const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);
    console.log(transactions);
    const classes = useStyles();
    return (
        <MUIList dense={false} className={classes.list} >
            {
                transactions.map((transaction) => (
                    <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: ` ${transaction.type === 'Income' ? green[500] : red[300]}`}}>
                                    <MoneyOff />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={transaction.category} secondary={`$${transaction.amount}__${transaction.date}`}></ListItemText>
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label='delete' onClick={() => deleteTransaction(transaction.id)}>
                                    <Delete />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Slide>
                ))
            }
        </MUIList>
    );
};
export default List;
