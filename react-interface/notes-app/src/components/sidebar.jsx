import React, { useState, useEffect} from "react";
import axios from 'axios'
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

  const Sidebar = (props) => {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "http://localhost:8080/api/subjects", false ); // false for synchronous request
    xmlHttp.send( null );
    var object = JSON.parse(xmlHttp.responseText);
    var objectList = Object.keys(object).forEach(k => (
      <li
       key={k}
      ><strong>{k}</strong>: {object[k]}</li>
    ));
    

    return ( 
<ul>{objectList}</ul>
        
    );
};

export default Sidebar;


