import React,{Component} from 'react';

import {Container,Button} from 'react-bootstrap';
import './App.css';

class frameworkCSS extends Component {
    render(){
        return(
            <Container className ="App-header">
                <p>Hey Batch 15 Yang tampan dan pemberani</p>

                <Button variant="primary" color="primary">This Button</Button>
            </Container>
        )
    }
}
export default frameworkCSS