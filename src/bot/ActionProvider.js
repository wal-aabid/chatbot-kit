import React, { useEffect } from 'react';

// curl --location 'http://ec2-52-66-133-179.ap-south-1.compute.amazonaws.com:8080/chat' \
// --header 'Content-Type: application/json' \
// --data '{     "user": "summarize video in 20 words?"}'


const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    // const [message, setMessage] = useState 
    const handleAPI = async(message) => {
        const botMessage = createChatBotMessage(await getChatResponse(message));

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };
    console.log(children);

    useEffect(()=>{

    },[])

    const getChatResponse = async (message) => {
        const getResponse = await fetch('http://ec2-52-66-133-179.ap-south-1.compute.amazonaws.com:8080/chat',{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({user:message})
        });
        const response = await getResponse.json();
        console.log(response.content);
        return response.content;

    };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {handleAPI},
        });
      })}
    </div>
  );
};

export default ActionProvider;