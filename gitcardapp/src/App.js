import React from "react"
import User from "./components/User"
import "./App.css"

function App() {
  return (
    <div className="App">
      <User />
    </div>
  )
}

export default App


/*
{
    "login": "TimRexJeff",
    "id": 48488539,
    "node_id": "MDQ6VXNlcjQ4NDg4NTM5",
    "avatar_url": "https://avatars1.githubusercontent.com/u/48488539?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/TimRexJeff",
    "html_url": "https://github.com/TimRexJeff",
    "followers_url": "https://api.github.com/users/TimRexJeff/followers",
    "following_url": "https://api.github.com/users/TimRexJeff/following{/other_user}",
    "gists_url": "https://api.github.com/users/TimRexJeff/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/TimRexJeff/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/TimRexJeff/subscriptions",
    "organizations_url": "https://api.github.com/users/TimRexJeff/orgs",
    "repos_url": "https://api.github.com/users/TimRexJeff/repos",
    "events_url": "https://api.github.com/users/TimRexJeff/events{/privacy}",
    "received_events_url": "https://api.github.com/users/TimRexJeff/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Tim Jeffries",
    "company": null,
    "blog": "timintech.com",
    "location": "Portland, OR",
    "email": null,
    "hireable": true,
    "bio": "A student at Lambda School, studying Full Stack Web Development.",
    "public_repos": 30,
    "public_gists": 0,
    "followers": 3,
    "following": 0,
    "created_at": "2019-03-12T16:24:13Z",
    "updated_at": "2019-08-28T19:02:08Z"
}
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/