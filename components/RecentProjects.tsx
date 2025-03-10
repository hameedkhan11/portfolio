"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Link from "next/link";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-40 left-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <h1 className="heading">
        Showcasing <span className="text-gradient">recent work</span>
      </h1>

      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] hover:scale-[1.02] transition-transform duration-500"
            key={item.id}
          >
            <PinContainer title="/portfolio.example.com" href="#">
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #13162D 0%, #090B1A 100%)",
                    boxShadow: "0 20px 40px -20px rgba(0,0,0,0.7)",
                  }}
                >
                  <Image fill sizes="" src="/bg.png" alt="bgimg" />
                </div>
                <Image
                  src={item.img}
                  alt="cover"
                  width={1000}
                  height={1000}
                  className="z-10 absolute bottom-0 filter drop-shadow-2xl transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-neutral-900 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center hover:border-indigo-500/30 transition-colors duration-300"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        width={24}
                        height={24}
                        alt={`tech-icon-${index}`}
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center group">
                  <Link
                    href={"/https://github.com/hameedkhan11"}
                    className="flex lg:text-xl md:text-xs text-sm text-gradient group-hover:underline"
                  >
                    View Project
                  </Link>
                  <FaLocationArrow
                    className="ms-3 group-hover:translate-x-1 transition-transform duration-300"
                    color="#CBACF9"
                  />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
