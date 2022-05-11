import React from 'react'
import {AppBar,Container,Toolbar,Typography,MenuItem,Select,createTheme,ThemeProvider,darkTheme} from "@material-ui/core"
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
const useStyles = makeStyles(() => ({
  Title: {
   flex:1,
   color:"gold",
   cursor:"pointer",
   fontFamily:"Montserrat",
   fontWeight:"bold",
  },
}));
const Header = () => {
  const classes = useStyles();
  const history=useHistory();

  const {currency,setCurrency}=CryptoState();
  console.log(currency);
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar color='transparent' position='static'>
      <Container>
      <Toolbar>
        <Typography onClick={()=>{ history.push("/") }
        } className={classes.Title}>
          Crypto Hunter
        </Typography>
        <Select 
          variant='outlined' style={
            {
              width:100,
              height:40,
              marginRight:15,
            }
          }

          value={currency}
          onChange={(e)=> setCurrency(e.target.value)}
        >
          <MenuItem value={"USD"}>
          USD
          </MenuItem>
          <MenuItem value={"INR"}>
          INR
          </MenuItem>
        </Select>
      </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
    )
    
 }

export default Header