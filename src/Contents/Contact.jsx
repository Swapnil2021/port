
 "use client";

import { Input } from "@/components/lightswind/input";
import { Button } from "@/components/lightswind/button";
import { Textarea } from "@/components/lightswind/textarea";
import { motion } from "framer-motion";

export default function Contact() {

  const submitHandler=() =>{
    alert("Message Sent");
  }
    return (
      <><div className="bg-green-200 p-40">
      <p className="Tan text-8xl uppercase">Contact</p>
        
            
                {/* Left Content */}
              

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="p-8  rounded-2xl bg-white border shadow-lg bg-background"
                >
                    <form className="space-y-6  grid items-center justify-center h-full">
                        <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
                            <div className="space-y-2 ">
                                <label className="block Tan uppercase">First Name</label>
                                <Input placeholder="First Name" required />
                            </div>
                            <div className="space-y-2 ">
                                <label className="block Tan uppercase">Last Name</label>
                                <Input placeholder="Last Name " required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="block Tan uppercase">Email Address</label>
                            <Input type="email" placeholder="Email Address" required />
                        </div>
                        <div className="space-y-2">
                            <label className="block Tan uppercase">Subject</label>
                            <Input placeholder="Subject" required />
                        </div>
                        <div className="space-y-2">
                            <label className="block Tan uppercase">Message</label>
                            <Textarea placeholder="Write your message here..." rows={4} required />
                        </div>
                        <Button onClick={
                          submitHandler
                        } type="submit" className="w-full Tan border" >
                            Send Message
                        </Button>
                    </form>
                </motion.div>
            </div>
            
        
        </>
    );
}
