/* eslint-disable no-unused-vars */
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  useSignInUserMutation,
  useSignUpUserMutation,
} from "../../redux/Users/userSliceFront";
import { setloginForm, setuserLogin } from "../../redux/SideBar/sideBarSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




export default function UserLoginForm() {
  // SignUpUser
  const [SignUpUser , {data: registerdata }] = useSignUpUserMutation();
  const [SignInUser, { data, isSuccess ,isError , error }] = useSignInUserMutation();
  console.log(error)
  console.log(data)


  const { loginForm } = useSelector(
    (state) => state.sideBar
  )
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      try{
        let response = await SignInUser({ email, password });
        return response
      } catch(error){
        console.log(e);
      }
      
    } else {
      SignUpUser(formData);
    }
    reset();
  };

  
  useEffect(() => {
    if (isError) {
      toast.error(error.data.message, {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  
    if (isSuccess) {
      sessionStorage.setItem("UserLogin", "true");
      localStorage.setItem("UserId",`${data.message}`);
      console.log(data.message)
      dispatch(setuserLogin())
      dispatch(setloginForm())
      // navigate("/");
    }
  }, [isSuccess, isError, error, data, navigate]);


  return (
    <>
  
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
     
        <div className="loginform">
        
          <div className={`container ${isSignUpActive ? "right-panel-active" : ""}`}>
            <div className="form-container sign-up-container">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Create Account</h1>
                <div className="social-container">
                  <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                  <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="UserName" id="Username" required {...register("UserName")} />
                {errors.UserName && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold rounded dark:bg-blue-200 dark:text-blue-800 ">
                    {errors.UserName.message}
                  </span>
                )}
                <input type="email" placeholder="Email" id="email" required {...register("email")} />
                {errors.email && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold rounded dark:bg-blue-200 dark:text-blue-800 ">
                    {errors.email.message}
                  </span>
                )}
                <input type="password" placeholder="Password" id="password" required {...register("password")} />
                {errors.password && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold rounded dark:bg-blue-200 dark:text-blue-800 ">
                    {errors.password.message}
                  </span>
                )}
                <button className="btn">Sign Up</button>
                <button className=" mt-4" onClick={()=> dispatch(setloginForm())}> Close</button>
              </form>
            </div>
            <div className="form-container sign-in-container">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Sign in</h1>
                <div className="social-container">
                  <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                  <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                  <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" id="emailLogin" required {...register("emailLogin")} />
                {errors.emailLogin && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold rounded dark:bg-blue-200 dark:text-blue-800 ">
                    {errors.emailLogin.message}
                  </span>
                )}
                <input type="password" placeholder="Password" required {...register("passwordLogin")} id="passwordLogin" />
                {errors.passwordLogin && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold rounded dark:bg-blue-200 dark:text-blue-800 ">
                    {errors.passwordLogin.message}
                  </span>
                )}
                <a href="#">Forgot your password?</a>
                <button className="btn">Sign In</button>
                <button className="mt-4" onClick={()=> dispatch(setloginForm())}> Close</button>
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>To keep connected with us please login with your personal info</p>
                  <button className="btn ghost" onClick={handleSignInClick}>Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button className="btn ghost" onClick={handleSignUpClick}>Sign Up</button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />

      </>
  
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