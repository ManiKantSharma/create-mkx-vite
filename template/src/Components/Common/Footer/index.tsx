import { ReactElement } from "react";

/**
 * Footer component.
 * Represents the footer section of the application.
 * Typically contains copyright information.
 * @returns {JSX.Element} Footer component JSX
 */
const Footer = (): ReactElement => {
  return (
    <div className="bottom-0 flex items-center h-[5vh] justify-center p-2 text-white bg-black">
      © 2024 MKx Inc. All Rights Reserved
    </div>
  );
};

export default Footer;
