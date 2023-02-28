import Accordion from 'react-bootstrap/Accordion';
import { v4 as uuidv4 } from 'uuid';

const AccordionComponent = ({data})=>{
    return(
        <>
            {data.map((item)=>{
                if(item.children.length){
                    return(
                        <>
                            <Accordion defaultActiveKey={uuidv4()}>
                                <Accordion.Item eventKey={uuidv4()}>
                                    <Accordion.Header>{item.name}</Accordion.Header>
                                    <Accordion.Body>
                                        <AccordionComponent data={item.children} />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </>
                    )
                }else{
                    return (
                        <>
                            <p>{item.name}</p>
                        </>
                    )
                }
            })}
        </>
    )
}

export default AccordionComponent;