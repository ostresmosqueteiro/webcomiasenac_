# webcomiasenac_

Projeto simples de front-end feito com HTML, CSS e JavaScript puro para testar versionamento, branches e deploy automatico pelo GitHub Pages.

## Site publicado

- Pagina principal: https://ostresmosqueteiro.github.io/webcomiasenac_/
- Pagina de teste de deploy: https://ostresmosqueteiro.github.io/webcomiasenac_/teste-deploy.html
- Deploy alternativo no Vercel: https://webcomiasenac.vercel.app/

## Arquivos principais

- `index.html`: pagina principal do site.
- `teste-deploy.html`: pagina criada para testar se novos arquivos entram no deploy automatico.
- `style.css`: estilos compartilhados entre as paginas.
- `script.js`: interacoes em JavaScript puro.
- `.github/workflows/config.yml`: workflow do GitHub Actions que publica o site no GitHub Pages.

## Como rodar localmente

Abra o arquivo `index.html` no navegador ou use um servidor local:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000/
```

## Deploy

O deploy acontece automaticamente quando ha push na branch `main`.

O GitHub Actions envia os arquivos estaticos para o GitHub Pages usando:

- `actions/checkout@v4`
- `actions/configure-pages@v5`
- `actions/upload-pages-artifact@v3`
- `actions/deploy-pages@v4`

Tambem existe um deploy alternativo no Vercel, usado como segunda opcao de publicacao do mesmo projeto estatico.
