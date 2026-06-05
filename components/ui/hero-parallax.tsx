"use client";

import React from "react";
import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Product = {
  title: string;
  link: string;
  thumbnail: string;
};

export function HeroParallax({ products }: { products: Product[] }) {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 940]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -940]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.22], [16, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.24, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.22], [18, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.22], [-640, 420]),
    springConfig
  );

  return (
    <section ref={ref} className="hero-parallax" id="home">
      <Header />
      <motion.div
        className="hero-parallax__deck"
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="hero-parallax__row hero-parallax__row--reverse">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="hero-parallax__row">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="hero-parallax__row hero-parallax__row--reverse">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function Header() {
  const heroSkills = [
    "React / Next.js",
    "Node.js / NestJS",
    "RAG Systems",
    "n8n Agents",
    "AWS / DevOps",
    "Vue / Nuxt",
  ];

  return (
    <div className="hero-parallax__header">
      <p className="eyebrow">
        <span /> Available for remote opportunities
      </p>
      <h1>
        Muhammad Imran
        <span>AI Engineer & Enterprise Architect</span>
      </h1>
      <p className="hero-copy">
        Realizing visions from MERN Stack Developer to AI Engineer. I build
        intelligent, production-ready systems that scale across product, cloud,
        and automation.
      </p>
      <div className="pill-row" aria-label="Core skills">
        {heroSkills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
      <div className="hero-actions">
        <a className="button primary" href="#contact">
          Get In Touch
        </a>
        <a
          className="button secondary"
          href="https://github.com/muhammadimran787898"
          target="_blank"
          rel="noreferrer"
        >
          View GitHub
        </a>
      </div>
    </div>
  );
}

function ProductCard({
  product,
  translate,
}: {
  product: Product;
  translate: MotionValue<number>;
}) {
  return (
    <motion.article
      className="hero-parallax__card"
      style={{ x: translate }}
      whileHover={{ y: -18 }}
    >
      <Link href={product.link} className="hero-parallax__card-link">
        <Image
          src={product.thumbnail}
          height={640}
          width={900}
          className="hero-parallax__image"
          alt={product.title}
          unoptimized
        />
      </Link>
      <div className="hero-parallax__card-shade" />
      <h2>{product.title}</h2>
    </motion.article>
  );
}
