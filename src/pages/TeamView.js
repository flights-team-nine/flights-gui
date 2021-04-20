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

class TeamView extends React.Component {
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
      <div class="teamview">
        <header>
          <p><Sidebar
                    sidebar={<div><h4 style={{padding: '0 100px 0 0'}}>Navigation</h4><span style={{fontWeight: 'normal'}}><a href="BusBook.js">Bus Book</a><br /><a href="TeamView.js">Team View</a><br /><a href="BusView.js">Veteran View</a><br /><a href="Documents.js">Documents</a></span></div>}
                      open={this.state.sidebarOpen}
                      onSetOpen={this.onSetSidebarOpen}
                      styles={{ sidebar: { background: "black", color: "white" } }}
                  >
                      <MenuIcon onClick={() => this.onSetSidebarOpen(true)}>
                        
                      </MenuIcon>
                  </Sidebar>
            Team View</p>
        </header>
        <Accordion>
        <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header" style={{backgroundColor: '#272838'}}
            >
          <div class="rect" style={{backgroundColor: "#2374AB"}}></div>
          <Typography style={{color: 'white', backgroundColor: '#272838', fontWeight: 'bold'}}>Blue</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: "#272838"}}>
                <Typography style={{fontWeight: "bold"}}>
        <div class="row">
          <div class="columna">
            <p style={{fontSize: "14px"}}>Group Leader</p>
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
            <p>Bus Leader</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
          <div class="rect" style={{backgroundColor: "#CE2D4F"}}></div>
          <Typography style={{color: 'white', backgroundColor: '#272838', fontWeight: 'bold'}}>Red</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: "#272838"}}>
                <Typography style={{fontWeight: "bold"}}>
        <div class="row">
          <div class="columna">
            <p style={{fontSize: "14px"}}>Group Leader</p>
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
            <p>Bus Leader</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
          <div class="rect" style={{backgroundColor: "#FFE600"}}></div>
          <Typography style={{color: 'white', backgroundColor: '#272838', fontWeight: 'bold'}}>Yellow</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: "#272838"}}>
                <Typography style={{fontWeight: "bold"}}>
        <div class="row">
          <div class="columna">
            <p style={{fontSize: "14px"}}>Group Leader</p>
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
            <p>Bus Leader</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
          <div class="rect" style={{backgroundColor: "#00A896"}}></div>
          <Typography style={{color: 'white', backgroundColor: '#272838', fontWeight: 'bold'}}>Green</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: "#272838"}}>
                <Typography style={{fontWeight: "bold"}}>
        <div class="row">
          <div class="columna">
            <p style={{fontSize: "14px"}}>Group Leader</p>
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
            <p>Bus Leader</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
          <div class="rect" style={{backgroundColor: "#E18335"}}></div>
          <Typography style={{color: 'white', backgroundColor: '#272838', fontWeight: 'bold'}}>Orange</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: "#272838"}}>
                <Typography style={{fontWeight: "bold"}}>
        <div class="row">
          <div class="columna">
            <p style={{fontSize: "14px"}}>Group Leader</p>
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
            <p>Bus Leader</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
          <div class="rect" style={{backgroundColor: "#912DCE"}}></div>
          <Typography style={{color: 'white', backgroundColor: '#272838', fontWeight: 'bold'}}>Purple</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: "#272838"}}>
                <Typography style={{fontWeight: "bold"}}>
        <div class="row">
          <div class="columna">
            <p style={{fontSize: "14px"}}>Group Leader</p>
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
            <p>Bus Leader</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
          <div class="rect" style={{backgroundColor: "#CBAB58"}}></div>
          <Typography style={{color: 'white', backgroundColor: '#272838', fontWeight: 'bold'}}>Gold</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: "#272838"}}>
                <Typography style={{fontWeight: "bold"}}>
        <div class="row">
          <div class="columna">
            <p style={{fontSize: "14px"}}>Group Leader</p>
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
            <p>Bus Leader</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
          <div class="rect" style={{backgroundColor: "#C5C5C5"}}></div>
          <Typography style={{color: 'white', backgroundColor: '#272838', fontWeight: 'bold'}}>Silver</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: "#272838"}}>
                <Typography style={{fontWeight: "bold"}}>
        <div class="row">
          <div class="columna">
            <p style={{fontSize: "14px"}}>Group Leader</p>
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
            <p>Bus Leader</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
          <div class="rect" style={{backgroundColor: "#52C1B3"}}></div>
          <Typography style={{color: 'white', backgroundColor: '#272838', fontWeight: 'bold'}}>Teal</Typography>
        </AccordionSummary>
        <AccordionDetails style={{backgroundColor: "#272838"}}>
                <Typography style={{fontWeight: "bold"}}>
        <div class="row">
          <div class="columna">
            <p style={{fontSize: "14px"}}>Group Leader</p>
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
            <p>Bus Leader</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
            <p>Misc</p>
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
}

export default TeamView;