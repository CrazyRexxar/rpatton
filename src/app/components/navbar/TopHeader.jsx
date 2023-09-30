<<<<<<< HEAD
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail, AiOutlineGlobal } from "react-icons/ai";
const TopHeader = () => {
  const items = [
    { icon: <BsFillTelephoneFill />, description: "07931 418928" },
    { icon: <AiOutlineMail />, description: "rpatton@outlook.com" },
    { icon: <AiOutlineGlobal />, description: "portfolio.com" },
  ];
  
  return (
    <div className="mx-3 py-5 text-center pt-6">
      <div className="flex gap-3 flex-wrap justify-center self-center">
        <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent font-bold text-2xl">
          
        </div>
        <ul className="flex flex-wrap gap-2 md:gap-8 justify-center text-center">
          {items.map(({ icon, description }, index) => (
            <li key={index} className="flex items-center gap-2">
              <span>{icon}</span>
              <span>{description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
=======
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail, AiOutlineGlobal } from "react-icons/ai";
const TopHeader = () => {
  const items = [
    { icon: <BsFillTelephoneFill />, description: "07931 418928" },
    { icon: <AiOutlineMail />, description: "rpatton@outlook.com" },
    { icon: <AiOutlineGlobal />, description: "portfolio.com" },
  ];
  
  return (
    <div className="mx-3 py-5 text-center pt-6">
      <div className="flex gap-3 flex-wrap justify-center self-center">
        <div className="bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent font-bold text-2xl">
          
        </div>
        <ul className="flex flex-wrap gap-2 md:gap-8 justify-center text-center">
          {items.map(({ icon, description }, index) => (
            <li key={index} className="flex items-center gap-2">
              <span>{icon}</span>
              <span>{description}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
>>>>>>> dafc2641d0c2992b207e80ad8989b6af5aa5b977
export default TopHeader;