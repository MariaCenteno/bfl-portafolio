import type { ReactNode } from "react";
import type { Lang, ProjectId } from "./content";

/* Sample-data previews of each app. All names and numbers are made up. */

function Frame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_60px_-30px_oklch(0.27_0.08_255/0.35)]">
      <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-3">
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <span className="size-2.5 rounded-full bg-border" />
        <span className="ml-3 truncate rounded-full bg-card px-3 py-1 text-[11px] text-muted-foreground">{url}</span>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

function Stat({ label, value, tone = "primary" }: { label: string; value: string; tone?: "primary" | "teal" | "muted" }) {
  const color = tone === "teal" ? "text-secondary" : tone === "muted" ? "text-muted-foreground" : "text-primary";
  return (
    <div className="rounded-xl border border-border p-3">
      <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className={`mt-1 text-sm font-bold tabular-nums sm:text-base ${color}`}>{value}</p>
    </div>
  );
}

function Bars({ values, labels }: { values: number[]; labels: string[] }) {
  const max = Math.max(...values);
  return (
    <div className="flex h-28 items-end gap-2">
      {values.map((v, i) => (
        <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
          <div
            className={`w-full rounded-t-md ${i === values.length - 1 ? "bg-secondary" : "bg-primary/80"}`}
            style={{ height: `${Math.max((v / max) * 88, 8)}px` }}
          />
          <span className="text-[10px] text-muted-foreground">{labels[i]}</span>
        </div>
      ))}
    </div>
  );
}

function Row({ a, b, c, strong }: { a: string; b: string; c: string; strong?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-border py-2 text-xs last:border-0">
      <span className="truncate text-primary">{a}</span>
      <span className="hidden shrink-0 rounded-full bg-accent px-2 py-0.5 text-[10px] text-accent-foreground sm:inline">{b}</span>
      <span className={`shrink-0 tabular-nums ${strong ? "font-bold text-primary" : "text-muted-foreground"}`}>{c}</span>
    </div>
  );
}

function Title({ children }: { children: ReactNode }) {
  return <p className="mb-3 text-xs font-bold text-primary">{children}</p>;
}

type P = { lang: Lang };

function useT(lang: Lang) {
  const t = (es: string, en: string) => (lang === "es" ? es : en);
  const money = (n: number) => "$" + n.toLocaleString(lang === "es" ? "es-CO" : "en-US");
  return { t, money };
}

function Pills({ items, active }: { items: string[]; active: number }) {
  return (
    <div className="mb-3 flex flex-wrap gap-2 text-[11px]">
      {items.map((x, i) => (
        <span
          key={x}
          className={`rounded-full px-3 py-1 ${i === active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
        >
          {x}
        </span>
      ))}
    </div>
  );
}

function Kids({ lang }: P) {
  const { t, money } = useT(lang);
  return (
    <Frame url={t("gastos-de-hijos.app", "kids-expenses.app")}>
      <div className="grid grid-cols-3 gap-2">
        <Stat label={t("Gastos del mes", "This month")} value={money(2840000)} />
        <Stat label={t("Pagos", "Payments")} value={money(1200000)} tone="muted" />
        <Stat label={t("Saldo pendiente", "Balance due")} value={money(220000)} tone="teal" />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <Title>{t("Tendencia mensual", "Monthly trend")}</Title>
          <Bars
            values={[2.1, 2.4, 1.9, 2.6, 2.3, 2.84]}
            labels={lang === "es" ? ["May", "Jun", "Jul", "Ago", "Sep", "Oct"] : ["May", "Jun", "Jul", "Aug", "Sep", "Oct"]}
          />
        </div>
        <div>
          <Title>{t("Últimos gastos", "Latest expenses")}</Title>
          <Row a={t("Pensión colegio", "School fees")} b={t("Educación", "Education")} c={money(950000)} />
          <Row a={t("Clases de natación", "Swim lessons")} b={t("Deporte", "Sports")} c={money(180000)} />
          <Row a={t("Cita pediatra", "Pediatrician")} b={t("Salud", "Health")} c={money(120000)} />
          <Row a={t("Uniformes", "Uniforms")} b={t("Ropa", "Clothes")} c={money(210000)} />
        </div>
      </div>
    </Frame>
  );
}

function Home({ lang }: P) {
  const { t, money } = useT(lang);
  const cats = lang === "es" ? ["Mercado", "Servicios", "Arriendo", "Mascota"] : ["Groceries", "Utilities", "Rent", "Pet"];
  return (
    <div className="mx-auto max-w-[300px]">
      <div className="overflow-hidden rounded-[2rem] border-[6px] border-primary bg-card shadow-[0_30px_60px_-30px_oklch(0.27_0.08_255/0.45)]">
        <div className="space-y-3 p-4">
          <div className="rounded-2xl bg-primary p-4 text-primary-foreground">
            <p className="text-[10px] uppercase tracking-wider opacity-70">{t("Balance de octubre", "October balance")}</p>
            <p className="mt-1 text-2xl font-bold tabular-nums">{money(345500)}</p>
            <p className="mt-1 text-xs opacity-80">{t("Ana le debe a Laura", "Ana owes Laura")}</p>
          </div>
          <div className="rounded-2xl border border-border p-3">
            <p className="mb-2 text-xs font-bold text-primary">{t("Gasto rápido", "Quick expense")}</p>
            <div className="rounded-lg border border-border px-3 py-2 text-xs text-muted-foreground">{money(84000)}</div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {cats.map((c, i) => (
                <span
                  key={c}
                  className={`rounded-full px-2.5 py-1 text-[10px] ${i === 0 ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"}`}
                >
                  {c}
                </span>
              ))}
            </div>
            <div className="mt-2 flex gap-1.5 text-[10px]">
              <span className="flex-1 rounded-lg bg-accent py-1.5 text-center text-accent-foreground">{t("Compartido", "Shared")}</span>
              <span className="flex-1 rounded-lg bg-muted py-1.5 text-center text-muted-foreground">Personal</span>
            </div>
            <div className="mt-3 rounded-full bg-primary py-2 text-center text-xs font-medium text-primary-foreground">
              {t("Guardar", "Save")}
            </div>
          </div>
          <div>
            <Row a={t("Mercado semanal", "Weekly groceries")} b="50/50" c={money(84000)} />
            <Row a="Internet" b="50/50" c={money(95000)} />
            <Row a="Netflix (USD)" b={t("TRM", "FX rate")} c={money(41000)} />
          </div>
        </div>
      </div>
    </div>
  );
}

function PersonalHub({ lang }: P) {
  const { t } = useT(lang);
  const nav =
    lang === "es"
      ? ["Dashboard", "Gastos", "Ingresos", "Presupuesto", "Deudas", "Ahorros", "Impuestos", "Calendario"]
      : ["Dashboard", "Expenses", "Income", "Budget", "Debts", "Savings", "Taxes", "Calendar"];
  const budget: [string, number][] = [
    [t("Vivienda", "Housing"), 92],
    [t("Mercado", "Groceries"), 74],
    [t("Transporte", "Transport"), 58],
    [t("Restaurantes", "Restaurants"), 118],
  ];
  return (
    <Frame url="finance-hub.app/dashboard">
      <div className="flex gap-4">
        <div className="hidden w-28 shrink-0 space-y-1 sm:block">
          {nav.map((n, i) => (
            <p
              key={n}
              className={`rounded-lg px-2 py-1.5 text-[11px] ${i === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
            >
              {n}
            </p>
          ))}
        </div>
        <div className="min-w-0 flex-1 space-y-3">
          <div className="grid grid-cols-3 gap-2">
            <Stat label={t("Ingresos", "Income")} value={t("$9,4M", "$9.4M")} />
            <Stat label={t("Gastos", "Expenses")} value={t("$6,1M", "$6.1M")} tone="muted" />
            <Stat label={t("Ahorro", "Savings")} value="35%" tone="teal" />
          </div>
          <div className="rounded-xl border border-secondary/40 bg-accent p-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-secondary">✦ {t("Idea de la IA", "AI insight")}</p>
            <p className="mt-1 text-xs text-accent-foreground">
              {t(
                "Este mes gastaste 18% más en restaurantes. Si vuelves al promedio, llegas a tu meta de ahorro en marzo.",
                "You spent 18% more on restaurants this month. Back to your average, you reach your savings goal in March.",
              )}
            </p>
          </div>
          <div>
            <Title>{t("Presupuesto vs. real", "Budget vs. actual")}</Title>
            {budget.map(([k, v]) => (
              <div key={k} className="mb-2">
                <div className="mb-1 flex justify-between text-[11px]">
                  <span className="text-primary">{k}</span>
                  <span className="tabular-nums text-muted-foreground">{v}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted">
                  <div
                    className={`h-1.5 rounded-full ${v > 100 ? "bg-destructive" : "bg-secondary"}`}
                    style={{ width: `${Math.min(v, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

function Vet({ lang }: P) {
  const { t } = useT(lang);
  const rows =
    lang === "es"
      ? [
          ["Desparasitante 10 kg", "MED-0012", "L-224 · mar 27", "38"],
          ["Vacuna triple felina", "VAC-0004", "L-091 · dic 26", "6"],
          ["Alimento cachorro 4 kg", "ALI-0031", "Sin lote · ago 27", "22"],
          ["Shampoo antipulgas", "HIG-0008", "L-310 · ene 28", "15"],
        ]
      : [
          ["Dewormer 10 kg", "MED-0012", "L-224 · Mar 27", "38"],
          ["Feline triple vaccine", "VAC-0004", "L-091 · Dec 26", "6"],
          ["Puppy food 4 kg", "ALI-0031", "No batch · Aug 27", "22"],
          ["Flea shampoo", "HIG-0008", "L-310 · Jan 28", "15"],
        ];
  return (
    <Frame url={t("veterinaria.app/inventario", "vetclinic.app/inventory")}>
      <Pills
        items={lang === "es" ? ["Hoy", "Inventario", "Venta", "Clínica", "Reportes"] : ["Today", "Inventory", "Sale", "Clinic", "Reports"]}
        active={1}
      />
      <div className="mb-3 rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-xs text-primary">
        <span className="font-bold text-destructive">{t("3 lotes", "3 batches")}</span>{" "}
        {t("se vencen en los próximos 30 días", "expire in the next 30 days")}
      </div>
      <div className="overflow-hidden rounded-xl border border-border">
        <div className="grid grid-cols-[1fr_auto_auto] gap-3 bg-muted px-3 py-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          <span>{t("Producto", "Product")}</span>
          <span>{t("Lote · Vence", "Batch · Expires")}</span>
          <span className="text-right">Stock</span>
        </div>
        {rows.map(([n, sku, lot, s], i) => (
          <div key={sku} className="grid grid-cols-[1fr_auto_auto] items-center gap-3 border-t border-border px-3 py-2 text-xs">
            <span className="min-w-0">
              <span className="block truncate text-primary">{n}</span>
              <span className="text-[10px] text-muted-foreground">{sku}</span>
            </span>
            <span className={`text-[11px] ${i === 1 ? "font-medium text-destructive" : "text-muted-foreground"}`}>{lot}</span>
            <span className="text-right font-bold tabular-nums text-primary">{s}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function Rentals({ lang }: P) {
  const { t, money } = useT(lang);
  return (
    <Frame url={t("mis-finanzas.app", "my-finances.app")}>
      <Pills
        items={lang === "es" ? ["Resumen", "Salario", "Rentas", "Préstamos", "Egresos"] : ["Summary", "Salary", "Rentals", "Loans", "Spending"]}
        active={0}
      />
      <div className="grid grid-cols-3 gap-2">
        <Stat label={t("Ingresos", "Income")} value={money(5661000)} />
        <Stat label={t("Egresos", "Spending")} value={money(3240000)} tone="muted" />
        <Stat label="Balance" value={money(2421000)} tone="teal" />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <Title>{t("Ingresos por fuente", "Income by source")}</Title>
          <Bars
            values={[3.9, 1.65, 0.111]}
            labels={lang === "es" ? ["Salario", "Rentas", "Préstamos"] : ["Salary", "Rentals", "Loans"]}
          />
        </div>
        <div>
          <Title>{t("Préstamos activos", "Active loans")}</Title>
          <Row a="Carlos" b={t("3% mes", "3% / mo")} c={money(2500000)} strong />
          <Row a="Marta" b={t("3% mes", "3% / mo")} c={money(1200000)} strong />
          <Row a={t("Intereses", "Interest")} b={t("Automático", "Automatic")} c={money(111000)} />
        </div>
      </div>
    </Frame>
  );
}

export const mockups: Record<ProjectId, (p: P) => ReactNode> = {
  hijos: Kids,
  hogar: Home,
  personal: PersonalHub,
  veterinaria: Vet,
  rentas: Rentals,
};
