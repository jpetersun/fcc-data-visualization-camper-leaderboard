import React from 'react'
import { hot } from 'react-hot-loader'
import Row from './Row'

import campersAllTime from '../data/alltime.json'
import campersRecent from '../data/recent.json'

class Table extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      campers: [],
      campersAllTime,
      campersRecent
    }

    this.handleClickRecent = this.handleClickRecent.bind(this)
    this.handleClickAlltime = this.handleClickAlltime.bind(this)
  }

  componentDidMount () {
    this.setState({campers: campersAllTime.alltime})
  }

  handleClickAlltime () {
    const campers = Object.assign({}, this.state.campersAllTime)

    // Most to least
    // Data is already sorted, but can sort data otherwise
    const sorted = campers.alltime.sort((a, b) => {
      return b.alltime - a.alltime
    })

    const sortedCampers = sorted

    this.setState({ campers: sortedCampers })
  }

  handleClickRecent () {
    const campers = Object.assign({}, this.state.campersRecent)

    // Most to least
    // Data is already sorted, but can sort data otherwise
    const sorted = campers.recent.sort((a, b) => {
      return b.recent - a.recent
    })

    const sortedCampers = sorted

    this.setState({ campers: sortedCampers })
  }

  render () {
    return (
      <table className='camper-leaderboard dark'>
        <thead className='camper-leaderboard__thead'>
          <tr>
            <th className='camper-leaderboard__th'>#</th>
            <th className='camper-leaderboard__th'>Camper Name</th>
            <th onClick={this.handleClickRecent}
              className='camper-leaderboard__th camper-leaderboard__th--sort'>
              Points in past 30 days
            </th>
            <th onClick={this.handleClickAlltime}
              className='camper-leaderboard__th camper-leaderboard__th--sort'>
              All time points
            </th>
          </tr>
        </thead>
        <tbody>
          {this.state.campers.map((camper, idx) => {
            return <Row key={camper.username} {...camper} idx={idx + 1} />
          })}
        </tbody>
      </table>
    )
  }
}

export default hot(module)(Table)
