# @aldeia/faker-br

[![npm version](https://img.shields.io/npm/v/@aldeia/faker-br.svg)](https://www.npmjs.com/package/@aldeia/faker-br)
[![CI](https://github.com/mathauscm/faker/actions/workflows/deploy.yml/badge.svg)](https://github.com/mathauscm/faker/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Gerador de textos aleatórios em **PT-BR** para Node.js e TypeScript.

Zero dependências de produção. Ideal para popular interfaces, prototipar telas, gerar seeds de banco de dados e testar aplicações com textos realistas em português.

## Instalação

```bash
npm install @aldeia/faker-br
```

## Uso

```typescript
import { fakerBr } from '@aldeia/faker-br';

// Lorem — frases reais pré-escritas em PT-BR
fakerBr.lorem.sentence();       // "O café da manhã estava pronto quando ela chegou."
fakerBr.lorem.sentences(3);     // Três frases naturais concatenadas
fakerBr.lorem.paragraph();      // Parágrafo com 3-6 frases reais
fakerBr.lorem.paragraphs(2);    // Dois parágrafos separados por \n\n

// Marketing
fakerBr.marketing.headline();      // "Transforme seus resultados com nossa solução inovadora"
fakerBr.marketing.description();   // "Nossa plataforma oferece ferramentas completas..."
fakerBr.marketing.callToAction();  // "Comece agora gratuitamente"

// Suporte
fakerBr.support.successMessage();  // "Operação realizada com sucesso!"
fakerBr.support.errorMessage();    // "Ocorreu um erro inesperado. Tente novamente mais tarde."
fakerBr.support.warningMessage();  // "Atenção: esta ação não pode ser desfeita."
fakerBr.support.infoMessage();     // "Sua solicitação está sendo processada."

// WhatsApp
fakerBr.whatsapp.casualMessage();        // "E aí, tudo bem? Vamos marcar aquele café?"
fakerBr.whatsapp.followupMessage();      // "Conseguiu ver aquilo que te mandei?"
fakerBr.whatsapp.confirmationMessage();  // "Perfeito, tá combinado então!"
```

### Criando uma instância customizada

```typescript
import { createFakerBr } from '@aldeia/faker-br';

// Com source de randomização customizado (útil para testes determinísticos)
const faker = createFakerBr(() => 0.5);
faker.lorem.sentence(); // Sempre retorna o mesmo resultado
```

## Módulos disponíveis

| Módulo | Métodos | Descrição |
|---|---|---|
| `lorem` | `sentence()`, `sentences()`, `paragraph()`, `paragraphs()` | Texto placeholder em PT-BR |
| `marketing` | `headline()`, `description()`, `callToAction()` | Textos de marketing e vendas |
| `support` | `successMessage()`, `errorMessage()`, `warningMessage()`, `infoMessage()` | Mensagens de sistema/suporte |
| `whatsapp` | `casualMessage()`, `followupMessage()`, `confirmationMessage()` | Mensagens casuais estilo WhatsApp |

## Dados

Todos os textos ficam em arquivos JSON em `src/data/pt-br/`, facilitando edição e contribuição:

- `lorem.json` — ~380 palavras + 25 frases curtas + 25 frases longas em português
- `marketing.json` — 30 headlines, 30 descrições, 30 CTAs
- `support.json` — 20 mensagens de cada tipo (success, error, warning, info)
- `whatsapp.json` — 25 casuais, 20 followup, 20 confirmação

## Contribuindo

```bash
# Instalar dependências
npm install

# Rodar testes
npm test

# Build
npm run build
```


## Licença

[MIT](LICENSE)
