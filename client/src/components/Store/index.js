import React from 'react'
import { ListItem } from "../List";
import { Row, Col } from "../Grid";

import "./style.css";

function Store( { name, phone, street, city, state, zip_code, image, rating, url, Button }) { 

    return (
        <ListItem> 
        <Row>
            <h3>{name}</h3>
                <img className="img-thumbnail img-fluid w-100" src={image} alt={name}/>
               
                <p><i class="fas fa-comments"></i> Rating: {rating}</p>
               
                {phone && <p><i class="fas fa-phone"></i> {phone}</p>} 
             
                <p className="small"><i class="fas fa-map-marker-alt"></i> {street}, {city}, {state} {zip_code}</p>
               
            </Row>
            <Row className="flex-wrap-reverse">
                    <div className="btn-container">
                        <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={url}>
                            View
                        </a>
                        <Button />
                    </div>
                
            </Row>
        </ListItem>
    )
}

export default Store;