import React from 'react'
import { Image, Container, Row, Col } from "react-bootstrap";
import Images from "../../assets/Images";

export const CommingSoon = () => {
    return (
        <div>
            <h1 className="text-align-center">Comming Soon!!!<span role='img' aria-label=''>✨💪</span></h1>
            <Container>
                <Row>
                    <Col xs={12} md={12} sm={12}>
                        <Image src={Images.BWTarunChest} fluid rounded={true} />
                    </Col>
                </Row>
            </Container>
            <h1 className="text-align-center"> Apreaciating patience!<span role='img' aria-label=''>😊 Keep in touch!</span></h1>

        </div>
    )
}
