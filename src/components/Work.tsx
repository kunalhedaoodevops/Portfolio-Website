import { useRef, useState } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Work = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slideCount = 6;

  const handleSlide = (direction: "prev" | "next") => {
    const nextIndex = direction === "next" ? activeIndex + 1 : activeIndex - 1;
    const clamped = Math.max(0, Math.min(nextIndex, slideCount - 1));
    if (clamped === activeIndex) return;

    setActiveIndex(clamped);
    const progress = clamped / (slideCount - 1);
    if (tweenRef.current) {
      tweenRef.current.pause();
      gsap.to(tweenRef.current, {
        progress,
        duration: 0.6,
        ease: "power3.out",
      });
    }
  };

  useGSAP(() => {
    const isTouchDevice = ScrollTrigger.isTouch || window.innerWidth <= 900;
    if (isTouchDevice) return;

    const container = containerRef.current || document.querySelector<HTMLDivElement>(".work-flex");
    if (!container) return;

    const getScrollAmount = () => container.scrollWidth - window.innerWidth;

    tweenRef.current = gsap.to(container, {
      x: () => -getScrollAmount(),
      ease: "none",
      duration: 15,
      paused: true,
    });

    const trigger = ScrollTrigger.create({
      trigger: ".work-section",
      start: "top top",
      end: "bottom top",
      pin: true,
      anticipatePin: 1,
      toggleActions: "play none none reverse",
      onEnter: () => tweenRef.current?.play(),
      onEnterBack: () => tweenRef.current?.play(),
      onLeaveBack: () => tweenRef.current?.pause(0),
      onLeave: () => tweenRef.current?.pause(),
      invalidateOnRefresh: true,
      markers: false,
    });

    return () => {
      tweenRef.current?.kill();
      trigger.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div id="work">
    {/* <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="work-nav">
          <button
            className="work-nav-button work-nav-left"
            onClick={() => handleSlide("prev")}
            aria-label="Previous work"
          >
            ‹
          </button>
          <button
            className="work-nav-button work-nav-right"
            onClick={() => handleSlide("next")}
            aria-label="Next work"
          >
            ›
          </button>
        </div>

        <div className="work-flex" ref={containerRef}>
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
      </div> */}
    </div>
  );
};

export default Work;