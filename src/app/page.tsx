import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="md:m-20 mx-10 mb-10 -my-16 text-gray-400 body-font font-sarif md:grid md:grid-cols-4">
      <div className="col-span-1 p-12  md:p-8 ">
        <Image
          alt="profilpic"
          src="https://avatars.githubusercontent.com/u/112627630?v=4"
          layout="intrinsic"
          width={300}
          height={300}
          className="rounded-lg md:h-20"
        />
      </div>

      <div className="col-span-3 md:ml-20 md:mt-10 md:mr-20 -my-3 text-left font-normal">
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
            <Link href="/socials">Twitter and Discord,</Link>
          </span>{" "}
          As an ardent enthusiast of{" "}
          <span className=" decoration-gray-400 text-gray-300 underline-offset-4 underline">
            anime, manga, memes, music? and video edits,
          </span>{" "}
          I find endless joy in exploring these creative realms.
        </p>
      </div>
    </div>
  );
}
