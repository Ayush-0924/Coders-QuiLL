import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-red-400 rounded-lg text-white">
                 Coders
              </span>
              QuiLL
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup className="mb-2">
                <Footer.Link
                  href="https://www.100jsprojects.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  100 js projects
                </Footer.Link>
              </Footer.LinkGroup>
              <Footer.LinkGroup>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Coders QuiLL
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup className="mb-2">
                <Footer.Link
                  href="https://github.com/Ayush-0924"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </Footer.Link>
              </Footer.LinkGroup>
              <Footer.LinkGroup>
                <Footer.Link
                  href="https://www.instagram.com/_ayush_0923/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  instagram
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup className="mb-2">
                <Footer.Link href="#">privacy</Footer.Link>
              </Footer.LinkGroup>
              <Footer.LinkGroup>
                <Footer.Link href="#">terms and conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Coders QuiLL"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={FaFacebookF} />
            <Footer.Icon href="#" icon={FaInstagram} />
            <Footer.Icon href="#" icon={FaTwitter} />
            <Footer.Icon href="#" icon={FaGithub} />
            <Footer.Icon href="#" icon={FaDiscord} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
