"use client";

import React from "react";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import Image from "next/image";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20 relative">
      {/* Removed the blurry gradient overlay */}

      <h1 className="heading">
        Voices from
        <span className="text-gradient ml-2">satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative">
          {/* Removed overflow-hidden to eliminate the blurry side effect */}
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        {/* Updated background for better light mode visibility */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 dark:bg-neutral-900/30 bg-gray-50 p-8 rounded-2xl mt-12 border dark:border-neutral-800/30 border-gray-200 shadow-md">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2 hover:scale-105 transition-transform duration-300">
                <Image
                  src={company.img}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  height={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-10 w-5 dark:filter dark:saturate-0 dark:hover:saturate-100 transition-all duration-300"
                />
                <Image
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  height={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20 dark:filter dark:saturate-0 dark:hover:saturate-100 transition-all duration-300"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
