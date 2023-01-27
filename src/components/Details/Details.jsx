import React from 'react'
import { Chart, ArcElement } from 'chart.js'
import { Card, CardHeader, CardContent, Typography } from '@mui/material'
import { Doughnut } from 'react-chartjs-2'
import useTransactions from '../../useTransactions'
import useStyles from './Styles'
const Details = ({ title }) => {
    Chart.register(ArcElement);
    const classes = useStyles();
    const { total, chartData } = useTransactions(title);
    return (
        <Card className={title === "Income" ? classes.income : classes.expence}>
            <CardHeader title={title} />
            <CardContent>
                <Typography variant='h5'>$ {total}</Typography>
                <Doughnut data={chartData} />
            </CardContent>
        </Card>
    )
}

export default Details
