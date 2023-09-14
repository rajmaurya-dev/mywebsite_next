import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faHashnode } from "@fortawesome/free-brands-svg-icons/faHashnode";
import Link from "next/link";
import React from "react";
import Image from "next/image";

interface pageProps {}

const page: React.FC<pageProps> = () => {
  return (
    <div className="flex flex-col sm:m-20 justify-center items-center">
      <div className="text-left flex flex-col md:flex-row text-xl gap-5">
      <Link
        href="https://twitter.com/rohitxfr"
        target="_blank"
        className="flex gap-2 decoration-gray-400 text-gray-300 underline-offset-4 underline"
      >
        X now
        <FontAwesomeIcon icon={faTwitter} height={25} />
      </Link>
      <Link
        href="https://github.com/rohit-sama"
        target="_blank"
        className="flex gap-2 decoration-gray-400 text-gray-300 underline-offset-4 underline"
      >
        Proof of work
        <FontAwesomeIcon icon={faGithub} height={25} />
      </Link>
      <Link
        href="https://www.instagram.com/_rohitsinggh/"
        target="_blank"
        className="flex gap-2 decoration-gray-400 text-gray-300 underline-offset-4 underline"
      >
        Guilty Pleasure
        <FontAwesomeIcon icon={faInstagram} height={25} />
      </Link>
      <Link
        href="https://rohitsinghh.hashnode.dev/"
        target="_blank"
        className="flex gap-2 decoration-gray-400 text-gray-300 underline-offset-4 underline"
      >
        Blogs
        <FontAwesomeIcon icon={faHashnode} height={25} />
      </Link>
      
      </div>
      <h1 className="m-4 text-gray-500">because we live in samaj</h1>
      <Image className="p-10 md:p-0" alt=" joke" width={400} height={400} src="https://www.comediva.com/wp-content/uploads/2014/11/MEME-BLOG-social-media-explained-donuts.jpg"></Image>
    </div>
  );
};

export default page;
