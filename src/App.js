import "./App.css";
import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import "fontsource-roboto";

import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 34,
      marginBottom: 15,
    },
  },
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #333, #999)",
    border: 0,
    borderRadius: 15,
    color: "white",
    padding: "0 30px",
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Sytled Button</Button>;
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<DeleteIcon />}
            checkedIcon={<SaveIcon />}
            onChange={(e) => setChecked(e.target.checked)}
            inputProps={{
              "aria-label": "secondary checkbox",
            }}
          />
        }
        label='Testing Checkbox'
      />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='xs'>
        <div className='App'>
          <header className='App-header'>
            <AppBar>
              <ToolBar>
                <IconButton>
                  <MenuIcon />
                  <Typography variant="h6">
                  MUI Theming
                  </Typography>
                  <Button>Login</Button>
                </IconButton>
              </ToolBar>
            </AppBar>
            <Typography variant='h2' component='div'>
              Typography
            </Typography>
            <Typography variant='subtitle'>Material UI Tutorial</Typography>
            <br />
            <ButtonStyled /> <br />
            {/* <TextField
        variant='filled'
        color='primary'
        type='email'
        label='you@you.com'
        
      /> */}
            <Grid container spacing={4} justify="center">
              <Grid item xs={3} sm={6}>
                <Paper
                  style={{
                    height: 75,
                    width: '100%',
                  }}
                />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper
                  style={{
                    height: 75,
                    width: '100%',
                  }}
                />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper
                  style={{
                    height: 75,
                    width: '100%',
                  }}
                />
              </Grid>
            </Grid>
            <CheckboxExample />
            <ButtonGroup>
              <Button
                startIcon={<SaveIcon />}
                variant='contained'
                color='primary'
              >
                Save
              </Button>
              <Button
                startIcon={<DeleteIcon />}
                variant='contained'
                color='primary'
              >
                Discard
              </Button>
            </ButtonGroup>
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
