"use client";

import {
  GetStartedButton,
  GhostButton,
  PrimaryButton,
} from "@/components/buttons/ButtonVariants";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  image: StaticImageData | string;
  alt: string;
}

interface ProductsSectionProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export function ProductsSection({
  products,
  title = "Real Products, Real Results",
  subtitle = "See how our platform helps you track and analyze effectively",
}: ProductsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlay, products.length]);

  return (
    <section className="w-full py-20 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {title}
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl">{subtitle}</p>

          {/* Button Container */}
          <div className="flex flex-row items-center justify-center gap-4">
            <GetStartedButton
              size="md"
              className="bg-[#00E5FF] hover:bg-[#00E5FF]/90 text-black px-6"
            />

            <GhostButton
              size="md"
              className="bg-black   hover:bg-black/80 text-white border border-white/10 px-6"
            >
              Reach Out
            </GhostButton>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[450px] md:h-[550px] flex items-center justify-center">
          {/* Base reference width for the cards */}
          <div className="relative w-[300px] md:w-[400px] h-full">
            {products.map((product, index) => {
              let offset = index - currentIndex;

              // Infinite wrapping logic
              if (offset > products.length / 2) offset -= products.length;
              if (offset < -products.length / 2) offset += products.length;

              const absOffset = Math.abs(offset);

              // Only show 5 cards (Center + 2 layers each side)
              if (absOffset > 2) return null;

              // Width logic as per your request
              const cardWidth =
                absOffset === 0 ? "100%" : absOffset === 1 ? "85%" : "70%";
              const scale = absOffset === 0 ? 1 : absOffset === 1 ? 0.9 : 0.8;
              const opacity = absOffset === 0 ? 1 : absOffset === 1 ? 0.8 : 0.5;

              /**
               * SPREAD LOGIC
               * We move the cards out from the center (0).
               * Layer 1 (80% width) moves +/- 260px
               * Layer 2 (60% width) moves +/- 480px
               */
              let xPosition = 0;
              if (offset === 1) xPosition = 260;
              if (offset === -1) xPosition = -260;
              if (offset === 2) xPosition = 480;
              if (offset === -2) xPosition = -480;

              return (
                <motion.div
                  key={product.id}
                  initial={false}
                  animate={{
                    x: `calc(-50% + ${xPosition}px)`, // Centers the card then offsets it
                    scale: scale,
                    width: cardWidth,
                    zIndex: 10 - absOffset,
                    opacity: opacity,
                    filter: `blur(${absOffset * 1}px)`,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                  }}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlay(false);
                  }}
                  // "left-1/2" is critical to make sure the "x" offset starts from the center
                  className="absolute left-1/2 top-0 h-full cursor-pointer flex items-center justify-center"
                >
                  <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      className="object-cover"
                      sizes="400px"
                      priority={absOffset === 0}
                    />

                    {/* Dark overlay to help the center image pop */}
                    <div
                      className="absolute inset-0 bg-black transition-opacity duration-500"
                      style={{ opacity: absOffset * 0.25 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-16">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlay(false);
              }}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                index === currentIndex ? "w-12 bg-blue-600" : "w-3 bg-slate-800"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
