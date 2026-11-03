import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import logo from "./assets/blue-forest-lab-logo.png";
import { CONTACT_EMAIL, MAIN_SITE, content, pathFor, type Lang, type ProjectId } from "./content";
import { mockups } from "./Mockups";

function Diamond({ className = "" }: { className?: string }) {
  return <span aria-hidden className={`inline-block size-2.5 shrink-0 rotate-45 bg-secondary ${className}`} />;
}

function LangSwitch({ lang }: { lang: Lang }) {
  return (
    <div
      role="group"
      aria-label={content[lang].langLabel}
      className="flex items-center rounded-full border border-border p-0.5 text-xs font-medium"
    >
      {(["en", "es"] as Lang[]).map((l) => (
        <a
          key={l}
          href={pathFor[l] + window.location.hash}
          hrefLang={l}
          aria-current={l === lang ? "true" : undefined}
          className={
            l === lang
              ? "rounded-full bg-primary px-3 py-1.5 text-primary-foreground"
              : "rounded-full px-3 py-1.5 text-muted-foreground hover:text-primary"
          }
        >
          {l.toUpperCase()}
        </a>
      ))}
    </div>
  );
}

function initialTab(ids: ProjectId[]): ProjectId {
  const h = window.location.hash.slice(1) as ProjectId;
  return ids.includes(h) ? h : ids[0];
}

export default function App({ lang }: { lang: Lang }) {
  const t = content[lang];
  const ids = t.projects.map((p) => p.id);
  const [active, setActive] = useState<ProjectId>(() => initialTab(ids));
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    document.title = t.meta.title;
    document.documentElement.lang = lang;
  }, [lang, t.meta.title]);

  // Follow #links changed by the browser (back/forward, pasted link).
  useEffect(() => {
    const onHash = () => setActive(initialTab(ids));
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keep the active tab visible when the tab row scrolls sideways (mobile).
  useEffect(() => {
    const el = tabRefs.current[active];
    const row = el?.parentElement;
    if (el && row) row.scrollTo({ left: el.offsetLeft - row.offsetLeft - 24, behavior: "smooth" });
  }, [active]);

  function select(id: ProjectId, focus = false) {
    setActive(id);
    history.replaceState(null, "", `#${id}`);
    if (focus) tabRefs.current[id]?.focus();
  }

  function onKey(e: KeyboardEvent) {
    const i = ids.indexOf(active);
    if (e.key === "ArrowRight") select(ids[(i + 1) % ids.length], true);
    else if (e.key === "ArrowLeft") select(ids[(i - 1 + ids.length) % ids.length], true);
    else return;
    e.preventDefault();
  }

  const p = t.projects.find((x) => x.id === active)!;
  const n = String(ids.indexOf(active) + 1).padStart(2, "0");
  const Mockup = mockups[active];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
        <a href={MAIN_SITE[lang]} aria-label={t.nav.back}>
          <img src={logo} alt="Blue Forest Lab" className="h-12 w-auto md:h-16" />
        </a>
        <div className="flex items-center gap-3">
          <a href={MAIN_SITE[lang]} className="hidden text-sm font-medium text-muted-foreground hover:text-primary md:inline">
            ← {t.nav.back}
          </a>
          <LangSwitch lang={lang} />
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 sm:inline-block"
          >
            {t.nav.cta}
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-14 pt-12 md:pb-20 md:pt-20">
        <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          <Diamond /> {t.hero.eyebrow}
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-balance text-primary sm:text-5xl md:text-7xl">
          {t.hero.title}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">{t.hero.text}</p>
      </section>

      <section className="border-y border-border bg-muted/50">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
          <div
            role="tablist"
            aria-label={t.labels.tabs}
            onKeyDown={onKey}
            className="-mx-6 flex snap-x gap-2 overflow-x-auto px-6 pb-2 [scrollbar-width:none]"
          >
            {t.projects.map((proj) => {
              const on = proj.id === active;
              return (
                <button
                  key={proj.id}
                  ref={(el) => {
                    tabRefs.current[proj.id] = el;
                  }}
                  role="tab"
                  id={`tab-${proj.id}`}
                  aria-selected={on}
                  aria-controls={`panel-${proj.id}`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => select(proj.id)}
                  className={`shrink-0 snap-start rounded-full border px-5 py-2.5 text-sm font-medium whitespace-nowrap transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                    on
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-secondary hover:text-primary"
                  }`}
                >
                  {proj.name}
                </button>
              );
            })}
          </div>

          <div
            key={active}
            role="tabpanel"
            id={`panel-${active}`}
            aria-labelledby={`tab-${active}`}
            className="mt-10 grid animate-[fade_.35s_ease] gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16"
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-secondary">{n}</span>
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">{p.kind}</span>
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-4xl">{p.name}</h2>
              <p className="mt-3 text-lg text-muted-foreground">{p.tagline}</p>

              <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-primary">{t.labels.problem}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.problem}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-primary">{t.labels.solution}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.solution}</dd>
                </div>
              </dl>

              <h3 className="mt-8 text-xs font-bold uppercase tracking-wider text-primary">{t.labels.features}</h3>
              <ul className="mt-3 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-baseline gap-3 text-sm text-primary">
                    <Diamond className="size-1.5 -translate-y-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-2">
                <span className="mr-1 text-xs text-muted-foreground">{t.labels.stack}:</span>
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-primary">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <figure>
              <Mockup lang={lang} />
              <figcaption className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Diamond className="size-1.5" /> {t.labels.preview}
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <div className="mb-6 flex justify-center">
            <Diamond />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">{t.contact.title}</h2>
          <p className="mx-auto mt-4 max-w-lg opacity-80">{t.contact.text}</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-10 inline-block rounded-full bg-secondary px-8 py-4 font-medium text-secondary-foreground hover:opacity-90"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted-foreground">
        <span>
          © {new Date().getFullYear()} {t.footer.rights}
        </span>
        <span className="flex items-center gap-2">
          <Diamond /> {t.footer.tagline}
        </span>
      </footer>
    </div>
  );
}
