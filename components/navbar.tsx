import React from 'react'
import { CommandMenu } from './command-menu'
import { BellDot, ChevronDown, ShoppingBag } from 'lucide-react'
import { Separator } from './ui/separator'
import { UserAvatar } from './user-avatar'
import { ModeToggle } from './theme-toggle'

export default function NavBar() {
  return (
    <div className="h-16 p-4 bg-white dark:bg-popover w-full flex items-center justify-between border-b">
      <CommandMenu />
      <div className=" flex items-center gap-4">
        <ModeToggle />
        <div className="rounded-full p-2 hover:bg-zinc-200 cursor-pointer">
          <BellDot className="stroke-2" />
        </div>
        <Separator orientation="vertical" decorative className="w-1 h-full" />
        <div className="flex gap-2 items-center cursor-pointer">
          <UserAvatar
            name="Prabath Kini"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuC0J5U2oOIippV-AiExQnz7BKcFOyd6Fdzg&usqp=CAU"
          />
          <h3 className="font-medium">Prabath Kini</h3>
          <ChevronDown />
        </div>
      </div>
    </div>
  )
}
