import React, { useState, useEffect } from "react";
import './App.css';
import { Login } from "./components/login";
import { signUpFetch } from "./utils";

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const signUpHandler = async (e) => {
    e.preventDefault();
    const returnValue = await signUpFetch(username, email, password);
    console.log(returnValue.user.username)
  }

  return (
    <div className="App">
      <h1>{user}</h1>
      {!user ? (
        <form onSubmit={signUpHandler}>
          <input onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
          <input onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
          <input onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
        <button type="submit">Submit</button>
      </form>
      ) : ( <h2>Logged in.</h2>
      )}
    </div>
  );
  };
//   return (
//     <div className="App">
//       <h1>InstaJarg</h1>
//       <h2>{user}</h2>
//       {searchResult && <h3>Cannot find {search}. Are you sure you are spelling their name correctly?</h3>}
//       <Search setter={setSearch} handler={submitHandler} />
//       {arr.map((item, i) => {
//         return(
//           <div>
//             <p key={i}>{item.author}</p>
//             <img className="imgFeed" src={item.download_url} alt="Random Img"/>
//           </div>
//         )
//       })}
//     </div>
//   );
// }

export default App;
