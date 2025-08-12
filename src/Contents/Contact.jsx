
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
      <p className="Tan text-8xl">Contact</p>
        <section className="py-16 py-24 px-5">
            <div className="container grid gap-20 grid-cols-2 px-5 flex">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="mb-4 text-2xl text-7xl font-extrabold leading-tight tracking-tight">
                        Let's Connect <br /> and Build Something Exceptional
                    </h2>
                    <p className="mb-8 text-xl text-muted-foreground">
                        We’re here to answer your questions, explore opportunities, and discuss your next big idea. Whether you're looking for a strategic partnership or need technical support, our team is ready to collaborate and deliver solutions tailored to your needs.
                    </p>

                    <div>
                        <h3 className="mb-4 text-2xl font-semibold">Contact Details</h3>
                        <ul className="space-y-3 text-base text-muted-foreground">
                            <li><strong>Phone:</strong> (+91) 7020142215</li>
                            <li><strong>Email:</strong> <a href="mailto:swapnilsanjaysurve07@gmail.com" className="text-foreground/50 underline">swapnilsanjaysurve07@gmail.com</a></li>
                            <li><strong>Web:</strong> <a href="https://github.com/Swapnil2021" className="text-foreground/50 underline" target="_blank" rel="noopener noreferrer">https://github.com/Swapnil2021</a></li>
                        </ul>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="p-8  rounded-2xl border shadow-lg bg-background"
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
            
        </section>
</div>
        </>
    );
}
