import { useState } from "react"
import { messages as mockMessages } from "../services/api"

const Chat = ()=>{

    const [textMessage, setTexMessage] = useState("")

    const [messages, setMessage] = useState(mockMessages)

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
    return(
        <section className="container-chat">
            <header className="header-chat-panel">
                <h2>Lucas Hernan Figueroa</h2>
                <p>ultima conexion: hace 1 minuto</p>
            </header>
            <div className="chat-body">
                {
                    messages.map((message) => (<div key={message.id} className={` message ${message.author === "me" ? "me" : "you"}`}>
                        <p><b>{message.author}</b> {message.text}</p>
                        <p>{message.time}</p>
                    </div>
                    ))
                }
            </div>
                <div className="sendMessage">
                    <textarea onChange={handleOnChange} value={textMessage} onKeyDown={handleKey}></textarea>
                    <button onClick={handleClick}> enviar</button>
                </div>
        </section>
    )
}

export { Chat}