import { useState, useEffect } from "react"

const Card = ()=>{

    const [photo, setPhoto] = useState([])

    const fetchingActivity = async ()=>{

        try{
            const response = await fetch("https://picsum.photos/v2/list")
            console.log(response);
            if(response.ok){
                const data = await response.json()
                setPhoto(data)
                console.log(data);
            }

        }catch(error){
            console.log(error);
            
        }
    }

    useEffect(()=>{
        fetchingActivity()
    }, [])
    
    return(
        <>
        {
            photo.map((photo)=>{
                return(
                    <div className="container-card">
                        <h2>{photo.author}</h2>
                    </div>
                )
            })        
        }
        </>
    )
}

export {Card}