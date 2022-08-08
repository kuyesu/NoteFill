import React, { useState } from 'react';
import {  Typography, Stack } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import Link from "next/link";
import { auth, db } from "../firebase/firebaseClient";
import Google from "../public/assets/images/google.svg";

import Plans from "../components/plan/plan";
import { getProducts, Product } from "@stripe/firestore-stripe-payments";
import useAuth from "../hooks/useAuth";
import useSubscription from "../hooks/useSubscription";
import payments from "../stripe/stripe";

import { useForm, SubmitHandler } from "react-hook-form";
const provider = new GoogleAuthProvider();
interface Props {
  products: Product[];
}
interface Inputs {
  email: string;
  password: string;
}
function Login({ products }: Props) {
  const [login, setLogin] = useState(false);
  const { signIn } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    if (login) {
      await signIn(data.email, data.password);
    }
  };

  const { user, loading } = useAuth();
  const subscription = useSubscription(user);
  async function signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        const photoURL = user.photoURL;
        const email = user.email;
        const displayName = user.displayName;
        const uid = user.uid;
        const providerData = user.providerData;
        // console.log({ credential, token, user });
        // save user to firestore db
        addDoc(collection(db, "users"), {
          uid,
          email,
          displayName,
          photoURL,
          providerData,
          token,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log({ errorCode, errorMessage, email, credential });
      });
    // save user data to firestore

  }

  // if user is logged in and has no subscription, redirect to plans page
  // if (loading || subscription === null) return null;

  if (!subscription) return <Plans products={products} />;

  return (
    <section className="fixed h-screen bg-gradient-to-b from-gray-900/5 to-[#e2d8c3] lg:h-[140vh] w-100">
      {/* <!-- Jumbotron --> */}
      <div className="container ">
        <div className="row  ">
          <div
            className="col-md-5 "
            style={{ backgroundColor: "#4d274e", display: "inline-block" }}
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
              Collaborate and work together to stay on top of the newest trends
              in Note taking
            </Typography>
            <Stack direction="row">
              <div style={{ marginTop: 54, marginLeft: 50 }}>
                <img
                  src="https://s3.amazonaws.com/notify-resources/connect/success-login.svg"
                  alt="image"
                  style={{ marginTop: 4, width: "80%", height: "70%" }}
                />
              </div>
            </Stack>
          </div>

          <div className="col-md-6 mb-lg-0" style={{ marginRight: 0 }}>
            <div className="container-fluid pt-4" style={{ marginRight: 0 }}>
              <div className="row" style={{ marginRight: 0 }}>
                <div className="col-md-4">
                  <div
                    className="text"
                    style={{
                      width: "50%",
                      paddingTop: "2rem",
                      marginLeft: "2rem",
                    }}
                  >
                    <Link href="/">
                      <a
                        className="back"
                        // onClick={handleClickedButton}
                      >
                        Back To Home
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="col-md-8 " style={{ marginRight: 0 }}>
                  <div
                    className="card cascading-right position-absolute end-0 "
                    style={{
                      background: "hsla(0, 0%, 100%, 0.55)",
                      backdropFilter: "blur(30px)",
                      marginRight: 60,
                    }}
                  >
                    <div
                      className="card-body  shadow-5 text-center"
                      style={{ padding: 30, fontSize: 12 }}
                    >
                      <div className="d-flex justify-content-around align-items-justify mb-4 pt-3">
                        {/* <!-- Checkbox --> */}
                        <h2 className="fw-bold ">Sign in now</h2>
                        <a href="#!">{`Don't have account?`}</a>
                      </div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        {/* <!-- Email input --> */}
                        <div className=" form-outline mb-4">
                          <input
                            type="email"
                            id="form1Example13"
                            className={`input ${
                              errors.email &&
                              "input-aut form-control form-control-md"
                            }`}
                            placeholder="Enter Email"
                            {...register("email", { required: true })}
                          />
                          {errors.email && (
                            <p className="p-1 text-[13px] font-light  text-orange-500">
                              Please enter a valid email.
                            </p>
                          )}
                        </div>

                        {/* <!-- Password input --> */}
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form1Example23"
                            className={`input ${
                              errors.password &&
                              "input-aut form-control form-control-md"
                            }`}
                            placeholder="Enter Password"
                            {...register("password", { required: true })}
                          />
                          {errors.password && (
                            <p className="p-1 text-[13px] font-light  text-orange-500">
                              Your password must contain between 4 and 60
                              characters.
                            </p>
                          )}
                        </div>

                        <div className="d-flex justify-content-around align-items-center mb-4">
                          {/* <!-- Checkbox --> */}
                          <div className="form-check">
                            <input
                              className=" form-check-input"
                              type="checkbox"
                              value=""
                              id="form1Example3"
                              checked
                            />
                            <label
                              className="form-check-label"
                              id="form1Example3"
                            >
                              {" "}
                              Remember me{" "}
                            </label>
                          </div>
                          <a href="#!">Forgot password?</a>
                        </div>

                        {/* <!-- Submit button --> */}
                        <div className="text-center ">
                          <button
                            type="submit"
                            onClick={() => setLogin(true)}
                            className="button-light btn btn-primary btn-md btn-block w-100"
                            style={{
                              fontSize: 12,
                              height: "38px",
                              backgroundColor: "#e2642c",
                              color: "#fff",
                            }}
                          >
                            Sign In Now
                          </button>
                        </div>
                        <div className="divider  align-items-center my-3">
                          <p className="text-center fw-bold mb-0 text-muted">
                            OR
                          </p>
                        </div>
                        <button
                          className="button-light btn btn-primary btn-lg btn-block w-100 mb-3"
                          style={{
                            fontSize: 14,
                          }}
                          role="button"
                          onClick={signInWithGoogle}
                          // startIcon={<Google />}
                        >
                          Continue with Google
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Jumbotron --> */}
    </section>
  );
}

export default Login;

export const getServerSideProps = async () => {
  const products = await getProducts(payments, {
    includePrices: true,
    activeOnly: true,
  })
    .then((res) => res)
    .catch((error) => console.log(error.message));
  return {
    props: {
      products,
    },
  };
};
