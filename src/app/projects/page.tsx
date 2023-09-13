import React from "react";

interface pageProps {}

const page: React.FC<pageProps> = () => {
  return (
    <div className="flex-col flex m-20 justify-center items-center">
      <h1 className="mb-10 text-xl"> Here are some of my Projects</h1>
      <div className="text-left text-gray-400 gap-5 text-md flex-col flex ">
        <div className="">
          <h2 className="decoration-gray-400 text-gray-300 underline-offset-4 underline">
            <a
              href="https://github.com/rohit-sama/next-chat"
              rel="noreferrer"
              target="_blank"
            >
              NEXT-CHAT
            </a>
          </h2>
          <p className="">
            The Ultimate Real-Time Chat Application for Dark Theme Enthusiasts,
            <br />
            Powered by NextAuth!
          </p>
        </div>

        <div className="">
          <h2 className="decoration-gray-400 text-gray-300 underline-offset-4 underline">
            <a
              href="https://github.com/rohit-sama/OtakuPlace"
              rel="noreferrer"
              target="_blank"
            >
              OTAKUPLACE
            </a>
          </h2>
          <p className="">
            designed for all the anime and manga lovers out there who are
            <br />
            seeking unique travel destinations that resonate with their passions
          </p>
        </div>

        <div className="">
          <h2 className="decoration-gray-400 text-gray-300 underline-offset-4 underline">
            <a
              href="https://github.com/rohit-sama/QouteShare"
              rel="noreferrer"
              target="_blank"
            >
              QOUTESHARE
            </a>
          </h2>
          <p className="">
            designed for folks who are interested in sharing motivational quotes
            <br />
            to inspire and support each other.
          </p>
        </div>

        <div className="">
          <h2 className="decoration-gray-400 text-gray-300 underline-offset-4 underline">
            <a
              href="https://github.com/rohit-sama/movie-app_react"
              rel="noreferrer"
              target="_blank"
            >
              MOVIE-APP
            </a>
          </h2>
          <p className="">
            This is a basic movie app where you can search your favourite movies
            <br />
            which works by using imdb api and made with react.js
          </p>
        </div>

        <div className="">
          <h2 className="decoration-gray-400 text-gray-300 underline-offset-4 underline">
            <a
              href="https://github.com/rohit-sama/portfolio_react"
              rel="noreferrer"
              target="_blank"
            >
              PORTFOLIO
            </a>
          </h2>
          <p className="">
            This is the Portfolio i made when i was learning react.js way back<br/>
            in march 2023.
          </p>
        </div>

        <div className="">
          <h2 className="decoration-gray-400 text-gray-300 underline-offset-4 underline">
            <a
              href="https://github.com/rohit-sama/backend_project_todo"
              rel="noreferrer"
              target="_blank"
            >
              TO-DO APP
            </a>
          </h2>
          <p className="">
            This is a ONLY TODO api you will ever need, made with nodejs on backend and
            <br />
            MongoDB for the database and hosted on vercel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
