import axios from 'axios'
import React, { Component } from 'react'

class PostForm extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userId: '',
             Title: '',
             Body: ''
        }
    }
    
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHanlder = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const {userId, Title, Body} = this.state
        return (
            <div>
                <form onSubmit={this.submitHanlder}>
                    <div>
                        <input type='text' name='userId' value={userId} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type='text' name='Title' value={Title} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type='text' name='Body' value={Body} onChange={this.changeHandler} />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
