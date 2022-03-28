import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class PortalDemo extends Component {
    render() {
        return ReactDOM.createPortal(
            <div>
                Portal Demo
            </div>,
            document.getElementById('portal-demo')
        )
    }
}

export default PortalDemo
