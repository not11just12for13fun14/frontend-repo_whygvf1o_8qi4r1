import React from 'react'
import { useNavigate } from 'react-router-dom'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'

export default function Hero() {
  const navigate = useNavigate()

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A0C10]">
      {/* Background gradients and grain */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_20%_10%,rgba(110,120,255,0.18),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_600px_at_80%_20%,rgba(91,183,255,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(1000px_800px_at_50%_110%,rgba(30,40,80,0.35),transparent)]" />
        <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay" style={{backgroundImage:
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '3px 3px'}} />
      </div>

      {/* Spline scene */}
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" />
      </div>

      {/* Top subtle gradient to improve contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A0C10]/70 via-transparent to-[#0A0C10]/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur-md"
        >
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#8E66FF] shadow-[0_0_16px_2px_rgba(142,102,255,0.6)]" />
          Crafted for flow-state building with Claude
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 bg-gradient-to-b from-white to-white/70 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent md:text-7xl"
        >
          Claudine
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-balance text-lg text-white/70 md:text-xl"
        >
          A precision workbench for building with AI — sleek, dark, and deeply responsive. Experience a workspace that feels made just for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col items-center gap-3 sm:flex-row"
        >
          <button
            onClick={() => navigate('/workspace')}
            className="group relative inline-flex items-center gap-2 rounded-lg border border-[#6C7CFF]/30 bg-[#6C7CFF]/10 px-5 py-3 text-sm font-medium text-white shadow-[0_8px_30px_rgba(108,124,255,0.25)] ring-1 ring-inset ring-white/5 transition-transform duration-200 hover:scale-[1.02] hover:bg-[#6C7CFF]/20 hover:shadow-[0_10px_40px_rgba(108,124,255,0.35)]"
          >
            <PlayCircle className="h-4 w-4 opacity-80 transition-opacity group-hover:opacity-100" />
            Start with a Workspace
            <ArrowRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-0.5" />
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-lg bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>

          <a
            href="#learn-more"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/80 backdrop-blur-md transition hover:bg-white/10"
          >
            Learn more
          </a>
        </motion.div>
      </div>
    </div>
  )
}
