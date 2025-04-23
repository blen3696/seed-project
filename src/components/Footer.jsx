import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdContactPage } from 'react-icons/md';
import { FiShare2 } from 'react-icons/fi';
import logo from '../assets/logo.png';

const Footer = () => {
  const handleAddToContacts = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:ALAZARE SHIFERAW
ORG:S.E.E.D
TITLE:General Manager
EMAIL:example@example.com
TEL:+251900000000
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'ALAZARE_SHIFERAW.vcf';
    link.click();
  };

  const handleShare = async () => {
    const shareData = {
      title: 'S.E.E.D',
      text: 'Check out SEED!',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        alert('Sharing failed');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <footer className="bg-[#403D3D] border-t border-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* Left Section */}
          <div className="mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="w-32 mb-2" />
            <h2 className="text-xl font-bold text-[#FBAC20]">ALAZARE SHIFERAW</h2>
            <p className="text-sm text-white">General Manager</p>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6 text-[#FBAC20] text-xl">
            <a href="https://web.facebook.com/people/SEED-git/100092510080285/" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" className="hover:scale-110 transition">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" className="hover:scale-110 transition">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/company/seed7/" target="_blank" rel="noreferrer" className="hover:scale-110  transition">
              <FaLinkedin />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row items-center md:items-end mt-6 md:mt-0 space-x-2">
            <button onClick={handleAddToContacts} className="flex items-center py-2 px-3 bg-[#FBAC20] rounded-3xl gap-2 text-sm text-gray-700 hover:scale-110  transition">
              <MdContactPage className="text-lg" />
            </button>
            <button onClick={handleShare} className="flex items-center py-2 px-3 bg-[#FBAC20] rounded-3xl gap-2 text-sm text-gray-700 hover:scale-110  transition">
              <FiShare2 className="text-lg" />
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-4 text-center text-sm text-white">
        Copyright &copy; {new Date().getFullYear()}S.E.E.D | Powered by S.E.E.D
        </div>
      </div>
    </footer>
  );
};

export default Footer;
