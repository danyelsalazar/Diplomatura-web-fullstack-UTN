import { useEffect, useState } from "react"

const Emoji= ()=>{

    const [emojis, setEmojis] = useState([])

    const fechingData = async()=>{
        try{

            const response = await fetch("https://emojihub.yurace.pro/api/all")
    
            if(response.ok){
                const data = await response.json()
                setEmojis(data)
            }
        }catch(error){
            console.log(error);
            
        }
    }

    useEffect(()=>{
        fechingData()
    },[])

    return(
        <>
        <section>
            {
               emojis.map((emoji, index)=>{
                return(
                    <div key={index}>
                        <h2 dangerouslySetInnerHTML={{ __html: emoji.htmlCode[0] }}/>
                        <h3>{emoji.name}</h3>
                        <p>{emoji.category}</p>
                        <p>{emoji.group}</p>
                    </div>
                )
               })
            }
        </section>
        </>
    )
}

export {Emoji}