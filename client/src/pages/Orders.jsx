/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Swal from "sweetalert2";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Inject,
  CommandColumn,
  Sort,
  ContextMenu,
  Toolbar,
  Page,
} from "@syncfusion/ej2-react-grids";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { DropDownButtonComponent } from "@syncfusion/ej2-react-splitbuttons";

import { useDispatch, useSelector } from "react-redux";
import { getorders, deleteorder } from "../redux/Orders/orderSlice";
import Header from "../components/Header";

function Orders() {
  const toolbarOptions = ["Search"];
  const { error, isLoadingorders, orders } = useSelector(
    (state) => state.Orders
  );
  const dispatch = useDispatch();

  function deletebutton({ id }) {
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
          type="button"
          className="text-white w-20 py-1 px-2 bg-red-700 capitalize rounded-2xl text-md "
          onClick={() => {
            swalWithBootstrapButtons
              .fire({
                title:
                  'Are u Sure ?',
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
                  dispatch(deleteorder(id));
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
          <span className="mr-1">Delete</span>
          <i className="fa-solid fa-trash" />
        </button>
      </>
    );
  }
  function gridOrderStatus({ orderStatus }) {
    let bg;
    let status;
    if (orderStatus == "completed") {
      bg = "#23BC06";
      status = <i className="fa-regular fa-circle-check ml-1" />;
    }
    if (orderStatus == "pending") {
      bg = "#9CAFAA";
      status = <i className="fa-regular fa-hourglass-half ml-1" />;
    }
    if (orderStatus == "canceled") {
      bg = "#A0153E";
      status = <i className="fa-solid fa-xmark ml-1" />;
    }

    return (
      <>
        <button
          type="button"
          style={{ background: bg }}
          className="text-white w-50 py-1 px-2 capitalize rounded-2xl text-center  "
        >
          {orderStatus}
          {status}
        </button>
      </>
    );
  }
  const gridOrderImage = (props) => (
    <div className="avatar">
      <div className="w-24 rounded-full">
        <img src={props.user.userPic} alt="order-item" />
      </div>
    </div>
  );
  const gridOrderProducts = (props) => {
    const itemTemplate = (data) => {
      return (
        <>
          <div className="p-[10px] text-black">
            <div className="flex gap-[20px] items-center">
              <div className="avatar">
                <div className="w-[40px] rounded-full">
                  <img src={props.user.userPic} alt="order-item" />
                </div>
              </div>
              <div>{data.productName}</div>
              <div>{data.productQuantity}</div>
            </div>
          </div>
        </>
      );
    };
    const headerTemplate = () => {
      return (
        <>
          <div className="p-[10px] text-black flex gap-[20px] items-center">
            <div>Picture</div>
            <div>ProductName</div>
            <div>ProuductQuantity</div>
          </div>
        </>
      );
    };
    return (
      <div className="">
        <DropDownListComponent
          placeholder={props.products.length + " Products"}
          dataSource={props.products}
          itemTemplate={itemTemplate}
          headerTemplate={headerTemplate}
          // popupSettings={{ cssClass: "color:white;" }}
          popupHeight="200px"
          popupWidth="auto"
        ></DropDownListComponent>
      </div>
    );
  };

  const ordersGrid = [
    {
      field: "Image",
      headerText: "Costumer",
      template: gridOrderImage,
      textAlign: "Center",
      width: "120",
    },
    {
      field: "user",
      headerText: "Costumer Name",
      width: "125",
      template: ({ user }) => {
        return user.userName;
      },
      textAlign: "Center",
    },
    {
      field: "createdAt",
      headerText: "Order Date",
      width: "150",
      editType: "dropdownedit",
      textAlign: "Center",
    },
    {
      field: "user",
      headerText: "Customer ID",
      width: "150",
      template: ({ user }) => user.userId,
      textAlign: "Center",
    },
    {
      field: "totalPrice",
      headerText: "Total Price",
      format: "C2",
      textAlign: "Center",
      editType: "numericedit",
      width: "110",
    },
    {
      headerText: "Products",
      template: gridOrderProducts,
      field: "products",
      textAlign: "Center",
      width: "120",
    },
    {
      headerText: "Status",
      template: gridOrderStatus,
      field: "orderStatus",
      textAlign: "Center",
      width: "120",
    },
    {
      field: "id",
      headerText: "Order ID",
      width: "120",
      textAlign: "Center",
    },
    {
      headerText: "Manage Records",
      width: "160px",
      template: deletebutton,
      textAlign: "Center",
    },
  ];

  useEffect(() => {
    dispatch(getorders());
  }, [dispatch]);

  return (
    <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-slate-200 rounded-3xl  ">
        <Header category="Page" title="Orders" />
        {isLoadingorders ? (
          <>
            <div className="flex items-center justify-center">
              <span className="mr-[20px]">Orders Uploading</span>
              <span className="loading loading-spinner text-accent"></span>
            </div>
          </>
        ) : error ? (
          <>
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          </>
        ) : (
          <GridComponent
            dataSource={orders}
            pageSettings={{ pageSize: 3 }}
            toolbar={toolbarOptions}
            allowPaging
            allowSorting
          >
            <ColumnsDirective>
              {ordersGrid.map((item, index) => (
                <ColumnDirective
                  key={index}
                  {...item}
                  style={{ position: "relative" }}
                />
              ))}
            </ColumnsDirective>

            <Inject
              services={[Toolbar, CommandColumn, Sort, Page, ContextMenu]}
            />
          </GridComponent>
        )}
      </div>
    </>
  );
}
export default Orders;
