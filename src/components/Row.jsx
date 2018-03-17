import React from 'react'

class Row extends React.Component {
  render () {
    const { username, img, alltime, recent, idx } = this.props
    return (
      <tr>
        <th>{idx}</th>
        <td><img className='camper__img' src={img} alt={username} />{username}</td>
        <td>{recent}</td>
        <td>{alltime}</td>
      </tr>
    )
  }
}

export default Row
