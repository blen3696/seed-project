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
  FaRegClock,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa'


const Home = () => {
 

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
      <div className="absolute inset-0 bg-gray-300/70 -z-20" />
      <div className="absolute top-[-34rem] left-[-1.5rem] right-0 w-screen border-4 border-gray-300 overflow-hidden rounded-b-[100px] transform rotate-[-5deg] md:rotate-[-4.7deg] z-10">
        <img
          src={heroImg}
          alt="Hero"
          className="object-cover w-screen h-[47.75rem]"
        />
      </div>

      {/* 🔹 Profile Card */}
      <div className="absolute top-[16rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
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
            <p className="text-lg sm:text-lg md:text-xl font-bold text-[#FBAC20]">
            General Manager
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 Contact Info Section */}
      <div className="pt-[26rem] max-w-5xl mx-auto px-10 text-center">
      <p className="text-gray-800 text-[16px] mb-6">
        We aim to be East Africa’s leading provider of tech-driven engineering solutions and educational services,
        helping businesses optimize operations, empower teams, and drive innovation with our consulting, training, and research expertise.
      </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-xl shadow-sm hover:scale-95 transition-transform duration-300">
            <FaEnvelope className="text-2xl text-[#FBAC20] mr-4" />
            <div className="text-left text-[12px]">
              <p className="font-semibold text-[#FBAC20]">
              alazare910700906@gmail.com
              </p>
              <p className="text-sm text-gray-600">Email</p>
            </div>
          </div>

          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-xl shadow-sm hover:scale-95 transition-transform duration-300">
            <FaPhone className="text-2xl text-[#FBAC20] mr-4" />
            <div className="text-left text-[12px]">
              <p className="font-semibold text-[#FBAC20]">+251 910700960</p>
              <p className="text-sm text-gray-600">Mobile Number</p>
            </div>
          </div>

          <div className="flex items-center bg-gray-100 px-4 py-3 rounded-xl shadow-sm hover:scale-95 transition-transform duration-300">
            <FaRegClock className="text-2xl text-[#FBAC20] mr-4" />
            <div className="text-left text-[12px]">
            <p className="font-semibold text-[#FBAC20]">Mon - Fri, 9:00 AM - 5:00 PM</p>
            <p className="text-sm text-gray-600">Office Hours</p>
            </div>
          </div>

          <div className="flex items-center bg-gray-100 px-4 py-1 rounded-xl shadow-sm hover:scale-95 transition-transform duration-300">
            <FaMapMarkerAlt className="text-2xl text-[#FBAC20] mr-4" />
            <div className="text-left text-[12px]">
              <p className="font-semibold text-[#FBAC20]">Addis Ababa, Mexico</p>
              <p className="text-sm text-gray-600">Location</p>
            </div>
          </div>
        </div>

        {/* 🔹 Social Icons */}
        <div className="flex justify-center gap-10 text-2xl text-[#FBAC20] mb-16">
            <a href="https://web.facebook.com/people/SEED-git/100092510080285/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="cursor-pointer hover:scale-120 transition transform duration-300" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="cursor-pointer hover:scale-120 transition transform duration-300" />
            </a>
            <a href="https://www.linkedin.com/company/seed7/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="cursor-pointer hover:scale-120 transition transform duration-300" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="cursor-pointer hover:scale-120 transition transform duration-300" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="cursor-pointer hover:scale-120 transition transform duration-300" />
            </a>
        </div>

      </div>

 
      {/* 🔹 Services Slider Section */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl font-bold mb-2 text-center">Our Services</h2>
      <div className="w-20 h-1 bg-[#FBAC20] mx-auto mb-6 rounded"></div>

      <div className="max-w-6xl mx-auto mb-12">
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
          className="rounded-lg">
          {[
            
              [
                {
                  title: 'Website Marketing',
                  desc: 'We create high-performing websites that serve as your brand’s digital front door—designed to convert, optimized for search engines, and tailored to your business goals.',
                },
                {
                  title: 'Content Marketing',
                  desc: 'From blog posts to videos and infographics, we help craft compelling content that educates, engages, and turns audiences into loyal customers.',
                },
              ],
              [
                {
                  title: 'Advocacy Marketing',
                  desc: 'We build and nurture brand advocates by leveraging satisfied customers and key stakeholders to authentically promote your products or services.',
                },
                {
                  title: 'Data-Driven Marketing',
                  desc: 'Make smarter marketing decisions through analytics. We use real-time data to track performance and refine strategies for maximum ROI.',
                },
              ],
            
            
          ].map((group, idx) => (
            <div
              key={idx}
              className="flex flex-wrap justify-center gap-6 px-4 sm:px-8"
            >
              {group.map((service, i) => (
                <div
                  key={i}
                  className="w-full sm:w-[80%] md:w-[45%] lg:w-[40%] xl:w-[35%] border border-[#FBAC20] bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                  <p className="text-center text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      </div>
    </div>



        <PaymentSection />
        <PartnerLogoSlider />


      {/* footer Section */}
        <footer className="bg-[#f9f9f9] border-t border-gray-300 h-[25vh] py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <div className="mb-4 md:mb-0">
                <img src={logo} alt="" className='w-30'/>
                <h2 className="text-xl font-bold text-[#FBAC20]">ALAZARE SHIFERAW</h2>
                <p className="text-sm text-gray-600">General Manager</p>
              </div>

    
              <div className="flex space-x-6 text-[#FBAC20] text-xl">
                <a href="https://web.facebook.com/people/SEED-git/100092510080285/" target="_blank" className="hover:scale-120 transition transform duration-300">
                  <FaFacebook/>
                </a>
                <a href="#" target="_blank" className="hover:scale-120 transition transform duration-300">
                  <FaInstagram />
                </a>
                <a href="#"  target="_blank" className="hover:scale-120 transition transform duration-300">
                  <FaTwitter />
                </a>
                <a href="https://www.linkedin.com/company/seed7/" target="_blank" className="hover:scale-120 transition transform duration-300">
                  <FaLinkedin />
                </a>
              </div>

              <div className="text-sm text-gray-500 mt-4 md:mt-0">
              Copyright &copy; {new Date().getFullYear()} | Powered by S.E.E.D
              </div>
            </div>
          </div>
        </footer>

    </div>

  )
}

export default Home






