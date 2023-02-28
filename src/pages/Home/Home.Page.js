import {useEffect, useState} from "react";
import {getCategories} from "../../apis/getCategories.api";
import AccordionComponent from "../../components/Accordion/Accordion.component";

const Home = () => {

    const [data,setData] = useState([]);

    useEffect( ()=>{
        getCategories().then(res=>{
            setData(res.data)
        })
    },[])

    return(
        <>
            <div className="container mt-5">
                <AccordionComponent data={data} />
            </div>
        </>
    )
}

export {Home};