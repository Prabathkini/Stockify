'use client'

import {
  Home,
  Briefcase,
  Wallet,
  Newspaper,
  Glasses,
  Heart,
  Search,
  Settings,
} from 'lucide-react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components//ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface routeProps {
  label: string
  icon: any
  href: string
  disabled: boolean
}

const routes: routeProps[] = [
  {
    label: 'Home',
    icon: Home,
    href: '/',
    disabled: false,
  },
  {
    label: 'Explore',
    icon: Search,
    href: '/explore',
    disabled: true,
  },
  {
    label: 'Watchlist',
    icon: Heart,
    href: '/watchlist',
    disabled: true,
  },
  {
    label: 'News',
    icon: Newspaper,
    href: '/news',
    disabled: true,
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
    disabled: true,
  },
]

export default function SideNav() {
  const pathname = usePathname()

  return (
    <div className="links mt-16 mx-4 flex flex-col gap-2 items-center">
      {routes.map((route) => (
        <Button
          key={route.href}
          variant={'ghost'}
          disabled={route.disabled}
          className="w-full justify-start text-black dark:text-white"
        >
          <Link
            href={route.href}
            className="h-10 w-full p-3 mx-4 flex justify-start items-center cursor-pointer rounded-lg text-sm font-medium"
          >
            <div className="flex ">
              <route.icon className="h-5 w-5 mr-3 text-black dark:text-white" />
              {route.label}
            </div>
          </Link>
        </Button>
      ))}
    </div>
  )
}
