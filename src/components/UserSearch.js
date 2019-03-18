import _ from 'lodash'
import React from 'react'

const UserSearch = ({ repos }) => (
  _.map(repos, user => (
    <tr
      key={user.id}
      onClick={() => window.open(user.html_url, '_blank')}
    >
    <td>{user.name}</td>
      {/* <h3 className='blueText'></h3> */}
      <td>
      {user.private ? <span > {user.language}</span> : <span> Unknown </span>}
      </td>
      <td>
      {user.html_url ? <span > {user.html_url}</span> : <span> None </span>}
      </td>
      <td>
      {user.size ? <span > {user.size}</span> : <span> None </span>}
      </td>
    </tr>
  )
  )
)

export default UserSearch