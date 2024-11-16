import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-8 bg-blue-500 flex items-center justify-center text-xs text-white gap-4">
                <p className='bold'>Developed by Rutvik Vaghani</p>
                <a
                    href="mailto:rutvikvaghani777@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                >
                    <FaEnvelope className="inline-block text-white text-lg" />
                </a>
                <a
                    href="https://github.com/rutvikv09/VocaSync.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                >
                    <FaGithub className="inline-block text-white text-lg" />
                </a>
                <a
                    href="https://www.linkedin.com/in/vaghani-rutvik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                >
                    <FaLinkedin className="inline-block text-white text-lg" />
                </a>
            </footer>
  )
}
