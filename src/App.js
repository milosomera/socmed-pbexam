import React, { useContext } from 'react';
import './App.css';
import MyContext from './MyContext';
import { Route } from "react-router-dom";
import NavbarBS from "./Navigation/NavbarBS";
import Home from "./Homepage/Home";
import Registration from "./Registration/Registration";
import Posts from "./Posts/Posts";
import PostDetail from "./Posts/PostDetail";
import CreatePost from "./Posts/CreatePost";

const App = () => {
  const {
    isLoggedin,
    user,
    userCredential,
    logout,
    posts,
    addPost
  } = useContext(MyContext);
  const showPost = posts.map(post => {
    return(
      <Route path={"/posts/" + post._id} key={post._id}>
        <PostDetail post={post}/>
      </Route>
    )
  })
  return (
    <div>
      {
        isLoggedin
        ?
        <div>
          <NavbarBS
            logout={logout} 
            user={user}
          />
          <Route path="/socmed-pbexam" exact>
            <Posts/>
          </Route>
          {showPost}
          <Route path="/create-post">
            <CreatePost
              addPost={addPost} 
              user={user}
            />
          </Route>
        </div>
        :
        <div>
          <Route path="/socmed-pbexam" exact>
            <Home
              user={user} 
              userCredential={userCredential}
            />
          </Route>
          <Route path="/registration">
            <Registration
              userCredential={userCredential}
            />
          </Route>
        </div>
      }
    </div>
  );
}

export default App;