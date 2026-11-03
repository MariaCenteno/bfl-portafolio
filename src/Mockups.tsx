import type { ReactNode } from "react";
import type { ProjectId } from "./content";

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

function Kids() {
  return (
    <Frame url="gastos-de-hijos.app">
      <div className="grid grid-cols-3 gap-2">
        <Stat label="Gastos del mes" value="$2.840.000" />
        <Stat label="Pagos" value="$1.200.000" tone="muted" />
        <Stat label="Saldo pendiente" value="$220.000" tone="teal" />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <Title>Tendencia mensual</Title>
          <Bars values={[2.1, 2.4, 1.9, 2.6, 2.3, 2.84]} labels={["May", "Jun", "Jul", "Ago", "Sep", "Oct"]} />
        </div>
        <div>
          <Title>Últimos gastos</Title>
          <Row a="Pensión colegio" b="Educación" c="$950.000" />
          <Row a="Clases de natación" b="Deporte" c="$180.000" />
          <Row a="Cita pediatra" b="Salud" c="$120.000" />
          <Row a="Uniformes" b="Ropa" c="$210.000" />
        </div>
      </div>
    </Frame>
  );
}

function Home() {
  return (
    <div className="mx-auto max-w-[300px]">
      <div className="overflow-hidden rounded-[2rem] border-[6px] border-primary bg-card shadow-[0_30px_60px_-30px_oklch(0.27_0.08_255/0.45)]">
        <div className="space-y-3 p-4">
          <div className="rounded-2xl bg-primary p-4 text-primary-foreground">
            <p className="text-[10px] uppercase tracking-wider opacity-70">Balance de octubre</p>
            <p className="mt-1 text-2xl font-bold tabular-nums">$345.500</p>
            <p className="mt-1 text-xs opacity-80">Ana le debe a Laura</p>
          </div>
          <div className="rounded-2xl border border-border p-3">
            <p className="mb-2 text-xs font-bold text-primary">Gasto rápido</p>
            <div className="rounded-lg border border-border px-3 py-2 text-xs text-muted-foreground">$ 84.000</div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {["Mercado", "Servicios", "Arriendo", "Mascota"].map((c, i) => (
                <span
                  key={c}
                  className={`rounded-full px-2.5 py-1 text-[10px] ${i === 0 ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"}`}
                >
                  {c}
                </span>
              ))}
            </div>
            <div className="mt-2 flex gap-1.5 text-[10px]">
              <span className="flex-1 rounded-lg bg-accent py-1.5 text-center text-accent-foreground">Compartido</span>
              <span className="flex-1 rounded-lg bg-muted py-1.5 text-center text-muted-foreground">Personal</span>
            </div>
            <div className="mt-3 rounded-full bg-primary py-2 text-center text-xs font-medium text-primary-foreground">Guardar</div>
          </div>
          <div>
            <Row a="Mercado semanal" b="50/50" c="$84.000" />
            <Row a="Internet" b="50/50" c="$95.000" />
            <Row a="USD Netflix" b="TRM" c="$41.000" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PersonalHub() {
  const nav = ["Dashboard", "Gastos", "Ingresos", "Presupuesto", "Deudas", "Ahorros", "Impuestos", "Calendario"];
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
            <Stat label="Ingresos" value="$9,4M" />
            <Stat label="Gastos" value="$6,1M" tone="muted" />
            <Stat label="Ahorro" value="35%" tone="teal" />
          </div>
          <div className="rounded-xl border border-secondary/40 bg-accent p-3">
            <p className="text-[10px] font-bold uppercase tracking-wider text-secondary">✦ Idea de la IA</p>
            <p className="mt-1 text-xs text-accent-foreground">
              Este mes gastaste 18% más en restaurantes. Si vuelves al promedio, llegas a tu meta de ahorro en marzo.
            </p>
          </div>
          <div>
            <Title>Presupuesto vs. real</Title>
            {[
              ["Vivienda", 92],
              ["Mercado", 74],
              ["Transporte", 58],
              ["Restaurantes", 118],
            ].map(([k, v]) => (
              <div key={k as string} className="mb-2">
                <div className="mb-1 flex justify-between text-[11px]">
                  <span className="text-primary">{k}</span>
                  <span className="tabular-nums text-muted-foreground">{v}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-muted">
                  <div
                    className={`h-1.5 rounded-full ${(v as number) > 100 ? "bg-destructive" : "bg-secondary"}`}
                    style={{ width: `${Math.min(v as number, 100)}%` }}
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

function Vet() {
  return (
    <Frame url="veterinaria.app/inventario">
      <div className="mb-3 flex flex-wrap gap-2 text-[11px]">
        {["Hoy", "Inventario", "Venta", "Clínica", "Reportes"].map((t, i) => (
          <span
            key={t}
            className={`rounded-full px-3 py-1 ${i === 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mb-3 rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-xs text-primary">
        <span className="font-bold text-destructive">3 lotes</span> se vencen en los próximos 30 días
      </div>
      <div className="overflow-hidden rounded-xl border border-border">
        <div className="grid grid-cols-[1fr_auto_auto] gap-3 bg-muted px-3 py-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          <span>Producto</span>
          <span>Lote · Vence</span>
          <span className="text-right">Stock</span>
        </div>
        {[
          ["Desparasitante 10 kg", "MED-0012", "L-224 · mar 27", "38"],
          ["Vacuna triple felina", "VAC-0004", "L-091 · dic 26", "6"],
          ["Alimento cachorro 4 kg", "ALI-0031", "Sin lote · ago 27", "22"],
          ["Shampoo antipulgas", "HIG-0008", "L-310 · ene 28", "15"],
        ].map(([n, sku, lot, s], i) => (
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

function Rentals() {
  return (
    <Frame url="mis-finanzas.app">
      <div className="mb-3 flex flex-wrap gap-2 text-[11px]">
        {["Resumen", "Salario", "Rentas", "Préstamos", "Egresos"].map((t, i) => (
          <span
            key={t}
            className={`rounded-full px-3 py-1 ${i === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Stat label="Ingresos" value="$5.661.000" />
        <Stat label="Egresos" value="$3.240.000" tone="muted" />
        <Stat label="Balance" value="$2.421.000" tone="teal" />
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <Title>Ingresos por fuente</Title>
          <Bars values={[3.9, 1.65, 0.111]} labels={["Salario", "Rentas", "Préstamos"]} />
        </div>
        <div>
          <Title>Préstamos activos</Title>
          <Row a="Carlos" b="3% mes" c="$2.500.000" strong />
          <Row a="Marta" b="3% mes" c="$1.200.000" strong />
          <Row a="Intereses" b="Automático" c="$111.000" />
        </div>
      </div>
    </Frame>
  );
}

export const mockups: Record<ProjectId, () => ReactNode> = {
  hijos: Kids,
  hogar: Home,
  personal: PersonalHub,
  veterinaria: Vet,
  rentas: Rentals,
};
