import React from 'react'
import { Menu, Command } from 'lucide-react'

export default function Nav() {
  return (
    <div className="pointer-events-none absolute top-0 z-30 w-full">
      <div className="pointer-events-auto mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl">
        <div className="flex items-center gap-2 text-white/80">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#8E66FF] shadow-[0_0_12px_3px_rgba(142,102,255,0.35)]" />
          <span className="text-sm font-medium">Claudine</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-white/70">
          <div className="flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-1">
            <Command className="h-3.5 w-3.5" />
            <span>⌘K</span>
          </div>
          <button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-white/80 hover:bg-white/10">
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
