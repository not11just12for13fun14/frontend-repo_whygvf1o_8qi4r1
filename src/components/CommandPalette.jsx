import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Sparkles, GitBranch, FileText, Bot, Terminal, Settings } from 'lucide-react'

const COMMANDS = [
  { group: 'Actions', icon: Sparkles, label: 'Draft patch', shortcut: 'Enter' },
  { group: 'Actions', icon: Sparkles, label: 'Explain selection', shortcut: 'E' },
  { group: 'Workspace', icon: FileText, label: 'Open file…', shortcut: 'O' },
  { group: 'Workspace', icon: GitBranch, label: 'Create branch…', shortcut: 'B' },
  { group: 'Workspace', icon: Terminal, label: 'Run tests', shortcut: 'T' },
  { group: 'Settings', icon: Settings, label: 'Model settings', shortcut: ',' },
  { group: 'Assistant', icon: Bot, label: 'Open Lens: Reasoning', shortcut: 'L' },
]

export default function CommandPalette({ open, onClose }) {
  const [query, setQuery] = useState('')
  const ref = useRef(null)

  useEffect(() => {
    function onKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        onClose(prev => !prev)
      }
      if (e.key === 'Escape') onClose(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim()
    if (!q) return COMMANDS
    return COMMANDS.filter(c => c.label.toLowerCase().includes(q))
  }, [query])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 8, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.22,1,0.36,1] }}
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F15]/90 backdrop-blur-2xl"
          >
            <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-3 py-2 text-white/70">
              <Search className="h-4 w-4" />
              <input
                autoFocus
                ref={ref}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search commands…"
                className="w-full bg-transparent py-1 text-sm text-white/90 placeholder-white/40 outline-none"
              />
              <div className="text-xs text-white/40">ESC</div>
            </div>
            <div className="max-h-[50vh] overflow-auto p-2">
              {filtered.map((c, i) => (
                <div key={i} className="group flex items-center justify-between rounded-lg p-2 text-sm text-white/80 hover:bg-white/5">
                  <div className="flex items-center gap-3">
                    <c.icon className="h-4 w-4 text-white/60" />
                    <div>
                      <div>{c.label}</div>
                      <div className="text-xs text-white/40">{c.group}</div>
                    </div>
                  </div>
                  <div className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-xs text-white/60">{c.shortcut}</div>
                </div>
              ))}
              {filtered.length === 0 && (
                <div className="p-4 text-center text-sm text-white/50">No commands found</div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
