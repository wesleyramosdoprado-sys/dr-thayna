# Como adaptar este site para um novo cliente

Este projeto foi construído para ser reutilizado. Para colocar no ar o site de
um novo advogado(a), você só precisa mexer em **duas coisas**: um arquivo de
configuração e um punhado de fotos. Nenhum componente precisa ser editado.

## 1. Edite `src/lib/site-config.ts`

Esse arquivo é a fonte de tudo que muda de cliente para cliente:

- `identity` — nome, nome curto, OAB, cidade, endereço, telefone, horário
- `images` — caminhos das fotos (veja o passo 2)
- `hero` — título e subtítulo da capa
- `marquee` — frases que rolam na faixa entre a capa e a seção "Sobre"
- `about` — foto/legenda, texto sobre o advogado, os 3 valores em destaque
- `practiceAreas` — áreas de atuação (o último item, sem link próprio, vira
  automaticamente o card "Fale conosco")
- `articles` — os cards de conteúdo/artigos
- `footer` — frase de efeito do rodapé e links de redes sociais

Todo o resto (rótulos de seção como "Especialidades", os 4 passos de "Como
funciona", textos de botão) é propositalmente genérico e fica nos componentes
— não precisa trocar por cliente.

## 2. Troque as fotos em `public/images/`

Substitua os arquivos abaixo por fotos do novo cliente, **mantendo os mesmos
nomes**:

| Arquivo | Onde aparece |
|---|---|
| `logo-icon-white.png` | Ícone da logo no cabeçalho e rodapé (mancha clara, fundo transparente) |
| `hero-advogado.jpg` | Foto da capa no desktop/tablet (paisagem, ~1050×590) |
| `hero-advogado-mobile.jpg` | Foto da capa no celular (retrato, 4:5) |
| `advogado-laptop.jpg` | Foto da seção "Sobre" |

Se o cliente tiver uma logo nova, use `scripts/make_logo_white.py` e
`scripts/make_logo_transparent.py` como ponto de partida para gerar a versão
clara em PNG transparente.

Pra gerar o favicon novo (ícone da aba do navegador), rode um script Python
parecido com o que criou `src/app/icon.png` — composite a logo do cliente
sobre um fundo sólido, 512×512, e salve como `src/app/icon.png`,
`src/app/apple-icon.png` e `src/app/favicon.ico`.

## 3. Ajustes finos (opcional)

- `src/app/layout.tsx` — `<title>` e `<meta description>` da aba do navegador
- `src/app/globals.css` — cores do tema (hoje: preto + dourado). Se o cliente
  quiser outra cor de destaque, troque `--gold-500`, `--gold-300` e
  `--gold-700`.

## 4. Suba um repositório novo

1. No GitHub, use **"Use this template"** no repositório
   [`navarrobomfim`](https://github.com/wesleyramosdoprado-sys/navarrobomfim)
   para criar um repositório novo e independente.
2. Clone, edite o `site-config.ts` e troque as fotos.
3. `npx vercel` para criar um deploy de teste, depois `npx vercel --prod`
   quando estiver pronto para o cliente.
4. Configure o domínio próprio do cliente nas configurações do projeto na
   Vercel, se houver.

Cada cliente vira um repositório e um projeto Vercel independentes — nenhum
afeta o outro, mas melhorias de layout feitas aqui não chegam automaticamente
aos sites já entregues.
