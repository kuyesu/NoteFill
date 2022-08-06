import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebaseClient';
import google from '../public/assets/images/google.svg';

const provider = new GoogleAuthProvider();

export default function Login() {
    async function signInWithGoogle() {
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken
            const user = result.user
            console.log({credential, token, user})
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            const email = error.email
            const credential = GoogleAuthProvider.credentialFromError(error)
            console.log({errorCode, errorMessage, email, credential})
        })
    }

    const logout = () => {
      auth.signOut();
      console.log("logout");
    };

    const state = {
        login: true,
        signUpForm: {
            name: "",
            email: "",
            password: ""
        },
        signInForm: {
            email: "",
            password: ""
        }
    };

    return (
      <div className="login">
        <div
          className={`login__colored-container ${
            state.login
              ? "login__colored-container--left"
              : "login__colored-container--right"
          }`}
        ></div>
        <div
          className={`login__welcome-back login__welcome-back--active login__welcome-back--inactive"`}
        >
          <div className="login__welcome-back__logo-container">
            {/* <img
              className="login__welcome-back__logo-container--image"
              src={logo}
              alt="Budwriter"
            /> */}
            NoteFill
          </div>
          <div className="login__welcome-back__main-container">
            <div className="login__welcome-back__main-container__text-container">
              <span className="login__welcome-back__main-container__text-container--title">
                Welcome Back!
              </span>
              <span className="login__welcome-back__main-container__text-container--secondary">
                To keep sharing your work with us, please log in.
              </span>
            </div>
            <div
              onClick={() => {
                // this.setState({
                //     login: !this.state.login
                // });
              }}
              className="login__welcome-back__main-container__button-container"
            >
              Sign In
            </div>
          </div>
        </div>
        <div
          className={`login__create-container ${
            state.login
              ? "login__create-container--active"
              : "login__create-container--inactive"
          }`}
        >
          Create Account
          <div className="login__create-container__social-container">
            <img
              className="login__create-container__social-container--google-icon"
              src={google}
              alt=""
            />
          </div>
          <span className="login__create-container--info-text">
            or use email for your registration
          </span>
          <div className="login__create-container__form-container">
            <form
              className="login__create-container__form-container__form"
              onSubmit={(e) => {
                e.preventDefault();
                // this.signUp();
              }}
            >
              <input
                className="login__create-container__form-container__form--name"
                type="text"
                placeholder="Name"
                // value={this.state.signUpForm.name}
                // onChange={(value) => this.setState({
                //     signUpForm: {
                //         name: value.target.value,
                //         email: this.state.signUpForm.email,
                //         password: this.state.signUpForm.password
                //     }
                // })}
                required
              />
              <input
                className="login__create-container__form-container__form--email"
                type="email"
                placeholder="Email"
                // value={this.state.signUpForm.email}
                // onChange={(value) => this.setState({
                //     signUpForm: {
                //         email: value.target.value,
                //         name: this.state.signUpForm.name,
                //         password: this.state.signUpForm.password
                //     }
                // })}
                required
              />
              <input
                className="login__create-container__form-container__form--password"
                type="password"
                placeholder="Password"
                // value={this.state.signUpForm.password}
                // onChange={(value) => this.setState({
                //     signUpForm: {
                //         password: value.target.value,
                //         name: this.state.signUpForm.name,
                //         email: this.state.signUpForm.email
                //     }
                // })}
                required
              />
              <button className="login__create-container__form-container__form--submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>
        </div>

    );
}
