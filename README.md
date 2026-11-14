# voidgate-frontend

Interface web da **VoidGate**, a camada de segurança entre aplicações e modelos de IA.

Backend: [VoidGates/voidgate-backend](https://github.com/VoidGates/voidgate-backend)

## O que tem aqui

O site de apresentação do VoidGate, em tema escuro, para um público de negócios.
Por enquanto: abertura, "Tente enganar a IA", "para quem" e código aberto. As
outras seções interativas (como funciona, comparação e quiz) entram nos próximos PRs.

"Tente enganar a IA" roda inteiro no navegador, com regras simplificadas em
`src/detector/` (manipulação em português e inglês, caracteres invisíveis, CPF
com dígito verificador e e-mail). Não é o motor do back-end e não envia nada
para servidor nenhum.

## Stack

React 19 + TypeScript + Vite, CSS puro. Fontes abertas (Bricolage Grotesque,
Instrument Sans e JetBrains Mono) servidas pelo próprio site via Fontsource,
sem chamadas ao Google Fonts. A logo fica em `src/assets/`.

## Rodando

Requer Node 20+.

```bash
npm install
npm run dev     # http://localhost:5173
```

Em dev, chamadas para `/api/*` são repassadas para o backend em `http://localhost:8000`
(mude com a variável `VITE_API_URL`).

## Scripts

| Comando         | O que faz              |
|-----------------|------------------------|
| `npm run dev`   | servidor de desenvolvimento |
| `npm run build` | build de produção em `dist/` |
| `npm run lint`  | lint com oxlint        |

## Uso de IA

O código e os textos deste repositório tiveram ajuda de IA.
