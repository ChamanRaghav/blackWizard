import React from 'react'
import { Container } from "react-bootstrap";
import Image1 from "../../assets/Images/track_suit.jpeg";

export const Tracksuits = () => {
    return (
        <div>
            <h1 className="text-align-center">TRACK SUITS<span role='img' aria-label=''>✨💪</span></h1>
            <Container >
                <img src={Image1} alt={""} />
            </Container>
            <h1 className="text-align-center"> Shop Now!<span role='img' aria-label=''>😊 </span></h1>
        </div>
    )
}