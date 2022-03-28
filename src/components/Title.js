import React from 'react'

function Title() {
    console.log('rendring - ttle')
    return (
        <div>
            Use Call back Hook
        </div>
    )
}

export default React.memo(Title)
