import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios'




class MainPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const props = this.props;
        return (
            
            <p>This is the main page</p>
        )
    }
}

export default withRouter(MainPage);