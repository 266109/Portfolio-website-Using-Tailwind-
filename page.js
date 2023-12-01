import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
//import deved from "/dev-ed-wave.png";
//import { useState } from "react";

export default function Home() {
  //const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <main className=" bg-slate-100 px-10 md:px-20 lg:px-40 ">
        <section className=" bg-gray-100 min-h-screen">
          <nav className="py-10 mb-6 flex justify-between">
            <h1 className="text-xl font-burtons">DevelopedbyNaman</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r bg-cyan-700 to-teal-300 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-800 font-medium md:text-6xl">
              Naman Sahu
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Developer and Designer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">
              FreeLancer providing services for programming and design content
              need.Join me down below and let's get cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96">
            <Image
              className=""
              src="/dev-ed-wave.png"
              layout="fill"
              //objectPosition="top left"
              objectFit="cover"
            />
          </div>
        </section>

        <section>
          <div>
            <h1 className="text-3xl py-1">Services I offer</h1>
            <p className="text-md py-2 leading-8 text-gray-600">
              Since the beginning of my journey as a FreeLance Designer and
              Developer,I've done remote work for
              <span className="text-teal-700"> Agencies</span>
              consulted for <span className="text-teal-700"> startups</span>
              and collaborated with talented people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer from a wide range of services, including brand
              design,programming and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10">
              <Image src="/design.png" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pd-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I used</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 ">
              <Image src="/code.png" className="justify-center" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pd-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I used</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 ">
              <Image
                src="/consulting.png"
                className="object-cover"
                
                width={100}
                height={100}
              />
              <h3 className="text-lg font-medium pt-8 pd-2">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I used</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-600">
              Since the beginning of my journey as a FreeLance Designer and
              Developer,I've done remote work for
              <span className="text-teal-700"> Agencies</span>
              consulted for <span className="text-teal-700"> startups</span>
              and collaborated with talented people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              I offer from a wide range of services, including brand
              design,programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                src={"/web1.png"}
                className="rounded-lg object-cover "
                width={"300"}
                height={"300"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={"/web2.png"}
                className="rounded-lg object-cover "
                width={"300"}
                height={"300"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={"/web3.png"}
                className="rounded-lg object-cover "
                width={"300"}
                height={"300"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={"/web4.png"}
                className="rounded-lg object-cover "
                width={"300"}
                height={"300"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={"/web5.png"}
                className="rounded-lg object-cover "
                width={"300"}
                height={"300"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1 ">
              <Image
                src={"/web6.png"}
                className="rounded-lg object-cover "
                width={"300"}
                height={"300"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
