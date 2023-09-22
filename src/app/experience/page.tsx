import Link from "next/link";
import React from "react";

interface pageProps {}

const page: React.FC<pageProps> = () => {
  return (
    <div className="flex-col flex mb-5 lg:m-10 mx-10 justify-center items-center">
      <h1 className="lg:m-10 mt-1 mb-4 text-xl">What have i done?</h1>

      <div className="text-left lg:border-l-1 lg:pl-3 text-gray-400 gap-5 text-md flex-col flex ">
        -- learning right now --
        <div className="border-b-1 border-dashed pb-2">
          <h4 className="decoration-gray-400 text-gray-300 underline-offset-4 underline">
            {" "}
            [Present] September, 2023{" "}
          </h4>
          <h2 className="colorchange">
            {" "}
            Delving Deep into web Technologies and exploring some opportunities.
          </h2>
          <div>
            <button className="border-1  hover:bg-slate-700 border-slate-700 rounded-sm px-1 mr-2 mt-1">
              Next.js
            </button>
            <button className="border-1 hover:bg-slate-700 border-slate-700 rounded-sm px-1 mr-2 mt-1">
              Data Structures and Algorithms
            </button>
          </div>
        </div>
        <div className="">
          <h4 className="decoration-gray-400 text-gray-300 underline-offset-4 underline">
            {" "}
            July - August (2023){" "}
          </h4>
          <h2 className="colorchange">
            {" "}
            Exploring machine learning while developing Next.js Applications
          </h2>
          <div>
            <button className="border-1  hover:bg-slate-700 border-slate-700 rounded-sm px-1 mr-2 mt-1">
              Next.js
            </button>
            <button className="border-1 hover:bg-slate-700 border-slate-700 rounded-sm px-1 mr-2 mt-1">
              <Link href="https://www.fast.ai/">Machine learning </Link>
            </button>
          </div>
        </div>
        <div className="">
          <h4 className="decoration-gray-400 text-gray-300 underline-offset-4 underline">
            {" "}
            June 2023{" "}
          </h4>
          <h2 className="colorchange">
            learned Android (Flutter) development, was just exploring stuff
          </h2>
          <div>
            <button className="border-1 hover:bg-slate-700  border-slate-700 rounded-sm px-1 mr-2 mt-1">
              Flutter
            </button>
          </div>
        </div>
        <div className="">
          <h4 className="decoration-gray-400 text-gray-300 underline-offset-4 underline">
            {" "}
            MAY 2023{" "}
          </h4>
          <h2 className="colorchange">
            learned Frontend and Backend development through free resources on
            the internet.
          </h2>
          <div>
            <button className="border-1  hover:bg-slate-700 border-slate-700 rounded-sm px-1 mr-2 mt-1">
              Node.js
            </button>
            <button className="border-1 hover:bg-slate-700 border-slate-700 rounded-sm px-1 mr-2 mt-1">
              Database
            </button>
            <button className="border-1 hover:bg-slate-700 border-slate-700 rounded-sm px-1 mr-2 mt-1">
              RestApi
            </button>
          </div>
        </div>
        <div className="">
          <h4 className="decoration-gray-400 text-gray-300 underline-offset-4 underline">
            {" "}
            MARCH - APRIL (2023){" "}
          </h4>
          <h2 className="colorchange">
            learned React.js and various other frontend
            <br /> technologies
          </h2>
          <div>
            <button className="border-1 hover:bg-slate-700  border-slate-700 rounded-sm px-1 mr-2 mt-1">
              React.js
            </button>
            <button className="border-1 hover:bg-slate-700 border-slate-700 rounded-sm px-1 mr-2 mt-1">
              Tailwindcss
            </button>
          </div>
        </div>
        <div className="">
          <h4 className="decoration-gray-400 text-gray-300 underline-offset-4 underline">
            {" "}
            January - March (2023){" "}
          </h4>
          <h2 className="">Learned Front-End Development</h2>
          <div>
            <button className="border-1 hover:bg-slate-700  border-slate-700 rounded-sm px-1 mr-2 mt-1">
              Javascript
            </button>
            <button className="border-1 hover:bg-slate-700 border-slate-700 rounded-sm px-1 mr-2 mt-1">
              Java
            </button>
            <button className="border-1 hover:bg-slate-700 border-slate-700 rounded-sm px-1 mr-2 mt-1">
              Basic webdev not worth mentioning
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
