import React, { Component } from 'react'
import {UserContext, ChannelContext} from '../App'

class ComponentF extends Component {
    render() {
        return (
            <div>
                <UserContext.Consumer>
                    {
                        (username) => {
                            return (
                                <ChannelContext.Consumer>
                                    {
                                        channel => {
                                            return <div>Hello Component F {username}, channel value {channel} </div>
                                        }
                                    }
                                    
                                </ChannelContext.Consumer>
                            )
                           
                        }
                    }
                    
                </UserContext.Consumer>
            </div>
        )
    }
}

export default ComponentF
