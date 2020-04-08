import React,{Component} from 'react';
import {Container,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../App.css'


class frameworkCSS extends Component {
    render(){
        return(
            <Container className ="App-header">
                <p>Hey Batch 15 Yang tampan dan pemberani</p>

                <Link to="/"><Button variant="primary" color="primary">Here Todo</Button></Link>
            </Container>
        )
    }
}
export default frameworkCSS