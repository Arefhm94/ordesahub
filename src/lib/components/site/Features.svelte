<script lang="ts">
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
  } from "$lib/components/ui/card";
  import {
    Smartphone,
    Users,
    Clock,
    BarChart3,
    ShieldCheck,
    Zap,
  } from "lucide-svelte";

  const features = [
    {
      title: "Home Screen Widgets",
      description:
        "Log a diaper change or feed without even opening the app. Use interactive widgets for speed.",
      icon: Smartphone,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      title: "Partner Syncing",
      description:
        "Invite your partner and share a single profile. Data syncs instantly across all devices.",
      icon: Users,
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      title: "Reliable Timers",
      description:
        "Sleep and nursing timers run in the background and show up on your lock screen with Live Activities.",
      icon: Clock,
      color: "bg-green-500/10 text-green-500",
    },
    {
      title: "Daily Summaries",
      description:
        "Beautifully visualized data helps you understand sleep patterns and feeding trends at a glance.",
      icon: BarChart3,
      color: "bg-orange-500/10 text-orange-500",
    },
    {
      title: "Secure & Private",
      description:
        "Data is encrypted and synced securely via Supabase. Privacy is guaranteed; data is never shared or sold.",
      icon: ShieldCheck,
      color: "bg-red-500/10 text-red-500",
    },
    {
      title: "Native Performance",
      description:
        "Built with Swift and SwiftUI for the best possible experience on your iOS devices.",
      icon: Zap,
      color: "bg-yellow-500/10 text-yellow-500",
    },
  ];
</script>

<section id="features" class="py-24 bg-white dark:bg-slate-900">
  <div class="container mx-auto px-4">
    <div class="text-center space-y-4 mb-16">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight">
        Built for busy parents.
      </h2>
      <p class="text-muted-foreground text-lg max-w-2xl mx-auto">
        Everything you need to track your baby's growth and daily activities
        without the friction of complex apps.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each features as feature, i}
        <div
          class="group h-full animate-in fade-in slide-in-from-bottom-5 duration-700"
          style="animation-delay: {i * 100}ms"
        >
          <Card
            class="h-full border-none shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-background/50 backdrop-blur"
          >
            <CardHeader>
              <div
                class="p-3 w-fit rounded-2xl mb-4 {feature.color} group-hover:scale-110 transition-transform duration-300"
              >
                <feature.icon class="h-6 w-6" />
              </div>
              <CardTitle class="text-xl font-bold">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        </div>
      {/each}
    </div>
  </div>
</section>
