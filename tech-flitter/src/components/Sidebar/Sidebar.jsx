import React from "react";
import logo from "../../images/hyundai.png";
import { BarChart, Wallet } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-full flex flex-col items-center p-4 overflow-y-auto ">
      <div className="">
        <img src={logo} alt="hyundai logo" />
      </div>
      <div className="w-full p-9">
        <div className="flex space-x-1 mt-5 ml-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 17L6 12L11 7"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18 17L13 12L18 7"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="font-medium">Slide</p>
        </div>
        <div className="mt-9">
          <div className="bg-white w-3/4 p-2 rounded-2xl flex items-center space-x-3">
            <svg
              width="25"
              height="26"
              viewBox="0 0 25 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6.83833C1 6.09957 1.59957 5.5 2.33833 5.5H9.47611C10.2149 5.5 10.8144 6.09957 10.8144 6.83833V11.2994C10.8144 12.0382 10.2149 12.6378 9.47611 12.6378H2.33833C1.98339 12.6378 1.64298 12.4968 1.39199 12.2458C1.141 11.9948 1 11.6544 1 11.2994V6.83833ZM15.2756 8.62278C15.2756 7.88402 15.8751 7.28444 16.6139 7.28444H22.8594C23.5982 7.28444 24.1978 7.88402 24.1978 8.62278V18.4372C24.1978 19.176 23.5982 19.7756 22.8594 19.7756H16.6139C16.2589 19.7756 15.9185 19.6346 15.6675 19.3836C15.4166 19.1326 15.2756 18.7922 15.2756 18.4372V8.62278ZM2.78444 17.545C2.78444 16.8062 3.38402 16.2067 4.12278 16.2067H10.3683C11.1071 16.2067 11.7067 16.8062 11.7067 17.545V20.2217C11.7067 20.9604 11.1071 21.56 10.3683 21.56H4.12278C3.76783 21.56 3.42742 21.419 3.17643 21.168C2.92545 20.917 2.78444 20.5766 2.78444 20.2217V17.545Z"
                stroke="#283246"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="text-black font-medium">Fleets</p>
          </div>
        </div>
      </div>
      {/* <div className="w-full flex justify-center">
        <nav className="">
          <h4 className="">
            <p className="text-sm">
              <svg
                className="inline"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 17L6 12L11 7"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 17L13 12L18 7"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Slide
            </p>
          </h4>
          <div className="">
            <ul className="">
              <li className="bg-white w-1/2 flex space-x-3 rounded-2xl">
                <span>
                  <svg
                    width="25"
                    height="26"
                    viewBox="0 0 25 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 6.83833C1 6.09957 1.59957 5.5 2.33833 5.5H9.47611C10.2149 5.5 10.8144 6.09957 10.8144 6.83833V11.2994C10.8144 12.0382 10.2149 12.6378 9.47611 12.6378H2.33833C1.98339 12.6378 1.64298 12.4968 1.39199 12.2458C1.141 11.9948 1 11.6544 1 11.2994V6.83833ZM15.2756 8.62278C15.2756 7.88402 15.8751 7.28444 16.6139 7.28444H22.8594C23.5982 7.28444 24.1978 7.88402 24.1978 8.62278V18.4372C24.1978 19.176 23.5982 19.7756 22.8594 19.7756H16.6139C16.2589 19.7756 15.9185 19.6346 15.6675 19.3836C15.4166 19.1326 15.2756 18.7922 15.2756 18.4372V8.62278ZM2.78444 17.545C2.78444 16.8062 3.38402 16.2067 4.12278 16.2067H10.3683C11.1071 16.2067 11.7067 16.8062 11.7067 17.545V20.2217C11.7067 20.9604 11.1071 21.56 10.3683 21.56H4.12278C3.76783 21.56 3.42742 21.419 3.17643 21.168C2.92545 20.917 2.78444 20.5766 2.78444 20.2217V17.545Z"
                      stroke="#283246"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-black">Fleet</span>
              </li>
            </ul>
          </div>
        </nav>
      </div> */}
      {/* <div className="mt-6 w-full  items-center flex flex-1 flex-col justify-between">
        <nav className="space-y-6 w-3/5">
          <h4 className="w-3/5 text-center">
            <p className="text-sm">
              <svg
                className="inline"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 17L6 12L11 7"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 17L13 12L18 7"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Slide
            </p>
          </h4>
          <div className="space-y-3 ">
            <a
              className="flex transform items-center rounded-lg px-3 py-2 bg-white text-black  transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
              href="#"
            >
              <BarChart className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Dashboard</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Wallet className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Sales</span>
            </a>
          </div>
        </nav>
      </div> */}
    </aside>
  );
};

export default Sidebar;
