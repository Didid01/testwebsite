'use client';

import { motion } from 'framer-motion';
import {
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const contactMethods = [
  {
    name: 'Support Ticket',
    description: 'Get help with technical issues or account-related questions.',
    icon: QuestionMarkCircleIcon,
    buttonText: 'Open Ticket',
    href: '#',
    primary: true,
  },
  {
    name: 'Live Chat',
    description: 'Chat with our support team for quick assistance during business hours.',
    icon: ChatBubbleLeftRightIcon,
    buttonText: 'Start Chat',
    href: '#',
    primary: false,
  },
  {
    name: 'Documentation',
    description: 'Browse our guides and tutorials for step-by-step help.',
    icon: DocumentTextIcon,
    buttonText: 'View Guides',
    href: '#',
    primary: false,
  },
];

export default function Contact() {
  return (
    <section className="relative bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Contact Support
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Get help from our team 24/7. Choose your preferred support option below.
            </p>
          </motion.div>
        </div>

        {/* Contact methods grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-lg ring-1 ring-gray-900/5 dark:ring-gray-700/5 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`flex h-16 w-16 items-center justify-center rounded-full ${method.primary ? 'bg-primary-600' : 'bg-primary-500/10 dark:bg-primary-400/10'}`}>
                  <method.icon className={`h-8 w-8 ${method.primary ? 'text-white' : 'text-primary-600 dark:text-primary-400'}`} />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                  {method.name}
                </h3>
                <p className="mt-4 text-base text-gray-500 dark:text-gray-400">
                  {method.description}
                </p>
                <a
                  href={method.href}
                  className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${
                    method.primary
                      ? 'bg-primary-600 text-white hover:bg-primary-500 focus-visible:outline-primary-600'
                      : 'bg-primary-50 text-primary-600 hover:bg-primary-100 dark:bg-primary-900/10 dark:text-primary-400 dark:hover:bg-primary-900/20'
                  }`}
                >
                  {method.buttonText}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support availability */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-24 max-w-2xl"
        >
          <div className="flex flex-col items-center p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg ring-1 ring-gray-900/5 dark:ring-gray-700/5">
            <ClockIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">Support Availability</h3>
            <div className="mt-4 text-center space-y-2">
              <p className="text-base text-gray-500 dark:text-gray-400">
                <span className="font-medium">Ticket Support:</span> 24/7 (Response within 2 hours)
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400">
                <span className="font-medium">Live Chat:</span> 9 AM - 6 PM EST (Instant response)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
