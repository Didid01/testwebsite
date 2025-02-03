'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ServerIcon,
  CommandLineIcon,
  CpuChipIcon,
  FolderIcon,
  ShieldCheckIcon,
  UsersIcon,
  ArrowPathIcon,
  CloudArrowUpIcon,
  CircleStackIcon,
  CogIcon,
  PuzzlePieceIcon,
  UserGroupIcon,
  ClockIcon,
  ArrowDownTrayIcon,
  SignalIcon,
  ArchiveBoxIcon,
  TrashIcon,
  LinkIcon,
  PowerIcon,
  Square3Stack3DIcon,
  ArrowsPointingOutIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Server Management',
    description: 'Start, stop, and restart your server with a single click. Monitor resource usage in real-time.',
    icon: ServerIcon,
  },
  {
    name: 'Console Access',
    description: 'Full console access with command history and auto-completion. Send commands directly to your server.',
    icon: CommandLineIcon,
  },
  {
    name: 'Resource Management',
    description: 'Monitor CPU, RAM, and disk usage. Set resource limits and receive alerts.',
    icon: CpuChipIcon,
  },
  {
    name: 'File Manager',
    description: 'Browse, edit, upload, and download files directly through the web interface.',
    icon: FolderIcon,
  },
  {
    name: 'Plugin Manager',
    description: 'Install, update, and manage plugins with our easy-to-use interface. Browse popular plugins.',
    icon: PuzzlePieceIcon,
  },
  {
    name: 'Database Manager',
    description: 'Create and manage MySQL/MongoDB databases. Import/export data with ease.',
    icon: CircleStackIcon,
  },
  {
    name: 'Subuser Manager',
    description: 'Grant specific permissions to team members. Control access levels and monitor activity.',
    icon: UserGroupIcon,
  },
  {
    name: 'Player Manager',
    description: 'Manage player whitelist, bans, and permissions. View player statistics and history.',
    icon: UsersIcon,
  },
  {
    name: 'Version Manager',
    description: 'Switch between game versions easily. Automatic version detection and updates.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Server Importer',
    description: 'Import existing servers from other hosting providers or local machines.',
    icon: ArrowDownTrayIcon,
  },
  {
    name: 'Download from URL',
    description: 'Download files directly to your server from external URLs.',
    icon: LinkIcon,
  },
  {
    name: 'Managed Ports',
    description: 'Automatic port management and forwarding. Custom port allocation available.',
    icon: SignalIcon,
  },
  {
    name: 'JAR Installer',
    description: 'One-click installation of custom server JARs and mod packs.',
    icon: ArchiveBoxIcon,
  },
  {
    name: 'Friendly Schedule',
    description: 'Schedule server tasks, backups, and restarts with an intuitive calendar interface.',
    icon: ClockIcon,
  },
  {
    name: 'Data Backup',
    description: 'Automated backups with customizable retention policies. One-click restore.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Server Properties',
    description: 'Edit server configuration files through a user-friendly web interface.',
    icon: CogIcon,
  },
  {
    name: 'SFTP Access',
    description: 'Secure file transfer access for advanced server management.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Power All Pages',
    description: 'Control multiple servers simultaneously from a single dashboard.',
    icon: PowerIcon,
  },
  {
    name: 'Steam Workshop',
    description: 'Browse and install Steam Workshop content directly to your server.',
    icon: Square3Stack3DIcon,
  },
  {
    name: 'Server Splitter',
    description: 'Split server resources between multiple game instances.',
    icon: ArrowsPointingOutIcon,
  },
  {
    name: 'Recycle Bin',
    description: 'Safely delete files with the ability to restore them within 30 days.',
    icon: TrashIcon,
  },
];

export default function ControlPanel() {
  type SectionType = 'files' | 'plugins' | 'versions' | 'settings';
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionType>('files');
  const displayedFeatures = showAllFeatures ? features : features.slice(0, 9);

  // Preview sections content
  const previewSections: Record<SectionType, JSX.Element> = {
    files: (
      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">File Manager</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg">
            <div className="flex items-center gap-2">
              <FolderIcon className="h-4 w-4 text-primary-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">config</span>
            </div>
            <span className="text-xs text-gray-500">Directory</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg">
            <div className="flex items-center gap-2">
              <FolderIcon className="h-4 w-4 text-primary-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">plugins</span>
            </div>
            <span className="text-xs text-gray-500">Directory</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg">
            <div className="flex items-center gap-2">
              <CommandLineIcon className="h-4 w-4 text-primary-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">server.properties</span>
            </div>
            <span className="text-xs text-gray-500">1.2 KB</span>
          </div>
        </div>
      </div>
    ),
    plugins: (
      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Plugin Installer</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg">
            <div className="flex items-center gap-2">
              <PuzzlePieceIcon className="h-4 w-4 text-primary-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">WorldEdit</span>
            </div>
            <button className="text-xs bg-primary-400 hover:bg-primary-500 text-white px-2 py-1 rounded transition-colors">Install</button>
          </div>
          <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg">
            <div className="flex items-center gap-2">
              <PuzzlePieceIcon className="h-4 w-4 text-primary-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Essentials</span>
            </div>
            <button className="text-xs bg-gray-600 text-white px-2 py-1 rounded">Update</button>
          </div>
          <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg">
            <div className="flex items-center gap-2">
              <PuzzlePieceIcon className="h-4 w-4 text-primary-400" />
              <span className="text-sm text-gray-600 dark:text-gray-300">Vault</span>
            </div>
            <button className="text-xs bg-primary-400 hover:bg-primary-500 text-white px-2 py-1 rounded transition-colors">Install</button>
          </div>
        </div>
      </div>
    ),
    versions: (
      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Version Manager</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg">
            <div className="flex items-center gap-2">
              <ArrowPathIcon className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-gray-600 dark:text-gray-300">1.20.1</span>
            </div>
            <span className="text-xs bg-primary-400 text-white px-2 py-1 rounded">Current</span>
          </div>
          <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg">
            <div className="flex items-center gap-2">
              <ArrowPathIcon className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-gray-600 dark:text-gray-300">1.19.4</span>
            </div>
            <button className="text-xs bg-primary-400 hover:bg-primary-500 text-white px-2 py-1 rounded transition-colors">Switch</button>
          </div>
          <div className="flex items-center justify-between p-2 bg-white dark:bg-gray-800 rounded-lg">
            <div className="flex items-center gap-2">
              <ArrowPathIcon className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-gray-600 dark:text-gray-300">1.18.2</span>
            </div>
            <button className="text-xs bg-primary-400 hover:bg-primary-500 text-white px-2 py-1 rounded transition-colors">Switch</button>
          </div>
        </div>
      </div>
    ),
    settings: (
      <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Server Settings</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300">Server Name</span>
            <input type="text" className="text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-2 py-1" defaultValue="My Game Server" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300">Max Players</span>
            <input type="number" className="text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-2 py-1" defaultValue="20" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-300">Difficulty</span>
            <select className="text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded px-2 py-1">
              <option>Easy</option>
              <option>Normal</option>
              <option>Hard</option>
            </select>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-400 dark:text-primary-300">
            Control Panel
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Powerful Game Server Management
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Manage your game server with our intuitive control panel powered by Pterodactyl. Access all the features you need to run your server effectively.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Panel Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl ring-1 ring-gray-200 dark:ring-gray-700 shadow-2xl"
          >
            <div className="relative overflow-hidden rounded-2xl">
              {/* Panel Header */}
              <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Game Server Control Panel</span>
                </div>
              </div>

              {/* Panel Content */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Server Stats */}
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4">
                      <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Server Resources</h3>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600 dark:text-gray-400">CPU Usage</span>
                            <span className="text-gray-900 dark:text-white">45%</span>
                          </div>
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div className="h-2 bg-indigo-600 rounded-full" style={{ width: '45%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600 dark:text-gray-400">Memory Usage</span>
                            <span className="text-gray-900 dark:text-white">2.5GB / 4GB</span>
                          </div>
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div className="h-2 bg-indigo-600 rounded-full" style={{ width: '62%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600 dark:text-gray-400">Disk Usage</span>
                            <span className="text-gray-900 dark:text-white">15GB / 50GB</span>
                          </div>
                          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div className="h-2 bg-indigo-600 rounded-full" style={{ width: '30%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Console Preview */}
                    <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                      <div className="text-green-400">[Server] Starting server...</div>
                      <div className="text-gray-400">[Info] Loading world data</div>
                      <div className="text-gray-400">[Info] Server started on port 25565</div>
                      <div className="text-yellow-400">[Warning] Backup scheduled in 5 minutes</div>
                      <div className="flex items-center mt-2">
                        <span className="text-gray-400">$</span>
                        <div className="ml-2 h-4 w-2 bg-white/50 animate-pulse"></div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions and Preview Section */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <button 
                        onClick={() => setActiveSection('files')}
                        className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors ${
                          activeSection === 'files' 
                            ? 'bg-primary-400 text-white hover:bg-primary-500' 
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        <FolderIcon className="h-5 w-5" />
                        <span>Files</span>
                      </button>
                      <button 
                        onClick={() => setActiveSection('plugins')}
                        className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors ${
                          activeSection === 'plugins' 
                            ? 'bg-primary-400 text-white hover:bg-primary-500' 
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        <PuzzlePieceIcon className="h-5 w-5" />
                        <span>Plugins</span>
                      </button>
                      <button 
                        onClick={() => setActiveSection('versions')}
                        className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors ${
                          activeSection === 'versions' 
                            ? 'bg-primary-400 text-white hover:bg-primary-500' 
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        <ArrowPathIcon className="h-5 w-5" />
                        <span>Versions</span>
                      </button>
                      <button 
                        onClick={() => setActiveSection('settings')}
                        className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition-colors ${
                          activeSection === 'settings' 
                            ? 'bg-primary-400 text-white hover:bg-primary-500' 
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                        }`}
                      >
                        <CogIcon className="h-5 w-5" />
                        <span>Settings</span>
                      </button>
                    </div>

                    {/* Dynamic Preview Section */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeSection}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        {previewSections[activeSection]}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <AnimatePresence>
              <motion.dl 
                layout
                className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3"
              >
                {displayedFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex flex-col"
                  >
                    <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                      <feature.icon className="h-5 w-5 flex-none text-primary-400 dark:text-primary-300" aria-hidden="true" />
                      {feature.name}
                    </dt>
                    <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-400">
                      <p className="flex-auto">{feature.description}</p>
                    </dd>
                  </motion.div>
                ))}
              </motion.dl>
            </AnimatePresence>

            {/* Show All Features Button */}
            <motion.div 
              layout
              className="mt-16 text-center"
            >
              <button
                onClick={() => setShowAllFeatures(!showAllFeatures)}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary-400 hover:text-primary-500 dark:text-primary-300 dark:hover:text-primary-200 transition-colors duration-200"
              >
                {showAllFeatures ? 'Show Less Features' : 'Show All Features'}
                <ChevronDownIcon 
                  className={`h-5 w-5 transition-transform duration-200 ${showAllFeatures ? 'rotate-180' : ''}`}
                />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
