/* eslint-disable react/prop-types */

export default function TableOrderStatus({ status }) {
    // let bg;
    let iconstatus;
    if (status == "completed") {
      // bg = "#23BC06";
      iconstatus = <i className="fa-regular fa-circle-check ml-1" />;
      return (
        <>
          <span className="inline-block whitespace-nowrap rounded-full bg-success-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-success-700 dark:bg-green-950 dark:text-success-500/80">
            {status}
            {iconstatus}
          </span>
        </>
      );
    }
    if (status == "pending") {
      // bg = "#9CAFAA";
      iconstatus = <i className="fa-regular fa-hourglass-half ml-1" />;
      return (
        <>
          <span className=" w-[95px] inline-block whitespace-nowrap rounded-full bg-primary-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700 dark:bg-slate-900 dark:text-primary-500">
            {status}
            {iconstatus}
          </span>
        </>
      );
    }
    if (status == "canceled") {
      // bg = "#A0153E";
      iconstatus = <i className="fa-solid fa-ban ml-1"></i>;
      return (
        <>
          <span className=" w-[95px] inline-block whitespace-nowrap rounded-full bg-danger-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-danger-700 dark:bg-[#2c0f14] dark:text-danger-500 ">
            {status}
            {iconstatus}
          </span>
        </>
      );
    }
  }
  {
    /* <button
          type="button"
          style={{ background: bg }}
          className="text-white w-50 py-1 px-2 capitalize rounded-2xl text-center  "
        > */
  }
  
  {
    /* </button> */
  }