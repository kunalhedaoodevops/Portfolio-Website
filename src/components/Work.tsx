"use client";

import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    const container = document.querySelector(".work-flex");

    if (!container) return;

    const getScrollAmount = () =>
      container.scrollWidth - window.innerWidth;

    const distance = getScrollAmount();
    const tween = gsap.to(container, {
      x: distance ? -distance : 0,
      ease: "none",
      duration: 18,
      repeat: -1,
      yoyo: true,
      modifiers: {
        x: (x) => `${parseFloat(x).toFixed(2)}px`,
      },
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-flex">
          {[...Array(6)].map((_, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>Project Name</h4>
                    <p>Category</p>
                  </div>
                </div>

                <h4>Tools and features</h4>
                <p>Javascript, TypeScript, React, Threejs</p>
              </div>

              <WorkImage image="/images/placeholder.webp" alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;