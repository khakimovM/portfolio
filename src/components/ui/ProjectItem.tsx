import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../assets/styles/swiper.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
interface Props {
  projectImg: string[]; // ReactNode emas, string tipini ishlatish kerak
  name: string;
  about: string;
  frontLink?: string | null;
  backEndLink?: string | null;
}

const ProjectItem: React.FC<Props> = ({
  projectImg,
  name,
  about,
  frontLink,
  backEndLink,
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-opacity-30 bg-cyan-100 border-blue-400 shadow-lg rounded-lg hover:scale-105 transition-transform">
      <div className="w-fit h-fit max-w-[300px] max-h-[300px] flex items-center justify-center bg-white rounded-lg overflow-hidden">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          {projectImg.map((Image, index) => {
            return (
              <SwiperSlide key={index}>
                <img src={Image} alt={`Project ${index}`} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="mt-4 text-center">
        <h2 className="text-xl font-semibold text-white">{name}</h2>
        <p className="text-sm text-white opacity-80 mt-2">{about}</p>

        <div className="flex gap-4 mt-4 justify-center w-full">
          {frontLink && (
            <a
              href={frontLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 w-full text-sm bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition duration-300"
            >
              Frontend
            </a>
          )}
          {backEndLink && (
            <a
              href={backEndLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 w-full text-sm bg-green-700 text-white rounded-lg hover:bg-green-800 transition duration-300"
            >
              Backend
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
