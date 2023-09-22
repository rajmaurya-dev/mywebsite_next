import React from "react";

interface pageProps {}

const page: React.FC<pageProps> = () => {
  return (
    <div className="flex-col flex lg:m-20 mb-5 mx-10 justify-center items-center">
      <h1 className="mb-10 text-xl"> Here are some of my Projects. </h1>
      <div className="text-left lg:border-l-1 lg:pl-3 text-gray-400 gap-5 text-md flex-col flex ">
        <div className="">
          <h2 className="decoration-gray-400 text-gray-300 underline-offset-4 underline">
            <a
              className=""
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
          <div>
            <button className="border-1 border-slate-700 rounded-sm px-1 mr-2 mt-1">Next.js</button>
            <button className="border-1 border-slate-700 rounded-sm px-1  mr-2 mt-1">
              Pusher.js
            </button>
            <button className="border-1 border-slate-700 rounded-sm px-1   mr-2 mt-1">
              NextAuth
            </button>
            <button className="border-1 border-slate-700 rounded-sm px-1  mr-2 mt-1">
              ReddisDb
            </button>
            <button className="border-1 border-slate-700 rounded-sm px-1  mr-2 mt-1">
              Tailwindcss
            </button>
          </div>
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
          <div>
            <button className="border-1 border-slate-700 rounded-sm px-1 mr-2 mt-1">Next.js</button>
            <button className="border-1 border-slate-700 rounded-sm px-1   mr-2 mt-1">
              NextAuth
            </button>
            <button className="border-1 border-slate-700 rounded-sm px-1  mr-2 mt-1">
              MongoDb
            </button>
            <button className="border-1 border-slate-700 rounded-sm px-1  mr-2 mt-1">
              Tailwindcss
            </button>
          </div>
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
          <div>
            <button className="border-1 border-slate-700 rounded-sm px-1 mr-2 mt-1">
              React.js
            </button>
            <button className="border-1 border-slate-700 rounded-sm px-1   mr-2 mt-1">
              JwtAuth
            </button>
            <button className="border-1 border-slate-700 rounded-sm px-1  mr-2 mt-1">
              MongoDb
            </button>
            <button className="border-1 border-slate-700 rounded-sm px-1  mr-2 mt-1">
              Tailwindcss
            </button>
          </div>
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
            This is a ONLY TODO api you will ever need, made with nodejs on
            backend and
            <br />
            MongoDB for the database and hosted on vercel.
          </p>
          <div>
            <button className="border-1 border-slate-700 rounded-sm px-1 mr-2 mt-1">Node.js</button>
            <button className="border-1 border-slate-700 rounded-sm px-1  mr-2 mt-1">
              Express.js
            </button>
            <button className="border-1 border-slate-700 rounded-sm px-1   mr-2 mt-1">
              NextAuth
            </button>
            <button className="border-1 border-slate-700 rounded-sm px-1  mr-2 mt-1">
              ReddisDb
            </button>
            <button className="border-1 border-slate-700 rounded-sm px-1  mr-2 mt-1">
              Tailwindcss
            </button>
          </div>
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
            This is the Portfolio i made when i was learning react.js way back
            <br />
            in march 2023.
          </p>
          <div>
            <button className="border-1 border-slate-700 rounded-sm px-1 mr-2 mt-1">
              React.js
            </button>
            <button className="border-1 border-slate-700 rounded-sm px-1  mr-2 mt-1">
              Tailwindcss
            </button>
          </div>
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
          <div>
            <button className="border-1 border-slate-700 rounded-sm px-1 mr-2 mt-1">
              React.js
            </button>
            <button className="border-1 border-slate-700 rounded-sm px-1  mr-2 mt-1">Api's</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
