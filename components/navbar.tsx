import React from 'react'
import { CommandMenu } from './command-menu'
import { BellDot, ShoppingBag } from 'lucide-react'
import { Separator } from './ui/separator'
import { UserAvatar } from './user-avatar'

export default function NavBar() {
  return (
    <div className="h-16 p-4 bg-white w-full flex items-center justify-between border-b">
      <CommandMenu />
      <div className="w-[200px] flex items-center gap-4">
        <div className="flex gap-4">
          <ShoppingBag className="stroke-2" />
          <BellDot className="stroke-2" />
        </div>
        <Separator orientation="vertical" decorative className="w-1 h-full" />
        <UserAvatar
          name="Prabath Kini"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuC0J5U2oOIippV-AiExQnz7BKcFOyd6Fdzg&usqp=CAU"
        />
      </div>
    </div>
  )
}
