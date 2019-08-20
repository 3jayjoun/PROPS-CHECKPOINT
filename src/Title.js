import React from 'react'
function Title(props) {
    
    return props.small ? <h1 className="App" style= {{fontSize:'smaller'}} >{props.children}</h1> : <h1 className="App" style={props.style}>{props.children}</h1>
}
export default Title;