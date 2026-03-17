import { useState, useRef, useEffect } from "react"
import { messages as mockMessages } from "../services/api"

const Chat = ({contact})=>{

    const [textMessage, setTexMessage] = useState("")
    const [messages, setMessage] = useState(mockMessages)
    const [seletUser, setSelectUser] = useState(null)
    const messagesEndRef = useRef(null)

     useEffect(()=>{
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    },[messages])

    if(!contact){
        return(
            <section className="container-initial-chat">
                <header className="header-chat-panel">
                <h2>Seleciona un chat</h2>
            </header>
            </section>
        )
    }

    const handleOnChange = (e)=>{
        setTexMessage(e.target.value)
        // console.log(textMessage);
        
    }

    const handleClick= ()=>{
        let i = messages.length + 100
        const currentTime = new Date()

        const newMessage = {
            id: messages.length + 1, author: "me", text: textMessage, time: currentTime.getHours() + ":" + currentTime.getMinutes()
        }

        // console.log(newMessage);
        
        setMessage([...messages, newMessage])
        // console.log(messages);

        setTexMessage("")
    }

    const handleKey = (e)=>{
        if(e.key=== "Enter"){
            handleClick()
        }
        
    }

    const fetchingSelectUser = async (id)=>{
        try {
            const response = await fetch(`https://dummyjson.com/users/${id}`)
            if(!response.ok){
                alert("el usario no existe")
            }

            const data = response.json()

        } catch (error) {
            console.log(error);
            
        }
    }

    return(
        <section className="container-chat">
            <header className="header-chat-panel">
                <h2>{`${contact.firstName} ${contact.lastName}`}</h2>
                <p>{`${contact.phone}`} hace 1 minuto</p>
            </header>
            <div className="chat-body">
                <p className="dayMesagge">Hoy</p>
                {
                    messages.map((message) => (<div key={message.id} className={` message ${message.author === "me" ? "me" : "you"}`}>
                        <p className="text-message"><b>{message.author}:</b> {message.text}</p>
                        <p className="time">{message.time}</p>
                    </div>
                    ))
                }
                <div ref={messagesEndRef}></div>
            </div>
                <div className="sendMessage">
                    <textarea onChange={handleOnChange} value={textMessage} onKeyDown={handleKey} placeholder="Mensaje"></textarea>
                    <button onClick={handleClick} className="button-send-message"> <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="#000000" d="M20.235 5.686c.432-1.195-.726-2.353-1.921-1.92L3.709 9.048c-1.199.434-1.344 2.07-.241 2.709l4.662 2.699l4.163-4.163a1 1 0 0 1 1.414 1.414L9.544 15.87l2.7 4.662c.638 1.103 2.274.957 2.708-.241z"/></g></svg></button>
                </div>
        </section>
    )
}

export { Chat}