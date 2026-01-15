import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
function Counter({
  value,
  label
}: {
  value: number;
  label: string;
}) {
  const spring = useSpring(0, {
    mass: 0.8,
    stiffness: 75,
    damping: 15
  });
  const display = useTransform(spring, current => Math.round(current).toLocaleString());
  useEffect(() => {
    spring.set(value);
  }, [spring, value]);
  return <div className="flex flex-col items-center p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-cream-300 shadow-sm">
      <motion.span className="text-4xl font-bold text-coral-500 font-handwriting mb-1">
        {display}
      </motion.span>
      <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">
        {label}
      </span>
    </div>;
}
export function CommunityStats() {
  return <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl mx-auto mt-12">
      <Counter value={12543} label="Happy Members" />
      <Counter value={8420} label="Gigs Completed" />
      <Counter value={98} label="Trust Score" />
      <Counter value={450} label="Daily Matches" />
    </div>;
}