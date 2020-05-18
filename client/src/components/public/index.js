import React from 'react'
import Header from './headers'
import Body from './body'
const PublicMainView = (props) =>{
console.log(props.history.location)
    return(
        <>
        <Header {...props} />
        <Body/>
        
        </>
    )
}

export default PublicMainView;