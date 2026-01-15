import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, MessageCircle } from 'lucide-react';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';

export interface TalentProps {
  name: string;
  title: string;
  avatar: string;
  location: string;
  rate: string;
  skills: string[];
  bio: string;
  rating: number;
  reviews: number;
  available: boolean;
}

export function TalentCard({ talent }: { talent: TalentProps }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      className="bg-white rounded-2xl p-6 border border-cream-300 shadow-sm transition-all duration-300 flex flex-col h-full group"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="relative">
          <img
            src={talent.avatar}
            alt={talent.name}
            className="w-16 h-16 rounded-xl object-cover border-2 border-cream-200"
          />
          {talent.available && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white" />
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-gray-900 group-hover:text-coral-500 transition-colors">
            {talent.name}
          </h3>
          <p className="text-coral-500 font-medium">{talent.title}</p>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <MapPin className="w-3 h-3" />
            <span>{talent.location}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              <span>{talent.rating}</span>
              <span className="text-gray-400">({talent.reviews})</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-2">"{talent.bio}"</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {talent.skills.map((skill) => (
          <Badge key={skill} variant="sage">
            {skill}
          </Badge>
        ))}
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">Starting at</p>
          <p className="font-bold text-lg text-gray-900">{talent.rate}</p>
        </div>
        <Button size="sm" variant="primary" className="font-handwriting text-lg px-6">
          <MessageCircle className="w-4 h-4 mr-2" />
          Hire Me
        </Button>
      </div>
    </motion.div>
  );
}

