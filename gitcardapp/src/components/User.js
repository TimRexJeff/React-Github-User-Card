import React from "react"
import axios from "axios"
import Followers from "./Followers"
import "../App.css"

class User extends React.Component {
  
  state = {
      user: {},
      followers: []
    }

  componentDidMount = () => {
    axios
      .get('https://api.github.com/users/TimRexJeff')
      .then(res => {
        this.setState({
          user: res.data
        })
      })
      .catch(err => console.log(err))

    axios
      .get('https://api.github.com/users/TimRexJeff/followers')
      .then(res => {
        this.setState({
          followers: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render() {

    const { user } = this.state
    const { followers } = this.state

    return (
      <div className="container">

        <section className="user-card">
          <img src={user.avatar_url} className="profile-pic" alt={user.name} />
          <h1>{user.name}</h1>
          <a href={user.html_url} target="_blank">
            My Github Profile
          </a>
        </section>

        <section className="followers-container">
          <p>My Followers:</p>
          <div className="followers">
            {followers.map(follower => {
              return <Followers follower={follower} />
            })}
          </div>
        </section>

      </div>
    )
  }
}

export default User

// return (
//     <div class="card">
//       <img src={avatar_url} />
//       <div class="card-info">
//         <h3 class="name">{name}</h3>
//         <p class="username">{login}</p>
//         <p>Location: {location}</p>
//         <p>Profile:  
//           <a href={url}>{url}</a>
//         </p>
//         <p>Followers: {followers}</p>
//         <p>Following: {following}</p>
//         <p>Bio: {bio}</p>
//       </div>
//     </div>
//   )