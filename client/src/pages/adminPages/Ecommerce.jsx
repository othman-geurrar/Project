
import { GoDotFill } from "react-icons/go";



import { SparkLine, Stacked } from "../../components";

import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../../data/data";
import GroupIcon from "@mui/icons-material/Group";
import { MdProductionQuantityLimits } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ls1 from "../../assets/img/sport_ls.png";
import ls2 from "../../assets/img/Fashion_ls.png";
import ls3 from "../../assets/img/metal_ls.png";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheckDollar } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const Ecommerce = () => {
  return (
    <div>
      <div className="flex flex-wrap mt-10 p-4">
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                    PRODUCTS
                  </h5>
                  <span className="font-semibold text-xl text-blueGray-700">
                    50
                  </span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                    <MdProductionQuantityLimits />
                  </div>
                </div>
              </div>
              <p className="text-sm text-blueGray-400 mt-4">
                <span className="text-emerald-500 mr-2">
                  <i className="fas fa-arrow-up"></i> 3.48%
                </span>
                <span className="whitespace-nowrap">Since last month</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                    USERS
                  </h5>
                  <span className="font-semibold text-xl text-blueGray-700">
                    10
                  </span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500">
                    <GroupIcon />
                  </div>
                </div>
              </div>
              <p className="text-sm text-blueGray-400 mt-4">
                <span className="text-emerald-500 mr-2">
                <i className="fas fa-arrow-up"></i> 3.48%
                </span>
                <span className="whitespace-nowrap">Since last week</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                    ORDERS
                  </h5>
                  <span className="font-semibold text-xl text-blueGray-700">
                    3
                  </span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
                    <FontAwesomeIcon icon={faBasketShopping} />
                  </div>
                </div>
              </div>
              <p className="text-sm text-blueGray-400 mt-4">
                <span className="text-orange-500 mr-2">
                  {/* <i className="fas fa-arrow-down"></i>  */}
                </span>
                <span className="whitespace-nowrap">  </span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                    SALES REVENUE
                  </h5>
                  <span className="font-semibold text-xl text-blueGray-700">
                    20,65%
                  </span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-teal-500">
                    <FontAwesomeIcon icon={faMoneyCheckDollar} />
                  </div>
                </div>
              </div>
              <p className="text-sm text-blueGray-400 mt-4">
                <span className="text-emerald-500 mr-2">
                  <i className="fas fa-arrow-up"></i> 12%
                </span>
                <span className="whitespace-nowrap">Since last month</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className=" bg-slate-100 dark:text-gray-200 dark:bg-secondary-dark-bg m-3 mt-10 p-4 rounded-2xl md:w-780 xl:w-1000 ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-xl md:text-3xl font-semibold">
                    $3,438
                  </span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
                    23%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p>
                  <span className="text-xl md:text-3xl font-semibold">
                    $1,508
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-5 ">
                <SparkLine
                  currentColor="black"
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="blue"
                />
              </div>
            </div>
            <div className="">
              <Stacked width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-10 p-2">
        <div className="flex items-center justify-center mb-4  ">
          <span className="text-xl  text-teal-700 font-bold">
            {" "}
            New Life Style
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8 md:justify-center md:pl-6 md:pr-6 md-flex md:flex-wrap ">
          <div className=" flex flex-col break-words rounded-xl pb-2	 bg-white rounded mb-6 xl:mb-0 shadow-lg h-full w-80">
            <div className="rounded-lg ">
              <img src={ls1} className="" />
            </div>
            <div className=" mt-2 self-center">
              <span className="text-xl  text-gray-700 font-bold dark:text-warning-50 dark:text-warning-50">
                {" "}
                Sporty Fashion
              </span>
            </div>
            <div className="mt-5  pl-4 pr-4 flex gap-2 text-gray-700  font-semibold">
              <MdProductionQuantityLimits className="mt-1 " />
              <p> Products Sold : </p>
              <h3 className="text-teal-700"> 34</h3>
            </div>
            <div className=" mt-5 pl-4 pr-4 flex gap-2 text-gray-700  font-semibold">
              <FontAwesomeIcon icon={faMoneyCheckDollar} className="mt-1" />
              <p> Revenue : </p>
              <h3 className="text-teal-700">250</h3>
              <FontAwesomeIcon
                className="text-yellow-400 mt-1"
                icon={faDollarSign}
              />
            </div>
            <div className="mt-5  pl-4 pr-4 flex gap-2 text-gray-700  font-semibold">
              <FontAwesomeIcon icon={faBasketShopping} className="mt-1" />
              <p> Order Done : </p>
              <h3 className="text-teal-700"> 26</h3>
            </div>
          </div>

          <div className=" flex flex-col break-words rounded-xl pb-2 bg-white rounded mb-6 xl:mb-0 shadow-lg h-full w-80">
            <div className="rounded-lg ">
              <img src={ls2} className="" />
            </div>
            <div className=" mt-2 self-center">
              <span className="text-xl  text-gray-700 font-bold">
                {" "}
                Fashion and Style
              </span>
            </div>
            <div className="mt-5  pl-4 pr-4 flex gap-2 text-gray-700  font-semibold">
              <MdProductionQuantityLimits className="mt-1 " />
              <p> Products Sold : </p>
              <h3 className="text-teal-700"> 55</h3>
            </div>
            <div className=" mt-5 pl-4 pr-4 flex gap-2 text-gray-700  font-semibold">
              <FontAwesomeIcon icon={faMoneyCheckDollar} className="mt-1" />
              <p> Revenue : </p>
              <h3 className="text-teal-700">780</h3>
              <FontAwesomeIcon
                className="text-yellow-400 mt-1"
                icon={faDollarSign}
              />
            </div>
            <div className="mt-5  pl-4 pr-4 flex gap-2 text-gray-700  font-semibold">
              <FontAwesomeIcon icon={faBasketShopping} className="mt-1" />
              <p> Order Done : </p>
              <h3 className="text-teal-700"> 46</h3>
            </div>
          </div>

          <div className=" flex flex-col break-words rounded-xl	pb-2 bg-white rounded mb-6 xl:mb-0 shadow-lg h-full w-80">
            <div className="rounded-lg ">
              <img src={ls3} className="" />
            </div>
            <div className=" mt-2 self-center">
              <span className="text-xl  text-gray-700 font-bold dark:text-warning-50">
                {" "}
                Metal
              </span>
            </div>
            <div className="mt-5  pl-4 pr-4 flex gap-2 text-gray-700  font-semibold">
              <MdProductionQuantityLimits className="mt-1 " />
              <p> Products Sold : </p>
              <h3 className="text-teal-700"> 15</h3>
            </div>
            <div className=" mt-5 pl-4 pr-4 flex gap-2 text-gray-700  font-semibold">
              <FontAwesomeIcon icon={faMoneyCheckDollar} className="mt-1" />
              <p> Revenue : </p>
              <h3 className="text-teal-700">200</h3>
              <FontAwesomeIcon
                className="text-yellow-400 mt-1"
                icon={faDollarSign}
              />
            </div>
            <div className="mt-5  pl-4 pr-4 flex gap-2 text-gray-700  font-semibold">
              <FontAwesomeIcon icon={faBasketShopping} className="mt-1" />
              <p> Order Done : </p>
              <h3 className="text-teal-700"> 15</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
