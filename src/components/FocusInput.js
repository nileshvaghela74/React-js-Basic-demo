import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
    constructor(props) {
        super(props)
    
        this.focusComponentInputRef = React.createRef()
    }
    
    focusHandler = () => {
        this.focusComponentInputRef.current.focusInput()
    }


    render() {
        return (
            <div>
                <Input ref={this.focusComponentInputRef} />
                <button onClick={this.focusHandler}>Focus input</button>
            </div>
        )
    }
}

export default FocusInput
