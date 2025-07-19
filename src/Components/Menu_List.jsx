import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const Menu_List = ({ items }) => {
  const [appear, setappear] = useState(false);

  // Example: split the list into two sections
  const firstItems = items.slice(0, 3); // First 3 items
  const secondItems = items.slice(3,10); // Remaining items
  const thirdItems = items.slice(8); // Remaining items

  return (
    <motion.div
      initial={{ x: 6, opacity: 0.7 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      onMouseEnter={() => setappear(true)}
      onMouseLeave={() => setappear(false)}
      className={`w-60 h-[80vh] p-4 bg-transparent ${
        appear ? "overflow-y-auto" : "overflow-hidden"
      }`}
    >
      <ul className="flex flex-col space-y-2">
        {firstItems.map((item, index) => (
          <li
            key={index}
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

        {/* Divider */}
        <hr className="border-[#27272a] my-3" />
        <span className="text-xl text-white hover:bg-[#27272a] rounded-xl px-4 py-3 cursor-pointer gap-2 flex items-center">
          You <ChevronRight size={20} />
        </span>

        {secondItems.map((item, index) => (
          <li
            key={index + firstItems.length}
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
        {/* Divider */}
        <hr className="border-[#27272a] my-3" />
        <span className="text-xl text-white hover:bg-[#27272a] rounded-xl px-4 py-3 cursor-pointer gap-2 flex items-center">
          Subscriptions
        </span>

        {thirdItems.map((item, index) => (
          <li
            key={index + firstItems.length}
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
      </ul>
    </motion.div>
  );
};

export default Menu_List;
