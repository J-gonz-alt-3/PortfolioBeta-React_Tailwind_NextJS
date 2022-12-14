import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import selfie from "../public/selfie.png";
import code from "../public/code.png";
import aisite from "../public/aisite.jpg";
import finedining from "../public/finedining.jpg";
import portfolio2 from "../public/portfolio2.jpg";
import portfolio_v2 from "../public/portfolio_v2.jpg";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>JeanPierre Gonzales Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              Developed by JeanPierre
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              JeanPierre Gonzales-Altamirano
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Developer and Designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">
              I'm an indie Front-End Web Developer, who is working towards
              becoming a Full Stack Web Developer in the near future!
            </p>
          </div>
          <div className="text-5xl flex justify-center py-3 text-blue-600">
            <a
              href="https://www.linkedin.com/in/gonzalesaltamiranoje/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={selfie} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 mt-10 dark:text-teal-500">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              I am 100% self-taught, with most of my foundational{" "}
              <span className="text-teal-500">Web Development training</span>{" "}
              coming from completing projects on{" "}
              <span className="text-teal-500">
                <a href="https://www.freecodecamp.org" target="_blank">
                  freecodecamp.org
                </a>
              </span>{" "}
              as well as just watching hours upon hours of YouTube videos on Web
              Development topics!
            </p>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
              <Image src={code} width={100} height={100} className="mx-auto" />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Coding Languages
              </h3>
              <p className="py-2">
                {" "}
                Below are a list of coding languages I am proficient with.
              </p>
              <h4 className="py-4 text-teal-600">
                List of Programming Languages:
              </h4>
              <p className="text-gray-800 py-1">Python</p>
              <p className="text-gray-800 py-1">C++</p>
              <p className="text-gray-800 py-1">JavaScript</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-teal-500">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Since the beginning of my journey as a freelance designer and
              developer, I've worked hard to create/complete meaningful projects
              that display my ability/competency in using in demand technologies
              such as ReactJS, NextJS, TailwindCSS and NodeJS.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white">
              Below are some examples of my past compeleted projects/work that
              I've done! Source code can be found on my GitHub page!
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap ">
            <div className="basis-1/3 flex-1 border-solid border-4 border-teal-600 rounded-xl">
              <a href="https://gpt3-jpg.com" target="_blank">
                <Image
                  src={aisite}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 border-solid border-4 border-teal-600 rounded-xl">
              <a href="https://jpgfoods.shop" target="_blank">
                <Image
                  src={finedining}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 border-solid border-4 border-teal-600 rounded-xl">
              <a href="https://jpgcodes.com" target="_blank">
                <Image
                  src={portfolio2}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1 border-solid border-4 border-teal-600 rounded-xl">
              <a
                href="https://portfolio-beta-react-tailwind-next-js.vercel.app"
                target="_blank"
              >
                <Image
                  src={portfolio_v2}
                  className="rounded-lg object-cover"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
