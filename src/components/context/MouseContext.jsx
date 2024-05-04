const {  createContext, useState } = require("react");

export const MouseContext= createContext()



 const MouseState = (props) => {
     const [showcursor, setCursor] = useState({ opacity: 0, backgroundColor:"#db28ff"})
    return (
        <MouseContext.Provider value={{showcursor,setCursor}}>
            {props.children}
        </MouseContext.Provider>
    )
}


export default MouseState;