import logo from './logo.svg';
import { useState, useEffect } from 'react'
import { getPosts, getRandomUser } from './API';
import './App.css';
import PostCard from './components/PostCard';
import UserCard from './components/UserCard';
function App() {
  const [data, setData] = useState(null)

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    // getPosts().then(post => console.log(post))
    getPosts().then(post => setData(post))
  }, [])

  useEffect(() => {
    // getRandomUser().then((user) => console.log(user))
    getRandomUser().then((user) => setUserData(user.results[0]))
  }, [])
  
  const refresh = ()=>{
    getRandomUser().then((user) => setUserData(user.results[0]))
  }

  return (
    <div className="App">
      {userData && <UserCard data={userData} />}
      <button onClick={refresh}>Refresh user</button>
      {
        data ? data.map((e) => <PostCard title={e.title} body={e.body} />) : <p>No data</p>
      }
    </div>
  );
}

export default App;
