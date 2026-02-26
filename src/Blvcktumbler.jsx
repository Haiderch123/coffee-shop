// import React from "react";
// import { motion } from "framer-motion";
// import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
// import React, { useState } from 'react';
// const BlvckTumbler = () => {
//   return (
//     <section className="relative w-full h-screen bg-[#0f1720] text-white overflow-hidden">
      
     
//       <div className="flex justify-between items-center px-10 py-10 ">
//         <h1 className="text-2xl font-semibold tracking-wider">
//           <span className="text-amber-500">CODERS</span> COFFEE.
//         </h1>
//         <div
//         onClick={() => setIsOpen(!isOpen)}
//          className="space-y-1 cursor-pointer">
//           <div className="w-6 h-0.5 bg-white"></div>
//           <div className="w-6 h-0.5 bg-white"></div>
//           <div className="w-6 h-0.5 bg-white"></div>
//         </div>
//       </div>
//       <div className={`
//         fixed top-0 right-0 h-full w-20 bg-[#C67817] 
//         transition-transform duration-300 ease-in-out flex flex-col items-center py-10 space-y-8
//         ${isOpen ? 'translate-x-0' : 'translate-x-full'}
//       `}>
        
//         {/* Close Button (Optional) */}
//         <button onClick={() => setIsOpen(false)} className="text-white text-2xl mb-10">
//           ✕
//         </button>

//         {/* Top Vertical Line */}
//         <div className="w-[1px] h-20 bg-white/50"></div>

//         {/* Social Icons */}
//         <div className="flex flex-col space-y-6">
//           <a href="#" className="border border-white rounded-full p-3 text-white hover:bg-white hover:text-[#C67817] transition">
//             <FaFacebookF />
//           </a>
//           <a href="#" className="border border-white rounded-full p-3 text-white hover:bg-white hover:text-[#C67817] transition">
//             <FaTwitter />
//           </a>
//           <a href="#" className="border border-white rounded-full p-3 text-white hover:bg-white hover:text-[#C67817] transition">
//             <FaInstagram />
//           </a>
//         </div>

//         {/* Bottom Vertical Line */}
//         <div className="w-[1px] h-20 bg-white/50"></div>
//       </div>

    
//       <div className="grid grid-cols-1 md:grid-cols-3 items-center h-[80%] px-10">
//         <div className="space-y-6">
//           <motion.h2 
//            initial={{ y:-100, opacity: 0 }}
//           animate={{ y:0, opacity: 1 }}
//           transition={{ type:"spring", stiffness: 100, damping: 10, delay: 1 }} 
//            className="text-7xl md:text-6xl font-semibold text-[#F1DABF] leading-tight">
//             Blvck <br /> Tumbler
//           </motion.h2>

//           <motion.div
//           initial={{ y:100, opacity: 0 }}
//           animate={{ y:0, opacity: 1 }}
//           transition={{ type:"spring", stiffness: 100, damping: 10, delay: 1.2 }} 
//           className="bg-[#1b2430] p-6 w-70 text-sm text-gray-300">
//             <h3 className="text-[#e5d5c0] font-semibold mb-2">
//               Black Lifestyle Lovers,
//             </h3>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Suscipit, distinctio nobis optio eum animi nemo.
//             </p>
//           </motion.div>
//         </div>

      
//         <div className="relative flex justify-center items-center">
//           <div className="absolute w-45 h-45 border-5 border-[rgb(241,149,9)] rounded-full right-4 top-15 opacity-90"></div>
//           <motion.img
//           initial={{ scale: 0, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ type:"spring", stiffness: 100, damping: 10, delay: 0.4 }}
//             src="https://coders-coffee.netlify.app/assets/black-Dl2umTo2.png" 
//             alt="Tumbler"
//             className="relative z-10 h-125 object-contain"
//           />
//         </div>
//         <div className="flex justify-end">
//           <motion.div
//           initial={{ y:100, opacity: 0 }}
//           animate={{ y:0, opacity: 1 }}
//           transition={{ type:"spring", stiffness: 100, damping: 10, delay: 1.2 }} 
//            className="bg-[#1b2430] p-6 w-65 text-sm text-gray-300">
//             <h3 className="text-[#e5d5c0] font-semibold mb-2">
//               The Design,
//             </h3>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit.
//               Suscipit, distinctio nobis optio eum animi nemo.
//             </p>
//           </motion.div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default BlvckTumbler;