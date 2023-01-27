

import './Styles.js';
import Details from './components/Details/Details';
import { Grid } from '@mui/material';
import useStyles from './Styles'
import Main from './components/Main/Main.jsx';
function App() {
  const classes = useStyles();
  return (
    <div className={classes.grid}>
      <Grid container spacing={4} alignItems="center" justifyContent="center" style={{ height: "100vh" }}>
        <Grid item xs={12} sm={4}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Details title="Expence" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
