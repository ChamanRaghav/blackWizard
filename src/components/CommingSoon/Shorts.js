import React from 'react'
import { Container} from "react-bootstrap";
import Image1 from "../../assets/Images/shorts1.jpeg";
import Image2 from "../../assets/Images/shorts2.jpeg";
import Image3 from "../../assets/Images/shorts3.jpeg";
import Image4 from "../../assets/Images/shorts4.jpeg";
import Image6 from "../../assets/Images/shorts6.jpeg";
import Image7 from "../../assets/Images/shorts7.jpeg";


export const Shorts = () => {
    return (
        <div>
        <h1 className="text-align-center">Shorts<span role='img' aria-label=''>✨💪</span></h1>
        
     
            <Container >
             
                       
                        <img src = {Image1}  alt = {""}/>
                        <img src = {Image2}  alt = {""}/>
                        <img src = {Image3}  alt = {""}/>
                        <img src = {Image4}  alt = {""}/>
                        
                        <img src = {Image6}  alt = {""}/>
                        <img src = {Image7}  alt = {""} />
                    
                
            </Container>
          
            <h1 className="text-align-center"> Shop Now!<span role='img' aria-label=''>😊 </span></h1>

        </div>
    )}