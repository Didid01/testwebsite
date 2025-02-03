'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ServerIcon, CommandLineIcon, CpuChipIcon } from '@heroicons/react/24/outline';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  isLastLine?: boolean;
}

const TypewriterText = ({ text, delay = 0, isLastLine = false }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setStartTyping(true);
    }, delay * 1000);

    return () => clearTimeout(initialDelay);
  }, [delay]);

  useEffect(() => {
    if (!startTyping) return;

    const typeNextCharacter = (currentText: string) => {
      if (currentText.length >= text.length) return;
      
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentText.length + 1));
      }, 50);

      return timeout;
    };

    const timeout = typeNextCharacter(displayText);
    return () => clearTimeout(timeout);
  }, [text, displayText, startTyping]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      className={`font-mono ${isLastLine ? 'text-green-500 dark:text-green-400' : ''}`}
    >
      {displayText}
    </motion.div>
  );
};

const ConsoleLines = [
  "[INFO] Starting KyzoVM.US",
  "[INFO] Loading KyzoVM.US properties...",
  "[INFO] Server running at 20.0 TPS | Memory: 32768M allocated"
];

const TOTAL_ANIMATION_TIME = 1; // Total time for console animation in seconds

const ServerStatus = () => {
  const [status, setStatus] = useState('Running');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setStatus('Online');
    }, TOTAL_ANIMATION_TIME * 1000); // Convert to milliseconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center gap-x-2">
      <div className="flex-none rounded-full bg-green-500/20 p-1">
        <div className={`h-2 w-2 rounded-full ${status === 'Online' ? 'bg-green-500' : 'bg-yellow-500'}`} />
      </div>
      <div className="text-xs">
        <motion.span
          key={status}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={status === 'Online' ? 'text-green-500' : 'text-yellow-500'}
        >
          {status}
        </motion.span>
        {status === 'Online' && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500"
          >
            {' - 99.9% Uptime'}
          </motion.span>
        )}
      </div>
    </div>
  );
};

const serverAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Hero() {
  return (
    <div className="relative isolate pt-14 dark:bg-gray-900">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary-300 to-primary-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Premium Game Hosting for{' '}
              <span className="text-primary-400 dark:text-primary-300">Serious Gamers</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Deploy your game server in seconds. Enjoy low latency, high performance, and 24/7 support.
              Built by gamers, for gamers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link
              href="/register"
              className="rounded-md bg-primary-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
            >
              Get started
            </Link>
            <Link href="/features" className="text-sm font-semibold leading-6 text-gray-900 dark:text-white">
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={serverAnimation}
          initial="hidden"
          animate="visible"
          className="mt-16 flow-root sm:mt-24"
        >
          <div className="relative rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 dark:bg-white/5 dark:ring-white/10">
            <div className="absolute right-4 top-4 flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="rounded-lg bg-white p-4 dark:bg-gray-800">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="relative flex items-center space-x-2 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <ServerIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Server Status</p>
                    <ServerStatus />
                  </div>
                </div>
                <div className="relative flex items-center space-x-2 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <CommandLineIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Console Access</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Full Root Access</p>
                  </div>
                </div>
                <div className="relative flex items-center space-x-2 rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                  <CpuChipIcon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Resources</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">8 Core / 32GB RAM</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-900">
                <div className="relative font-mono text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  {ConsoleLines.map((line, index) => (
                    <TypewriterText 
                      key={index} 
                      text={line} 
                      delay={index * 0.8} 
                      isLastLine={index === ConsoleLines.length - 1}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
