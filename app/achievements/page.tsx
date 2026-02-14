"use client"

import { Trophy, Award, Zap, Target, Boxes, Rocket } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import achievementsData from "@/data/achievements.json";

const iconMap: { [key: string]: any } = {
  Trophy,
  Award,
  Zap,
  Target,
  Boxes,
  Rocket,
};

export default function AchievementsPage() {
  return (
    <div className="container mx-auto px-4 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-stone-brown-50 mb-4">
          {achievementsData.pageTitle}
        </h1>
        <p className="text-xl text-stone-brown-300">
          {achievementsData.pageDescription}
        </p>
      </div>

      {/* Highlights */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievementsData.highlights.map((highlight, idx) => (
          <div key={idx} className="flex items-center gap-3 p-4 bg-stone-brown-800 rounded-lg border border-periwinkle-700/30">
            <div className="w-3 h-3 bg-periwinkle-500 rounded-full animate-pulse" />
            <span className="text-stone-brown-100">{highlight}</span>
          </div>
        ))}
      </div>

      {/* Achievements Grid */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {achievementsData.achievements.map((achievement) => {
          const Icon = iconMap[achievement.icon] || Trophy;
          
          return (
            <li key={achievement.id} className="min-h-[20rem] list-none">
              <div className="relative h-full rounded-2xl border-[0.75px] border-stone-brown-700 p-2">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-stone-brown-800 p-6 shadow-xl">
                  <div className="relative flex flex-1 flex-col justify-between gap-3">
                    <div className="w-fit rounded-lg border-[0.75px] border-periwinkle-700/50 bg-stone-brown-900 p-3">
                      <Icon className="h-6 w-6 text-periwinkle-400" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs px-2 py-1 bg-periwinkle-900/50 text-periwinkle-200 rounded">
                          {achievement.year}
                        </span>
                        <span className="text-lg font-bold text-periwinkle-400">
                          {achievement.position}
                        </span>
                      </div>
                      <h3 className="text-2xl leading-tight font-semibold tracking-tight text-stone-brown-50">
                        {achievement.title}
                      </h3>
                      <p className="text-sm font-semibold text-dusty-lavender-300">
                        {achievement.event}
                      </p>
                      <p className="text-xs text-stone-brown-400">
                        {achievement.category}
                      </p>
                      <p className="text-sm leading-relaxed text-stone-brown-300">
                        {achievement.description}
                      </p>
                      <p className="text-xs text-stone-brown-500 mt-2">
                        {achievement.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
