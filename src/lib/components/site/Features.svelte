<script lang="ts">
  import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "$lib/components/ui/card";
  import {
    Smartphone,
    Users,
    Clock,
    TrendingUp,
    ShieldCheck,
    Zap,
  } from "lucide-svelte";

  const features = [
    {
      title: "Home Screen Widgets",
      description:
        "Log a diaper change, feed, or sleep directly from your iPhone home screen — without even opening the app.",
      icon: Smartphone,
      color: "bg-blue-500/10 text-blue-500",
    },
    {
      title: "Real-Time Partner Sync",
      description:
        "Invite your partner or caregiver via email. Every log syncs in under a second across all devices, automatically.",
      icon: Users,
      color: "bg-purple-500/10 text-purple-500",
    },
    {
      title: "Live Activities & Timers",
      description:
        "Sleep, bath, and play timers persist on your Lock Screen and in the Dynamic Island so you never lose track.",
      icon: Clock,
      color: "bg-green-500/10 text-green-500",
    },
    {
      title: "Insights & Growth Tracking",
      description:
        "7, 14, and 30-day trend charts, a 24-hour activity clock, weekly heatmaps, and a full growth chart with BMI.",
      icon: TrendingUp,
      color: "bg-orange-500/10 text-orange-500",
    },
    {
      title: "Secure & Private",
      description:
        "Row-Level Security ensures only you and your invited partner can ever access your data. Nothing is sold or shared.",
      icon: ShieldCheck,
      color: "bg-red-500/10 text-red-500",
    },
    {
      title: "AI-Powered Predictions",
      description:
        "The Smart Card analyses the past 14 days of logs to predict your baby's next sleep and feeding window.",
      icon: Zap,
      color: "bg-yellow-500/10 text-yellow-500",
    },
  ];
</script>

<section id="features" class="py-24 bg-background relative overflow-hidden">
  <div class="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-indigo-500/5 to-transparent pointer-events-none"></div>
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
            class="h-full border-none shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-background"
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
