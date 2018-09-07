import React from 'react'

class RoomList extends React.Component {
  render() {
    return (
      <div className = "rooms-list">
        <ul>
          <h3>Your rooms:</h3>
        {this.props.room.map(room => {
          return (
            <li key={room.id} className="room">
              <a href="#"># {ropm.name}</a>
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}

export default RoomList