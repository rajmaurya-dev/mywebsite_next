import React from "react";

interface pageProps {}

const page: React.FC<pageProps> = () => {
  return (
    <div className="col-span-3 m-7 md:ml-20 md:mr-20 md:mt-10 text-left font-normal">
      <h1 className="sm:text-2xl text-xl p-2">Hello, I am Rohit.</h1>
      <p className="indent-8 text-left tracking-widest font-normal sm:text-lg text-md">
        <span className="decoration-gray-400 text-gray-300 underline-offset-4 underline">
          A Passionate Developer
        </span>{" "}
        on a thrilling journey through the world of computer science. I am
        currently pursuing my undergraduate studies in{" "}
        <span className="underline underline-offset-4 decoration-gray-400 text-gray-300">
          Computer Science
        </span>{" "}
        in the vibrant and diverse landscape of India. My journey revolves
        around creating captivating web applications with{" "}
        <span className="decoration-gray-400 text-gray-300 underline-offset-4 underline">
          NEXT.JS
        </span>{" "}
        and diving deep into the fascinating realm of Deep Learning. With a
        solid foundation in computer science, I am equipped with the skills to
        bring creativity and innovative problem-solving to every project I
        undertake.
      </p>
      <p className="mt-6 indent-8 text-left tracking-widest font-normal sm:text-lg text-md">
        When I am not busy coding or working on tech projects, you will often find
        me in the vibrant online communities of{" "}
        <span className="decoration-gray-400 text-gray-300 underline-offset-4 underline">
          Twitter and Discord,
        </span>{" "}
        where I am an active participant. I wholeheartedly embrace the digital
        world and encourage you to connect with me there. Beyond my passion for
        technology, I am an ardent enthusiast of{" "}
        <span className="decoration-gray-400 text-gray-300 underline-offset-4 underline">
          anime, manga, memes, music, and video edits.
        </span>{" "}
        I find endless joy in exploring these creative realms. If you have any
        recommendations or simply want to discuss these passions, please dont
        hesitate to reach out. I am always eager to connect with like-minded
        individuals who share my love for these fascinating forms of
        entertainment.
      </p>
      <p className="mt-6 indent-8 text-left tracking-widest font-normal sm:text-lg text-md">
        On this website, I aim to share my knowledge, experiences, and insights
        as I continue my journey in the world of technology and creativity.
        Whether you are here to learn, collaborate, or simply share in the joy of
        exploration, I am thrilled to have you along for the ride.
      </p>
    </div>
  );
};

export default page;
