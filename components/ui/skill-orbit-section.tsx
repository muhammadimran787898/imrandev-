"use client";

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
  siGithub,
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

type IconConfig = {
  color: string;
  label: string;
  path?: string;
};

const iconConfigs: IconConfig[] = [
  { label: "React", path: siReact.path, color: "#61DAFB" },
  { label: "Next.js", path: siNextdotjs.path, color: "#ffffff" },
  { label: "Vue", path: siVuedotjs.path, color: "#42B883" },
  { label: "Angular", path: siAngular.path, color: "#DD0031" },
  { label: "Svelte", path: siSvelte.path, color: "#FF3E00" },
  { label: "Nuxt", path: siNuxt.path, color: "#00DC82" },
  { label: "Vite", path: siVite.path, color: "#B37DFF" },
  { label: "jQuery", path: siJquery.path, color: "#0769AD" },
  { label: "TypeScript", path: siTypescript.path, color: "#3178C6" },
  { label: "Tailwind", path: siTailwindcss.path, color: "#38BDF8" },
  { label: "Node.js", color: "#5FA04E" },
  { label: "NestJS", path: siNestjs.path, color: "#E0234E" },
  { label: "Express", path: siExpress.path, color: "#ffffff" },
  { label: "Fastify", path: siFastify.path, color: "#ffffff" },
  { label: "Koa", path: siKoa.path, color: "#ffffff" },
  { label: "Deno", path: siDeno.path, color: "#ffffff" },
  { label: "Bun", path: siBun.path, color: "#FBF0DF" },
  { label: "GraphQL", path: siGraphql.path, color: "#E10098" },
  { label: "OpenAI", color: "#74E3C3" },
  { label: "Claude", color: "#F8C15C" },
  { label: "LangChain", path: siLangchain.path, color: "#1C3C3C" },
  { label: "RAG", color: "#F8C15C" },
  { label: "MCP", color: "#9B8CFF" },
  { label: "n8n", path: siN8n.path, color: "#EA4B71" },
  { label: "Zapier", path: siZapier.path, color: "#FF4A00" },
  { label: "Docker", path: siDocker.path, color: "#2496ED" },
  { label: "Kubernetes", path: siKubernetes.path, color: "#326CE5" },
  { label: "AWS", color: "#FF9900" },
  { label: "Terraform", path: siTerraform.path, color: "#844FBA" },
  { label: "Ansible", path: siAnsible.path, color: "#EE0000" },
  { label: "GitHub", path: siGithub.path, color: "#ffffff" },
  { label: "Actions", path: siGithubactions.path, color: "#2088FF" },
  { label: "Jenkins", path: siJenkins.path, color: "#D24939" },
  { label: "Helm", path: siHelm.path, color: "#0F1689" },
  { label: "Prometheus", path: siPrometheus.path, color: "#E6522C" },
  { label: "Grafana", path: siGrafana.path, color: "#F46800" },
  { label: "Istio", path: siIstio.path, color: "#466BB0" },
  { label: "OpenTelemetry", path: siOpentelemetry.path, color: "#ffffff" },
  { label: "PostgreSQL", path: siPostgresql.path, color: "#4169E1" },
  { label: "MongoDB", path: siMongodb.path, color: "#47A248" },
  { label: "Redis", path: siRedis.path, color: "#FF4438" },
  { label: "MySQL", path: siMysql.path, color: "#4479A1" },
  { label: "Cassandra", path: siApachecassandra.path, color: "#1287B1" },
  { label: "DynamoDB", color: "#4DB6F7" },
  { label: "Firebase", path: siFirebase.path, color: "#FFCA28" },
  { label: "Supabase", path: siSupabase.path, color: "#3ECF8E" },
  { label: "Prisma", path: siPrisma.path, color: "#5A67D8" },
  { label: "TypeORM", path: siTypeorm.path, color: "#FE0803" },
  { label: "Sequelize", path: siSequelize.path, color: "#52B0E7" },
  { label: "Mongoose", path: siMongoose.path, color: "#880000" },
  { label: "Axios", path: siAxios.path, color: "#5A29E4" },
  { label: "Lodash", path: siLodash.path, color: "#3492FF" },
  { label: "D3", path: siD3.path, color: "#F9A03C" },
  { label: "Three.js", path: siThreedotjs.path, color: "#ffffff" },
  { label: "Framer", path: siFramer.path, color: "#BB4BFF" },
  { label: "Redux", path: siRedux.path, color: "#764ABC" },
  { label: "TanStack", path: siTanstack.path, color: "#FF4154" },
  { label: "Jest", path: siJest.path, color: "#C21325" },
  { label: "Cypress", path: siCypress.path, color: "#69D3A7" },
  { label: "Playwright", color: "#45BA4B" },
  { label: "Vitest", path: siVitest.path, color: "#6E9F18" },
  { label: "Webpack", path: siWebpack.path, color: "#8DD6F9" },
  { label: "Rollup", path: siRollupdotjs.path, color: "#EC4A3F" },
  { label: "esbuild", path: siEsbuild.path, color: "#FFCF00" },
  { label: "Stripe", path: siStripe.path, color: "#635BFF" },
  { label: "RabbitMQ", path: siRabbitmq.path, color: "#FF6600" },
  { label: "Kafka", path: siApachekafka.path, color: "#ffffff" },
  { label: "Hugging Face", path: siHuggingface.path, color: "#FFD21E" },
  { label: "Vercel", path: siVercel.path, color: "#ffffff" },
  { label: "Netlify", path: siNetlify.path, color: "#00C7B7" },
];

const orbitCount = 4;
const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

export function SkillOrbitSection() {
  return (
    <section className="skill-orbit-section" id="stack">
      <div className="skill-orbit-copy">
        <p className="section-label">Stack</p>
        <h2>
          Build with
          <span className="animated-stack-word">
            <span>libraries</span>
            <span>AI tools</span>
            <span>cloud systems</span>
            <span>data layers</span>
          </span>
        </h2>
        <p>
          A full-stack toolkit for turning ideas into products: frontend libraries, backend frameworks, AI workflows, DevOps, databases, testing, and deployment platforms.
        </p>
        <div className="skill-orbit-actions">
          <a className="button primary" href="#projects">View Work</a>
          <a className="button secondary" href="#skills">Explore Skills</a>
        </div>
      </div>

      <div className="skill-orbit-visual" aria-label="Animated orbit of libraries and skills">
        <div className="skill-orbit-system">
          <div className="skill-orbit-core">
            <TechIcon config={iconConfigs[0]} />
          </div>
          {Array.from({ length: orbitCount }).map((_, orbitIndex) => {
            const orbitItems = iconConfigs.slice(
              orbitIndex * iconsPerOrbit,
              orbitIndex * iconsPerOrbit + iconsPerOrbit,
            );
            const angleStep = (2 * Math.PI) / orbitItems.length;
            const size = `${15 + 7.8 * (orbitIndex + 1)}rem`;

            return (
              <div
                className="skill-orbit-ring"
                key={orbitIndex}
                style={{
                  animationDuration: `${18 + orbitIndex * 7}s`,
                  height: size,
                  width: size,
                }}
              >
                {orbitItems.map((config, iconIndex) => {
                  const angle = iconIndex * angleStep;
                  const x = (50 + 50 * Math.cos(angle)).toFixed(5);
                  const y = (50 + 50 * Math.sin(angle)).toFixed(5);

                  return (
                    <div
                      className="skill-orbit-icon"
                      key={config.label}
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                      }}
                      title={config.label}
                    >
                      <TechIcon config={config} />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TechIcon({ config }: { config: IconConfig }) {
  if (config.path) {
    return (
      <svg aria-hidden="true" role="img" style={{ color: config.color }} viewBox="0 0 24 24">
        <path d={config.path} fill="currentColor" />
      </svg>
    );
  }

  return <span style={{ color: config.color }}>{config.label.slice(0, 2).toUpperCase()}</span>;
}
