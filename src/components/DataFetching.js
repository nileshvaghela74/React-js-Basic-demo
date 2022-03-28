import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

    const [post, setPost] = useState([]) 
    const [id, setId] = useState(1)
    const [IdFromBtnClick, setIdFromBtnClick] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${IdFromBtnClick}`)
        .then(response => {
            console.log(response)
            setPost(response.data)
        })
        .catch(error => {
            console.log(error)
        })
        
    }, [IdFromBtnClick])

    const ClickHandlepost = () => {
        setIdFromBtnClick(id)
    }

    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)} />
            <button type='button' onClick={ClickHandlepost}>fecth post</button>
            {post.title}
        </div>
    )
}

export default DataFetching
