/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from 'react';
import Image from 'next/image';

import imgTemoin from '../../public/images/Ellipse 10.png'

import FormContact from './formContact';

const testimonials = [
  {
    id: 1,
    name: 'Name',
    role: 'CEO',
    text: "Lorem ipsum dolor sit amet consectetur. In enim ornare odio consectetur. Id non urna velit magna massa id tellus dui convallis erat. Massa est elit massa non lorem risus vel etiam pellentesque.",
    image: imgTemoin,
  },
  {
    id: 2,
    name: 'John Doe',
    role: 'Designer',
    text: "Lorem ipsum dolor sit amet consectetur. In enim ornare odio consectetur.",
    image: imgTemoin,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 px-6 text-center mt-6">
      <h2 className="text-3xl font-bold">Testimonials</h2>
      <p className="text-gray-600 mt-2 mb-8 max-w-xl mx-auto">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus metus in.
      </p>
      <div className="relative flex justify-center items-center">
        <div className="w-full max-w-2xl bg-white p-6 rounded-xl shadow-lg flex items-center gap-4">
          <Image
            src={testimonials[current].image}
            alt={testimonials[current].name}
            width={80}
            height={80}
            className="rounded-full object-cover"
          />
          <div className="text-left">
            <p className="text-gray-700">{testimonials[current].text}</p>
            <p className="mt-2 font-semibold">{testimonials[current].name}</p>
            <p className="text-gray-500 text-sm">{testimonials[current].role}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-6 rounded-full transition-all ${
              current === index ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
      <div className="mt-16  rounded-xl text-center shadow-lg py-8">
        <h2 className="text-2xl font-bold">Lets Design Together</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus metus.
        </p>
        <div className="mt-4 flex items-center justify-center gap-2">
          {/* <input
            type="email"
            placeholder="Enter Your Email"
            className="px-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="bg-orange-500 text-white px-5 py-2  shadow-lg hover:bg-orange-600 rounded-md ">
            Contact Me
          </button> */}

          {/* formulaire de contact */}
          <FormContact />
        </div>
      </div>
    </section>
  );
}
