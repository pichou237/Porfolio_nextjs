/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Card } from "@/src/components/ui/card";
import { FaCode, FaLaptopCode, FaServer, FaObjectGroup } from "react-icons/fa";

const services = [
  { title: "UI/UX", icon: <FaObjectGroup className="text-orange-500 text-4xl" />, description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum." },
  { title: "Web Design", icon: <FaLaptopCode className="text-orange-500 text-4xl" />, description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum." },
  { title: "Frontend Developer", icon: <FaCode className="text-orange-500 text-4xl" />, description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum." },
  { title: "Backend Developer", icon: <FaServer className="text-orange-500 text-4xl" />, description: "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum." },
];

const ServiceCard = ({ title, icon, description }) => (
  <Card className="p-6 flex flex-col items-center text-center shadow-md rounded-2xl bg-white">
    {icon}
    <h3 className="text-lg font-semibold mt-4">{title}</h3>
    <p className="text-gray-500 text-sm mt-2">{description}</p>
  </Card>
);

export default function Services() {
  return (
    <section id="services" className="py-12 px-6 text-center mt-10 shadow-lg">
      <h2 className="text-3xl font-bold">Services</h2>
      <p className="text-gray-600 mt-2 mb-8 max-w-xl mx-auto">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
