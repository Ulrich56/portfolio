import React from "react";
import { MdAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";



const Contact = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-center text-purple-500 border-b-4 border-blue-500 border-opacity-50 w-fit mx-auto mb-6 animate-bounce">Contact</h2>

        
        <div className="space-y-2 flex gap-8 justify-center flex-col sm:flex-row items-center">
          <p className="flex gap-2 items-center justify-center">
            <MdAttachEmail className="mt-1 text-red-600"/>{" Email: "}
            <a
              href="mailto:ulrich.pineiro@epitech.eu"
              className="underline text-purple-400"
            >
              ulrich.pineiro@epitech.eu
            </a>
          </p>
          <p className="flex gap-2 items-center justify-center">
            <FaPhoneAlt className="mt-1 text-green-400"/> {" Telephone: "}
            <a
              href="tel:+2250501103521"
              className="underline text-purple-400"
            >
            +225 05 01 10 35 21
            </a>
          </p>

          <div className="flex justify-center gap-6 mb-2">
          <a
            href="https://www.linkedin.com/in/ulrich-adeniyi-pineiro-10670a373"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ulrichpineiro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300"
          >
            GitHub
          </a>
        </div>
        </div>
        

      </div>
    </footer>
  );
};

export default Contact;
