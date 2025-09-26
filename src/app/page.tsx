import Link from "next/link";
import LottiePlayerWebSite from "@/components/LottiePlayerWebSite";

const WHATS_APP_NUMBER = "5518996858195"; // formato internacional sem + e sem espaços, ex: 55DDDNUMERO

const features = [
  {
    title: "Velocidade que conquista",
    desc: "Entrega ágil com qualidade. Itero rápido para colocar sua ideia no ar e testarmos o quanto antes.",
  },
  {
    title: "Código limpo e escalável",
    desc: "Boas práticas, performance e manutenção simples. Padrões que evitam retrabalho.",
  },
  {
    title: "Foco em conversão",
    desc: "LPs otimizadas para SEO e captação de leads, métricas claras e evolução contínua.",
  },
];

const services = [
  {
    title: "Landing Pages de Alta Conversão",
    desc: "Do rascunho ao deploy. Copy alinhada, UI enxuta, medindo tudo.",
  },
  {
    title: "Sistemas Web sob Medida",
    desc: "Dashboards, automações e integrações para o seu fluxo real.",
  },
  {
    title: "Aplicativos e MVPs",
    desc: "Protótipos e apps com foco em validar rápido o produto certo.",
  },
];

const projects = [
  // Substitua por seus reais depois; pode puxar de um CMS futuramente
  {
    name: "LP — Clínica Exemplo",
    tag: "LP/Health",
    link: "#",
    img: "/proj1.jpg",
  },
  { name: "Painel — Operações", tag: "Sistema", link: "#", img: "/proj2.jpg" },
  { name: "App — Truco Score", tag: "Mobile", link: "#", img: "/proj3.jpg" },
];

const posts = [
  // Use imagens/links do Instagram (ou troque por embed futuramente)
  { title: "Dica de Performance Web", link: "#", img: "/insta1.jpg" },
  { title: "UI/UX em LPs", link: "#", img: "/insta2.jpg" },
  { title: "Boas Práticas no Front", link: "#", img: "/insta3.jpg" },
];

export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#0B1020]/45 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="font-extrabold tracking-tight">
            Fábio Medina Favarin <span className="text-brand-primary">Dev</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicos" className="opacity-80 hover:opacity-100">
              Serviços
            </a>
            <a href="#projetos" className="opacity-80 hover:opacity-100">
              Projetos
            </a>
            <a href="#instagram" className="opacity-80 hover:opacity-100">
              Instagram
            </a>
            <a
              href={`https://wa.me/${WHATS_APP_NUMBER}?text=Ol%C3%A1%20F%C3%A1bio!%20Quero%20uma%20LP/sistema.`}
              className="rounded-xl bg-brand-primary px-4 py-2 font-semibold text-white hover:bg-brand-primaryLight bg-green-500 hover:bg-green-600"
              rel="noopener noreferrer"
              target="_blank"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block rounded-full border border-brand-primary/40 px-3 py-1 text-xs tracking-wide text-brand-primary">
              +3 anos trabalhando em tecnologia
            </span>

            <p className="text-brand-primary teste">
              Deve aparecer azul da marca
            </p>
            <div className="bg-brand-primary text-white p-3 rounded-lg">
              BG azul brand
            </div>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
              Sites que <span className="text-brand-primary">convertem</span> e
              sistemas que resolvem problemas{" "}
              <span className="text-brand-primaryLight">de verdade</span>.
            </h1>
            <p className="mt-5 text-lg text-white/80">
              Soluções rápidas, práticas e inteligentes: do conceito ao deploy
              com foco em resultado.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${WHATS_APP_NUMBER}?text=Ol%C3%A1%20F%C3%A1bio!%20Quero%20uma%20Landing%20Page%20que%20converta.`}
                className="rounded-xl bg-brand-primary px-5 py-3 font-semibold text-white hover:bg-brand-primaryLight shadow-soft"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir proposta no WhatsApp
              </a>
              <a
                href="#projetos"
                className="rounded-xl border border-white/15 px-5 py-3 hover:bg-white/5"
              >
                Ver projetos
              </a>
            </div>
            <p className="mt-3 text-xs text-white/60">
              Resposta rápida • Sem burocracia
            </p>
          </div>
          <div className="aspect-video rounded-2xl border border-white/10 bg-gradient-to-br from-brand-primary/20 to-transparent shadow-soft flex items-center justify-center">
            <LottiePlayerWebSite />
          </div>
        </div>
      </section>

      {/* Prova social / Features */}
      <section className="bg-brand-surface/40 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold">Por que comigo?</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 p-6"
              >
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-2 text-white/80">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold">O que eu faço</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-white/10 p-6"
              >
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-white/80">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="bg-brand-surface/40 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold">Projetos em destaque</h2>
            <Link href="#" className="text-sm opacity-80 hover:opacity-100">
              Ver todos
            </Link>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Link
                key={p.name}
                href={p.link}
                className="group rounded-2xl border border-white/10 overflow-hidden hover:border-brand-primary/40"
              >
                <div
                  className="aspect-video bg-white/5"
                  style={{
                    backgroundImage: `url(${p.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="p-4">
                  <span className="text-xs opacity-60">{p.tag}</span>
                  <h3 className="mt-1 font-semibold group-hover:text-brand-primary">
                    {p.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section id="instagram" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl font-bold">Postagens do Instagram</h2>
            <Link
              href="https://instagram.com/seu_usuario"
              target="_blank"
              className="text-sm opacity-80 hover:opacity-100"
            >
              Seguir no Instagram
            </Link>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.title}
                href={post.link}
                className="group rounded-2xl border border-white/10 overflow-hidden hover:border-brand-primary/40"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="aspect-square bg-white/5"
                  style={{
                    backgroundImage: `url(${post.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="p-4">
                  <h3 className="font-semibold group-hover:text-brand-primary">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-3 text-xs text-white/60">
            Dica: substitua por embeds ou carregue via API do Instagram.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl font-extrabold">
            Vamos tirar sua ideia do papel?
          </h2>
          <p className="mt-2 text-white/80">
            Foco em resultado, entrega ágil e comunicação direta. Manda um “oi”:
          </p>
          <a
            href={`https://wa.me/${WHATS_APP_NUMBER}?text=Ol%C3%A1%20F%C3%A1bio!%20Quero%20conversar%20sobre%20um%20projeto.`}
            className="inline-block mt-6 rounded-xl bg-brand-primary px-6 py-3 font-semibold text-white hover:bg-brand-primaryLight shadow-soft"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Fábio Medina Favarin Dev. Todos os direitos
        reservados.
      </footer>
    </main>
  );
}
