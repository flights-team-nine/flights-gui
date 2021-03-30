import React from "react";
import { Link } from "react-router-dom";
import { Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  heading: {
    //fontSize: theme.typography.pxToRem(15),
    //fontWeight: theme.typography.fontWeightRegular,
    color: 'white',
    backgroundColor: '#272838',
  },
}));

function BusView() {
  const classes = useStyles();

  return (
    <div class="busview">
      <header>
        <p>Bus View</p>
      </header>
            <Accordion>
      <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header" style={{backgroundColor: '#272838'}}
          >
        <div class="rect" style={{backgroundColor: "#2374AB"}}></div>
        <Typography className={classes.heading} style={{fontWeight: "bold"}}>Bus 1</Typography>
      </AccordionSummary>
      <AccordionDetails style={{backgroundColor: "#272838"}}>
              <Typography style={{fontWeight: "bold"}}>
      <div class="busrow">
        <p>Bus</p>
      </div>

      <div class="row">
        <div class="columna">
          <p>Team</p>
        </div>
        <div class="columnb">
          <p>Name</p>
        </div>
        <div class="columnc">
          <p> EDIT </p>
        </div>
      </div>
      <div class="row">
        <div class="columna_black">
          <p>Team</p>
        </div>
        <div class="columnb_Grey">
          <p>Name</p>
        </div>
        <div class="columnc_darkblue">
          <p> EDIT </p>
        </div>
      </div>
      <div class="row">
        <div class="columna">
          <p>Team</p>
        </div>
        <div class="columnb">
          <p>Name</p>
        </div>
        <div class="columnc">
          <p> EDIT </p>
        </div>
      </div>
      <div class="row">
        <div class="columna_black">
          <p>Team</p>
        </div>
        <div class="columnb_Grey">
          <p>Name</p>
        </div>
        <div class="columnc_darkblue">
          <p> EDIT </p>
        </div>
      </div>
      <div class="row">
        <div class="columna">
          <p>Team</p>
        </div>
        <div class="columnb">
          <p>Name</p>
        </div>
        <div class="columnc">
          <p> EDIT </p>
        </div>
      </div>
      <div class="row">
        <div class="columna_black">
          <p>Team</p>
        </div>
        <div class="columnb_Grey">
          <p>Name</p>
        </div>
        <div class="columnc_darkblue">
          <p> EDIT </p>
        </div>
      </div>
       </Typography>
          </AccordionDetails>
      </Accordion>      <Accordion>
      <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header" style={{backgroundColor: '#272838'}}
          >
        <div class="rect" style={{backgroundColor: "#2374AB"}}></div>
        <Typography className={classes.heading} style={{fontWeight: "bold"}}>Bus 2</Typography>
      </AccordionSummary>
      <AccordionDetails style={{backgroundColor: "#272838"}}>
              <Typography style={{fontWeight: "bold"}}>
      <div class="busrow">
        <p>Bus</p>
      </div>

      <div class="row">
        <div class="columna">
          <p>Team</p>
        </div>
        <div class="columnb">
          <p>Name</p>
        </div>
        <div class="columnc">
          <p> EDIT </p>
        </div>
      </div>
      <div class="row">
        <div class="columna_black">
          <p>Team</p>
        </div>
        <div class="columnb_Grey">
          <p>Name</p>
        </div>
        <div class="columnc_darkblue">
          <p> EDIT </p>
        </div>
      </div>
      <div class="row">
        <div class="columna">
          <p>Team</p>
        </div>
        <div class="columnb">
          <p>Name</p>
        </div>
        <div class="columnc">
          <p> EDIT </p>
        </div>
      </div>
      <div class="row">
        <div class="columna_black">
          <p>Team</p>
        </div>
        <div class="columnb_Grey">
          <p>Name</p>
        </div>
        <div class="columnc_darkblue">
          <p> EDIT </p>
        </div>
      </div>
      <div class="row">
        <div class="columna">
          <p>Team</p>
        </div>
        <div class="columnb">
          <p>Name</p>
        </div>
        <div class="columnc">
          <p> EDIT </p>
        </div>
      </div>
      <div class="row">
        <div class="columna_black">
          <p>Team</p>
        </div>
        <div class="columnb_Grey">
          <p>Name</p>
        </div>
        <div class="columnc_darkblue">
          <p> EDIT </p>
        </div>
      </div>
       </Typography>
          </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header" style={{backgroundColor: '#272838'}}
          >
        <div class="rect" style={{backgroundColor: "#2374AB"}}></div>
        <Typography className={classes.heading} style={{fontWeight: "bold"}}>Bus 3</Typography>
      </AccordionSummary>
      <AccordionDetails style={{backgroundColor: "#272838"}}>
              <Typography style={{fontWeight: "bold"}}>
      <div class="busrow">
        <p>Bus</p>
      </div>

      <div class="row">
        <div class="columna">
          <p>Team</p>
        </div>
        <div class="columnb">
          <p>Name</p>
        </div>
        <div class="columnc">
          <p> EDIT </p>
        </div>
      </div>
      <div class="row">
        <div class="columna_black">
          <p>Team</p>
        </div>
        <div class="columnb_Grey">
          <p>Name</p>
        </div>
        <div class="columnc_darkblue">
          <p> EDIT </p>
        </div>
      </div>
      <div class="row">
        <div class="columna">
          <p>Team</p>
        </div>
        <div class="columnb">
          <p>Name</p>
        </div>
        <div class="columnc">
          <p> EDIT </p>
        </div>
      </div>
      <div class="row">
        <div class="columna_black">
          <p>Team</p>
        </div>
        <div class="columnb_Grey">
          <p>Name</p>
        </div>
        <div class="columnc_darkblue">
          <p> EDIT </p>
        </div>
      </div>
      <div class="row">
        <div class="columna">
          <p>Team</p>
        </div>
        <div class="columnb">
          <p>Name</p>
        </div>
        <div class="columnc">
          <p> EDIT </p>
        </div>
      </div>
      <div class="row">
        <div class="columna_black">
          <p>Team</p>
        </div>
        <div class="columnb_Grey">
          <p>Name</p>
        </div>
        <div class="columnc_darkblue">
          <p> EDIT </p>
        </div>
      </div>
       </Typography>
          </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default BusView;