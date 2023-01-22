import React from "react";

export default function index() {
  return (
    <div className="py-4 px-48 mx-4 flex justify-between w-full z-50">
      <div>
      <a href="https://flowbite.com/" className="flex items-center">
  <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
  <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
</a>

      </div>
      <div>
        <button
          type="button"
          className="text-white bg-gray-900 hover:text-gray-600 hover:border-gray-900 hover:border hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300  rounded-full text-sm px-5 py-1.5 mr-2 mb-2 "
        >
         Sign in
        </button>
      </div>
    </div>
  );
}
