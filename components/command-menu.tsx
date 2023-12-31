'use client'

import * as React from 'react'

import { data as usData } from '@/data/us-data'
import { data as euData } from '@/data/eu-data'
import { data as cryptoData } from '@/data/crypto-data'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'

import Image from 'next/image'

export function CommandMenu({ ...props }) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          'w-[500px] relative justify-start text-sm text-muted-foreground',
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <span className="hidden lg:inline">Search Stocks...</span>
        <span className="inline-flex lg:hidden">Search Stocks...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Enter Stock name..."
          className="text-black"
        />
        <CommandList>
          <CommandEmpty>No stocks Found</CommandEmpty>
          <CommandGroup heading="US">
            {usData.map((stock) => (
              <CommandItem
                key={stock.id}
                value={stock.stockName}
                className="text-black gap-2 ml-2 cursor-pointer dark:text-white"
              >
                {stock.stockName}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="EU">
            {euData.map((stock) => (
              <CommandItem
                key={stock.id}
                value={stock.stockName}
                className="text-black gap-2 ml-2 cursor-pointer dark:text-white"
              >
                {stock.stockName}
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandGroup heading="Crypto">
            {cryptoData.map((stock) => (
              <CommandItem
                key={stock.id}
                value={stock.cryptoName}
                className="text-black gap-2 ml-2 cursor-pointer dark:text-white"
              >
                {stock.cryptoName}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
