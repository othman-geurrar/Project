import React from "react";
import Logo from "../assets/img/logo.png";
import NavBar from "../components/NavBar";
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';

const LoginForm = () => {
  return (
    <>
      <NavBar />
      <section className="h-full bg-neutral-200 dark:bg-neutral-700">
        <div className="container h-full p-10">
          <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                  {/* <!-- Left column container--> */}
                  <div className="px-2 md:px-0 lg:w-6/12">
                    <div className="flex min-h-full flex-col justify-center px-6 py-16 lg:px-8">
                      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <img
                          className="mx-auto h-24 w-auto mt-0"
                          src={Logo}
                          alt="Your Company"
                        />
                        <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                          Sign in to your account
                        </h2>
                      </div>

                      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                        

                          <div>
                            <div className="row custom-margin custom-padding-5 material">
                              <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6 mb-5">
                                <TextBoxComponent
                                  placeholder="Email Address"
                                  cssClass="e-outline"
                                  floatLabelType="Auto"
                                />
                              </div>
                              <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6 mb-5">
                                <TextBoxComponent
                                  placeholder="Password"
                                  cssClass="e-outline"
                                  floatLabelType="Auto"
                                />
                              </div>
                              <div className="text-sm">
                                <a
                                  href="#"
                                  className="font-semibold text-teal-600 hover:text-teal-500"
                                >
                                  Forgot password?
                                </a>
                              </div>
                              
                            </div>
                          </div>

                          <div>
                            <button
                              type="submit"
                              className="flex w-full mb-4 justify-center rounded-md bg-teal-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                            >
                              Sign in
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Right column container with background and description--> */}
                  <div
                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                    style={{
                      background:
                        // "linear-gradient(to right, #009079, #00A98F, #00C3A5, #00DCBA)",
                        "linear-gradient(to right, #00DCBA, #00C3A5, #00A98F, #009079)",
                    }}
                  >
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        We are more than just a website
                      </h4>
                      <p className="text-md">
                        Welcome to OSAY, your lifestyle hub for personalized
                        expression. Dive into our curated selections designed to
                        complement your individual tastes and interests. From
                        fashion to wellness to adventure, find everything you
                        need to enhance your lifestyle. Explore expertly crafted
                        content that inspires and informs. Embrace your unique
                        journey with confidence, only at OSAY.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
