import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { ChevronLeft, ChevronRight, Pencil, Plus, Trash2 } from "lucide-react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Modal from "../components/Modal/Modal";
import { fleetServices } from "../services/api/fleetAPI";
import toast from "react-hot-toast";

const Home = () => {
  const [fleets, setFleets] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);
  const [id, setId] = useState();
  const [isModal, setIsModal] = useState(false);
  let fleetId;
  useEffect(() => {
    getFleet(page);
  }, [page, isModal]);
  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };
  const getFleet = async (page) => {
    try {
      const response = await fleetServices.getAllFleets(page);
      console.log(response);
      if (response?.data?.success || response?.data?.data) {
        setFleets(response?.data?.data);
        setTotalPages(response?.data?.totalPages);
        setStartIndex(response?.data?.startIndex);
        setEndIndex(response?.data?.endIndex);
      } else {
        toast.error("fleets are not load");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };
  const navigate = useNavigate();
  const openModal = (id) => {
    setIsModal(true);
    setId(id);
  };

  const deleteFleet = async (fleetId) => {
    console.log(fleetId);
    try {
      const response = await fleetServices.deleteFleet(id);
      console.log(response);
      if (response?.data?.success || response?.data?.data) {
        toast.success(response?.data?.message);
      } else {
        toast.error("fleets are not deleted");
      }
    } catch (error) {
      toast.error(error?.response?.message);
    } finally {
      setIsModal(false);
      getFleet(page);
    }
  };
  return (
    <Layout>
      {isModal && <Modal handleAPI={() => deleteFleet(id)} />}
      <div className="bg-gray-50  row-span-11  mb-10  rounded-3xl">
        <div className="p-4">
          <div className="navbar rounded-lg h-10 bg-gray-100">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
              </div>
              <label className="input w-2/5 input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-7 w-7 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>{" "}
            </div>

            <div className="navbar-end">
              <button
                onClick={() => navigate("/add-fleets")}
                className="btn hover:bg-slate-700 bg-gradient-to-r from-fromgrad to-tograd text-white"
              >
                <Plus />
                Add Fleet
              </button>
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-sm text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Fleet name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Billing Plan
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Support Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Created Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {console.log(fleets.length)}
                {fleets.length === 0 ? (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td
                      colSpan={7}
                      className="font-medium text-sm text-center px-6 py-4"
                    >
                      Data is not available
                    </td>
                  </tr>
                ) : (
                  fleets?.map((item, index) => {
                    return (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item?.name}
                        </th>
                        <td className="font-medium text-sm px-6 py-4">
                          {item?.fleet_type}
                        </td>
                        <td className="font-medium text-sm px-6 py-4">
                          {!item?.billing_plan?.includes(
                            "Private Billing Plan"
                          ) ? (
                            <li className="text-red-300 rounded-[14px] border-[1px] bg-red-50 border-red-300 font-semibold text-sm text-nowrap px-1">
                              {item?.billing_plan}
                            </li>
                          ) : (
                            <li className="text-green-400 rounded-[14px] border-[1px] bg-green-50 border-green-400 font-semibold text-sm text-nowrap px-1 ">
                              {item?.billing_plan}
                            </li>
                          )}
                        </td>
                        <td className="font-medium text-sm px-6 py-4">
                          {item?.address}
                        </td>
                        <td className="font-medium text-sm px-6 py-4">
                          {item?.support_email}
                        </td>
                        <td className="font-medium text-sm px-6 py-4">
                          {new Date(item?.createdAt).toLocaleDateString()}
                        </td>
                        <td className="font-medium text-sm cursor-pointer px-6 py-4 flex space-x-3  items-center">
                          <Link
                            to="edit-fleet"
                            state={{ id: item?._id }}
                            className="cursor-pointer"
                          >
                            <Pencil />
                          </Link>
                          <Trash2 onClick={() => openModal(item?._id)} />
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
          <div className="mb-5 flex justify-end items-center mt-7 mx-3 space-x-4">
            <p>
              {startIndex}-{endIndex} of {totalPages}
            </p>
            <div className="flex space-x-3">
              <div
                className="bg-gray-200 rounded-lg p-4 cursor-pointer"
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
              >
                <ChevronLeft />
              </div>
              <div
                className="bg-gray-200 rounded-lg p-4 cursor-pointer"
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
              >
                <ChevronRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
