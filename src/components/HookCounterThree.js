import React, {useState} from 'react'

function HookCounterThree() {

    const [name, setName] = useState({firstName: '', lastName: ''})

    return (
        <div>
            <form>
                <div>
                    <input type='text' value={name.firstName} onChange={(e) => setName({ ...name,firstName: e.target.value })}/>
                </div>
                <div>
                    <input type='text' value={name.lastName} onChange={(e) => setName({...name, lastName: e.target.value }) }/>
                </div>
                <h2>Your firstname is: {name.firstName}</h2>
                <h2>Your lastName is: {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default HookCounterThree
