import {useEffect, useState} from "react";
import {getCategories} from "apis/getCategories.api";
import AccordionComponent from "components/Accordion/Accordion.component";
import {Helmet} from "react-helmet";

const Home = () => {

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error , setError] = useState(false);

    useEffect( ()=>{
        getCategories().then(res=>{
            setData(res.data)
            setLoading(false);
        }).catch(()=>{
            setError(true)
            setLoading(false)
        })
    },[])

    return(
        <>
            <Helmet>
                <title>Multi Level Accordion</title>
            </Helmet>
            <div className={'d-flex justify-content-center align-items-center'}>
                {
                    loading ?
                        <div className="spinner-border mt-5" role="status">
                            <span className="sr-only"></span>
                        </div> :
                        !error ?
                            data.length !==0 ?
                                <div role={'hasData'} className="container mt-5">
                                    <AccordionComponent data={data} />
                                </div>
                                :
                                <div role={'noData'} className={'container d-flex justify-content-center mt-5 bg-danger'}><span className={'text-light'}>داده‌ای یافت نشد!</span></div>
                            : <div role={'fetchError'} className={'container d-flex justify-content-center mt-5 bg-danger'}><span className={'text-light'}>دریافت اطلاعات با خطا مواجه شد!</span></div>
                }
            </div>
        </>
    )
}

export {Home};