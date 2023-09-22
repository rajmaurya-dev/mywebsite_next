import React from "react";

interface pageProps {}

const page: React.FC<pageProps> = () => {
  return (
    <div className="flex-col flex mb-5 lg:m-10 mx-10 justify-center items-center">
      <h1 className="lg:m-10 mt-1 mb-4 text-xl">What have i done?</h1>

      <div className="text-left lg:border-l-1 lg:pl-3 text-gray-400 gap-5 text-md flex-col flex ">
        -- learning right now --
        <div className="">
          <h4 className="decoration-gray-400 text-gray-300 underline-offset-4 underline">
            {" "}
            Present (July - August) 2023{" "}
          </h4>
          <h2 className="colorchange">
            {" "}
            learning Deep Learning && developing website with Next.js
          </h2>
        </div>
        <div className="">
          <h4 className="decoration-gray-400 text-gray-300 underline-offset-4 underline">
            {" "}
            June 2023{" "}
          </h4>
          <h2 className="colorchange">
            learned Android (Flutter) development, was exploring stuff
          </h2>
        </div>
        <div className="">
          <h4 className="decoration-gray-400 text-gray-300 underline-offset-4 underline">
            {" "}
            MAY 2023{" "}
          </h4>
          <h2 className="colorchange">
            learned Frontend and Backend development through free resources
            <br />
            on the internet.
          </h2>
        </div>
        <div className="">
          <h4 className="decoration-gray-400 text-gray-300 underline-offset-4 underline">
            {" "}
            MARCH - APRIL (2023){" "}
          </h4>
          <h2 className="colorchange">React.js Developer</h2>
        </div>
        <div className="">
          <h4 className="decoration-gray-400 text-gray-300 underline-offset-4 underline">
            {" "}
            January - March (2023){" "}
          </h4>
          <h2 className="">Front-End Developer</h2>
        </div>
      </div>
    </div>
  );
};

export default page;
