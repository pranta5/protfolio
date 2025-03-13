"use client"

import ContactMeComp from "@/app/components/ContactComp";
const Contact = () => {
  return (
    <div >
      <div className="text-center py-26 my-10" >
        <p className="text-9xl font-bold uppercase tracking-wide">Say Hello</p>
        <p className="text-lg max-w-xl mx-auto mt-6 text-gray-700">Fill out the form below to get in touch with me. I am always excited to hear about new opportunities and I will do my best to respond to your inquiry within 24 hours.</p>
      </div>
      <div className="mb-20" >
        <ContactMeComp />
      </div>
    </div>
  );
};

export default Contact;
