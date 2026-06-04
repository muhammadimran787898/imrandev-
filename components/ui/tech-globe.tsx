"use client";

import { useCallback, useEffect, useRef } from "react";
import {
  siAngular,
  siAnsible,
  siApachecassandra,
  siApachekafka,
  siAxios,
  siBun,
  siCypress,
  siD3,
  siDeno,
  siDocker,
  siEsbuild,
  siExpress,
  siFastify,
  siFirebase,
  siFramer,
  siGithubactions,
  siGrafana,
  siGraphql,
  siHelm,
  siHuggingface,
  siIstio,
  siJenkins,
  siJest,
  siJquery,
  siKoa,
  siKubernetes,
  siLangchain,
  siLodash,
  siMongodb,
  siMongoose,
  siMysql,
  siN8n,
  siNestjs,
  siNetlify,
  siNextdotjs,
  siNuxt,
  siOpentelemetry,
  siPostgresql,
  siPrisma,
  siPrometheus,
  siRabbitmq,
  siReact,
  siRedis,
  siRedux,
  siRollupdotjs,
  siSequelize,
  siStripe,
  siSupabase,
  siSvelte,
  siTailwindcss,
  siTanstack,
  siTerraform,
  siThreedotjs,
  siTypeorm,
  siTypescript,
  siVercel,
  siVite,
  siVitest,
  siVuedotjs,
  siWebpack,
  siZapier,
} from "simple-icons";

import { cn } from "@/lib/utils";

type Ring = "front" | "middle" | "back";
type Tone = "cyan" | "green" | "rose" | "amber";

type OrbitSkill = {
  icon?: keyof typeof iconMap;
  label: string;
  ring: Ring;
  tone: Tone;
  x: string;
  y: string;
};

type GlobeProps = {
  autoRotateSpeed?: number;
  className?: string;
  connections?: { from: [number, number]; to: [number, number] }[];
  markers?: { lat: number; lng: number; label?: string }[];
  size?: number;
};

const iconMap = {
  Angular: siAngular,
  Ansible: siAnsible,
  Axios: siAxios,
  Bun: siBun,
  Cassandra: siApachecassandra,
  Cypress: siCypress,
  D3: siD3,
  Deno: siDeno,
  Docker: siDocker,
  esbuild: siEsbuild,
  Express: siExpress,
  Fastify: siFastify,
  Firebase: siFirebase,
  Framer: siFramer,
  GitHubActions: siGithubactions,
  Grafana: siGrafana,
  GraphQL: siGraphql,
  Helm: siHelm,
  HuggingFace: siHuggingface,
  Istio: siIstio,
  Jenkins: siJenkins,
  Jest: siJest,
  jQuery: siJquery,
  Kafka: siApachekafka,
  Koa: siKoa,
  Kubernetes: siKubernetes,
  LangChain: siLangchain,
  Lodash: siLodash,
  MongoDB: siMongodb,
  Mongoose: siMongoose,
  MySQL: siMysql,
  n8n: siN8n,
  NestJS: siNestjs,
  Netlify: siNetlify,
  Nextjs: siNextdotjs,
  Nuxt: siNuxt,
  OpenTelemetry: siOpentelemetry,
  PostgreSQL: siPostgresql,
  Prisma: siPrisma,
  Prometheus: siPrometheus,
  RabbitMQ: siRabbitmq,
  React: siReact,
  Redis: siRedis,
  Redux: siRedux,
  Rollup: siRollupdotjs,
  Sequelize: siSequelize,
  Stripe: siStripe,
  Supabase: siSupabase,
  Svelte: siSvelte,
  Tailwind: siTailwindcss,
  TanStack: siTanstack,
  Terraform: siTerraform,
  Threejs: siThreedotjs,
  TypeORM: siTypeorm,
  TypeScript: siTypescript,
  Vercel: siVercel,
  Vite: siVite,
  Vitest: siVitest,
  Vue: siVuedotjs,
  Webpack: siWebpack,
  Zapier: siZapier,
};

const orbitSkills: OrbitSkill[] = [
  { label: "React", icon: "React", ring: "front", tone: "cyan", x: "16%", y: "32%" },
  { label: "Next.js", icon: "Nextjs", ring: "front", tone: "green", x: "68%", y: "19%" },
  { label: "Vue", icon: "Vue", ring: "back", tone: "amber", x: "13%", y: "86%" },
  { label: "Angular", icon: "Angular", ring: "front", tone: "rose", x: "45%", y: "27%" },
  { label: "Svelte", icon: "Svelte", ring: "middle", tone: "amber", x: "30%", y: "45%" },
  { label: "Nuxt.js", icon: "Nuxt", ring: "front", tone: "green", x: "55%", y: "12%" },
  { label: "Vite", icon: "Vite", ring: "front", tone: "cyan", x: "40%", y: "20%" },
  { label: "jQuery", icon: "jQuery", ring: "back", tone: "rose", x: "5%", y: "45%" },
  { label: "NestJS", icon: "NestJS", ring: "front", tone: "rose", x: "72%", y: "70%" },
  { label: "Express.js", icon: "Express", ring: "front", tone: "cyan", x: "60%", y: "58%" },
  { label: "Fastify", icon: "Fastify", ring: "middle", tone: "green", x: "55%", y: "65%" },
  { label: "Koa", icon: "Koa", ring: "back", tone: "amber", x: "48%", y: "75%" },
  { label: "Deno", icon: "Deno", ring: "back", tone: "cyan", x: "33%", y: "68%" },
  { label: "Bun", icon: "Bun", ring: "middle", tone: "rose", x: "38%", y: "72%" },
  { label: "RAG", ring: "front", tone: "amber", x: "25%", y: "77%" },
  { label: "OpenAI", ring: "middle", tone: "cyan", x: "49%", y: "9%" },
  { label: "LangChain", icon: "LangChain", ring: "middle", tone: "green", x: "58%", y: "11%" },
  { label: "LlamaIndex", ring: "middle", tone: "rose", x: "67%", y: "8%" },
  { label: "n8n", icon: "n8n", ring: "middle", tone: "green", x: "84%", y: "43%" },
  { label: "Zapier", icon: "Zapier", ring: "back", tone: "amber", x: "90%", y: "55%" },
  { label: "AWS", ring: "middle", tone: "amber", x: "43%", y: "91%" },
  { label: "Docker", icon: "Docker", ring: "middle", tone: "rose", x: "8%", y: "58%" },
  { label: "Kubernetes", icon: "Kubernetes", ring: "front", tone: "cyan", x: "18%", y: "63%" },
  { label: "Terraform", icon: "Terraform", ring: "front", tone: "green", x: "28%", y: "68%" },
  { label: "Ansible", icon: "Ansible", ring: "middle", tone: "amber", x: "35%", y: "80%" },
  { label: "Jenkins", icon: "Jenkins", ring: "back", tone: "rose", x: "20%", y: "75%" },
  { label: "GitHub Actions", icon: "GitHubActions", ring: "front", tone: "cyan", x: "12%", y: "70%" },
  { label: "Prometheus", icon: "Prometheus", ring: "back", tone: "green", x: "48%", y: "84%" },
  { label: "Grafana", icon: "Grafana", ring: "back", tone: "amber", x: "58%", y: "87%" },
  { label: "Istio", icon: "Istio", ring: "back", tone: "rose", x: "65%", y: "80%" },
  { label: "Helm", icon: "Helm", ring: "middle", tone: "cyan", x: "72%", y: "85%" },
  { label: "PostgreSQL", icon: "PostgreSQL", ring: "back", tone: "green", x: "20%", y: "12%" },
  { label: "MongoDB", icon: "MongoDB", ring: "back", tone: "cyan", x: "82%", y: "18%" },
  { label: "Redis", icon: "Redis", ring: "back", tone: "rose", x: "81%", y: "83%" },
  { label: "MySQL", icon: "MySQL", ring: "back", tone: "amber", x: "28%", y: "18%" },
  { label: "Cassandra", icon: "Cassandra", ring: "middle", tone: "green", x: "88%", y: "75%" },
  { label: "DynamoDB", ring: "middle", tone: "cyan", x: "52%", y: "94%" },
  { label: "Axios", icon: "Axios", ring: "front", tone: "amber", x: "44%", y: "33%" },
  { label: "Lodash", icon: "Lodash", ring: "middle", tone: "rose", x: "36%", y: "38%" },
  { label: "Moment.js", ring: "back", tone: "green", x: "41%", y: "41%" },
  { label: "D3.js", icon: "D3", ring: "middle", tone: "cyan", x: "22%", y: "50%" },
  { label: "Three.js", icon: "Threejs", ring: "front", tone: "rose", x: "66%", y: "46%" },
  { label: "Zustand", ring: "front", tone: "amber", x: "75%", y: "30%" },
  { label: "Redux", icon: "Redux", ring: "middle", tone: "cyan", x: "80%", y: "26%" },
  { label: "TanStack Query", icon: "TanStack", ring: "front", tone: "green", x: "62%", y: "37%" },
  { label: "Framer Motion", icon: "Framer", ring: "middle", tone: "rose", x: "50%", y: "28%" },
  { label: "Jest", icon: "Jest", ring: "back", tone: "amber", x: "90%", y: "32%" },
  { label: "Cypress", icon: "Cypress", ring: "back", tone: "green", x: "86%", y: "60%" },
  { label: "Playwright", ring: "middle", tone: "rose", x: "93%", y: "68%" },
  { label: "Vitest", icon: "Vitest", ring: "front", tone: "cyan", x: "77%", y: "52%" },
  { label: "Webpack", icon: "Webpack", ring: "back", tone: "cyan", x: "34%", y: "57%" },
  { label: "Rollup", icon: "Rollup", ring: "back", tone: "green", x: "42%", y: "62%" },
  { label: "esbuild", icon: "esbuild", ring: "middle", tone: "amber", x: "51%", y: "52%" },
];

const toolBands = [
  ["TypeScript", "GraphQL", "Tailwind", "Prisma", "Terraform", "Kubernetes", "Helm", "Prometheus", "Grafana", "Istio", "GitHub Actions", "Jenkins", "Ansible", "Vagrant"],
  ["Claude", "LangChain", "MCP", "Pinecone", "Stripe", "WebSocket", "gRPC", "RabbitMQ", "Kafka", "OpenTelemetry", "LlamaIndex", "Hugging Face", "Vercel", "Netlify"],
  ["React", "Vue", "Angular", "Svelte", "Next.js", "Nuxt", "Express", "NestJS", "Fastify", "Axios", "Zustand", "Redux Toolkit", "TanStack Query", "D3", "Three.js", "Framer Motion"],
  ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Cassandra", "DynamoDB", "Firebase", "Supabase", "Prisma", "Sequelize", "TypeORM", "Mongoose"],
];

const toolIconMap: Record<string, keyof typeof iconMap> = {
  Angular: "Angular",
  Ansible: "Ansible",
  Axios: "Axios",
  Cassandra: "Cassandra",
  Cypress: "Cypress",
  D3: "D3",
  Docker: "Docker",
  Express: "Express",
  Fastify: "Fastify",
  Firebase: "Firebase",
  "Framer Motion": "Framer",
  Grafana: "Grafana",
  GraphQL: "GraphQL",
  Helm: "Helm",
  "Hugging Face": "HuggingFace",
  Istio: "Istio",
  Jenkins: "Jenkins",
  Kafka: "Kafka",
  Kubernetes: "Kubernetes",
  LangChain: "LangChain",
  MongoDB: "MongoDB",
  Mongoose: "Mongoose",
  MySQL: "MySQL",
  NestJS: "NestJS",
  Netlify: "Netlify",
  "Next.js": "Nextjs",
  Nuxt: "Nuxt",
  OpenTelemetry: "OpenTelemetry",
  PostgreSQL: "PostgreSQL",
  Prisma: "Prisma",
  Prometheus: "Prometheus",
  RabbitMQ: "RabbitMQ",
  React: "React",
  Redis: "Redis",
  "Redux Toolkit": "Redux",
  Stripe: "Stripe",
  Supabase: "Supabase",
  Svelte: "Svelte",
  Tailwind: "Tailwind",
  "TanStack Query": "TanStack",
  Terraform: "Terraform",
  "Three.js": "Threejs",
  TypeORM: "TypeORM",
  TypeScript: "TypeScript",
  Vercel: "Vercel",
  Vue: "Vue",
};

const defaultMarkers = [
  { lat: 37.78, lng: -122.42, label: "SF" },
  { lat: 51.51, lng: -0.13, label: "London" },
  { lat: 35.68, lng: 139.69, label: "Tokyo" },
  { lat: -33.87, lng: 151.21, label: "Sydney" },
  { lat: 1.35, lng: 103.82, label: "Singapore" },
  { lat: -23.55, lng: -46.63, label: "Sao Paulo" },
  { lat: 28.61, lng: 77.21, label: "Delhi" },
  { lat: 31.45, lng: 73.13, label: "Faisalabad" },
];

const defaultConnections: { from: [number, number]; to: [number, number] }[] = [
  { from: [37.78, -122.42], to: [51.51, -0.13] },
  { from: [51.51, -0.13], to: [35.68, 139.69] },
  { from: [35.68, 139.69], to: [-33.87, 151.21] },
  { from: [37.78, -122.42], to: [1.35, 103.82] },
  { from: [51.51, -0.13], to: [28.61, 77.21] },
  { from: [37.78, -122.42], to: [-23.55, -46.63] },
  { from: [1.35, 103.82], to: [-33.87, 151.21] },
  { from: [28.61, 77.21], to: [31.45, 73.13] },
  { from: [51.51, -0.13], to: [31.45, 73.13] },
];

function latLngToXYZ(lat: number, lng: number, radius: number): [number, number, number] {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lng + 180) * Math.PI) / 180;
  return [
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  ];
}

function rotateY(x: number, y: number, z: number, angle: number): [number, number, number] {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [x * cos + z * sin, y, -x * sin + z * cos];
}

function rotateX(x: number, y: number, z: number, angle: number): [number, number, number] {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  return [x, y * cos - z * sin, y * sin + z * cos];
}

function project(x: number, y: number, z: number, cx: number, cy: number, fov: number) {
  const scale = fov / (fov + z);
  return [x * scale + cx, y * scale + cy] as const;
}

function TechIcon({ name }: { name?: keyof typeof iconMap }) {
  const icon = name ? iconMap[name] : null;

  if (!icon) {
    return null;
  }

  return (
    <svg aria-hidden="true" className="tech-chip__icon" role="img" viewBox="0 0 24 24">
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
}

function GlobeCanvas({
  autoRotateSpeed = 0.002,
  className,
  connections = defaultConnections,
  markers = defaultMarkers,
  size = 440,
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotYRef = useRef(0.4);
  const rotXRef = useRef(0.3);
  const dragRef = useRef({ active: false, startX: 0, startY: 0, startRotY: 0, startRotX: 0 });
  const animRef = useRef<number>(0);
  const timeRef = useRef(0);
  const dotsRef = useRef<[number, number, number][]>([]);

  useEffect(() => {
    const dots: [number, number, number][] = [];
    const numDots = 1000;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    for (let i = 0; i < numDots; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio;
      const phi = Math.acos(1 - (2 * (i + 0.5)) / numDots);
      dots.push([Math.cos(theta) * Math.sin(phi), Math.cos(phi), Math.sin(theta) * Math.sin(phi)]);
    }

    dotsRef.current = dots;
  }, []);

  const draw = useCallback(function drawFrame() {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!canvas || !ctx) {
      return;
    }

    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;

    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cx = w / 2;
    const cy = h / 2;
    const radius = Math.min(w, h) * 0.34;
    const fov = 620;

    if (!dragRef.current.active) {
      rotYRef.current += autoRotateSpeed;
    }

    timeRef.current += 0.015;
    const time = timeRef.current;

    ctx.clearRect(0, 0, w, h);

    const glowGrad = ctx.createRadialGradient(cx, cy, radius * 0.2, cx, cy, radius * 1.55);
    glowGrad.addColorStop(0, "rgba(73, 211, 255, 0.12)");
    glowGrad.addColorStop(0.64, "rgba(94, 230, 168, 0.035)");
    glowGrad.addColorStop(1, "rgba(73, 211, 255, 0)");
    ctx.fillStyle = glowGrad;
    ctx.fillRect(0, 0, w, h);

    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(73, 211, 255, 0.16)";
    ctx.lineWidth = 1;
    ctx.stroke();

    const ry = rotYRef.current;
    const rx = rotXRef.current;

    for (const dot of dotsRef.current) {
      let [x, y, z] = dot;
      x *= radius;
      y *= radius;
      z *= radius;
      [x, y, z] = rotateX(x, y, z, rx);
      [x, y, z] = rotateY(x, y, z, ry);

      if (z > 0) {
        continue;
      }

      const [sx, sy] = project(x, y, z, cx, cy, fov);
      const depthAlpha = Math.max(0.12, 1 - (z + radius) / (2 * radius));
      ctx.beginPath();
      ctx.arc(sx, sy, 0.85 + depthAlpha * 0.7, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(110, 203, 255, ${depthAlpha.toFixed(2)})`;
      ctx.fill();
    }

    for (const conn of connections) {
      const [lat1, lng1] = conn.from;
      const [lat2, lng2] = conn.to;
      let [x1, y1, z1] = latLngToXYZ(lat1, lng1, radius);
      let [x2, y2, z2] = latLngToXYZ(lat2, lng2, radius);

      [x1, y1, z1] = rotateY(...rotateX(x1, y1, z1, rx), ry);
      [x2, y2, z2] = rotateY(...rotateX(x2, y2, z2, rx), ry);

      if (z1 > radius * 0.3 && z2 > radius * 0.3) {
        continue;
      }

      const [sx1, sy1] = project(x1, y1, z1, cx, cy, fov);
      const [sx2, sy2] = project(x2, y2, z2, cx, cy, fov);
      const midX = (x1 + x2) / 2;
      const midY = (y1 + y2) / 2;
      const midZ = (z1 + z2) / 2;
      const midLen = Math.sqrt(midX * midX + midY * midY + midZ * midZ);
      const arcHeight = radius * 1.2;
      const [scx, scy] = project((midX / midLen) * arcHeight, (midY / midLen) * arcHeight, (midZ / midLen) * arcHeight, cx, cy, fov);

      ctx.beginPath();
      ctx.moveTo(sx1, sy1);
      ctx.quadraticCurveTo(scx, scy, sx2, sy2);
      ctx.strokeStyle = "rgba(73, 211, 255, 0.45)";
      ctx.lineWidth = 1.15;
      ctx.stroke();

      const t = (Math.sin(time * 1.2 + lat1 * 0.1) + 1) / 2;
      const tx = (1 - t) * (1 - t) * sx1 + 2 * (1 - t) * t * scx + t * t * sx2;
      const ty = (1 - t) * (1 - t) * sy1 + 2 * (1 - t) * t * scy + t * t * sy2;
      ctx.beginPath();
      ctx.arc(tx, ty, 2, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(94, 230, 168, 1)";
      ctx.fill();
    }

    for (const marker of markers) {
      let [x, y, z] = latLngToXYZ(marker.lat, marker.lng, radius);
      [x, y, z] = rotateY(...rotateX(x, y, z, rx), ry);

      if (z > radius * 0.1) {
        continue;
      }

      const [sx, sy] = project(x, y, z, cx, cy, fov);
      const pulse = Math.sin(time * 2 + marker.lat) * 0.5 + 0.5;

      ctx.beginPath();
      ctx.arc(sx, sy, 4 + pulse * 4, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(94, 230, 168, ${0.2 + pulse * 0.15})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(sx, sy, 2.4, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(94, 230, 168, 1)";
      ctx.fill();

      if (marker.label) {
        ctx.font = "10px system-ui, sans-serif";
        ctx.fillStyle = "rgba(205, 245, 255, 0.62)";
        ctx.fillText(marker.label, sx + 8, sy + 3);
      }
    }

    animRef.current = requestAnimationFrame(drawFrame);
  }, [autoRotateSpeed, connections, markers]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animRef.current);
  }, [draw]);

  const onPointerDown = useCallback((event: React.PointerEvent<HTMLCanvasElement>) => {
    dragRef.current = {
      active: true,
      startX: event.clientX,
      startY: event.clientY,
      startRotY: rotYRef.current,
      startRotX: rotXRef.current,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }, []);

  const onPointerMove = useCallback((event: React.PointerEvent<HTMLCanvasElement>) => {
    if (!dragRef.current.active) {
      return;
    }

    rotYRef.current = dragRef.current.startRotY + (event.clientX - dragRef.current.startX) * 0.005;
    rotXRef.current = Math.max(-1, Math.min(1, dragRef.current.startRotX + (event.clientY - dragRef.current.startY) * 0.005));
  }, []);

  const onPointerUp = useCallback(() => {
    dragRef.current.active = false;
  }, []);

  return (
    <canvas
      aria-label="Interactive global technology network"
      className={cn("tech-canvas-globe", className)}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      ref={canvasRef}
      style={{ height: size, width: size }}
    />
  );
}

export function TechGlobe() {
  return (
    <div className="tech-globe" aria-label="Technology ecosystem globe">
      <style>{`
        @keyframes tech-chip-float {
          0%, 100% { transform: translate3d(-50%, -50%, 0); opacity: 0.9; }
          50% { transform: translate3d(-50%, calc(-50% - 8px), 0); opacity: 1; }
        }
        @keyframes tech-globe-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div className="tech-globe__panel-copy">
        <span><i /> Global Systems</span>
        <strong>Tech Stack Network</strong>
        <small>Drag the globe. Scan the stack.</small>
      </div>

      <GlobeCanvas />

      <div className="tech-chip-field">
        {orbitSkills.map((skill, index) => (
          <span
            className={`tech-chip tech-chip--${skill.tone} tech-chip--${skill.ring}`}
            key={skill.label}
            style={{
              left: skill.x,
              top: skill.y,
              animationDelay: `${index * 0.08}s`,
            }}
          >
            <TechIcon name={skill.icon} />
            {skill.label}
          </span>
        ))}
      </div>

      {toolBands.map((band, bandIndex) => (
        <div className={`tech-marquee tech-marquee--${bandIndex + 1}`} key={band.join("-")}>
          <div>
            {[...band, ...band].map((tool, index) => (
              <span key={`${tool}-${index}`}>
                <TechIcon name={toolIconMap[tool]} />
                {tool}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
