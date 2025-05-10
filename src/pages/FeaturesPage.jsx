import React from 'react'
import { Users, Globe, Gamepad, BarChart } from 'lucide-react'
import FeatureImageComponent from '../components/features-page/FeatureImageComponent'
import FeatureCardComponent from '../components/features-page/FeatureCardComponent'

export const features = [
  {
    key: 'multiplayer',
    icon: <Users size={32} className="text-emerald-400" />,
    title: 'Local & Online Multiplayer',
  },
  {
    key: 'global',
    icon: <Globe size={32} className="text-emerald-400" />,
    title: 'Global Matchmaking',
  },
  {
    key: 'ai',
    icon: <Gamepad size={32} className="text-emerald-400" />,
    title: 'Smart AI Opponents',
  },
  {
    key: 'stats',
    icon: <BarChart size={32} className="text-emerald-400" />,
    title: 'Live Stats & Leaderboards',
  },
]

const FeaturesPage = () => {
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">
        Power-Packed Features
      </h2>

      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Device Mockup */}
        <FeatureImageComponent />

        {/* Right: Feature Cards */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map(({ key, icon, title }) => (
            <FeatureCardComponent key={key} icon={icon} title={title} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturesPage