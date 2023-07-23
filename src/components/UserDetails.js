import React from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {
    const { userid } = useParams()
  return (
    <div>
        Details About User {userid}
    </div>
  )
}

export default UserDetails