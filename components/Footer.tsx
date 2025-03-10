import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-transparent to-indigo-900/10 opacity-30" />
        <div className="absolute -top-10 left-0 right-0 mx-auto w-1/2 h-40 bg-indigo-600/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-full">
          <Image
            src="/footer-grid.svg"
            alt="grid"
            width={1000}
            height={1000}
            className="w-full h-full opacity-40"
          />
        </div>
      </div>

      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-gradient">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-neutral-300 md:mt-10 my-5 text-center max-w-xl">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals with custom digital solutions tailored to your
          needs.
        </p>
        <a href="mailto:contact@example.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-neutral-400">
          © 2025 | All Rights Reserved
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-6 md:mt-0">
          {socialMedia.map((info) => (
            <Link
              key={info.id}
              href={"/https://github.com/hameedkhan11"}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-neutral-900/50 rounded-lg border border-neutral-700/30 hover:scale-110 transition-transform duration-300 hover:border-neutral-500/50"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
