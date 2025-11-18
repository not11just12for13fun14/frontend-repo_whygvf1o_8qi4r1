import React, { useState } from 'react'
import Workspace from './Workspace'
import CommandPalette from './CommandPalette'

export default function WorkspacePage() {
  const [paletteOpen, setPaletteOpen] = useState(false)
  return (
    <div className="relative min-h-screen bg-[#0A0C10] text-white">
      <Workspace />
      <CommandPalette open={paletteOpen} onClose={setPaletteOpen} />
    </div>
  )
}
