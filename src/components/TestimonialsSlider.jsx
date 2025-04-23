import React, { useEffect, useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import profile from '../assets/image.jpg'


const testimonials = [
  {
    name: 'Emily Johnson',
    image: profile,
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
  },
  {
    name: 'Michael Doe',
    image: profile,
    quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
  },
  {
    name: 'Sarah Williams',
    image: profile,
    quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
  },
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const { name, image, quote } = testimonials[currentIndex];

  return (
    <div className="bg-white py-16 px-4 text-center relative overflow-hidden">
      <h2 className="text-3xl font-bold mb-2">Testimonials</h2>
      <div className="w-20 h-1 bg-[#FBAC20] mx-auto mb-3 rounded"></div>

      <div className="relative max-w-lg mx-auto bg-white p-8">
        <FaQuoteLeft className="text-5xl text-[#f0bc62] absolute top-4 left-4" />
        <FaQuoteRight className="text-5xl text-[#f0bc62] absolute bottom-4 right-4" />

        <img
          src={image}
          alt={name}
          className="mx-auto rounded-lg w-25 h-25 object-cover border-4 border-[#FBAC20] shadow-md"
        />

        <div className='max-w-[80%] mx-auto'>

        <p className="text-gray-700 mt-6 text-base leading-relaxed">{quote}</p>
        <p className="mt-4 font-semibold text-[#FBAC20]">– {name}</p>
        </div>

      </div>

      {/* Custom Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`h-[6px] rounded-full transition-all ${
              currentIndex === idx
                ? 'w-4 bg-[#FBAC20]'
                : 'w-[6px] bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSlider;


