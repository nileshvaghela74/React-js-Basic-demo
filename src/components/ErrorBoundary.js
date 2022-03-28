import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props){
        super(props)
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return {hasError: true}
    }

        componentDidCatch(error, info){
            console.log(error)
            console.log(info)
    }

    render() {
        if(this.state.hasError){
            return (
                <div>
                    <p>Something went wrong</p>
                </div>
            )
        }
        return this.props.children
    }
}

export default ErrorBoundary
