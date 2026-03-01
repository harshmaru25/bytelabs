import {
  Code2,
  Trophy,
  Users,
  Zap,
  ChevronRight,
  Play,
  Star,
} from "lucide-react"

import { Reveal } from "@/components/ui/reveal"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import { onBoardUser } from "@/modules/auth/actions"

export default async function Home() {
  await onBoardUser()

  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Interactive Coding",
      description:
        "Practice with real-world coding challenges and get instant feedback.",
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Track Progress",
      description:
        "Monitor your improvement with analytics and achievement systems.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Global Community",
      description:
        "Learn from thousands of developers worldwide.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Feedback",
      description:
        "Get instant feedback with detailed explanations.",
    },
  ]

  return (
    <div className="min-h-screen mt-24 transition-colors">

      {/* ================= HERO SECTION ================= */}
      <Reveal>
        <section className="relative min-h-[100vh] -mt-24 pt-24 flex flex-col justify-center items-center px-4 text-center overflow-hidden pb-24">

        {/* Background Glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-100/40 to-transparent dark:from-purple-900/40" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-300/20 dark:bg-purple-600/20 blur-3xl rounded-full -z-10" />

        <div className="max-w-5xl mx-auto">

          <Badge
            variant="secondary"
            className="mb-8 
            bg-amber-100 text-amber-700 border-amber-200
            dark:bg-purple-900 dark:text-purple-300 dark:border-purple-700"
          >
            <Star className="w-4 h-4 mr-2" />
            Join 10,000+ developers already coding
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8">
            Stop{" "}
            <span className="text-amber-600 dark:text-purple-400">
              Watching
            </span>{" "}
            Start Solving
          </h1>

          <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Solve real-world coding challenges, track your growth, and compete
            globally with powerful real-time feedback.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">

            <Button
              size="lg"
              className="
              px-8 py-6 text-lg font-semibold
              bg-amber-600 hover:bg-amber-700 text-white
              dark:bg-purple-600 dark:hover:bg-purple-700
              shadow-xl hover:shadow-2xl
              transform hover:-translate-y-1 transition-all duration-300
              "
            >
              <Play className="w-5 h-5 mr-2" />
              Start Solving Now
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="
              border-2 
              border-amber-400 text-amber-700 hover:bg-amber-50
              dark:border-purple-500 dark:text-purple-300 dark:hover:bg-purple-900/40
              "
            >
              Browse Problems
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>

          </div>
        </div>
      </section>
      </Reveal>
      

      {/* ================= FEATURES SECTION ================= */}
      <Reveal delay={0.2} >
        <section className="py-24 bg-gray-50 dark:bg-neutral-900/50">
        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Everything you need to{" "}
              <span className="text-amber-600 dark:text-purple-400">
                excel
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Powerful tools to accelerate your coding journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Reveal key={index} delay={index * 0.1} >
                <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-700"
              >
                <CardHeader>
                  <div
                    className="
                    w-12 h-12 rounded-xl flex items-center justify-center mb-4
                    bg-amber-100 text-amber-600
                    dark:bg-purple-900 dark:text-purple-400
                    "
                  >
                    {feature.icon}
                  </div>
                  <CardTitle className="text-gray-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
              </Reveal>
              
            ))}
          </div>

        </div>
      </section>
      </Reveal>
      

      {/* ================= FINAL CTA ================= */}
      <Reveal delay={0.3} >
        <section className="py-24 bg-gradient-to-r 
      from-amber-600 to-amber-400
      dark:from-purple-600 dark:to-purple-800
      rounded-md">

        <div className="max-w-4xl mx-auto text-center px-4">

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to level up your coding skills?
          </h2>

          <p className="text-xl text-white/90 mb-8">
            Join thousands of developers improving every single day.
          </p>

          <Button
            size="lg"
            className="bg-white text-gray-900 hover:bg-gray-100 shadow-lg"
          >
            Get Started for Free
          </Button>

        </div>
      </section>
      </Reveal>
      

    </div>
  )
}