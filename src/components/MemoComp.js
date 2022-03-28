import React from 'react'

function MemoComp ({name}) {
    console.log('memo comp render')
    return (
        <div>
            Memo comp {name}
        </div>
    )
}

export default React.memo(MemoComp)