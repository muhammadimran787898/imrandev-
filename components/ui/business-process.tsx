"use client";

import { Boxes, Code2, Lightbulb, Rocket, SearchCheck, TrendingUp, Workflow } from "lucide-react";

import { ContainerScroll } from "@/components/ui/container-scroll";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const transformationTimeline = [
  {
    id: 1,
    title: "Idea",
    date: "01",
    content: "Turn a rough concept into a clear outcome, user, constraint, and business reason to build.",
    category: "Discovery",
    icon: Lightbulb,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 72,
  },
  {
    id: 2,
    title: "Research",
    date: "02",
    content: "Map users, workflows, competitors, risks, and the fastest path to prove value before heavy engineering.",
    category: "Validation",
    icon: SearchCheck,
    relatedIds: [1, 3, 4],
    status: "completed" as const,
    energy: 78,
  },
  {
    id: 3,
    title: "Architecture",
    date: "03",
    content: "Choose the right stack, data model, APIs, AI workflows, integrations, and deployment shape.",
    category: "System",
    icon: Boxes,
    relatedIds: [2, 4, 5],
    status: "completed" as const,
    energy: 86,
  },
  {
    id: 4,
    title: "Build",
    date: "04",
    content: "Ship polished frontend, robust backend, automation, observability, and clean developer workflows.",
    category: "Execution",
    icon: Code2,
    relatedIds: [3, 5, 6],
    status: "in-progress" as const,
    energy: 92,
  },
  {
    id: 5,
    title: "Automate",
    date: "05",
    content: "Add AI agents, RAG, n8n workflows, event systems, and integrations that reduce manual work.",
    category: "AI Ops",
    icon: Workflow,
    relatedIds: [3, 4, 6],
    status: "in-progress" as const,
    energy: 88,
  },
  {
    id: 6,
    title: "Launch",
    date: "06",
    content: "Deploy with CI/CD, monitoring, performance checks, release safety, and a plan for iteration.",
    category: "Delivery",
    icon: Rocket,
    relatedIds: [4, 5, 7],
    status: "completed" as const,
    energy: 94,
  },
  {
    id: 7,
    title: "Scale",
    date: "07",
    content: "Use analytics, feedback, reliability data, and roadmap decisions to turn the product into a growing business.",
    category: "Growth",
    icon: TrendingUp,
    relatedIds: [1, 6],
    status: "pending" as const,
    energy: 81,
  },
];

export function BusinessProcess() {
  return (
    <ContainerScroll
      titleComponent={
        <div className="process-title">
          <p className="section-label">Process</p>
          <h2>From raw idea to real business system</h2>
          <p>
            I connect discovery, architecture, AI automation, product engineering, and launch discipline so ideas become products that solve real problems.
          </p>
        </div>
      }
    >
      <RadialOrbitalTimeline timelineData={transformationTimeline} />
    </ContainerScroll>
  );
}
