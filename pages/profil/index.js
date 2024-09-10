import React from 'react'
import withProtected from '../../hoc/withProtected'
import Authenticated from '../../components/Layout/Authenticated'

const Profil = () => {
  return (
    <Authenticated title="Profil">
      Profil
    </Authenticated>
  )
}

export default withProtected(Profil)
