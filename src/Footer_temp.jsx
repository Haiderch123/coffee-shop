import { FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi"; // instead of Send
import { FiPhone, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";


function Footer() {
    const quickLinks = ["Home", "About", "Contact us", "Privacy Policy"];
    return (
        <footer className="bg-[#f08500] text-white pt-10 pb-6 px-6 md:px-16 font-sans">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{amount:0.5}}
                transition={{delay:0.2,duration:0.6}}
                 className="space-y-4">
                    <h2 className="text-3xl font-bold uppercase tracking-tight">CODERS CAFE</h2>
                    <p className="text-sm leading-relaxed opacity-90 max-w-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ea ratione quidem libero,
                        praesentium ab atque? Quidem maxime, numquam dolores.
                    </p>
                    <div className="space-y-2 pt-2">
                        <div className="flex items-center gap-3">
                            <FiPhone size={18} />
                            <span>03081570070</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FiMapPin size={18} />
                            <span>Bahwalpur, Pakistan</span>
                        </div>
                    </div>
                </motion.div>

                {/* Add other grid columns here if needed */}
                <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{amount:0.5}}
                transition={{delay:0.2,duration:0.6}}
                 >
                    <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
                    <div className="grid grid-cols-2 gap-y-3">
                        <div className="flex flex-col gap-3">
                            {quickLinks.map((link) => (
                                <a key={link} href="#" className="hover:underline text-sm">{link}</a>
                            ))}
                        </div>
                        <div className="flex flex-col gap-3">
                            {quickLinks.map((link) => (
                                <a key={link + "2"} href="#" className="hover:underline text-sm">{link}</a>
                            ))}
                        </div>
                    </div>
                </motion.div>
                <div className="space-y-6">
          <motion.div initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{amount:0.5}}
                transition={{delay:0.2,duration:0.6}}>
            <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <div className="bg-white p-2 rounded-full text-[#f08500] cursor-pointer"><FaFacebookF size={20} fill="currentColor" /></div>
              <div className="bg-white p-2 rounded-full text-[#f08500] cursor-pointer"><FaInstagram size={20} /></div>
              <div className="bg-white p-2 rounded-full text-[#f08500] cursor-pointer"><HiOutlineMail size={20} fill="currentColor" /></div>
              <div className="bg-white p-2 rounded-full text-[#f08500] cursor-pointer"><FaGoogle size={20} /></div>
            </div>
          </motion.div>


            </div>
            </div>
            <div className="border-t border-white/50 mt-12 pt-6 text-center text-sm font-medium">
                Copyright © 2024 Company Name. All rights reserved.
            </div>

        </footer>
    )
}

export default Footer

