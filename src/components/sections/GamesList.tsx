'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { UsersIcon, ServerIcon, ChevronDownIcon, ChevronRightIcon, StarIcon, CheckIcon } from '@heroicons/react/24/outline';

const categories = [
  'All Games',
  'Survival',
  'FPS',
  'Sandbox',
  'MMO',
  'Simulation',
  'Strategy'
];

const games = [
  {
    id: 1,
    name: 'Arma 3',
    description: 'Military simulation game with vast multiplayer capabilities',
    category: 'Simulation',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/107410/header.jpg',
    monthlyPrice: 14.99,
    activeServers: 2500,
    players: '75K+',
    rating: 4.6,
    uptime: 99,
    features: ['Mission Editor', 'Mod Support', 'Custom Scenarios']
  },
  {
    id: 2,
    name: 'FiveM',
    description: 'Advanced GTA V multiplayer modification platform',
    category: 'Sandbox',
    image: 'https://www.gta-multiplayer.cz/screenshots/original/147033.jpg',
    monthlyPrice: 15.99,
    activeServers: 8000,
    players: '250K+',
    rating: 4.7,
    uptime: 99,
    features: ['Custom Scripts', 'Resource Manager', 'Voice Chat']
  },
  {
    id: 3,
    name: 'Counter-Strike 2',
    description: 'Premier competitive tactical shooter',
    category: 'FPS',
    image: 'https://cdn.cloudflare.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg',
    monthlyPrice: 12.99,
    activeServers: 10000,
    players: '1M+',
    rating: 4.8,
    uptime: 99,
    features: ['128-Tick', 'Anti-Cheat', 'Custom Maps']
  },
  {
    id: 4,
    name: 'Minecraft Java',
    description: 'Original Java version of the popular building game',
    category: 'Sandbox',
    image: 'https://store-images.s-microsoft.com/image/apps.60323.13950084616086229.56d90257-df96-4000-bf85-a64704b3b019.d4ae0460-e24a-41ce-9e09-a92dc478362f?mode=scale&q=90&h=720&w=1280&format=jpg',
    monthlyPrice: 8.99,
    activeServers: 25000,
    players: '2M+',
    rating: 4.9,
    uptime: 99,
    features: ['Plugin Support', 'World Backups', 'Custom Seeds']
  },
  {
    id: 5,
    name: 'Minecraft Bedrock',
    description: 'Cross-platform version of Minecraft',
    category: 'Sandbox',
    image: 'https://store-images.s-microsoft.com/image/apps.608.13510798887677013.5c7792f0-b887-4250-8c4e-4617af9c4509.bcd1385a-ad15-450c-9ddd-3ee80c37121a',
    monthlyPrice: 8.99,
    activeServers: 15000,
    players: '1.5M+',
    rating: 4.7,
    uptime: 99,
    features: ['Cross-Play', 'Add-Ons', 'Marketplace']
  },
  {
    id: 6,
    name: 'ARK: Survival Evolved',
    description: 'Dinosaur survival adventure game',
    category: 'Survival',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/346110/header.jpg',
    monthlyPrice: 13.99,
    activeServers: 8000,
    players: '300K+',
    rating: 4.5,
    uptime: 99,
    features: ['Mod Support', 'Cross-ARK', 'Breeding System']
  },
  {
    id: 7,
    name: 'ARK: Survival Ascended',
    description: 'Enhanced remake of ARK using Unreal Engine 5',
    category: 'Survival',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/2399830/header.jpg',
    monthlyPrice: 15.99,
    activeServers: 5000,
    players: '200K+',
    rating: 4.3,
    uptime: 99,
    features: ['UE5 Graphics', 'Cross-Platform', 'Mod.io Support']
  },
  {
    id: 8,
    name: 'DayZ',
    description: 'Post-apocalyptic survival game',
    category: 'Survival',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/221100/header.jpg',
    monthlyPrice: 13.99,
    activeServers: 4000,
    players: '150K+',
    rating: 4.4,
    uptime: 99,
    features: ['Mod Support', 'Custom Maps', 'Persistence']
  },
  {
    id: 9,
    name: 'Palworld',
    description: 'Open-world survival crafting with creature collection',
    category: 'Survival',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1623730/header.jpg',
    monthlyPrice: 12.99,
    activeServers: 12000,
    players: '800K+',
    rating: 4.6,
    uptime: 99,
    features: ['Base Building', 'Pal Breeding', 'Co-op Play']
  },
  {
    id: 10,
    name: 'Garry\'s Mod',
    description: 'Physics-based sandbox game',
    category: 'Sandbox',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/4000/header.jpg',
    monthlyPrice: 9.99,
    activeServers: 7000,
    players: '250K+',
    rating: 4.8,
    uptime: 99,
    features: ['Workshop Support', 'Addons', 'Wiremod']
  },
  {
    id: 11,
    name: 'Rust',
    description: 'Brutal survival multiplayer game',
    category: 'Survival',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg',
    monthlyPrice: 14.99,
    activeServers: 6000,
    players: '400K+',
    rating: 4.5,
    uptime: 99,
    features: ['Anti-Cheat', 'Oxide Mods', 'Wipe Schedule']
  },
  {
    id: 12,
    name: 'Valheim',
    description: 'Viking survival and exploration game',
    category: 'Survival',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/892970/header.jpg',
    monthlyPrice: 11.99,
    activeServers: 3000,
    players: '100K+',
    rating: 4.7,
    uptime: 99,
    features: ['World Save', 'Mod Support', 'Cross-Play']
  },
  {
    id: 13,
    name: 'Terraria',
    description: '2D action-adventure sandbox game',
    category: 'Sandbox',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg',
    monthlyPrice: 7.99,
    activeServers: 2000,
    players: '80K+',
    rating: 4.9,
    uptime: 99,
    features: ['tModLoader', 'Journey Mode', 'Auto-Save']
  },
  {
    id: 14,
    name: 'Project Zomboid',
    description: 'Zombie survival RPG with deep mechanics',
    category: 'Survival',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/108600/header.jpg',
    monthlyPrice: 9.99,
    activeServers: 1500,
    players: '50K+',
    rating: 4.6,
    uptime: 99,
    features: ['Workshop Mods', 'Custom Maps', 'Persistence']
  },
  {
    id: 15,
    name: 'Team Fortress 2',
    description: 'Class-based multiplayer first-person shooter',
    category: 'FPS',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/440/header.jpg',
    monthlyPrice: 8.99,
    activeServers: 3500,
    players: '120K+',
    rating: 4.7,
    uptime: 99,
    features: ['SourceMod', 'Custom Maps', 'Trading']
  },
  {
    id: 16,
    name: 'Enshrouded',
    description: 'Survival crafting RPG in a cursed world',
    category: 'Survival',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1203630/header.jpg',
    monthlyPrice: 11.99,
    activeServers: 2000,
    players: '60K+',
    rating: 4.4,
    uptime: 99,
    features: ['Co-op Play', 'Base Building', 'Character Classes']
  },
  {
    id: 17,
    name: 'Euro Truck Simulator 2',
    description: 'Realistic truck driving simulation across Europe',
    category: 'Simulation',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/227300/header.jpg',
    monthlyPrice: 9.99,
    activeServers: 1000,
    players: '40K+',
    rating: 4.8,
    uptime: 99,
    features: ['TruckersMP', 'Custom Routes', 'Economy System']
  },
  {
    id: 18,
    name: 'Satisfactory',
    description: 'First-person factory building simulation game',
    category: 'Simulation',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/526870/header.jpg',
    monthlyPrice: 12.99,
    activeServers: 1200,
    players: '45K+',
    rating: 4.8,
    uptime: 99,
    features: ['Dedicated Server', 'Mod Support', 'Blueprint System']
  },
  {
    id: 19,
    name: '7 Days To Die',
    description: 'Zombie survival game with building mechanics',
    category: 'Survival',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/251570/header.jpg',
    monthlyPrice: 10.99,
    activeServers: 2500,
    players: '70K+',
    rating: 4.5,
    uptime: 99,
    features: ['Custom Maps', 'Mod Support', 'PvE/PvP']
  },
  {
    id: 20,
    name: 'Unturned',
    description: 'Free-to-play zombie survival sandbox',
    category: 'Survival',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/304930/header.jpg',
    monthlyPrice: 6.99,
    activeServers: 3000,
    players: '90K+',
    rating: 4.4,
    uptime: 99,
    features: ['Workshop Mods', 'Custom Maps', 'Economy']
  }
];

const GameCard = ({ game }: { game: typeof games[number] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md ring-1 ring-gray-200 dark:ring-gray-800"
  >
    <div className="relative z-10">
      <div className="relative aspect-[21/9] overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Image
          src={game.image}
          alt={game.name}
          width={840}
          height={360}
          className="object-cover w-full h-full"
          unoptimized
        />
        
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-gray-900 dark:text-white ring-1 ring-inset ring-gray-200/20 dark:ring-white/20">
            {game.category}
          </span>
          <span className="inline-flex items-center rounded-full bg-primary-500/90 backdrop-blur-sm px-2.5 py-0.5 text-xs font-medium text-white">
            ${game.monthlyPrice}/mo
          </span>
        </div>
      </div>

      <div className="relative p-5">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {game.name}
              </h3>
              <div className="mt-1 flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(game.rating) 
                          ? 'text-yellow-400' 
                          : i < game.rating 
                            ? 'text-yellow-400/50' 
                            : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {game.rating}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium text-green-600 dark:text-green-400">{game.uptime}%</span>
              <span className="text-xs text-gray-500">Uptime</span>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {game.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {game.features.map((feature, index) => (
              <span key={index} className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-500/10 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-400 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-400/30">
                {feature}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="space-y-2">
              <p className="font-medium text-gray-700 dark:text-gray-300">Features</p>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                {game.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-1">
                    <CheckIcon className="h-3.5 w-3.5 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-medium text-gray-700 dark:text-gray-300">Server Stats</p>
              <div className="space-y-1 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-1.5">
                  <ServerIcon className="h-3.5 w-3.5 text-primary-500" />
                  {game.activeServers} Active Servers
                </div>
                <div className="flex items-center gap-1.5">
                  <UsersIcon className="h-3.5 w-3.5 text-primary-500" />
                  {game.players} Players Online
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200/10 dark:border-gray-700/50 flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-xs text-gray-500 dark:text-gray-400">Starting from</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">${game.monthlyPrice}<span className="text-sm font-normal text-gray-500 dark:text-gray-400">/mo</span></p>
          </div>
          
          <button className="inline-flex items-center rounded-lg bg-primary-600 px-3.5 py-2 text-sm font-medium text-white hover:bg-primary-500 transition-colors duration-200">
            Deploy Server
            <ChevronRightIcon className="ml-1 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function GamesList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Games');
  const [showAllGames, setShowAllGames] = useState(false);

  const filteredGames = games.filter(game => {
    const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Games' || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const displayedGames = showAllGames ? filteredGames : filteredGames.slice(0, 6);

  return (
    <section className="relative isolate py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
          >
            Game Server Hosting
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400"
          >
            Deploy your game server in minutes with our optimized hosting solutions
          </motion.p>
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-4 pb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20 hover:shadow-primary-500/20'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search games..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 dark:bg-gray-800 dark:text-white dark:ring-gray-700 dark:placeholder:text-gray-500"
          />

          <AnimatePresence mode="wait">
            <motion.div 
              layout
              className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {displayedGames.map((game) => (
                <GameCard key={game.id} game={game} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredGames.length > 6 && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowAllGames(!showAllGames)}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 transition-colors duration-200"
              >
                {showAllGames ? 'Show Less' : 'Show All Games'}
                <ChevronDownIcon 
                  className={`h-5 w-5 transition-transform duration-200 ${showAllGames ? 'rotate-180' : ''}`}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
