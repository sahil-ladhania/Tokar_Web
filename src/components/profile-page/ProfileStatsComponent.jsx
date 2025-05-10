import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, CheckCircle, XCircle } from 'lucide-react'

const stats = [
  { key: 'played', icon: <Trophy size={24} className="text-emerald-400" />, label: 'Games Played', value: 128 },
  { key: 'wins',   icon: <CheckCircle size={24} className="text-emerald-400" />, label: 'Wins',          value: 76  },
  { key: 'losses', icon: <XCircle size={24} className="text-emerald-400" />, label: 'Losses',        value: 52  },
]

const ProfileStatsComponent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
      {stats.map((s, i) => (
        <motion.div
          key={s.key}
          className="flex items-center space-x-4 bg-slate-800 p-4 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i, duration: 0.5 }}
        >
          <div className="p-2 bg-slate-700 rounded-full">
            {s.icon}
          </div>
          <div>
            <p className="text-xl font-bold text-white">{s.value}</p>
            <p className="text-gray-400">{s.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ProfileStatsComponent