import React,{useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../style.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user, isAuthenticated,logout } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
   if (!isAuthenticated) {
    navigate('/');
   }
  }, [isAuthenticated])
  console.log('user',user);
  return (
    <>
      {isAuthenticated && (
        <section id="entry-page">
          <form>
            <h2>Welcome Back! {user.nickname}</h2>
            <fieldset>
              <ul>
                <li>
                <img src={user.picture} alt={user.name} />
                </li>
                <li>
                  <label for="email">Email:</label>
                  <p>{user.email}</p>
                </li>
              </ul>
            </fieldset>
            <button type="button" onClick={() => {logout()}}>
              Logout
            </button>
          </form>
        </section>
      )}
    </>
  );
};

export default Home;
