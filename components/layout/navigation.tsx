"use client"

import { Home, Trophy, Users, Briefcase } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function Navigation() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'Achievements', url: '/achievements', icon: Trophy },
    { name: 'Team', url: '/team', icon: Users },
    { name: 'Projects', url: '/projects', icon: Briefcase }
  ]

  return <NavBar items={navItems} />
}
