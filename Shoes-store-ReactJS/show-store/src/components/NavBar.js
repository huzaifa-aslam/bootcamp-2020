import React from "react";
import {Container,Row,Col} from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  color:{
    color:"white"
  }
});

function NavBar() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

      <Container fluid>
        <Row>
          <Col>
          <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        className="classes.color"
        centered
      >
        <Link to="/products"><Tab label="Products" /></Link>
        <Link to="/productsitem/:id"><Tab label="Products Item" /></Link>
       <Tab label="Products" />
      </Tabs>
    </Paper>
          </Col>
        </Row>
      </Container>

  );
}

export default NavBar;
