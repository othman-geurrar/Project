import React from "react";
import NavBar from "../components/NavBar";
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import logo from '../assets/img/logo2.png';

const RegisterForm = () => {
  return (
    <>
      <NavBar />
      <div className="h-full bg-neutral-200 dark:bg-neutral-700">
        <div className="mx-auto">
          <div className="flex justify-center px-6 py-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div
                className="w-full h-auto lg:block lg:w-5/12 bg-cover rounded-l-lg"
                style={{
                  background:
                    // "linear-gradient(to right, #009079, #00A98F, #00C3A5, #00DCBA)",
                    "linear-gradient(to right, #00DCBA, #00C3A5, #00A98F, #009079)",
                }}
              >
                <img
                  className="mt-28 object-cover h-72 opacity-100 "
                  src={logo}
                  alt="logo"
                />
              </div>

              <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
                <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">
                  Create an Account!
                </h3>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                  <div className="mb-4 md:flex ">
                  <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6 mb-5 mr-16">
                  <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="firstName">
                                    First Name
                    </label>
                      <TextBoxComponent
                        placeholder="First Name"
                        cssClass="e-outline"
                        floatLabelType="Auto"
                      />
                    </div>
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6 mb-5">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="lastName">
                                    Last Name
                    </label>
                      <TextBoxComponent
                        placeholder="Last name"
                        cssClass="e-outline"
                        floatLabelType="Auto"
                      />
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6 mb-5">
                  <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="email">
                                    Email
                    </label>
                    <TextBoxComponent
                      placeholder="Email Address"
                      cssClass="e-outline"
                      floatLabelType="Auto"
                      id="email"
                      name="email"
                      type="email"
                      required
                    />
                  </div>
                  <div className="mb-4 ">
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6 mb-5">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="password">
                                    Password
                    </label>
                      <TextBoxComponent
                        placeholder="Password"
                        cssClass="e-outline"
                        floatLabelType="Auto"
                        type="password"
                      />
                    </div>
                    
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-teal-600 rounded-full hover:bg-teal-500 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Register Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
