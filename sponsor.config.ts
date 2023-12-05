import { defineConfig, presets } from 'sponsorkit'

export default defineConfig({
  formats: ['svg'],
  outputDir: "./",
  afdian: {
    exechangeRate: 4,
  },
  tiers: [
    {
      title: '🕰️ Past Sponsors',
      monthlyDollars: -1,
      preset: presets.xs,
    },
    {
      title: '👏 Sponsors',
      preset: presets.medium,
    },
    {
      title: '🌟 Starlight',
      monthlyDollars: 15,
      preset: presets.large,
    },
    {
      title: '🎅 Santa Claus',
      monthlyDollars: 50,
      preset: presets.xl,
    },
  ],
})
