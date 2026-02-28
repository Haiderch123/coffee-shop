import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";



const BlvckTumbler = () => {
    const [open, setOpen] = useState(false);
  return (
    <section className="relative w-full h-screen bg-[#0f1720] text-white overflow-hidden">
      
     
      <div className="flex justify-between items-center px-10 py-10 ">
        <h1 className="text-2xl font-semibold tracking-wider">
          <span className="text-amber-500">CODERS</span> COFFEE.
        </h1>
       <div
        className="absolute top-8 right-6 z-50 flex flex-col  gap-1 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="w-7 h-1 bg-white transition-all"></span>
        <span className="w-7 h-1 bg-white transition-all"></span>
        <span className="w-7 h-1 bg-white transition-all"></span>
      </div>
      <div
         className={`absolute top-0 right-0 h-screen w-24 bg-gradient-to-b bg-[#F19509]/80 flex flex-col items-center py-8 transform transition-transform duration-500 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
       
        <div className="mt-16"></div>
        <div className="w-px h-32 bg-white opacity-70 mb-8"></div>

        <div className="flex flex-col gap-8 items-center">
          <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-orange-600 transition duration-300 cursor-pointer">
            <FaFacebookF size={20} />
          </div>
          <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-orange-600 transition duration-300 cursor-pointer">
            <FaTwitter size={20} />
          </div>

          <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center text-white hover:bg-white hover:text-orange-600 transition duration-300 cursor-pointer">
            <FaInstagram size={20} />
          </div>
        </div>
        <div className="w-px h-32 bg-white opacity-70 mt-8"></div>
      </div>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-3 items-center h-[80%] px-10">
        <div className="space-y-6">
          <motion.h2 
           initial={{ y:-100, opacity: 0 }}
          animate={{ y:0, opacity: 1 }}
          transition={{ type:"spring", stiffness: 100, damping: 10, delay: 1 }} 
           className="text-7xl md:text-6xl font-semibold text-[#F1DABF] leading-tight">
            Blvck <br /> Tumbler
          </motion.h2>

          <motion.div
          initial={{ y:100, opacity: 0 }}
          animate={{ y:0, opacity: 1 }}
          transition={{ type:"spring", stiffness: 100, damping: 10, delay: 1.2 }} 
          className="bg-[#1b2430] p-6 w-70 text-sm text-gray-300">
            <h3 className="text-[#e5d5c0] font-semibold mb-2">
              Black Lifestyle Lovers,
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit, distinctio nobis optio eum animi nemo.
            </p>
          </motion.div>
        </div>

      
        <div className="relative flex justify-center items-center">
          <div className="absolute w-45 h-45 border-5 border-[rgb(241,149,9)] rounded-full right-4 top-15 opacity-90"></div>
          <motion.img
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type:"spring", stiffness: 100, damping: 10, delay: 0.4 }}
            src="https://coders-coffee.netlify.app/assets/black-Dl2umTo2.png" 
            alt="Tumbler"
            className="relative z-10 h-125 object-contain"
          />
        </div>
        <div className="flex justify-end">
          <motion.div
          initial={{ y:100, opacity: 0 }}
          animate={{ y:0, opacity: 1 }}
          transition={{ type:"spring", stiffness: 100, damping: 10, delay: 1.2 }} 
           className="bg-[#1b2430] p-6 w-65 text-sm text-gray-300">
            <h3 className="text-[#e5d5c0] font-semibold mb-2">
              The Design,
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Suscipit, distinctio nobis optio eum animi nemo.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default BlvckTumbler;