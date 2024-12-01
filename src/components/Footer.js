import React from 'react';
import {Navbar,Col,Container} from "react-bootstrap";
class Footer extends React.Component{
    render(){
        let fullyear=new Date().getFullYear();
        return(
            <Navbar fixed="bottom" bg="dark" variant="dark" >
                <Container>
                    <Col className="text-center text-muted">
                        <div className="text-light" align="center"> {fullyear}-{fullyear+1},All rights reserved by Nidhi & Asha </div>
                    </Col>
                </Container>
            </Navbar>
        );
    }
}
export default Footer;