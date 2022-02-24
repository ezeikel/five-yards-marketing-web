/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCheckCircle,
  faTimesCircle,
  faAngleDown,
} from "@fortawesome/pro-light-svg-icons";

library.add(
  faFacebookF,
  faTwitter,
  faInstagram,
  faWhatsapp,
  faCheckCircle,
  faTimesCircle,
  faAngleDown,
);

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative bg-white overflow-hidden pt-6">
      <Header />
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
