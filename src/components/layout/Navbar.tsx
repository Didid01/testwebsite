'use client';

import { useState, Fragment, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Popover, Transition } from '@headlessui/react';
import { 
  ServerIcon, 
  CommandLineIcon, 
  CpuChipIcon,
  CloudIcon,
  ShieldCheckIcon,
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  BuildingOfficeIcon,
  NewspaperIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
  BriefcaseIcon,
  UsersIcon,
  BookOpenIcon,
  ScaleIcon
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { cn } from '@/lib/utils';
import ThemeToggle from '@/components/ui/ThemeToggle';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface NavItem {
  name: string;
  description?: string;
  href: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
  image?: string;
  price?: string;
}

const solutions: NavItem[] = [
  {
    name: 'Website Hosting',
    description: 'Deploy and manage your website with ease',
    href: '/website-hosting',
    icon: ServerIcon
  },
  {
    name: 'Bot Hosting',
    description: 'Host your bot with us',
    href: '/bot-hosting',
    icon: CommandLineIcon
  },
  {
    name: 'VPS Hosting',
    description: 'Virtual Private Server for your needs',
    href: '/vps-hosting',
    icon: CpuChipIcon
  },
  {
    name: 'Dedicated',
    description: 'Dedicated server for your business',
    href: '/dedicated',
    icon: CloudIcon
  },
  {
    name: 'Domain',
    description: 'Domain registration and management',
    href: '/domain',
    icon: ShieldCheckIcon
  },
];

const games: NavItem[] = [
  {
    name: 'Minecraft',
    description: 'Popular sandbox game',
    href: '/minecraft',
    icon: HomeIcon,
    image: '/images/navbar/minecraft.svg'
  },
  {
    name: 'Palworld',
    description: 'Popular survival game',
    href: '/palworld',
    icon: HomeIcon,
    image: '/images/navbar/palworld.svg'
  },
  {
    name: 'Ark Survival Evolved',
    description: 'Popular survival game',
    href: '/ark-survival-evolved',
    icon: HomeIcon,
    image: '/images/navbar/ark.svg'
  },
  {
    name: 'Satisfactory',
    description: 'Popular exploration game',
    href: '/satisfactory',
    icon: HomeIcon,
    image: '/images/navbar/satisfactory.svg'
  },
  {
    name: 'Valheim',
    description: 'Popular survival game',
    href: '/valheim',
    icon: HomeIcon,
    image: '/images/navbar/valheim.svg'
  },
  {
    name: 'Browse',
    description: 'Browse all games',
    href: '/browse',
    icon: HomeIcon,
    image: '/images/navbar/browse.svg'
  },
];

const company: NavItem[] = [
  {
    name: 'Contact',
    description: 'Contact us for any inquiry',
    href: '/contact',
    icon: BuildingOfficeIcon
  },
  {
    name: 'About',
    description: 'About our company',
    href: '/about',
    icon: UserGroupIcon
  },
  {
    name: 'Careers',
    description: 'Join our team',
    href: '/careers',
    icon: BriefcaseIcon
  },
  {
    name: 'Partners',
    description: 'Our partners',
    href: '/partners',
    icon: UsersIcon
  },
];

const resources: NavItem[] = [
  {
    name: 'Knowledgebase',
    description: 'Knowledgebase for our services',
    href: '/knowledgebase',
    icon: BookOpenIcon
  },
  {
    name: 'Blogs',
    description: 'Our blog for latest news',
    href: '/blog',
    icon: NewspaperIcon
  },
  {
    name: 'Legal Policies',
    description: 'Our legal policies',
    href: '/legal-policies',
    icon: ScaleIcon
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 20);
    });
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <motion.nav 
        className={cn(
          'mx-auto max-w-7xl rounded-2xl border border-gray-200/20 dark:border-gray-800/20 backdrop-blur-md',
          isScrolled 
            ? 'bg-white/40 dark:bg-gray-900/40 shadow-lg'
            : 'bg-white/30 dark:bg-gray-900/30'
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left section with logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex-shrink-0">
              <motion.span 
                className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-purple-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                KyzoVM.US
              </motion.span>
            </Link>
          </div>

          {/* Center section with navigation */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
            <Link
              href="/"
              className={cn(
                'inline-flex items-center text-sm font-semibold leading-6',
                pathname === '/'
                  ? 'text-primary-400 dark:text-primary-300'
                  : 'text-gray-900 dark:text-gray-100 hover:text-primary-400 dark:hover:text-primary-300'
              )}
            >
              <HomeIcon className="h-5 w-5 mr-1" />
              Home
            </Link>

            <NavDropdown title="Solutions" items={solutions} />
            <NavMegaMenu title="Games" items={games} />
            <NavDropdown title="Company" items={company} />
            <NavDropdown title="Resources" items={resources} />
            
            <Link
              href="/support"
              className={cn(
                'inline-flex items-center text-sm font-semibold leading-6',
                pathname === '/support'
                  ? 'text-primary-400 dark:text-primary-300'
                  : 'text-gray-900 dark:text-gray-100 hover:text-primary-400 dark:hover:text-primary-300'
              )}
            >
              <QuestionMarkCircleIcon className="h-5 w-5 mr-1" />
              Support
            </Link>
          </div>

          {/* Right section with theme toggle and auth buttons */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className={`inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-gray-300`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>

            {/* Desktop auth buttons */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <Link
                href="http://billing.kyzovm.us/"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100 hover:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
              >
                Log in
              </Link>
              <Link
                href="/register"
                className="rounded-md bg-primary-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <Transition
          show={isMobileMenuOpen}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <div className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white dark:bg-gray-800 p-4 text-lg tracking-tight text-slate-900 dark:text-slate-100 shadow-xl ring-1 ring-slate-900/5 dark:ring-white/10">
            <Link
              href="/"
              className="flex items-center gap-x-3 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <HomeIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              <span className="font-semibold">Home</span>
            </Link>

            <MobileNavDropdown title="Solutions" items={solutions} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <MobileNavDropdown title="Games" items={games} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <MobileNavDropdown title="Company" items={company} setIsMobileMenuOpen={setIsMobileMenuOpen} />
            <MobileNavDropdown title="Resources" items={resources} setIsMobileMenuOpen={setIsMobileMenuOpen} />

            <Link
              href="/support"
              className="flex items-center gap-x-3 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <QuestionMarkCircleIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              <span className="font-semibold">Support</span>
            </Link>

            <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4 space-y-2">
              <Link
                href="/login"
                className="block w-full rounded-lg px-4 py-2 text-center text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <Link
                href="/register"
                className="block w-full rounded-lg px-4 py-2 text-center text-sm font-semibold bg-primary-400 text-white hover:bg-primary-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get started
              </Link>
            </div>
          </div>
        </Transition>
      </motion.nav>
    </header>
  );
}

function MobileNavDropdown({ 
  title, 
  items,
  setIsMobileMenuOpen 
}: { 
  title: string; 
  items: NavItem[];
  setIsMobileMenuOpen: (open: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-2">
      <button
        className="flex w-full items-center justify-between rounded-lg p-2 text-base font-semibold leading-7 hover:bg-gray-50 dark:hover:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-900 dark:text-gray-100">{title}</span>
        <ChevronDownIcon
          className={cn(
            'h-5 w-5 flex-none text-gray-400 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-200 ease-in-out',
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="ml-4 space-y-2 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex gap-x-3 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-700"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800 group-hover:bg-white dark:group-hover:bg-gray-700">
                {item.icon && <item.icon className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-400 dark:group-hover:text-primary-300" />}
              </div>
              <div>
                <span className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-400 dark:group-hover:text-primary-300">
                  {item.name}
                </span>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function NavDropdown({ title, items }: { title: string, items: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <Popover className="relative">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Popover.Button
          className={cn(
            'group inline-flex items-center gap-x-1 text-sm font-semibold leading-6 outline-none',
            isOpen
              ? 'text-primary-400 dark:text-primary-300'
              : 'text-gray-900 dark:text-gray-100 hover:text-primary-400 dark:hover:text-primary-300'
          )}
        >
          <span>{title}</span>
          <ChevronDownIcon
            className={cn(
              'h-5 w-5 flex-none text-gray-400 group-hover:text-primary-400 dark:group-hover:text-primary-300 transition-transform duration-200',
              isOpen && 'rotate-180'
            )}
            aria-hidden="true"
          />
        </Popover.Button>

        <Transition
          show={isOpen}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel static className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-md -translate-x-1/2 px-4">
            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-xl bg-white dark:bg-gray-800 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 dark:ring-white/10">
              <div className="p-4 grid gap-y-2">
                {items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group relative flex gap-x-4 rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                  >
                    <div className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800 group-hover:bg-white dark:group-hover:bg-gray-700">
                      <item.icon className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-400 dark:group-hover:text-primary-300" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-400 dark:group-hover:text-primary-300">
                        {item.name}
                        <span className="absolute inset-0" />
                      </span>
                      <p className="mt-1 text-gray-600 dark:text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </div>
    </Popover>
  );
}

function NavMegaMenu({ title, items }: { title: string; items: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <Popover className="relative">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Popover.Button
          className={cn(
            'group inline-flex items-center gap-x-1 text-sm font-semibold leading-6 outline-none',
            isOpen
              ? 'text-primary-400 dark:text-primary-300'
              : 'text-gray-900 dark:text-gray-100 hover:text-primary-400 dark:hover:text-primary-300'
          )}
        >
          <span>{title}</span>
          <ChevronDownIcon
            className={cn(
              'h-5 w-5 flex-none text-gray-400 group-hover:text-primary-400 dark:group-hover:text-primary-300 transition-transform duration-200',
              isOpen && 'rotate-180'
            )}
            aria-hidden="true"
          />
        </Popover.Button>

        <Transition
          show={isOpen}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel static className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-4xl -translate-x-1/2 px-4">
            <div className="w-screen max-w-4xl flex-auto overflow-hidden rounded-xl bg-white dark:bg-gray-800 text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 dark:ring-white/10">
              <div className="p-8">
                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group relative flex gap-x-4 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                    >
                      <div className="mt-1 flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800 group-hover:bg-white dark:group-hover:bg-gray-700 ring-1 ring-gray-900/10 dark:ring-white/10 transition-colors duration-200">
                        {/* Game image */}
                        {item.image ? (
                          <Image
                            width={24}
                            height={24}
                            src={item.image}
                            alt={item.name}
                            className="h-8 w-8 object-contain [filter:brightness(0.3)_saturate(100%)] dark:[filter:brightness(0.3)_saturate(100%)_invert(1)]"
                          />
                        ) : (
                          <item.icon className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-primary-400 dark:group-hover:text-primary-300" />
                        )}
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-gray-100 group-hover:text-primary-400 dark:group-hover:text-primary-300">
                          {item.name}
                          <span className="absolute inset-0" />
                        </span>
                        <p className="mt-1 text-gray-600 dark:text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300">
                          {item.description}
                        </p>
                        {item.price && (
                          <p className="mt-1 font-medium text-primary-400 dark:text-primary-300">
                            Starting at {item.price}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </div>
    </Popover>
  );
}
