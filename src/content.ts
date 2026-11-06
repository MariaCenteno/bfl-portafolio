export type Lang = "es" | "en";
export type ProjectId = "hijos" | "hogar" | "personal" | "negocio" | "rentas";

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
        id: "hijos",
        name: "Gastos de los hijos",
        kind: "Familia",
        tagline: "Los gastos de los hijos, claros para mamá y papá.",
        problem:
          "Dos padres separados comparten los gastos de sus hijos. Uno paga casi todo en el mes y al final se hacía la cuenta a mano en una hoja de cálculo.",
        solution:
          "Un tablero donde ambos ven los gastos al momento y la app calcula cuánto debe cada uno.",
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
        id: "hogar",
        name: "Balance del hogar",
        kind: "Hogar",
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
        id: "personal",
        name: "Centro de finanzas personales",
        kind: "Personal",
        tagline: "Todas las finanzas personales en un solo lugar.",
        problem:
          "Las finanzas personales vivían en un Excel grande: gastos, ingresos, deudas, ahorros e impuestos en pestañas separadas.",
        solution:
          "Un centro de finanzas que reemplaza el Excel, trae datos de otras apps y usa IA para dar ideas.",
        features: [
          "Gastos, ingresos y presupuesto mensual",
          "Deudas, ahorros, impuestos y proyectos",
          "Calendario de pagos",
          "Trae datos de otras apps, como la del hogar",
          "IA que sugiere categorías y da recomendaciones",
        ],
        stack: ["TanStack Start", "Supabase", "IA", "Recharts"],
      },
      {
        id: "negocio",
        name: "Inventario y citas",
        kind: "Negocio",
        tagline: "Inventario, ventas y citas de un negocio, en un solo lugar.",
        problem:
          "Muchos negocios pequeños llevan inventario y citas en hojas de cálculo. No saben qué productos se vencen ni cuánto ganan en cada venta.",
        solution:
          "Un sistema que controla el stock, registra ventas y guarda el historial de cada cliente. Sirve para tiendas, consultorios, salones o veterinarias.",
        features: [
          "Inventario por lote con fecha de vencimiento",
          "SKU automático, sin trabajo extra para el equipo",
          "Ventas de varios productos en un solo paso",
          "Clientes, citas e historial de servicios",
          "Reportes de rentabilidad (solo para el dueño)",
          "Carga masiva de productos desde CSV",
        ],
        stack: ["TanStack Start", "Supabase", "PostgreSQL"],
      },
      {
        id: "rentas",
        name: "Ingresos y rentas",
        kind: "Personal",
        tagline: "Salario, rentas y préstamos bajo control.",
        problem:
          "Una persona con varias fuentes de ingreso (salario, rentas, préstamos) llevaba todo en notas sueltas.",
        solution:
          "Una app simple, en pesos, con una sección para cada fuente de dinero y un resumen del mes.",
        features: [
          "Resumen del mes: ingresos, gastos y balance",
          "Secciones para salario, rentas y préstamos",
          "La app calcula el interés de cada préstamo",
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
        id: "hijos",
        name: "Kids' Expenses",
        kind: "Family",
        tagline: "Kids' expenses, clear for both parents.",
        problem:
          "Two separated parents share their kids' expenses. One pays most of the month, and the final count was done by hand in a spreadsheet.",
        solution: "A dashboard where both parents see expenses in real time, and the app works out who owes what.",
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
        id: "hogar",
        name: "Household Balance",
        kind: "Home",
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
        id: "personal",
        name: "Personal Finance Hub",
        kind: "Personal",
        tagline: "All your personal finances in one place.",
        problem:
          "Personal finances lived in one big spreadsheet: expenses, income, debts, savings and taxes on separate tabs.",
        solution: "A finance hub that replaces the spreadsheet, pulls data from other apps and uses AI to give ideas.",
        features: [
          "Expenses, income and monthly budget",
          "Debts, savings, taxes and projects",
          "Payment calendar",
          "Pulls data from other apps, like the household one",
          "AI that suggests categories and gives insights",
        ],
        stack: ["TanStack Start", "Supabase", "AI", "Recharts"],
      },
      {
        id: "negocio",
        name: "Inventory & Appointments",
        kind: "Business",
        tagline: "Inventory, sales and appointments for a business, in one place.",
        problem:
          "Many small businesses track inventory and appointments in spreadsheets. They don't know which products are expiring or how much they make on each sale.",
        solution:
          "A system that tracks stock, records sales and keeps each client's history. It works for shops, clinics, salons or vet offices.",
        features: [
          "Inventory by batch with expiry dates",
          "Automatic SKUs, no extra work for the team",
          "Multi-product sales in one step",
          "Clients, appointments and service history",
          "Profit reports (owner only)",
          "Bulk product upload from CSV",
        ],
        stack: ["TanStack Start", "Supabase", "PostgreSQL"],
      },
      {
        id: "rentas",
        name: "Income & Rentals",
        kind: "Personal",
        tagline: "Salary, rentals and loans under control.",
        problem:
          "Someone with several income sources (salary, rentals, loans) tracked it all in loose notes.",
        solution: "A simple app, in pesos, with a section for each money source and a monthly summary.",
        features: [
          "Monthly summary: income, expenses and balance",
          "Sections for salary, rentals and loans",
          "The app works out the interest on each loan",
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
