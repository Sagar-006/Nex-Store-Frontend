// src/components/SignupWithCarousel.tsx
import React from "react";
import { Carousel } from "aceternity-ui";
import { cn } from "@/lib/utils";

export default function SignupWithCarousel() {
  const slides = [
    { id: 1, image: "/assets/logo1.png" },
    { id: 2, image: "/assets/logo2.png" },
    { id: 3, image: "/assets/logo3.png" },
  ];

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl mb-4">Sign Up</h2>
      <Carousel className="mb-6">
        {slides.map((slide) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={`logo-${slide.id}`}
            className="h-12"
          />
        ))}
      </Carousel>
      {/* Add your signup form below */}
    </div>
  );
}
