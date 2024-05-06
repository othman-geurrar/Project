/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { deleteuser } from "../../redux/Users/usersSlice";
export function Deletebutton({ id }) {
  const dispatch = useDispatch();
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-outline btn-success",
      cancelButton: "btn btn-outline btn-error",
    },
    buttonsStyling: false,
  });
  return (
    <>
      <button>
        <button
          className=" text-500"
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
                  dispatch(deleteuser(id));
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
          <i className="fa-solid fa-trash" style={{ color: "#ff0000" }}></i>{" "}
        </button>
      </button>
    </>
  );
}