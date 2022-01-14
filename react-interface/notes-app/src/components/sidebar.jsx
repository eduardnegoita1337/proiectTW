import React, { useState, useEffect } from "react";
import axios from 'axios'
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/api/subjects")
        .then((mappedApiSubjects) => {
            setSubjects(mappedApiSubjects);
        }); 
    }, [props]);

    return ( 
        <Nav className="col-md-12 d-md-block bg-light sidebar">
            {subjects.map((s) => (
        <Nav.Item key={s.id}>
          <Nav.Link key={s.id} as={Link}  to={`http://localhost:8080/api/subjects/${s.id}`}>
            {s.name}
          </Nav.Link>
        </Nav.Item>
        
      ))}
        </Nav>
    );
};

export default Sidebar;


