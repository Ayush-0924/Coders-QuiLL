import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6 dark:bg-gradient-to-rdark:scrollbar-track-slate-700">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-2xl w-full dark:bg-gray-800">
        <div className="text-center">
          <img
            src=".../public/client/public/e2f2320b08a54c87f1380e568421a8f2.png"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-indigo-600"
          />
          <h1 className="text-4xl font-bold text-indigo-600 mb-2 dark:text-indigo-400">Coders QuiLL</h1>
          <p className="text-xl font-medium text-gray-800 mb-6 dark:text-gray-200">by Ayush Kumar</p>
        </div>
        <p className="text-gray-700 text-lg mb-4 dark:text-gray-300">
          Welcome to <strong>Coders QuiLL</strong>, a blog dedicated to exploring the latest in technology, engineering, and innovation. My name is <strong>Ayush Kumar</strong>, a 3rd year student in <strong>Mechanical Engineering</strong>. This blog is a platform where I share insights, trends, and deep dives into the world of technology.
        </p>
        <p className="text-gray-700 text-lg mb-4 dark:text-gray-300">
          At Coders QuiLL, our mission is to provide readers with high-quality, informative, and engaging content. Whether you're a tech enthusiast, a student, or a professional, you'll find articles that cater to your interests. We cover a wide range of topics including artificial intelligence, machine learning, robotics, software development, and much more.
        </p>
        <p className="text-gray-700 text-lg mb-4 dark:text-gray-300">
          Our team of writers and contributors are passionate about technology and are committed to bringing you the latest news and analysis. We believe that technology has the power to transform the world and we strive to keep our readers informed about the latest advancements and how they can impact our daily lives.
        </p>
        <p className="text-gray-700 text-lg mb-4 dark:text-gray-300">
          Join us on this journey as we explore the fascinating world of technology. Stay tuned for regular updates, in-depth articles, and exciting stories from the tech world. Thank you for visiting Coders QuiLL, and we hope you enjoy reading our blog as much as we enjoy creating it.
        </p>
        <div className="text-center mt-6">
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200">Ayush Kumar</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">3rd Year, Mechanical Engineering</p>
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300 dark:text-gray-400 dark:hover:text-indigo-400">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-pink-600 transition duration-300 dark:text-gray-400 dark:hover:text-pink-400">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition duration-300 dark:text-gray-400 dark:hover:text-blue-400">
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-red-600 transition duration-300 dark:text-gray-400 dark:hover:text-red-400">
            <i className="fab fa-youtube fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
