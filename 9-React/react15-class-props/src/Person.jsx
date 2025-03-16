import React from 'react'
class Person extends React.Component{
    render(){
  return (
    <>
    name : {this.props.name}, Age : {this.props.age}
    </>
  )
}
}

export default Person