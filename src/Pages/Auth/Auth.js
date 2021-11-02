import "./Auth.css";

const Auth = () => {
  return (
    <>
      <div className="auth-container">
        <div className="auth-page-name">
          <p>Login/SignUp</p>
          <p>Home - Login/signup</p>
        </div>
        <div className="auth-about">
          <p>About sign in and sign up</p>
          <p>
            Git, eu! Libero fermentum! Vivamus nibh mus curae, a ullamco
            nesciunt repudiandae, labore reiciendis similique! Dicta, non
            praesent dolor culpa pulvinar rerum gravida orci, repellat omnis
            architecto in, scelerisque nostrud potenti mauris, eros, luctus
            donec lobortis. Commodo
          </p>
        </div>
        <div className="auth-pages">
          <div className="auth-login">
            <form>
              <p>Returning login</p>
              <span>
                <input type="email" placeholder="Enter Email" />
              </span>
              <span>
                <input type="password" placeholder="Enter Password" />
              </span>
              <div>
                <input type="checkbox" />
                Save my email and password for the next time login.
              </div>
              <button className="btn">Submit</button>
            </form>
          </div>
          <div className="auth-register">
            <form>
              <p>New customer sign up</p>
              <input type="text" placeholder="Enter First Name" />
              <br />
              <input type="text" placeholder="Enter Last Name" />
              <br />
              <input type="email" placeholder="Enter Email" />
              <br />
              <input type="password" placeholder="Enter Password" />
              <br />
              <input type="password" placeholder="Confirm Password" />
              <div>
                <input type="checkbox" />
                Are you agree terms and condition create an account
              </div>
              <button className="btn">Create an account</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
