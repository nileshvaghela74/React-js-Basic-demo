import React, { Component } from 'react'

class RefDemo extends Component {

    constructor(props){
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }

    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        // this.inputRef.current.focus();
        // console.log(this.inputRef);
    }

    render() {
        return (
            <div>
                Reference RefDemo
                <input type='text' ref={this.inputRef}  />
                <input type='text' ref={this.setCbRef} />
            </div>
        )
    }
}

export default RefDemo
