import React, { Component } from 'react'

class Welcome extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'nilesh'
        }
    }
    
    static getDerivedStateFromProps()

    componentDidMount()
    
    render() {
        return <h1>Class Component</h1>
    }
}
export default Welcome