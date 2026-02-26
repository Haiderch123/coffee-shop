import React from "react";
import { motion } from "framer-motion";

const OrderForm = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-white px-6 md:px-20">

      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <motion.h2
        initial={{opacity:0, y:100}}
        whileInView={{opacity:1, y:0}}
        transition={{delay:0.2}}
         className="text-3xl font-bold mb-8">Buy our products from anywhere</motion.h2>
        <form className="space-y-4">
          <motion.div
            initial={{opacity:0, y:100}}
             whileInView={{opacity:1, y:0}}
            transition={{delay:0.4,type:"spring", stiffness: 100, damping: 10,
            }}
           className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </motion.div>
          <motion.div  initial={{opacity:0, y:100}}
             whileInView={{opacity:1, y:0}}
            transition={{delay:0.6,type:"spring", stiffness: 100, damping: 10,
            }} className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="Country"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="text"
              placeholder="Zipcode"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </motion.div>
          <motion.button
           initial={{opacity:0, y:100}}
             whileInView={{opacity:1, y:0}}
            transition={{delay:0.8,type:"spring", stiffness: 100, damping: 10,
            }}
            type="submit"
            className="w-full bg-[#F19509] hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition-colors"
          >
            Order Now
          </motion.button>
        </form>
      </div>

    
      <div className="w-full md:w-1/2 flex justify-center">
        <motion.img
         initial={{opacity:0, scale:0.5}}
             whileInView={{opacity:1, scale:1}}
            transition={{delay:1,type:"spring", stiffness: 100, damping: 10,
            }}
          src="https://coders-coffee.netlify.app/assets/world-map-CpXg2haz.png" 
          alt="World Map"
          className="max-w-full h-auto opacity-30"
        />
      </div>
    </div>
  );
};

export default OrderForm;