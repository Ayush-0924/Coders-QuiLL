import React from "react";
import CallToAction from "../components/CallToAction";

export default function Projects() {
  return (
    <>
      <div>Projects</div>
      <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="text-md text-gray-500 mb-4">
          Embark on an exciting journey of learning HTML, CSS, and JavaScript by
          building fun and engaging projects. Discover the foundations of web
          development through hands-on experience, creating interactive websites
          and dynamic web applications. Enhance your skills, unleash your
          creativity, and transform your ideas into reality as you explore the
          limitless possibilities of coding.
        </p>
        <CallToAction />
      </div>
    </>
  );
}
