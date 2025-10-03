"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteQuotes() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "The most dangerous phrase in the language is, ‘We’ve always done it this way.’",
    name: "Grace Hopper",
    title: "Computer Scientist",
  },
  {
    quote: "Mathematics is the art of giving the same name to different things.",
    name: "Henri Poincaré",
    title: "Mathematician",
  },
  {
    quote: "The best way to predict the future is to invent it.",
    name: "Claude Shannon",
    title: "Mathematician & Electrical Engineer",
  },
  {
    quote: "Science is a differential equation. Religion is a boundary condition.",
    name: "Alan Turing",
    title: "Mathematician & Computer Scientist",
  },
  {
    quote: "Information is the resolution of uncertainty.",
    name: "Claude Shannon",
    title: "Mathematician & Electrical Engineer",
  },
  {
    quote: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
    name: "Marie Curie",
    title: "Physicist & Chemist",
  },

 {
    quote: "He who has a why to live can bear almost any how.",
    name: "Friedrich Nietzsche",
    title: "Philosopher",
  },

{
    quote: "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.",
    name: "Edsger W. Dijkstra",
    title: "Computer Scientist",
  },
  {
    quote: "We are drowning in information but starved for knowledge.",
    name: "John Naisbitt",
    title: "Futurist",
  },
  ];