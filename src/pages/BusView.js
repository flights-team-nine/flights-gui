import React from "react";
import { Link } from "react-router-dom";
import { Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Sidebar from "react-sidebar";
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  heading: {
    //fontSize: theme.typography.pxToRem(15),
    //fontWeight: theme.typography.fontWeightRegular,
    color: 'white',
    backgroundColor: '#272838',
  },
}));

class BusView extends React.Component {
  //const classes = useStyles();

  constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen() {
      this.setState((prevState) => ({ sidebarOpen: !prevState.sidebarOpen }));
  }

  render() {
    return (
      <div class="busview">
        <header>
          <p><Sidebar
                      sidebar={<div><h4 style={{padding: '0 100px 0 0'}}>Navigation</h4><span style={{fontWeight: 'normal'}}><Link to="/BusBook">Bus Book</Link><br /><Link to="/TeamView">Team View</Link><br /><Link to="/BusView">Veteran View</Link><br /><Link to="/Documents">Documents</Link></span></div>}
                      open={this.state.sidebarOpen}
                      onSetOpen={this.onSetSidebarOpen}
                      styles={{ sidebar: { background: "black", color: "white" } }}
                  >
                      <MenuIcon onClick={() => this.onSetSidebarOpen(true)}>
                        
                      </MenuIcon>
                  </Sidebar>
            Bus View</p>
        </header>
              <Accordion>
        <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header" style={{backgroundColor: '#272838'}}
            >
          <div class="rect" style={{backgroundColor: "#2374AB"}}></div>
          <Typography style={{color: 'white', backgroundColor: '#272838', fontWeight: 'bold'}}>Bus 1</Typography>
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
            <p><Link to="/PersonInfo">Name</Link></p>
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
            <p><Link to="/PersonInfo">Name</Link></p>
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
            <p><Link to="/PersonInfo">Name</Link></p>
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
            <p><Link to="/PersonInfo">Name</Link></p>
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
            <p><Link to="/PersonInfo">Name</Link></p>
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
            <p><Link to="/PersonInfo">Name</Link></p>
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
          <Typography style={{color: 'white', backgroundColor: '#272838', fontWeight: 'bold'}}>Bus 2</Typography>
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
            <p><Link to="/PersonInfo">Name</Link></p>
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
            <p><Link to="/PersonInfo">Name</Link></p>
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
            <p><Link to="/PersonInfo">Name</Link></p>
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
            <p><Link to="/PersonInfo">Name</Link></p>
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
            <p><Link to="/PersonInfo">Name</Link></p>
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
            <p><Link to="/PersonInfo">Name</Link></p>
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
          <Typography style={{color: 'white', backgroundColor: '#272838', fontWeight: 'bold'}}>Bus 3</Typography>
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
            <p><Link to="/PersonInfo">Name</Link></p>
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
            <p><Link to="/PersonInfo">Name</Link></p>
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
            <p><Link to="/PersonInfo">Name</Link></p>
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
            <p><Link to="/PersonInfo">Name</Link></p>
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
            <p><Link to="/PersonInfo">Name</Link></p>
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
            <p><Link to="/PersonInfo">Name</Link></p>
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
}

export default BusView;