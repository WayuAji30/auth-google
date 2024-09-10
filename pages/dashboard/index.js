import React from 'react'
import { useUser } from '../../context/user'
import withProtected from '../../hoc/withProtected'
import Authenticated from '../../components/Layout/Authenticated'

const Dashboard = () => {
    const user = useUser()
    const {email, uid} = user

  return (
    <Authenticated title="Dashboard">
      <div>
        <p>Email: <b>{email}</b></p>
        <p>UID: <b>{uid}</b></p>
      </div>
    </Authenticated>
  )
}

export default withProtected(Dashboard)
