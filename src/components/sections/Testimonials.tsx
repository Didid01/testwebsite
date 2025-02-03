'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/20/solid';

const testimonials = [
  {
    id: 1,
    content:
      'The performance and reliability of their game servers is outstanding. My Minecraft community has grown significantly since switching to their service.',
    author: {
      name: 'Alex Mitchell',
      role: 'Server Owner',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
    },
    rating: 5
  },
  {
    id: 2,
    content:
      'Their customer support is exceptional. Any issues we encounter are resolved quickly, and the server management tools are intuitive and powerful.',
    author: {
      name: 'Sarah Chen',
      role: 'Gaming Community Leader',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
    },
    rating: 5
  },
  {
    id: 3,
    content:
      'The low latency and high uptime have been crucial for our competitive gaming events. Best server hosting service I\'ve used.',
    author: {
      name: 'Marcus Thompson',
      role: 'Professional Gamer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80'
    },
    rating: 5
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
        }} 
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary-600 dark:text-primary-400 uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 sm:text-4xl">
            Trusted by Gamers Worldwide
          </p>
        </div>

        <div className="mt-16 relative">
          <div className="overflow-hidden">
            <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <div className="h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-800/50 shadow-xl dark:shadow-2xl-dark backdrop-blur-sm">
                      <div className="p-8 md:p-10 h-full flex flex-col">
                        <div className="flex gap-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <StarIcon className="h-6 w-6 text-yellow-400 drop-shadow-sm" aria-hidden="true" />
                            </motion.div>
                          ))}
                        </div>
                        
                        <blockquote className="text-xl font-medium leading-relaxed text-gray-900 dark:text-white flex-grow">
                          <p className="italic">{`"${testimonial.content}"`}</p>
                        </blockquote>
                        
                        <div className="mt-8 flex items-center gap-x-4">
                          <div className="relative h-14 w-14 flex-shrink-0">
                            <Image
                              className="h-14 w-14 rounded-full ring-2 ring-white dark:ring-gray-700 shadow-lg"
                              src={testimonial.author.image}
                              alt=""
                              width={56}
                              height={56}
                              blurDataURL={testimonial.author.image}
                              placeholder="blur"
                            />
                          </div>
                          <div>
                            <div className="text-lg font-semibold text-gray-900 dark:text-white">
                              {testimonial.author.name}
                            </div>
                            <div className="text-base text-primary-600 dark:text-primary-400">
                              {testimonial.author.role}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const element = document.querySelector(`[data-testimonial="${index}"]`);
                  element?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-600 w-8 dark:bg-primary-400'
                    : 'bg-gray-300 w-3 dark:bg-gray-700 hover:bg-primary-400 dark:hover:bg-primary-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
