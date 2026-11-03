# Proyectos · Blue Forest Lab

Página de portafolio con los productos de Blue Forest Lab, una pestaña por proyecto.
Español en `/` e inglés en `/en`.

## Dónde cambiar cosas

- **Textos (ES y EN):** `src/content.ts`. Cambia siempre los dos idiomas juntos.
- **Vistas de ejemplo de cada app:** `src/Mockups.tsx`. Solo datos ficticios.
- **Marca (colores, letra):** `src/styles.css`. Son copia de `blue-forest-finance/src/styles.css`; si cambia la marca allá, cámbiala aquí también.

## Reglas

- Nombres genéricos por caso de uso. Nada de nombres reales de clientes, apps o personas.
- Cada pestaña tiene su link: `#hijos`, `#hogar`, `#personal`, `#veterinaria`, `#rentas`.

## Comandos

```sh
npm i
npm run dev      # ver en local
npm run build    # genera dist/
```

## Publicación

Vercel conectado a este repo: cada push a `main` se publica solo.
Dominio: subdominio de blueflab.co con un registro CNAME en Namecheap.
