'use client';

import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        question: 'How do I create a game server?',
        answer: 'Creating a game server is simple: Select your game, choose a plan, pick a location, and click "Deploy". Your server will be ready within 60 seconds.',
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, PayPal, and cryptocurrency (Bitcoin, Ethereum). All payments are processed securely through our payment partners.',
      },
      {
        question: 'Can I upgrade my server later?',
        answer: 'Yes! You can upgrade your server&apos;s resources (RAM, CPU, storage) at any time through your control panel. Changes take effect immediately.',
      },
    ],
  },
  {
    category: 'Technical',
    questions: [
      {
        question: 'What control panel do you use?',
        answer: 'We use the Pterodactyl panel, a modern game server management panel. It provides full file access, console, backups, and more.',
      },
      {
        question: 'Do you offer DDoS protection?',
        answer: 'Yes, all our servers include enterprise-grade DDoS protection at no additional cost. Our protection can mitigate attacks up to 1Tbps.',
      },
      {
        question: 'Can I install custom mods?',
        answer: 'Absolutely! You have full FTP access to your server and can install any mods compatible with your game. Our panel makes mod management easy.',
      },
    ],
  },
  {
    category: 'Billing & Support',
    questions: [
      {
        question: 'What is your refund policy?',
        answer: 'We offer a 24-hour money-back guarantee. If you&apos;re not satisfied with our service, contact support within 24 hours for a full refund.',
      },
      {
        question: 'How can I contact support?',
        answer: 'Support is available 24/7 through our ticket system. Premium plans also get access to priority support and Discord assistance.',
      },
      {
        question: 'Do you offer monthly billing?',
        answer: 'Yes, all our plans can be billed monthly. We also offer discounts for quarterly and annual billing.',
      },
    ],
  },
];

export default function FAQ() {
  return (
    <section className="relative bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Frequently Asked Questions
            </p>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (faqIndex * 0.05) }}
                  >
                    <Disclosure>
                      {({ open }) => (
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm ring-1 ring-gray-900/5 dark:ring-gray-700/5 overflow-hidden">
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-gray-50 dark:bg-gray-800/50 px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-75">
                            <span className="text-base font-medium text-gray-900 dark:text-white">
                              {faq.question}
                            </span>
                            <ChevronDownIcon
                              className={`${
                                open ? 'rotate-180 transform' : ''
                              } h-5 w-5 text-primary-400 dark:text-primary-300 transition-transform duration-200`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="px-6 pb-5">
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2 }}
                              className="text-base text-gray-600 dark:text-gray-300"
                            >
                              {faq.answer}
                            </motion.div>
                          </Disclosure.Panel>
                        </div>
                      )}
                    </Disclosure>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
