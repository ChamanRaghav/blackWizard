import React from 'react'
import { Container} from "react-bootstrap";
import Image1 from "../../assets/Images/underwear1.jpeg";


export const Underwear= () => {
    return (
        <div>
        <h1 className="text-align-center">underwear<span role='img' aria-label=''>✨💪</span></h1>
        
     
            <Container >
             
                       
                        <img src = {Image1}  alt = {""}/>
                        
                    
                
            </Container>
          
            <h1 className="text-align-center"> Shop Now!<span role='img' aria-label=''>😊 </span></h1>

        </div>
    )}