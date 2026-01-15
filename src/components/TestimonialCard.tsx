import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
interface TestimonialProps {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}
export function TestimonialCard({
  testimonial,
  index
}: {
  testimonial: TestimonialProps;
  index: number;
}) {
  return <motion.div initial={{
    opacity: 0,
    scale: 0.9
  }} whileInView={{
    opacity: 1,
    scale: 1
  }} transition={{
    delay: index * 0.1
  }} viewport={{
    once: true
  }} className="bg-white rounded-2xl p-6 shadow-sm border border-cream-300 relative">
      <div className="absolute -top-3 -right-3 bg-sage-300 text-white p-2 rounded-full transform rotate-12">
        <Quote className="w-4 h-4" />
      </div>

      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} />)}
      </div>

      <p className="text-gray-700 mb-6 leading-relaxed">
        "{testimonial.content}"
      </p>

      <div className="flex items-center gap-3">
        <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
        <div>
          <h4 className="font-bold text-sm text-gray-900">
            {testimonial.name}
          </h4>
          <p className="text-xs text-gray-500">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>;
}