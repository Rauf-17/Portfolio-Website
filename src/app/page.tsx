"use client";

import { FadeIn } from "@/components/reactbits/fade-in";
import { Card } from "@/components/primereact/card";
import { Button } from "@/components/shadcn/button";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-background">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <FadeIn>
          <section className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-foreground">
              Raufull Islam Rauf
            </h1>
            <p className="text-xl text-muted-foreground">
              Full Stack Developer
            </p>
          </section>
        </FadeIn>

        {/* Theme Showcase */}
        <FadeIn delay={0.2}>
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Violet Theme Colors
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card title="Primary Card" className="bg-card text-card-foreground border-border">
                <p className="mb-4">
                  This card uses the primary color scheme with violet accent.
                </p>
                <div className="flex gap-2">
                  <Button variant="default">Primary Button</Button>
                  <Button variant="secondary">Secondary</Button>
                </div>
              </Card>

              <Card title="Accent Card" className="bg-accent text-accent-foreground border-border">
                <p className="mb-4">
                  Showcasing accent colors from the violet theme.
                </p>
                <div className="flex gap-2">
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                </div>
              </Card>

              <Card title="Muted Card" className="bg-muted text-muted-foreground border-border">
                <p className="mb-4">
                  Muted variant for subtle backgrounds.
                </p>
                <div>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </Card>
            </div>
          </section>
        </FadeIn>

        {/* Button Variants */}
        <FadeIn delay={0.4}>
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">
              Button Variants
            </h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </section>
        </FadeIn>
      </div>
    </main>
  );
}
