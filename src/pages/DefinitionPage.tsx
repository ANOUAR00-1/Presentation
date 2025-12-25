import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, Brain, Heart, Activity, Ear, XCircle, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function DefinitionPage() {
  const pillars = [
    {
      icon: Brain,
      title: "1. Comprendre avec sa Tête",
      subtitle: "Réfléchir",
      desc: "Ce n'est pas juste entendre des mots. C'est vraiment essayer de comprendre ce que l'autre dit et retenir les points importants.",
      points: ["Comprendre les mots", "Suivre la logique", "Se souvenir des idées clés"],
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      icon: Heart,
      title: "2. Ressentir avec son Cœur",
      subtitle: "Les Émotions",
      desc: "Comprendre ce que la personne ressent vraiment, même quand elle ne le dit pas directement. C'est écouter le ton de sa voix et ses hésitations.",
      points: ["Se mettre à sa place", "Capter les non-dits", "Ne pas juger trop vite"],
      color: "text-rose-500",
      bg: "bg-rose-500/10",
      border: "border-rose-500/20"
    },
    {
      icon: Activity,
      title: "3. Montrer qu'on Écoute",
      subtitle: "Les Actions",
      desc: "L'écoute doit être visible. Si on reste immobile sans réagir, l'autre pense qu'on ne l'écoute pas. Il faut montrer qu'on suit.",
      points: ["Regarder la personne", "Hocher la tête", "Se pencher vers l'avant"],
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/10 relative overflow-hidden">
      {/* Technical grid background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 technical-grid-strong" />
        <div className="absolute inset-0 technical-grid-fine" />
      </div>

      {/* Header */}
      <section className="relative pt-20 pb-12 px-6 max-w-5xl mx-auto text-center bg-gradient-to-br from-violet-500/10 via-cyan-500/10 to-indigo-500/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl shadow-violet-500/20 overflow-hidden mb-16">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 to-cyan-600/5 rounded-3xl" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-400/20 to-cyan-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-indigo-400/20 rounded-full blur-2xl" />

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            Comment Bien Écouter ?
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Écouter vraiment, c'est oublier un moment ses propres idées pour vraiment comprendre l'autre.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-24 space-y-24">

        {/* Pillars */}
        <section className="space-y-8">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Les 3 Éléments Essentiels</h2>
          <div className="grid gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-8 hover:shadow-2xl shadow-xl shadow-slate-200/50 hover:shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
              >
                <div className="md:flex gap-8 items-start">
                  <div className={`w-16 h-16 rounded-2xl ${pillar.bg} ${pillar.color} flex items-center justify-center shrink-0 mb-6 md:mb-0 group-hover:scale-110 transition-transform`}>
                    <pillar.icon className="w-8 h-8" />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{pillar.title}</h3>
                      <p className={`text-sm font-bold uppercase tracking-wider ${pillar.color} mt-1`}>{pillar.subtitle}</p>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {pillar.desc}
                    </p>
                    <ul className="grid sm:grid-cols-3 gap-4 pt-2">
                      {pillar.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80 bg-secondary/50 px-3 py-2 rounded-lg">
                          <div className={`w-1.5 h-1.5 rounded-full ${pillar.color.replace('text-', 'bg-')}`} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="relative bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl shadow-slate-200/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-cyan-500/5 rounded-3xl" />
          <div className="relative z-10">
            <h3 className="text-2xl font-display font-bold mb-8 text-center">Entendre vs Écouter</h3>
            <div className="grid md:grid-cols-2 gap-8 md:gap-0 md:divide-x divide-white/30">
            <div className="space-y-6 px-4">
              <div className="flex items-center gap-3 mb-4">
                <Ear className="w-8 h-8 text-muted-foreground" />
                <h4 className="text-xl font-bold text-muted-foreground">Entendre (Passif)</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 text-muted-foreground">
                  <XCircle className="w-5 h-5 shrink-0 text-destructive/50" />
                  Subir les ondes sonores (physiologique)
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <XCircle className="w-5 h-5 shrink-0 text-destructive/50" />
                  Focus sur "ce que je vais répondre"
                </li>
              </ul>
            </div>

            <div className="space-y-6 px-4">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-8 h-8 text-primary" />
                <h4 className="text-xl font-bold text-primary">Écouter (Actif)</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 text-foreground font-medium">
                  <CheckCircle className="w-5 h-5 shrink-0 text-primary" />
                  Décision consciente d'attention
                </li>
                <li className="flex gap-3 text-foreground font-medium">
                  <CheckCircle className="w-5 h-5 shrink-0 text-primary" />
                  Suspension du jugement pour comprendre
                </li>
              </ul>
            </div>
          </div>
        </div>
        </section>


        {/* Navigation Footer */}
        <div className="flex justify-between items-center pt-8 border-t border-border">
          <Link to="/introduction">
            <Button variant="ghost" size="lg" className="group text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour : Introduction
            </Button>
          </Link>
          <Link to="/techniques">
            <Button size="lg" className="group btn-primary px-8">
              Techniques
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
