import React from 'react';
import { footerData } from './FooterData';

const Footer = () => {
  return (
    <div className="container pt-12 md:pt-20 md:pb-20">
      <ul className="grid grid-cols-2 gap-y-2 gap-x-10 md:gap-10 xl:gap-0 md:grid-cols-3 xl:justify-between xl:flex xl:flex-wrap">
        {footerData.map((section, index) => (
          <li key={index} className="mb-8 md:w-auto md:mb-0">
            <h2 className="text-neutral-400 text-xs sm:text-sm font-medium mb-4 md:mb-6 uppercase tracking-widest">
              {section.title}
            </h2>
            <div>
              {section.links.map((link, linkIndex) => (
                <p key={linkIndex} className="flex mb-3 text-xs md:text-sm md:mb-3  items-start">
                  <a className="font-normal text-neutral-400 hover:text-white " href={link.href}>
                    {link.name}
                  </a>
                </p>
              ))}
            </div>
          </li>
        ))}
        <li className="mb-8 md:w-auto md:mb-0">
          <h2 className="text-neutral-400 text-xs sm:text-sm font-medium mb-4 md:mb-6 uppercase tracking-widest">
            Social
          </h2>
          <ul className="flex gap-3 mt-8 text-neutral-400">
            <li>
              <a aria-label="Twitter" href="https://x.com/scale_ai">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  role="img"
                  className="w-5 h-5 duration-300 ease-in-out fill-current transition-color hover:text-white"
                >
                  <path d="M18.205 2.25h3.308l-7.227 8.26 8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231 5.45-6.231h.002zm-1.16 17.52h1.832L7.045 4.126H5.078L17.044 19.77z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a aria-label="Facebook" href="https://www.facebook.com/scaleapi">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 duration-300 ease-in-out fill-current transition-color hover:text-white"
                >
                  <path d="M24.147 12.073C24.147 5.405 18.74 0 12.073 0S0 5.405 0 12.073C0 18.1 4.415 23.094 10.187 24v-8.437H7.12v-3.49h3.066v-2.66c0-3.025 1.802-4.697 4.56-4.697 1.32 0 2.703.236 2.703.236v2.971h-1.523c-1.5 0-1.967.93-1.967 1.887v2.263h3.348l-.535 3.49H13.96V24c5.772-.906 10.187-5.9 10.187-11.927z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a aria-label="LinkedIn" href="https://www.linkedin.com/company/scaleai">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 duration-300 ease-in-out fill-current transition-color hover:text-white"
                >
                  <path d="M22.223 0H1.772C.792 0 0 .773 0 1.73v20.536C0 23.222.792 24 1.772 24h20.451c.98 0 1.777-.778 1.777-1.73V1.73C24 .773 23.203 0 22.223 0zM7.12 20.452H3.558V8.995H7.12v11.457zM5.34 7.434a2.064 2.064 0 110-4.125 2.063 2.063 0 010 4.125zm15.112 13.018h-3.558v-5.57c0-1.326-.024-3.037-1.852-3.037-1.851 0-2.133 1.449-2.133 2.944v5.663H9.356V8.995h3.413v1.566h.047c.473-.9 1.636-1.852 3.365-1.852 3.605 0 4.27 2.372 4.27 5.457v6.286z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="flex text-xs md:text-sm justify-between flex-col md:flex-row pt-6 md:mt-12 pb-12 border-neutral-800 border-t">
        <span className="text-neutral-400">
          Copyright © 2024 Scale AI, Inc. All rights reserved.
        </span>
        <span className="mt-4 md:mt-0 text-neutral-400">
          <a className="text-neutral-400 font-normal" href="/legal/terms">
            Terms of Use
          </a>{' '}
          &amp;{' '}
          <a className="text-neutral-400 font-normal" href="/legal/privacy">
            Privacy Policy
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
