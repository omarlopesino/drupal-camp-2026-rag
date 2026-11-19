import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

// Presenter remotes send ↓/↑, which Slidev maps to whole-slide jumps; make them step through clicks.
export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) =>
  base.map((shortcut) => {
    if (shortcut.name === 'next_down')
      return { ...shortcut, fn: nav.next }
    if (shortcut.name === 'prev_up')
      return { ...shortcut, fn: nav.prev }
    return shortcut
  }),
)
