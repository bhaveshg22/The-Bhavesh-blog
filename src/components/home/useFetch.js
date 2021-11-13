import { useEffect, useState } from "react";
const useFetch=(url)=>{
    const [data, setBlog] = useState(null);
    const [Ispending,setIspending]=useState(true);
    const [error,setError]=useState(null);
    useEffect(()=>{

        //this abortconst is used so that whenever we switch very fastly from home to some other option the there should be no pending request from our side to the server
        const Abortconst=new AbortController();
        setTimeout(()=>{
            fetch(url , {signal : Abortconst.signal})
            .then(res=>{
                if(!res.ok)
                throw Error("Could not reach to the server you are inteding to reach");
                // console.log(res);
                return res.json();
            })
            .then(data=>{
                setBlog(data);
                setIspending(false);
                // console.log(data);
            })
            .catch(err=>{
                if(err.name==='AbortError')
                {
                    console.log('Abort error called');
                }
                else{
                    setError(err.message);
                setIspending(false);
                setError(null);
                }
             })
            },1000);

            return ()=>Abortconst.abort();
    },[url])

    return {data,Ispending,error}
}

export default useFetch;