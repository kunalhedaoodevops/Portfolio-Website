"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    try {
      const wrapperEl = document.getElementById("smooth-wrapper");
      const contentEl = document.getElementById("smooth-content");

      if (!wrapperEl || !contentEl) {
        console.warn("Smooth wrapper or content not found");
        return;
      }

      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.7,
        speed: 1.7,
        effects: true,
        autoResize: true,
        ignoreMobileResize: true,
      });

      smoother.scrollTop(0);
      smoother.paused(true);

      let links = document.querySelectorAll(".header ul a");
      links.forEach((elem) => {
        let element = elem as HTMLAnchorElement;
        element.addEventListener("click", (e) => {
          if (window.innerWidth > 1024) {
            e.preventDefault();
            let elem = e.currentTarget as HTMLAnchorElement;
            let section = elem.getAttribute("data-href");
            smoother.scrollTo(section, true, "top top");
          }
        });
      });
      window.addEventListener("resize", () => {
        ScrollSmoother.refresh(true);
      });
    } catch (err) {
      console.error("Error initializing Navbar scroll effects:", err);
    }
  }, []);
  return (
    <>
      <div className="header">
        {/* ✅ LOGO FIX */}
        <a href="/#" className="navbar-title" data-cursor="disable">
          <img src="/logo/logo_new.png" alt="logo" />
          {/* <span>Kunal Tech</span> */}
        </a>
        <a
          href="mailto:hello@kunaltechsolutions.indevs.in"
          className="navbar-connect"
          data-cursor="disable"
        >
          hello@kunaltechsolutions.indevs.in
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;