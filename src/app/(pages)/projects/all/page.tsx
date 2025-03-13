"use client";
import Image from "next/image";
import image1 from "../../../../../public/projectImg.png";
import image2 from "../../../../../public/projectImg2.png";
import image3 from "../../../../../public/projectImg3.png";
import image4 from "../../../../../public/projectImg4.png";

const All = () => {
  return (
    <div>
      <div className="flex flex-col items-center  my-30">
        <h2 className=" text-8xl font-bold text-center uppercase py-5 mt-10">
          ALL Projects
        </h2>
        <p className=" font-light ">
          A collection of my latest works . Discover the Projects that Define My
          passion ans Skills
        </p>
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 text-left gap-8 m-10 rounded-2xl shadow-2xl">
          <div className="rounded-lg shadow-2xl m-8 transition-all duration-300 hover:scale-110">
            <Image src={image1} alt="Project Image" />
            <p className="p-4 m-2 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              exercitationem quo aut a rerum accusantium molestias soluta
              repudiandae, inventore ea architecto eveniet nulla incidunt
              aperiam autem aliquid itaque, facilis nam?
            </p>
          </div>
          <div className="rounded-2xl shadow-2xl m-8 duration-300 hover:scale-110">
            <Image src={image2} alt="Project Image" />
            <p className="p-4 m-2 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              exercitationem quo aut a rerum accusantium molestias soluta
              repudiandae, inventore ea architecto eveniet nulla incidunt
              aperiam autem aliquid itaque, facilis nam?
            </p>
          </div>
          <div className="rounded-2xl shadow-2xl m-8 duration-300 hover:scale-110">
            <Image src={image3} alt="Project Image" />
            <p className="p-4 m-2 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              exercitationem quo aut a rerum accusantium molestias soluta
              repudiandae, inventore ea architecto eveniet nulla incidunt
              aperiam autem aliquid itaque, facilis nam?
            </p>
          </div>
          <div className="rounded-2xl shadow-2xl m-8 duration-300 hover:scale-110">
            <Image src={image4} alt="Project Image" />
            <p className="p-4 m-2 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              exercitationem quo aut a rerum accusantium molestias soluta
              repudiandae, inventore ea architecto eveniet nulla incidunt
              aperiam autem aliquid itaque, facilis nam?
            </p>
          </div>


        </div>
      </div>
  );
};

export default All;
