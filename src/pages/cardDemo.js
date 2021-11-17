import React from "react";
import Container from "react-bootstrap/Container";
import Cards from "../components/cards";
import placeholder from "../assets/placeholder.jpeg";

const CardDemo = () => (
    <Container fluid>
        <Cards 
        title="Affordable Housing 101"
        image={placeholder}
        text="To address the housing crisis through regional
        collaboration and mutual support, the Metropolitan
        Mayors Coalition (MMC) launched a Regional
        Housing Taskforce to establish a regional housing
        production goal and identify strategies to achieve
        that goal throughout the 15 participating
        communities"/>
    </Container>
);

export default CardDemo;