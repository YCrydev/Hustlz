import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Heart, Star } from 'lucide-react';
import { Badge } from './ui/Badge';
import { Button } from './ui/Button';
export interface JobProps {
  title: string;
  company: string;
  location: string;
  rate: string;
  type: string;
  tags: string[];
  culture: string;
  rating: number;
  logo: string;
}
export function JobCard({
  job
}: {
  job: JobProps;
}) {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} whileHover={{
    y: -5,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  }} className="bg-white rounded-2xl p-6 border border-cream-300 shadow-sm transition-all duration-300 flex flex-col h-full group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-cream-100 flex items-center justify-center text-2xl border border-cream-200 overflow-hidden">
            {job.logo.startsWith('http') ? <img src={job.logo} alt={job.company} className="w-full h-full object-cover" /> : <span>{job.logo}</span>}
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900 group-hover:text-coral-500 transition-colors">
              {job.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="font-medium">{job.company}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                <span>{job.rating}</span>
              </div>
            </div>
          </div>
        </div>
        <button className="text-gray-300 hover:text-coral-500 transition-colors">
          <Heart className="w-6 h-6" />
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.tags.map(tag => <Badge key={tag} variant="sage">
            {tag}
          </Badge>)}
      </div>

      <div className="bg-cream-50 rounded-xl p-3 mb-4 border border-cream-100">
        <p className="text-sm text-gray-600 italic">
          <span className="font-handwriting text-lg text-coral-500 mr-1">
            "
          </span>
          {job.culture}
          <span className="font-handwriting text-lg text-coral-500 ml-1">
            "
          </span>
        </p>
      </div>

      <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
        <div className="flex flex-col">
          <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
            <MapPin className="w-3 h-3" />
            {job.location}
          </div>
          <div className="font-bold text-lg text-gray-900">{job.rate}</div>
        </div>
        <Button size="sm" variant="outline" className="font-handwriting text-lg px-6">
          Apply Now
        </Button>
      </div>
    </motion.div>;
}