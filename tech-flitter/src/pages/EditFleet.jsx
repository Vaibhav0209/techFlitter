import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import { Link, useLocation } from "react-router-dom";
import { Svgs1, Svg2, Svg3, Svg4 } from "../components/SVGS/Svgs";
import FormField from "../components/Form/FormField";
import { useForm } from "react-hook-form";
import Loader from "../components/loader/Loader";
import toast from "react-hot-toast";
import { fleetServices } from "../services/api/fleetAPI";

const EditFleet = () => {
  const [tabValue, setTabValue] = useState(1);
  const [isloading, setIsLoading] = useState(false);
  const [fleet, setFleet] = useState({});
  const location = useLocation();
  const { id } = location.state || {};
  console.log(id);
  const adminCard = [
    {
      svg: <Svgs1 />,
      title: "Total vehicle",
      count: 50,
    },
    {
      svg: <Svg2 />,
      title: "Total Trips",
      count: 16,
    },
    {
      svg: <Svg3 />,
      title: "Total Trips",
      count: "06",
    },
    {
      svg: <Svg4 />,
      title: "Revenue Generated",
      count: "$50",
    },
  ];

  useEffect(() => {
    const getFleet = async () => {
      try {
        const response = await fleetServices.getFleet(id);
        console.log(response);
        if (response?.data?.success || response?.data?.data) {
          setFleet(response?.data?.data);
        } else {
          toast.error("fleets are not load");
        }
      } catch (error) {
        console.log(error);
        toast.error(error?.response?.data?.message);
      }
    };
    getFleet();
    reset(fleet);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onhandleSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await fleetServices?.changeFleet(data);
      if (response?.data?.success) {
        toast.success(response?.data?.message);
      } else {
        toast.error("please try again later");
      }
      setIsLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      setIsLoading(false);
    }
  };
  const onError = (errors) => {
    if (Object.keys(errors).length > 0) {
      const message = errors[Object.keys(errors)[0]].message;
      toast.error(message);
    }
  };
  return (
    <Layout>
      <div className="row-span-11 grid grid-rows-12 relative">
        <div className="row-span-4 rounded-3xl mb-7 bg-gray-100">
          <Link to="/">
            <div className="p-4 cursor-pointer">
              <div className="flex justify-start px-4 items-center space-x-4 font-medium">
                <svg
                  width="27"
                  height="20"
                  viewBox="0 0 27 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.359331 9.10089L8.95033 0.35089C9.18179 0.123193 9.49181 -0.00280077 9.8136 4.72531e-05C10.1354 0.00289528 10.4432 0.134357 10.6708 0.366117C10.8983 0.597877 11.0274 0.911392 11.0302 1.23914C11.033 1.56688 10.9093 1.88264 10.6857 2.11839L4.18969 8.73464H25.7727C26.0982 8.73464 26.4104 8.86634 26.6405 9.10076C26.8707 9.33518 27 9.65312 27 9.98464C27 10.3162 26.8707 10.6341 26.6405 10.8685C26.4104 11.1029 26.0982 11.2346 25.7727 11.2346H4.18969L10.6857 17.8509C10.8029 17.9662 10.8964 18.1041 10.9607 18.2566C11.0251 18.4091 11.0589 18.5732 11.0603 18.7391C11.0618 18.9051 11.0307 19.0697 10.969 19.2233C10.9073 19.377 10.8161 19.5165 10.7009 19.6339C10.5857 19.7513 10.4487 19.8441 10.2978 19.9069C10.147 19.9698 9.98539 20.0014 9.82243 20C9.65947 19.9985 9.49843 19.964 9.3487 19.8985C9.19896 19.833 9.06354 19.7378 8.95033 19.6184L0.359331 10.8684C0.129251 10.634 0 10.3161 0 9.98464C0 9.65318 0.129251 9.3353 0.359331 9.10089Z"
                    fill="#535A6A"
                  />
                </svg>

                <h3 className="text-2xl font-medium">
                  Shyamal Road Public Fleet
                </h3>
              </div>
            </div>
          </Link>
          <div className="grid grid-cols-4 gap-4   p-4 place-items-center">
            {adminCard?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex justify-center w-4/5 p-5 rounded-2xl shadow-md bg-white h-6/6 space-y-3  items-center flex-col"
                >
                  <div className="p-4 bg-gray-100 rounded-full">
                    {item?.svg}
                  </div>
                  <p className=" font-medium">{item?.title}</p>
                  <p className="text-2xl">{item?.count}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="row-span-8 mb-4 rounded-3xl bg-gray-100">
          <div className="border m-6 w-1/4 flex justify-center items-center rounded-xl">
            <span
              className={` px-4 py-2 inline-block rounded-xl  w-1/2 cursor-pointer ${
                tabValue === 1 ? "bg-main text-white" : "text-red-400"
              }`}
              onClick={() => {
                setTabValue(1);
              }}
            >
              Fleet Information
            </span>
            <span
              className={`w-1/2 rounded-xl   px-4 py-2 inline-block cursor-pointer  ${
                tabValue === 2 ? "bg-main text-white" : "text-red-400"
              }`}
              onClick={() => {
                setTabValue(2);
              }}
            >
              Advance Settings
            </span>
          </div>
          <form
            className="p-6 flex flex-col "
            onSubmit={handleSubmit(onhandleSubmit, onError)}
          >
            <div className="grid grid-cols-3  gap-3">
              {tabValue == 1 ? (
                <>
                  <FormField
                    label="Name"
                    type="text"
                    placeholder="Shyamal Cross Road Public Fleet"
                    name="name"
                    required="Name is required"
                    register={register}
                    id="street-name"
                  />
                  <FormField
                    label="Support Email"
                    type="email"
                    placeholder="admin@gmail.com"
                    name="support_email"
                    required="support email is required"
                    id="support-email"
                    register={register}
                    pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
                    patternMessage="Invalid email"
                  />
                  <FormField
                    label="Alert Email"
                    type="email"
                    placeholder="admin@gmail.com"
                    name="alert_email"
                    required="alert email is required"
                    id="alert-email"
                    register={register}
                    pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
                    patternMessage="Invalid email"
                  />
                  <FormField
                    label="Fleet Type"
                    isSelect={true}
                    name="fleetType"
                    required="fleet type is requiured"
                    register={register}
                    option={["Public", "Private"]}
                    id="fleet-type"
                  />
                  <FormField
                    label="Billing Plan"
                    isSelect={true}
                    name="BillingPlan"
                    required="billing plan is required"
                    option={["Private Billing Plan", "Public Billing Plan"]}
                    id="billing-type"
                    register={register}
                  />
                  <FormField
                    label="Support Phone Number"
                    type="text"
                    placeholder="9023124567"
                    name="suppport_phone_number"
                    required="Support phone number is required"
                    id="support-number"
                    register={register}
                    pattern={/^\d{10}$/}
                    patternMessage="Invalid Phonenumber"
                  />
                  <FormField
                    label="Address"
                    isTextArea={true}
                    placeholder="Shyamal Cross Roads, 132 Feet Ring Rd, Swinagar Society, Nehru Nagar, Shyamal, Ahmedabad, Gujarat 380015"
                    name="address"
                    required="address is required"
                    id="address"
                    register={register}
                  />
                </>
              ) : (
                <>
                  <FormField
                    label="Parking requirement"
                    isSelect={true}
                    name="parking_requirement"
                    required={false}
                    option={["Not required", "required"]}
                    id="Parking-requirement"
                    register={register}
                  />
                  <FormField
                    label="Auto end ride - idle vehicle "
                    type="text"
                    placeholder="Not required"
                    name="idel_vehicle"
                    required={false}
                    id="auto-ride"
                    register={register}
                  />
                  <FormField
                    label="Auto end ride - paused vehicle "
                    type="text"
                    placeholder="required"
                    name="paused_vehicle"
                    required={false}
                    id="paused-vehicle"
                    register={register}
                  />
                  <FormField
                    label="Auto end ride - critical battery vehicle "
                    isSelect={true}
                    name="critical_bettery"
                    required={false}
                    option={["Applicable", "Not Applicable"]}
                    id="criticleBattery"
                    register={register}
                  />
                  <FormField
                    label="Low battery level"
                    isSelect={true}
                    name="low_bettery"
                    required={false}
                    option={["10%", "30%", "50%"]}
                    id="lowbattery"
                    register={register}
                  />
                  <FormField
                    label="Auto close vehicle"
                    isSelect={true}
                    name="autoclose"
                    required={false}
                    option={["Yes", "No"]}
                    id="auto-close"
                    register={register}
                  />
                  <FormField
                    label="Distance to unlock & lock vehicle "
                    isSelect={true}
                    name="distance_lock"
                    required={false}
                    option={["30 meter", "50 meter", "100 meter"]}
                    id="ditanceLock"
                    register={register}
                  />
                  <FormField
                    label="Pause ride"
                    isSelect={true}
                    name="pauseride"
                    required={false}
                    option={["Yes", "No"]}
                    id="pauseRide"
                    register={register}
                  />
                </>
              )}
            </div>
            <div className="p-6 space-x-3 bottom-10 absolute">
              <button
                type="submit"
                disabled={isloading}
                className="btn w-40 text-sm c hover:bg-slate-700 bg-gradient-to-r p-2 from-fromgrad to-tograd text-white"
              >
                {isloading ? <Loader /> : "Save"}
              </button>

              <button
                type="reset"
                className="btn w-40 text-sm  text-main border-2 border-main"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default EditFleet;
