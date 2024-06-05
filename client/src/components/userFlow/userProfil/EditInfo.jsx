/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEditAccountMutation } from "../../../redux/Users/userSliceFront";

const EditInfo = ({ user }) => {
  // ZOD
  const schema = z.object({
    PhoneNumber: z.string(),
    FullName: z.string().min(4),
    zipcode: z.string(),
    city: z.string(),
    Street: z.string(),
    
  });
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
  });
  const [updateEmailUsername, { isLoading, data }] = useEditAccountMutation();
  const handleEditAccount = (formData) => {
    console.log(formData);
    updateEmailUsername({ id: user.id, formData });
  };
  return (
    <div className="max-w-2xl px-4  sm:px-6 lg:px-8  mx-auto">
      {isLoading ? (
        <>...Loading</>
      ) : (
        <div
          className="bg-white rounded-xl  sm:p-7"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
          }}
        >
          <form onSubmit={handleSubmit(handleEditAccount)}>
            {/* Section */}
            <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
              <label
                htmlFor="af-payment-billing-contact"
                className="inline-block text-sm font-medium"
              >
                Billing contact
              </label>
              <div className="mt-2 space-y-3">
                <input
                  id="af-payment-billing-contact"
                  type="text"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Full Name"
                  defaultValue={user?.FullName}
                  {...register("FullName")}
                />
                <input
                  type="number"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Phone Number"
                  defaultValue={user?.PhoneNumber}
                  {...register("PhoneNumber")}
                />
              </div>
            </div>
            {/* End Section */}
            {/* Section */}
            <div className="py-6 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200">
              <label
                htmlFor="af-payment-billing-address"
                className="inline-block text-sm font-medium"
              >
                Billing address
              </label>
              <div className="mt-2 space-y-3">
                <input
                  id="af-payment-billing-address"
                  type="text"
                  className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Street Address"
                  defaultValue={user.Street ? user.Street : ""}
                  {...register("Street")}
                />
                <div className="grid sm:flex gap-3">
                  <input
                    type="number"
                    className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Zip Code"
                    defaultValue={user?.zipcode}
                    {...register("zipcode")}
                  />
                  <select
                    defaultValue={user.city ? user.city : ""}
                    {...register("city")}
                    className="py-2 px-3 pe-9 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    <option value="" disabled selected hidden>
                      City
                    </option>
                    <option value="Casablanca">Casablanca</option>
                    <option value="Mohemmadia">Mohemmadia</option>
                    <option value="Agadir">Agadir</option>
                  </select>
                </div>
              </div>
            </div>
            {/* End Section */}
            <div className="mt-5 flex justify-end gap-x-2">
              <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                Save Changes
              </button>
            </div>
            {/* End Section */}
          </form>
        </div>
      )}
    </div>
  );
};

export default EditInfo;