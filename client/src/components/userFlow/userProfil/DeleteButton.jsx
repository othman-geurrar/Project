/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { useDeleteUserMutation } from "../../../redux/Users/userSliceFront";
function DeleteButton({ id }) {
  const [deleteUser, { data, isLoading }] = useDeleteUserMutation();
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-outline btn-success",
      cancelButton: "btn btn-outline btn-error",
    },
    buttonsStyling: false,
  });
  return (
    <>
      <button
        className="border-red-400 bg-white hover:bg-gray-50 px-4 py-2 mt-4 border rounded font-bold"
        type="button"
        onClick={() => {
          swalWithBootstrapButtons
            .fire({
              title: "Are u Sure ?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonText: "Yes, delete it !",
              cancelButtonText: "No, cancel !",
              reverseButtons: true,
            })
            .then((result) => {
              if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
                deleteUser(id);
                // dispatch(deleteproduct(id));
              } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
              ) {
                swalWithBootstrapButtons.fire({
                  title: "Cancelled",
                  text: "Your imaginary file is safe :)",
                  icon: "error",
                });
              }
            });
        }}
      >
        Yes, Delete My Account
      </button>
    </>
  );
}
export default DeleteButton;