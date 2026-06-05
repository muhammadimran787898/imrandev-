"use client";

import * as React from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

export function ContainerScroll({
  children,
  titleComponent,
}: {
  children: React.ReactNode;
  titleComponent: React.ReactNode;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const rotate = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [0.82, 0.96] : [1.05, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="container-scroll" ref={containerRef}>
      <div className="container-scroll__inner">
        <ScrollHeader titleComponent={titleComponent} translate={translate} />
        <ScrollCard rotate={rotate} scale={scale}>
          {children}
        </ScrollCard>
      </div>
    </div>
  );
}

function ScrollHeader({
  titleComponent,
  translate,
}: {
  titleComponent: React.ReactNode;
  translate: MotionValue<number>;
}) {
  return (
    <motion.div className="container-scroll__header" style={{ translateY: translate }}>
      {titleComponent}
    </motion.div>
  );
}

function ScrollCard({
  children,
  rotate,
  scale,
}: {
  children: React.ReactNode;
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
}) {
  return (
    <motion.div
      className="container-scroll__card"
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
    >
      <div className="container-scroll__screen">{children}</div>
    </motion.div>
  );
}
