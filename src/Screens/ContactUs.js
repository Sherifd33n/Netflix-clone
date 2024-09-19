import React from "react";
import Head from "../Components/Home/Head";
import Layout from "../Layout/Layout";
import { FiMapPin, FiPhoneCall, FiMail } from "react-icons/fi";

const ContactUs = () => {
  const ContactData = [
    {
      id: 1,
      title: "Email Us",
      info: "Interactively grow backend ideas for cross-platform model",
      icon: FiMail,
      contact: "info@gmail.com",
    },
    {
      id: 2,
      title: "Call Us",
      info: "Interactively grow backend ideas for cross-platform model",
      icon: FiPhoneCall,
      contact: "+234 000 000 000",
    },
    {
      id: 3,
      title: "Location",
      info: "Ilorin, Kwara, Nigeria.",
      icon: FiMapPin,
      contact: "",
    },
  ];
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="Contact Us" />
        <div className="grid md:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8">
          {ContactData.map((item) => (
            <div
              key={item.id}
              className="border border-border flex-colo p-8 bg-dry rounded-lg text-center"
            >
              <span className="flex-colo w-20 h-20  mb-4 rounded-full bg-main text-subMain text-2xl">
                <item.icon />
              </span>
              <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
              <p className="mb-0 text-sm text-text leading-5">
                <a href={`mailto:${item.contact}`} className="text-blue-600">
                  {item.contact}
                </a>
                {item.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
