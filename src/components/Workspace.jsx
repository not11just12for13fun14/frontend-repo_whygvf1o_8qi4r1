import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  PanelLeftOpen,
  PanelLeftClose,
  Search,
  Terminal,
  Settings,
  LayoutGrid,
  GitBranch,
  Bot,
  FileText,
  SplitSquareHorizontal,
  SplitSquareVertical,
  ChevronRight,
  FolderTree,
  Sparkles,
  Play,
  Pause,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'

function TopBar() {
  return (
    <div className="sticky top-0 z-40 flex h-12 items-center justify-between border-b border-white/10 bg-[#0C0F17]/80 px-3 backdrop-blur-xl">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 animate-pulse rounded-full bg-[#8E66FF] shadow-[0_0_16px_4px_rgba(142,102,255,0.35)]" />
        <span className="text-sm font-medium text-white/90">Claudine</span>
        <span className="text-xs text-white/40">Workbench</span>
      </div>
      <div className="flex items-center gap-2">
        <button className="group rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80 transition hover:bg-white/10">
          <Search className="mr-1 inline h-3.5 w-3.5 opacity-80" />
          <span className="align-middle">Search</span>
        </button>
        <button className="rounded-md border border-white/10 bg-white/5 p-1 text-white/70 transition hover:bg-white/10">
          <Settings className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

function LeftRail({ open, setOpen }) {
  return (
    <div className={`relative z-30 h-full border-r border-white/10 bg-[#0B0F15]/80 backdrop-blur-xl transition-[width] duration-300 ${open ? 'w-64' : 'w-12'}`}>
      <div className="absolute right-[-10px] top-10">
        <button
          className="rounded-full border border-white/10 bg-white/10 p-1 text-white/70 shadow hover:bg-white/20"
          onClick={() => setOpen(!open)}
        >
          {open ? <PanelLeftClose className="h-4 w-4" /> : <PanelLeftOpen className="h-4 w-4" />}
        </button>
      </div>

      <div className="flex h-full flex-col">
        <div className="flex items-center gap-2 px-3 py-2 text-white/60">
          <FolderTree className="h-4 w-4" />
          {open && <span className="text-xs">Workspace</span>}
        </div>
        <div className="px-2">
          <div className="mb-2 rounded-md border border-white/10 bg-white/5 p-2">
            <div className="flex items-center gap-2 text-xs text-white/60">
              <Bot className="h-3.5 w-3.5" />
              {open && 'Threads'}
            </div>
            <div className="mt-2 space-y-1">
              {["Implement API", "Refactor auth", "Fix flaky test"].map((t, i) => (
                <div key={i} className="group flex items-center justify-between rounded-sm px-2 py-1 text-xs text-white/70 hover:bg-white/5">
                  <span>{open ? t : t.slice(0, 2) + '…'}</span>
                  <ChevronRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-md border border-white/10 bg-white/5 p-2">
            <div className="flex items-center gap-2 text-xs text-white/60">
              <FileText className="h-3.5 w-3.5" />
              {open && 'Files'}
            </div>
            <div className="mt-2 space-y-1">
              {["app.tsx", "routes.ts", "lib/db.ts", "tests/user.test.ts"].map((f, i) => (
                <div key={i} className="group flex items-center justify-between rounded-sm px-2 py-1 text-xs text-white/70 hover:bg-white/5">
                  <span>{open ? f : f.slice(0, 2) + '…'}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function RightDrawer({ open }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 24 }}
          transition={{ duration: 0.26 }}
          className="z-30 hidden w-80 border-l border-white/10 bg-[#0B0F15]/80 p-3 backdrop-blur-xl lg:block"
        >
          <div className="mb-3 flex items-center justify-between text-white/70">
            <div className="flex items-center gap-2 text-xs">
              <LayoutGrid className="h-3.5 w-3.5" /> Lenses
            </div>
            <div className="flex gap-1 text-xs text-white/50">
              <span className="rounded border border-white/10 bg-white/5 px-1">Citations</span>
              <span className="rounded border border-white/10 bg-white/5 px-1">Impact</span>
              <span className="rounded border border-white/10 bg-white/5 px-1">Tools</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white/70">
              <div className="mb-1 text-xs text-white/60">Reasoning Summary</div>
              High-level plan will appear here with citations and decisions.
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm text-white/70">
              <div className="mb-1 text-xs text-white/60">Impact Map</div>
              Dependencies and confidence overlay.
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function CenterCanvas() {
  const [split, setSplit] = useState('horizontal')
  return (
    <div className="relative flex h-full flex-1 flex-col">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-2 py-1 text-white/70">
        <div className="flex items-center gap-2 text-xs">
          <button className="rounded border border-white/10 bg-white/5 px-2 py-1 hover:bg-white/10">
            <SplitSquareHorizontal className="h-4 w-4" />
          </button>
          <button className="rounded border border-white/10 bg-white/5 px-2 py-1 hover:bg-white/10">
            <SplitSquareVertical className="h-4 w-4" />
          </button>
          <div className="ml-2 rounded border border-white/10 bg-white/5 px-2 py-1">
            <span className="text-xs">Editor</span>
          </div>
          <div className="rounded border border-white/10 bg-white/5 px-2 py-1">
            <span className="text-xs">Chat</span>
          </div>
          <div className="rounded border border-white/10 bg-white/5 px-2 py-1">
            <span className="text-xs">Terminal</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <button className="rounded border border-white/10 bg-white/5 px-2 py-1 hover:bg-white/10"><GitBranch className="mr-1 inline h-3.5 w-3.5"/>main</button>
          <button className="rounded border border-white/10 bg-white/5 px-2 py-1 hover:bg-white/10"><Terminal className="mr-1 inline h-3.5 w-3.5"/>Run</button>
        </div>
      </div>

      <div className={`grid flex-1 ${split === 'horizontal' ? 'grid-cols-2' : 'grid-rows-2'} gap-px bg-white/10 p-px`}
        onDoubleClick={() => setSplit(s => s === 'horizontal' ? 'vertical' : 'horizontal')}
      >
        <div className="rounded-md border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-3">
          <div className="mb-2 text-xs text-white/50">Editor • app.tsx</div>
          <div className="rounded-md border border-white/10 bg-black/20 p-3 text-xs text-white/60">
            Inline suggestions and ghost text preview here.
          </div>
        </div>
        <div className="rounded-md border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-3">
          <div className="mb-2 text-xs text-white/50">Chat with Claude</div>
          <div className="rounded-md border border-white/10 bg-black/20 p-3 text-xs text-white/60">
            Chat messages, citations, and actions here.
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#0A0C10]/60 px-2 py-2 text-xs text-white/60">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <Play className="h-3.5 w-3.5" />
            <Pause className="h-3.5 w-3.5" />
            <CheckCircle2 className="h-3.5 w-3.5 text-teal-300" />
            <AlertCircle className="h-3.5 w-3.5 text-rose-300" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Workspace() {
  const [leftOpen, setLeftOpen] = useState(true)
  const [rightOpen, setRightOpen] = useState(true)

  return (
    <div className="flex h-screen flex-col bg-[#0A0C10]">
      <TopBar />
      <div className="relative flex min-h-0 flex-1">
        <LeftRail open={leftOpen} setOpen={setLeftOpen} />
        <CenterCanvas />
        <RightDrawer open={rightOpen} />
      </div>
    </div>
  )
}
