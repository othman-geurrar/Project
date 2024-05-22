/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  useSignInUserMutation,
  useSignUpUserMutation,
} from "../../redux/Users/userSliceFront";
export default function LoginForm() {
  // SignUpUser
  const [SignUpUser] = useSignUpUserMutation();
  const [SignInUser, { data, isSuccess }] = useSignInUserMutation();

  const [isSignUpActive, setIsSignUpActive] = useState(false);

  // Zod
  const schema = isSignUpActive
    ? z.object({
        UserName: z.string().min(4),
        email: z.string().min(4),
        password: z.string().min(6),
      })
    : z.object({
        emailLogin: z.string().min(4),
        passwordLogin: z.string().min(6),
      });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });
  // handle SingIn & SignUp Cklic
  const handleSignUpClick = () => {
    reset();
    setIsSignUpActive(true);
  };
  const handleSignInClick = () => {
    reset();
    setIsSignUpActive(false);
  };
  // handleSubmit
  const onSubmit = async (formData) => {
    if (!isSignUpActive) {
      const email = formData.emailLogin;
      const password = formData.passwordLogin;
      let response = await SignInUser({ email, password });
      console.log(response);
    } else {
      SignUpUser(formData);
    }
    reset();
  };
  return (
    <div className="loginform">
      <div
        className={`container ${isSignUpActive ? "right-panel-active" : ""}`}
      >
        <div className="form-container sign-up-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              placeholder="UserName"
              id="Username"
              required
              {...register("UserName")}
            />
            {errors.UserName && (
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold rounded dark:bg-blue-200 dark:text-blue-800 ">
                {errors.UserName.message}
              </span>
            )}
            <input
              type="email"
              placeholder="Email"
              id="email"
              required
              {...register("email")}
            />
            {errors.email && (
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold rounded dark:bg-blue-200 dark:text-blue-800 ">
                {errors.email.message}
              </span>
            )}
            <input
              type="password"
              placeholder="Password"
              id="password"
              required
              {...register("password")}
            />
            {errors.password && (
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold rounded dark:bg-blue-200 dark:text-blue-800 ">
                {errors.password.message}
              </span>
            )}
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              placeholder="Email"
              id="emailLogin"
              required
              {...register("emailLogin")}
            />
            {errors.emailLogin && (
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold rounded dark:bg-blue-200 dark:text-blue-800 ">
                {errors.emailLogin.message}
              </span>
            )}
            <input
              type="password"
              placeholder="Password"
              required
              {...register("passwordLogin")}
              id="passwordLogin"
            />
            {errors.passwordLogin && (
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold rounded dark:bg-blue-200 dark:text-blue-800 ">
                {errors.passwordLogin.message}
              </span>
            )}
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  /* <div className="login-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(loginuser(user, navigate));
          }}
          className="login-form"
        >
          <h2>Login</h2>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => dispatch(inputemail(e.target.value))}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => dispatch(inputpassword(e.target.value))}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div> */
}
