import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Card, Stack, Typography } from "@mui/material";
import clsx from "clsx";
import styles from "../components/auth/css/auth.module.css";
import google from "../public/assets/images/google.svg";


const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  backgroundColor: "#fff",
  p: 4,
  borderRadius: "0px",
  height: "100%",
  boxShadow:
    "0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)",
};

export default function SignUp() {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange =
    (prop: string) => (event: { target: { value: any } }) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  const handleChecked = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setChecked(event.target.checked);
  };
  const [checked, setChecked] = React.useState(false);

  const router = useRouter();
  const routeData1 = () => router.push("/");
  const handleClickedButton = () => {
    routeData1();
  };
  return (
    <div className="container-fluid" style={style}>
      <div className="row">
        <div
          className="col-md-4"
          style={{
            backgroundColor: "#4d274e",
            marginBottom: -100,
            display: "inline-block",
          }}
        >
          <Typography
            //   variant="p" color="primary"
            sx={{
              color: "#fff",
              paddingTop: 11,
              fontWeight: 100,
              fontSize: 18,
              textAlign: "center",
              marginLeft: 8,
              marginRight: 8,
            }}
          >
            Collaborate and work together to stay on top of the newest trends in
            Note taking
          </Typography>
          <Typography
            //   variant="p" color="primary"
            sx={{
              color: "#fff",
              paddingTop: 3,
              fontWeight: 900,
              fontSize: 28,
              textAlign: "center",
              marginLeft: 1,
              marginRight: 1,
            }}
          >
            Newest Trend In Note Taking
          </Typography>

          <Stack direction="row">
            <div style={{ marginTop: 54, marginLeft: 50 }}>
              <img
                src="https://s3.amazonaws.com/notify-resources/connect/success-login.svg"
                alt="image"
                style={{ marginTop: 4, width: "80%", height: "100%" }}
              />
            </div>
          </Stack>
        </div>
        <div
          className="col-md-8 "
          style={{
            backgroundColor: "#fff",
            width: "50%",
            paddingTop: "5rem",
            marginLeft: "4rem",
          }}
        >
          <div className="text">
            <Link href="/">
              <a
                className={clsx("", styles.back)}
                onClick={handleClickedButton}
              >
                Back To Home
              </a>
            </Link>
          </div>
          <div className="card" style={{ marginLeft: "16rem" }}>
            <div className={`login__create-container `}>
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
        </div>
      </div>
    </div>
  );
}
