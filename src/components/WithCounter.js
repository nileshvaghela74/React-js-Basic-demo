import React from 'react'

const updatedComponent = (OriginaltComponent) => {
    class NewComponent extends React.Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        
        clickCounterHandlder = () => {
            this.setState (prevState => {
                return  { count: prevState.count + 1 }
            })
        }

        render() {
            return <OriginaltComponent count={this.state.count} incrementCount={this.clickCounterHandlder} />
        }
    }

    return NewComponent
}

export default updatedComponent