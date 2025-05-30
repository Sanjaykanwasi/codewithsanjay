import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black flex text-white justify-center px-7 h-20 items-center">
      © {currentYear} Code With Sanjay. Designed & Developed by Sanjay Singh
      Kanwasi.
    </footer>
  );
};

export default Footer;
