import React, { useState } from 'react'
import heroImg from '../assets/hero.jpg'
import profile from '../assets/image.jpg'
import bgImg from '../assets/hero.jpg'
import logo from '../assets/logo.png'
import { Carousel } from 'react-responsive-carousel'
import PaymentSection from './PaymentSection'
import PartnerLogoSlider from './PartnerLogoSlider'

import {
  FaEnvelope,
  FaBirthdayCake,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa'


const Home = () => {
  // const [selectedDate, setSelectedDate] = useState('')
  // const [selectedHour, setSelectedHour] = useState('')
  // const [dateError, setDateError] = useState(false)
  // const [hourError, setHourError] = useState(false)

  // const hours = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM']

  // const handleSubmit = () => {
  //   let valid = true
  //   if (!selectedDate) {
  //     setDateError(true)
  //     valid = false
  //   } else {
  //     setDateError(false)
  //   }

  //   if (!selectedHour) {
  //     setHourError(true)
  //     valid = false
  //   } else {
  //     setHourError(false)
  //   }

  //   if (valid) {
  //     alert(`Appointment booked on ${selectedDate} at ${selectedHour}`)
  //   }
  // }

  return (
    <div className="relative overflow-x-hidden min-h-screen font-sans">
      {/* 🔹 Full-page background image */}
      <div className="absolute inset-0 -z-30">
        <img
          src={bgImg}
          alt="Full Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🔹 Light gray overlay */}
      <div className="absolute inset-0 bg-gray-100/70 -z-20" />

      {/* 🔹 Hero Image */}
      <div className="absolute top-[-34rem] left-[-1.5rem] right-0 w-screen overflow-hidden rounded-b-[100px] transform rotate-[-5deg] md:rotate-[-4.7deg] z-10">
        <img
          src={heroImg}
          alt="Hero"
          className="object-cover w-screen h-[47.75rem]"
        />
      </div>

      {/* 🔹 Profile Card */}
      <div className="absolute top-[16rem] left-1/2 transform -translate-x-2/3 -translate-y-1/2 z-20">
        <div className="flex flex-col items-center sm:flex-row sm:items-end text-black p-4 rounded-2xl">
          <img
            src={profile}
            alt="Profile"
            className="w-[12rem] h-[14rem] sm:w-[13rem] sm:h-[16rem] border-4 border-white object-cover rounded-[30px]"
          />
          <div className="mt-5 sm:ml-8 text-center sm:text-left">
            <h1 className="text-LG sm:text-xl md:text-2xl font-roboto font-semibold">
            ALAZARE SHIFERAW
            </h1>
            <p className="text-lg sm:text-lg md:text-xl font-roboto text-[#8b4513]">
            General Manager
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 Contact Info Section */}
      <div className="pt-[26rem] max-w-5xl mx-auto px-10 text-center">
        <p className="text-gray-800 text-[16px] mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium
          ligula et ex ullamcorper, vitae feugiat mi volutpat. Cras gravida
          vulputate mauris, at sodales justo tincidunt a. Aliquam erat volutpat.
          Vestibulum ante ipsum primis.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-xl shadow-sm hover:scale-95 transition-transform duration-300">
            <FaEnvelope className="text-2xl text-[#8b4513] mr-4" />
            <div className="text-left text-[12px]">
              <p className="font-semibold text-[#8b4513]">
                KaraFrederick2gmail.com
              </p>
              <p className="text-sm text-gray-600">Email</p>
            </div>
          </div>

          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-xl shadow-sm hover:scale-95 transition-transform duration-300">
            <FaPhone className="text-2xl text-[#8b4513] mr-4" />
            <div className="text-left text-[12px]">
              <p className="font-semibold text-[#8b4513]">+1 2920242902</p>
              <p className="text-sm text-gray-600">Mobile Number</p>
            </div>
          </div>

          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-xl shadow-sm hover:scale-95 transition-transform duration-300">
            <FaBirthdayCake className="text-2xl text-[#8b4513] mr-4" />
            <div className="text-left text-[12px]">
              <p className="font-semibold text-[#8b4513]">12th June, 1960</p>
              <p className="text-sm text-gray-600">Date of Birth</p>
            </div>
          </div>

          <div className="flex items-center bg-gray-100 px-4 py-1 rounded-xl shadow-sm hover:scale-95 transition-transform duration-300">
            <FaMapMarkerAlt className="text-2xl text-[#8b4513] mr-4" />
            <div className="text-left text-[12px]">
              <p className="font-semibold text-[#8b4513]">New York, USA</p>
              <p className="text-sm text-gray-600">Location</p>
            </div>
          </div>
        </div>

        {/* 🔹 Social Icons */}
        <div className="flex justify-center gap-10 text-2xl text-[#8b4513] mb-16">
          <FaFacebook className="cursor-pointer hover:scale-120 transition transform duration-300" />
          <FaWhatsapp className="cursor-pointer hover:scale-120 transition transform duration-300" />
          <FaLinkedin className="cursor-pointer hover:scale-120 transition transform duration-300" />
          <FaInstagram className="cursor-pointer hover:scale-120 transition transform duration-300" />
          <FaTwitter className="cursor-pointer hover:scale-120 transition transform duration-300" />
        </div>
      </div>

      {/* 🔹 Appointment Section */}
      <div className="bg-white p-8">
         {/* 🔹 Services Slider Section */}
         <h2 className="text-2xl font-bold mb-2 text-center">Our Services</h2>
         <div className="w-20 h-1 bg-[#8b4513] mx-auto mb-6 rounded"></div>
            <div className="max-w-5xl mx-auto mb-12 ">
              <Carousel
                autoPlay
                infiniteLoop
                interval={4000}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                swipeable
                emulateTouch
                showArrows={true}
                className="rounded-lg"
              >
                {[
                  [
                    
                    { title: 'Photoshoot Glam', desc: 'consectetur adipisicing elit. Aliquam aliquid error, corporis, sunt inventore minus minima sapiente quis, iste fugiat ad eveniet at aut vel. Earum blanditiis voluptatum vitae exercitationem?' },
                    { title: 'Everyday Natural', desc: 'consectetur adipisicing elit. Aliquam aliquid error, corporis, sunt inventore minus minima sapiente quis, iste fugiat ad eveniet at aut vel. Earum blanditiis voluptatum vitae exercitationem?' },
                  ],
                  [
                    
                    { title: 'Photoshoot Glam', desc: 'consectetur adipisicing elit. Aliquam aliquid error, corporis, sunt inventore minus minima sapiente quis, iste fugiat ad eveniet at aut vel. Earum blanditiis voluptatum vitae exercitationem?' },
                    { title: 'Everyday Natural', desc: 'consectetur adipisicing elit. Aliquam aliquid error, corporis, sunt inventore minus minima sapiente quis, iste fugiat ad eveniet at aut vel. Earum blanditiis voluptatum vitae exercitationem?' },
                  ],
                ].map((group, idx) => (
                  
                  <div key={idx} className="flex justify-center gap-6 px-6">
                    {group.map((service, i) => (
                      <div
                        key={i}
                        className="w-full max-w-[45%] h-50 border-3 border-[#8b4513] bg-white p-6 rounded-lg shadow-md"
                      >
                        <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                        <p className="text-center text-gray-600">{service.desc}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </Carousel>
            </div>


{/* 
           <h2 className="text-2xl font-bold mb-2 text-center">
            Make An Appointment
          </h2>
          <div className="w-20 h-1 bg-[#8b4513] mx-auto mb-6 rounded"></div>

          <div className="mb-4 max-w-4xl mx-auto">
            <label className="block mb-2 font-semibold">Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className={`w-full border ${
                dateError ? 'border-red-500' : 'border-gray-300'
              } rounded p-2`}
            />
            {dateError && (
              <p className="text-red-500 text-sm mt-1">Please select a date.</p>
            )}
          </div>

          <div className="mb-6 max-w-4xl mx-auto">
            <label className="block mb-2 font-semibold">Hour</label>
            <div className="flex flex-wrap gap-5">
              {hours.map((hour) => (
                <button
                  key={hour}
                  onClick={() => setSelectedHour(hour)}
                  className={`w-[23.3%] border rounded px-4 py-2 ${
                    selectedHour === hour
                      ? 'bg-[#8b4513] text-white'
                      : 'border-[#8b4513] text-[#8b4513]'
                  }`}
                >
                  {hour}
                </button>
              ))}
            </div>
            {hourError && (
              <p className="text-red-500 text-sm mt-1 mx-auto">
                Please select an hour.
              </p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            className="bg-[#8b4513] text-white px-6 py-2 rounded hover:bg-[#6e3910] transition mx-80"
          >
            Make An Appointment
          </button>  */}
        </div> 


        <PaymentSection />
        <PartnerLogoSlider />


        <footer className="bg-[#f9f9f9] border-t border-gray-300 h-[30vh] py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              {/* Left Section */}
              <div className="mb-4 md:mb-0">
                <img src={logo} alt="" className='w-30'/>
                <h2 className="text-xl font-bold text-[#8b4513]">ALAZARE SHIFERAW</h2>
                <p className="text-sm text-gray-600">General Manager</p>
              </div>

              {/* Center Section - Social Links */}
              <div className="flex space-x-6 text-[#8b4513] text-xl">
                <a href="#" className="hover:scale-120 transition transform duration-300">
                  <FaFacebook/>
                </a>
                <a href="#" className="hover:scale-120 transition transform duration-300">
                  <FaInstagram />
                </a>
                <a href="#" className="hover:scale-120 transition transform duration-300">
                  <FaTwitter />
                </a>
                <a href="#" className="hover:scale-120 transition transform duration-300">
                  <FaLinkedin />
                </a>
              </div>

              {/* Right Section */}
              <div className="text-sm text-gray-500 mt-4 md:mt-0">
                &copy; {new Date().getFullYear()} S.E.E.D Plc. All rights reserved.
              </div>
            </div>
          </div>
        </footer>

    </div>

  )
}

export default Home






