import NavBar from "../components/NavBar";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import logo from "../assets/img/logo2.png";
import { useNavigate } from "react-router-dom";
import { useAddAdminMutation } from "../redux/services/adminApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const schema = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8),
  firstName: zod.string().min(2),
  lastName: zod.string().min(2),
});

const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [addAdmin, { data, isLoading, error, isError, isSuccess }] =
    useAddAdminMutation();

  const handleRegister = async (formData) => {
    console.log(formData);
    try {
      await addAdmin(formData).unwrap();
    } catch (error) {
      console.log(error);
    }
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
      navigate("/");
    }
  }, [isSuccess, isError, error, data, navigate]);

  return (
    <>
      <ToastContainer />
      <div className="h-screen bg-neutral-200 dark:bg-neutral-700">
        <div className="mx-auto">
          <div className="flex justify-center px-6 py-12">
            <div className="w-full mt-10 xl:w-3/4 lg:w-11/12 flex">
              <div
                className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden md:block lg:block lg:w-7/12 bg-cover rounded-l-lg"
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
                <h3 className="py-4 text-2xl text-center text-gray-800 mt-10 dark:text-white">
                  Create an Account!
                </h3>
                <form
                  className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded"
                  onSubmit={handleSubmit(handleRegister)}
                >
                  <div className="mb-6 md:flex md:justify-between ">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                        htmlFor="firstName"
                      ></label>
                      <TextBoxComponent
                        placeholder="First Name"
                        cssClass="e-outline"
                        floatLabelType="Auto"
                        {...register("firstName")}
                      />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                        htmlFor="lastName"
                      ></label>
                      <TextBoxComponent
                        placeholder="Last name"
                        cssClass="e-outline"
                        floatLabelType="Auto"
                        {...register("lastName")}
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      htmlFor="email"
                    ></label>
                    <TextBoxComponent
                      placeholder="Email Address"
                      cssClass="e-outline"
                      floatLabelType="Auto"
                      {...register("email")}
                    />
                  </div>
                  <div className="mb-6 ">
                    <div className="col-xs-6 col-sm-6 col-lg-6 col-md-6 mb-5">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                        htmlFor="password"
                      ></label>
                      <TextBoxComponent
                        placeholder="Password"
                        cssClass="e-outline"
                        floatLabelType="Auto"
                        type="password"
                        {...register("password")}
                      />
                    </div>
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-teal-600 rounded-full mt-4 hover:bg-teal-500 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Register Account
                    </button>
                    <button
                      className="w-full px-4 py-2 font-bold mt-4 text-white bg-teal-600 rounded-full hover:bg-teal-500 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                      onClick={()=> navigate("/ecommerce")}
                    >
                      Back To Dashboard
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