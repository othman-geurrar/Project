/* eslint-disable react/prop-types */
import { useEffect } from "react";
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
  // Filter,
  // IFilter,
  // VirtualScroll,
  // Sort,
} from "@syncfusion/ej2-react-grids";

import { useDispatch, useSelector } from "react-redux";
import { getorders, deleteorder } from "../redux/Orders/orderSlice";
import Header from "../components/Header";

function Orders() {
  const toolbarOptions = ["Search"];
  const { error, isLoading, orders } = useSelector((state) => state.Orders);
  const dispatch = useDispatch();

  function deletebutton({ id }) {
    return (
      <>
        {
          <button
            type="button"
            className="text-white w-20 py-1 px-2 bg-red-700 capitalize rounded-2xl text-md "
            onClick={() => dispatch(deleteorder(id))}
          >
            <span className="mr-1">Delete</span>
            <i className="fa-solid fa-trash" />
          </button>
        }
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
    // <img
    //   className="rounded-xl h-20 md:ml-3 object-conatin "
    //   src={props.user.userPic}
    //   alt="order-item"
    // />
  );

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
      width: "120",
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
      width: "150",
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
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-slate-200 rounded-3xl ">
        <Header category="Page" title="Orders" />
        {isLoading ? (
          <>
            <span> Uploading Data</span>
            <span className="loading loading-spinner text-error"></span>
          </>
        ) : error ? (
          <>
            <h3>{error}</h3>
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
                <ColumnDirective key={index} {...item} />
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
