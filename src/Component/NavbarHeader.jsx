import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function NavbarHeader({setView , view , setRenderAs , setInitialState ,user , setUser}) {
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    if(newValue === 0 && user !== null){
        setUser(null)
    }
    setView(newValue);
    console.log(view)
    setInitialState({email : "" , password : "" , name : "" })
    setRenderAs("add")
  };


  return (
    <Paper className={classes.root}>
      <Tabs
        value={view}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label={user === null ? "Login / Register" : "Logout" } value={0} />
        <Tab label="Add Product" value={1}  />
        <Tab label="List Product" value={2} />
      </Tabs>
    </Paper>
  );
}