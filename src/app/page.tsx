
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";



export default function Home() {
  return (
    <div className="m-20 text-gray-400 body-font font-sarif grid grid-cols-4">
      <div className="col-span-1 p-8">
        <Image
          alt="profilpic"
          src="https://avatars.githubusercontent.com/u/112627630?v=4"
          layout="intrinsic"
          width={300}
          height={300}
          className="rounded-lg h-20"
        />
        <div className="p-4 grid grid-cols-5">
        
      
        </div>
      </div>

      <div className="col-span-3 ml-20 mt-10 mr-20 text-left font-normal">
        <h1 className="text-2xl  p-2 ">hey, I am Rohit,</h1>
        <p className=" indent-8 text-left tracking-widest font-normal text-lg">
          <span className=" decoration-gray-400 text-gray-300 underline-offset-4 underline">
            A passionate developer
          </span>{" "}
          currently learning the art of computer science pursuing my
          undergraduate studies in{" "}
          <span className="underline underline-offset-4 decoration-gray-400 text-gray-300">
            Computer Science
          </span>{" "}
          in India. My journey revolves around crafting captivating web apps
          with NEXT.JS and exploring the fascinating world of Deep Learning.
          With a strong foundation in computer science.{" "}
        </p>
        <p className="mt-6  indent-8 text-left tracking-widest font-normal text-lg">
          You can often find me in the vibrant communities of{" "}
          <span className=" decoration-gray-400 text-gray-300 underline-offset-4 underline">
            Twitter and Discord,
          </span>{" "}
          As an ardent
          enthusiast of{" "}
          <span className=" decoration-gray-400 text-gray-300 underline-offset-4 underline">
            anime, manga, memes, music? and video edits,
          </span>{" "}
          I find endless joy in exploring these creative realms.
        </p>
      </div>
    </div>
  );
}
