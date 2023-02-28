import Accordion from 'react-bootstrap/Accordion';
import { v4 as uuidv4 } from 'uuid';
import React from "react";

const AccordionComponent = ({data})=>{
    return(
        <>
            {data.map((item)=>{
                if(item.children.length){
                    return(
                        <React.Fragment key={uuidv4()}>
                            <Accordion defaultActiveKey={uuidv4()}>
                                <Accordion.Item eventKey={uuidv4()}>
                                    <Accordion.Header role={'headerItems'}>{item.name}</Accordion.Header>
                                    <Accordion.Body>
                                        <AccordionComponent data={item.children} />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </React.Fragment>
                    )
                }else{
                    return (
                        <React.Fragment key={uuidv4()}>
                            <p role={'lastLevel'}>{item.name}</p>
                        </React.Fragment>
                    )
                }
            })}
        </>
    )
}

export default AccordionComponent;