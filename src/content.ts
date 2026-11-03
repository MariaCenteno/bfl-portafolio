export type Lang = "es" | "en";
export type ProjectId = "sofi" | "oso" | "sofia" | "hatomac" | "effeta";

export const CONTACT_EMAIL = "info@blueflab.co";
export const MAIN_SITE = { es: "https://blueflab.co", en: "https://blueflab.co/en" };
export const pathFor: Record<Lang, string> = { es: "/", en: "/en" };

type Project = {
  id: ProjectId;
  name: string;
  kind: string;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  stack: string[];
};

type Content = {
  meta: { title: string };
  nav: { back: string; cta: string };
  langLabel: string;
  hero: { eyebrow: string; title: string; text: string };
  labels: { problem: string; solution: string; features: string; stack: string; preview: string; tabs: string };
  projects: Project[];
  contact: { title: string; text: string };
  footer: { rights: string; tagline: string };
};

export const content: Record<Lang, Content> = {
  es: {
    meta: { title: "Proyectos · Blue Forest Lab" },
    nav: { back: "Volver a blueflab.co", cta: "Hablemos" },
    langLabel: "Idioma",
    hero: {
      eyebrow: "Proyectos",
      title: "Apps reales, hechas a la medida.",
      text: "Cada una nació de un Excel que ya no daba más. Mira qué hacen y cómo resuelven el día a día de quien las usa.",
    },
    labels: {
      problem: "El problema",
      solution: "La solución",
      features: "Qué hace",
      stack: "Hecha con",
      preview: "Vista de ejemplo con datos ficticios",
      tabs: "Proyectos",
    },
    projects: [
      {
        id: "sofi",
        name: "Sofi Balance Tracker",
        kind: "Gastos compartidos",
        tagline: "Los gastos de una hija, claros para mamá y papá.",
        problem:
          "Dos padres separados comparten los gastos de su hija. Uno paga casi todo en el mes y al final se hacía la cuenta a mano en una hoja de cálculo.",
        solution:
          "Un tablero donde los dos ven cada gasto apenas pasa, con el saldo pendiente calculado solo.",
        features: [
          "Registro de gastos y pagos con categoría",
          "Saldo pendiente automático entre los dos",
          "Tendencia mensual y gastos por categoría",
          "Historial por mes y por año",
          "Acceso solo para personas autorizadas",
        ],
        stack: ["React", "Supabase", "Recharts"],
      },
      {
        id: "oso",
        name: "Oso Balance",
        kind: "Finanzas del hogar",
        tagline: "Quién le debe a quién, sin hacer cuentas.",
        problem:
          "Dos personas comparten casa y gastos. Anotar todo y calcular el balance a mano tomaba tiempo y generaba dudas.",
        solution:
          "Una app pensada para el celular: registras un gasto en segundos y el balance se calcula solo.",
        features: [
          "Registro rápido de gastos desde el celular",
          "Gastos compartidos o personales, con reglas de reparto",
          "Pesos y dólares con la TRM del mes",
          "Liquidaciones y reporte mensual en PDF",
          "Gráficas de gasto e historial de cambios",
        ],
        stack: ["React", "Supabase", "Recharts", "jsPDF"],
      },
      {
        id: "sofia",
        name: "SofiA Finance Hub",
        kind: "Finanzas personales",
        tagline: "Todas las finanzas personales en un solo lugar.",
        problem:
          "Las finanzas personales vivían en un Excel grande: gastos, ingresos, deudas, ahorros e impuestos en pestañas separadas.",
        solution:
          "Un centro de finanzas que reemplaza el Excel, trae datos de otras apps y usa IA para dar ideas.",
        features: [
          "Gastos, ingresos y presupuesto mensual",
          "Deudas, ahorros, impuestos y proyectos",
          "Calendario de pagos",
          "Se conecta con Oso Balance y Sofi Balance Tracker",
          "IA que sugiere categorías y da recomendaciones",
        ],
        stack: ["TanStack Start", "Supabase", "IA", "Recharts"],
      },
      {
        id: "hatomac",
        name: "HatoMac",
        kind: "Negocio · Veterinaria",
        tagline: "Inventario, ventas y clínica de una veterinaria.",
        problem:
          "Una veterinaria manejaba su inventario en hojas de cálculo. No sabía qué productos se vencían ni cuánto ganaba por cada venta.",
        solution:
          "Un sistema que controla stock por lote, registra ventas y guarda la historia clínica de cada mascota.",
        features: [
          "Inventario por lote con fecha de vencimiento",
          "SKU automático, sin que el equipo lo piense",
          "Ventas de varios productos en un solo paso",
          "Mascotas, vacunas, cirugías y fórmulas",
          "Reportes de rentabilidad (solo para la dueña)",
          "Carga masiva de productos desde CSV",
        ],
        stack: ["TanStack Start", "Supabase", "PostgreSQL"],
      },
      {
        id: "effeta",
        name: "Effetá",
        kind: "Finanzas personales",
        tagline: "Salario, rentas y préstamos bajo control.",
        problem:
          "Una persona con varias fuentes de ingreso (salario, arriendos, motos, préstamos) llevaba todo en notas sueltas.",
        solution:
          "Una app simple, en pesos, con una sección para cada fuente de dinero y un resumen del mes.",
        features: [
          "Resumen del mes: ingresos, gastos y balance",
          "Secciones para salario, casa, motos y préstamos",
          "Interés de préstamos calculado solo",
          "Todos los movimientos en un solo lugar",
        ],
        stack: ["TanStack Start", "Supabase"],
      },
    ],
    contact: {
      title: "¿Quieres una app así para ti o tu negocio?",
      text: "Cuéntanos cómo llevas hoy tus finanzas. Te decimos cómo podría verse tu app.",
    },
    footer: { rights: "Blue Forest Lab. Todos los derechos reservados.", tagline: "Claridad financiera, hecha a tu medida." },
  },
  en: {
    meta: { title: "Projects · Blue Forest Lab" },
    nav: { back: "Back to blueflab.co", cta: "Let's talk" },
    langLabel: "Language",
    hero: {
      eyebrow: "Projects",
      title: "Real apps, built to fit.",
      text: "Each one started as a spreadsheet that couldn't keep up. See what they do and how they make daily life easier for the people who use them.",
    },
    labels: {
      problem: "The problem",
      solution: "The solution",
      features: "What it does",
      stack: "Built with",
      preview: "Sample view with made-up data",
      tabs: "Projects",
    },
    projects: [
      {
        id: "sofi",
        name: "Sofi Balance Tracker",
        kind: "Shared expenses",
        tagline: "A child's expenses, clear for both parents.",
        problem:
          "Two separated parents share their daughter's expenses. One pays most of the month, and the final count was done by hand in a spreadsheet.",
        solution: "A dashboard where both see each expense as it happens, with the balance due calculated for them.",
        features: [
          "Log expenses and payments by category",
          "Automatic balance due between both parents",
          "Monthly trend and spend by category",
          "History by month and year",
          "Access only for approved people",
        ],
        stack: ["React", "Supabase", "Recharts"],
      },
      {
        id: "oso",
        name: "Oso Balance",
        kind: "Household finances",
        tagline: "Who owes whom, no math needed.",
        problem:
          "Two people share a home and its costs. Writing everything down and working out the balance by hand took time and caused doubts.",
        solution: "A mobile-first app: log an expense in seconds and the balance updates on its own.",
        features: [
          "Fast expense entry from your phone",
          "Shared or personal expenses, with split rules",
          "Pesos and dollars with the monthly exchange rate",
          "Settlements and a monthly PDF report",
          "Spending charts and a change log",
        ],
        stack: ["React", "Supabase", "Recharts", "jsPDF"],
      },
      {
        id: "sofia",
        name: "SofiA Finance Hub",
        kind: "Personal finances",
        tagline: "All your personal finances in one place.",
        problem:
          "Personal finances lived in one big spreadsheet: expenses, income, debts, savings and taxes on separate tabs.",
        solution: "A finance hub that replaces the spreadsheet, pulls data from other apps and uses AI to give ideas.",
        features: [
          "Expenses, income and monthly budget",
          "Debts, savings, taxes and projects",
          "Payment calendar",
          "Connects to Oso Balance and Sofi Balance Tracker",
          "AI that suggests categories and gives insights",
        ],
        stack: ["TanStack Start", "Supabase", "AI", "Recharts"],
      },
      {
        id: "hatomac",
        name: "HatoMac",
        kind: "Business · Vet clinic",
        tagline: "Inventory, sales and clinic for a vet shop.",
        problem:
          "A vet clinic ran its inventory on spreadsheets. It didn't know which products were expiring or how much it made on each sale.",
        solution: "A system that tracks stock by batch, records sales and keeps each pet's medical history.",
        features: [
          "Inventory by batch with expiry dates",
          "Automatic SKUs, no extra work for the team",
          "Multi-product sales in one step",
          "Pets, vaccines, surgeries and prescriptions",
          "Profit reports (owner only)",
          "Bulk product upload from CSV",
        ],
        stack: ["TanStack Start", "Supabase", "PostgreSQL"],
      },
      {
        id: "effeta",
        name: "Effetá",
        kind: "Personal finances",
        tagline: "Salary, rentals and loans under control.",
        problem:
          "Someone with several income sources (salary, house rent, motorbikes, loans) tracked it all in loose notes.",
        solution: "A simple app, in pesos, with a section for each money source and a monthly summary.",
        features: [
          "Monthly summary: income, expenses and balance",
          "Sections for salary, house, motorbikes and loans",
          "Loan interest calculated automatically",
          "Every transaction in one place",
        ],
        stack: ["TanStack Start", "Supabase"],
      },
    ],
    contact: {
      title: "Want an app like this for you or your business?",
      text: "Tell us how you track your money today. We'll show you what your app could look like.",
    },
    footer: { rights: "Blue Forest Lab. All rights reserved.", tagline: "Financial clarity, built for you." },
  },
};
