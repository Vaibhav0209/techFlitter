import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-transparent">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl">Fleet</a>
        </div>
        <div className="flex-none space-x-8">
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8389 9.82474C16.4095 15.0956 18.6495 16.6884 18.6495 16.6884H1C1 16.6884 3.94158 14.5967 3.94158 7.27537C3.94158 5.61103 4.56141 4.01487 5.66472 2.83802C6.76802 1.66115 8.26442 1 9.82474 1C10.1555 1 10.4834 1.02971 10.8053 1.08775"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.6882 6.88316C18.3128 6.88316 19.6297 5.56616 19.6297 3.94158C19.6297 2.31699 18.3128 1 16.6882 1C15.0635 1 13.7466 2.31699 13.7466 3.94158C13.7466 5.56616 15.0635 6.88316 16.6882 6.88316Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.5213 19.6299C11.3489 19.9271 11.1015 20.1738 10.8037 20.3452C10.506 20.5167 10.1685 20.607 9.82497 20.607C9.4814 20.607 9.1439 20.5167 8.84621 20.3452C8.54852 20.1738 8.30104 19.9271 8.12866 19.6299"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <svg
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_65_174)">
              <path
                d="M2.25 12.5C2.25 13.7804 2.50219 15.0482 2.99217 16.2312C3.48216 17.4141 4.20034 18.4889 5.10571 19.3943C6.01108 20.2997 7.08591 21.0178 8.26884 21.5078C9.45176 21.9978 10.7196 22.25 12 22.25C13.2804 22.25 14.5482 21.9978 15.7312 21.5078C16.9141 21.0178 17.9889 20.2997 18.8943 19.3943C19.7997 18.4889 20.5178 17.4141 21.0078 16.2312C21.4978 15.0482 21.75 13.7804 21.75 12.5C21.75 11.2196 21.4978 9.95176 21.0078 8.76884C20.5178 7.58591 19.7997 6.51108 18.8943 5.60571C17.9889 4.70034 16.9141 3.98216 15.7312 3.49217C14.5482 3.00219 13.2804 2.75 12 2.75C10.7196 2.75 9.45176 3.00219 8.26884 3.49217C7.08591 3.98216 6.01108 4.70034 5.10571 5.60571C4.20034 6.51108 3.48216 7.58591 2.99217 8.76884C2.50219 9.95176 2.25 11.2196 2.25 12.5Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 17.9165V17.9265"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.9987 14.1248C11.9788 13.7731 12.0736 13.4245 12.269 13.1314C12.4644 12.8383 12.7497 12.6166 13.082 12.4998C13.4892 12.3441 13.8547 12.0959 14.1497 11.775C14.4447 11.454 14.6612 11.0689 14.7821 10.6501C14.903 10.2312 14.9251 9.79002 14.8465 9.36121C14.7679 8.9324 14.5909 8.52768 14.3293 8.17891C14.0677 7.83015 13.7288 7.54686 13.3391 7.35136C12.9494 7.15585 12.5197 7.05347 12.0838 7.05226C11.6478 7.05105 11.2175 7.15105 10.8268 7.34439C10.4361 7.53773 10.0955 7.81913 9.83203 8.16644"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_65_174">
                <rect
                  width="26"
                  height="26"
                  fill="white"
                  transform="translate(-1 -0.5)"
                />
              </clipPath>
            </defs>
          </svg>

          <div className="w-10 h-10 bg-pink-300 p-2 rounded-full">
            <p className="text-center font-semibold">VN</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
