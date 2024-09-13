import { ArrowLeft } from "lucide-react";
import React from "react";

const NotFound = () => {
  return (
    <div className="py-10">
      <div className="text-center">
        <p className="text-base font-semibold text-black">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-gray-600">
          Sorry, we couldn&apos:t find the page you&apos;re looking for.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
