import React from "react";
import { delay, motion } from "framer-motion";

const CoffeeSection = () => {
  const items = [
    {
      title: "Black Coffee",
      img: "https://coders-coffee.netlify.app/assets/coffee1-Cf01rm9W.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Hot Chocolate",
      img: "https://coders-coffee.netlify.app/assets/coffee3-DipYPMyo.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Cold Coffee",
      img: "https://coders-coffee.netlify.app/assets/coffee1-Cf01rm9W.png",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible:{
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 10,
        ease: "easeInOut",
      },
    }
  }
  const containerVariants={
    hidden:{opacity:1},
    visible:{
      opacity:1,
      transition:{
        delay:0.6,
        staggerChildren:0.4,
     
  }
}
}

  return (
    <section className="w-full bg-gray-100 py-20 px-6">
      <div className="text-center mb-16">
        <motion.h2
         initial={{opacity:0, y:100}}
             whileInView={{opacity:1, y:0}}
            transition={{delay:0.2,type:"spring", stiffness: 150, damping: 10,
            }} className="text-4xl md:text-5xl font-bold">
          Fresh and <span className="text-[#F19509]">Tasty coffee</span>
        </motion.h2>
        <motion.p
              initial={{opacity:0, scale:0.5}}
               whileInView={{opacity:1, scale:1}}
                transition={{delay:0.6,type:"spring", stiffness: 150, damping: 10,
            }}
         className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Eos reprehenderit eum ducimus, distinctio cum eaque totam
          voluptatem ex dolorem fuga.
        </motion.p>
      </div>
      <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView={"visible"}
      viewport={{  amount: 0.4 }}
       className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {items.map((item, index) => (
          <motion.div
          variants={cardVariants}
            key={index}
            className="flex flex-col items-center space-y-6"
          >
          <img
              src={item.img}
              alt={item.title}
              className="h-48 object-contain drop-shadow-xl"
            />
             <h3 className="text-2xl font-semibold text-[#F19509]">
              {item.title}
            </h3>
             <p className="text-gray-600 max-w-xs">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CoffeeSection;