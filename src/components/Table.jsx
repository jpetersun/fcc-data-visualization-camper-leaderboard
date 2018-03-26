import React from 'react'
import { hot } from 'react-hot-loader'
import Row from './Row'
import campers from '../data/alltime.json'

class Table extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      campers
    }
  }

  componentDidMount () {
    const campers = this.state.campers
    // Least to most points
    const sorted = campers.alltime.sort((a, b) => {
      return a.recent - b.recent
    })
    console.log(typeof campers)
    console.log(typeof sorted)
  }

  render () {
    return (
      <table className='camper-leaderboard dark'>
        <thead className='camper-leaderboard__thead'>
          <tr>
            <th className='camper-leaderboard__th'>#</th>
            <th className='camper-leaderboard__th'>Camper Name</th>
            <th className='camper-leaderboard__th'>Points in past 30 days</th>
            <th className='camper-leaderboard__th'>All time points</th>
          </tr>
        </thead>
        <tbody>
          {this.state.campers.alltime.map((camper, idx) => {
            return <Row key={camper.username} {...camper} idx={idx + 1} />
          })}
        </tbody>
      </table>
    )
  }
}

export default hot(module)(Table)
