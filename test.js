import { inject, observer } from 'mobx-react'
import React from 'react'
 const User = inject("UserStore")(observer(({userStore}) => {
    return (
        <div>
            
        </div>
    )
}))

export default User

