import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const Menu_List = ({ items }) => {
  const [appear, setappear] = useState(false);

  // grouping of items
  const homeSection = items.slice(0, 3);                   // Home sy Subscription tak
  const yoursection = items.slice(3, 10);                  // History sy Clips tak
  const subscriptionsection = items.slice(10, 12);         // Irfan, Irfan, Clips
  const exploreSection = items.slice(12, 17);              // clips sy explore tak
  const youtubesection = items.slice(17, 21);              // Feedback  Help
  const moreSection = items.slice(21, 25);                 // setting sy feedbad tak

  return (
    <motion.div
      initial={{ x: 2, opacity: 0.7 }}
      transition={{ duration: 0.9 }}
      onMouseEnter={() => setappear(true)}
      onMouseLeave={() => setappear(false)}
      className={`w-55 h-[80vh]  bg-black ${appear ? "overflow-y-auto overflow-x-auto custom-scroll" : "overflow-hidden"}`}
    >
      <ul className="flex flex-col space-y-2">
         
        {/* Section 1: Home Section */}
        {homeSection.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-4 text-white hover:bg-[#27272a] rounded-xl px-4 py-3 cursor-pointer"
          >
            <img
              src={item.logo}
              alt={`${item.name}-icon`}
              className="w-6 h-6 "
            />
            <span>{item.name}</span>
          </li>
        ))}

        {/* Divider: Library */}
        <hr className="border-[#27272a] my-3" />
        <span className="text-md text-white px-4 py-2 font-semibold flex items-center hover:bg-[#27272a] rounded-xl cursor-pointer gap-2">
          You <ChevronRight size={20} />
        </span>

        {yoursection.map((item, index) => (
          <li
            key={index + 3}
            className="flex items-center gap-4 text-white hover:bg-[#27272a] rounded-xl px-4 py-3 cursor-pointer"
          >
            <img
              src={item.logo}
              alt={`${item.name}-icon`}
              className="w-6 h-6"
            />
            <span>{item.name}</span>
          </li>
        ))}

        {/* Divider between items */}
        <hr className="border-[#27272a] my-3" />
        <span className="text-md text-white px-4 py-2 font-semibold flex items-center hover:bg-[#27272a] rounded-xl cursor-pointer gap-2">
          Subscription
        </span>

        {subscriptionsection.map((item, index) => (
          <li
            key={index + 9}
            className="flex items-center gap-4 text-white hover:bg-[#27272a] rounded-xl px-4 py-3 cursor-pointer"
          >
            <img
              src={item.logo}
              alt={`${item.name}-icon`}
              className="w-6 h-6"
            />
            <span>{item.name}</span>
          </li>
        ))}

        {/* Divider: Support */}
        <hr className="border-[#27272a] my-3" />
        <span className="text-md text-white px-4 py-2 font-semibold">
          Explore
        </span>

        {exploreSection.map((item, index) => (
          <li
            key={index + 12}
            className="flex items-center gap-4 text-white hover:bg-[#27272a] rounded-xl px-4 py-3 cursor-pointer"
          >
            <img
              src={item.logo}
              alt={`${item.name}-icon`}
              className="w-6 h-6"
            />
            <span>{item.name}</span>
          </li>
        ))}
        
        {/* Divider: More from YouTube */}
        <hr className="border-[#27272a] my-3" />
        <span className="text-md text-white px-4 py-2 font-semibold hover:bg-[#27272a] rounded-xl cursor-pointer">
          More from YouTube
        </span> 


[/**map function */]
        {youtubesection.map((item, index) => (
          <li
            key={index + 16}
            className="flex items-center gap-4 text-white hover:bg-[#27272a] rounded-xl px-4 py-3 cursor-pointer"
          >
            <img
              src={item.logo}
              alt={`${item.name}-icon`}
              className="w-6 h-6"
            />
            <span>{item.name}</span>
          </li>
        ))}

        {/* Divider*/}
        <hr className="border-[#27272a] my-3" />
        {moreSection.map((item, index) => (
          <li
            key={index + 25}
            className="flex items-center gap-4 text-white hover:bg-[#27272a] rounded-xl px-4 py-3 cursor-pointer"
          >
            <img
              src={item.logo}
              alt={`${item.name}-icon`}
              className="w-6 h-6"
            />
            <span>{item.name}</span>
          </li>
        ))}
        <hr className="border-[#27272a] my-3" />
        <div>
          <span className="text-sm text-[#27272a] font-bold">
            AboutPressCopyrightContact usCreatorsAdvertiseDevelopers
            TermsPrivacyPolicy & SafetyHow YouTube worksTest new features <br /> © 2025
            Google LLC
          </span>
        </div>
      </ul>
    </motion.div>
  );
};

export default Menu_List;
