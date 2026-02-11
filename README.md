# @aldeia/faker-br

[![npm version](https://img.shields.io/npm/v/@aldeia/faker-br.svg)](https://www.npmjs.com/package/@aldeia/faker-br)
[![CI](https://github.com/mathauscm/faker/actions/workflows/deploy.yml/badge.svg)](https://github.com/mathauscm/faker/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Gerador de dados fictícios brasileiros para Node.js e TypeScript.

Nomes, e-mails, textos de marketing, mensagens de suporte, lorem ipsum e muito mais — tudo em **PT-BR**. Zero dependências de produção. Ideal para popular interfaces, prototipar telas, gerar seeds de banco de dados e testar aplicações com dados realistas em português.

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

// Person — nomes e e-mails brasileiros
fakerBr.person.firstName();           // Aleatório entre masculino e feminino
fakerBr.person.firstName('male');     // "Lucas"
fakerBr.person.firstName('female');   // "Maria"
fakerBr.person.lastName();            // "Oliveira"
fakerBr.person.fullName();            // "Maria Silva Oliveira" (50% chance de sobrenome duplo)
fakerBr.person.fullName('male');      // "Lucas Ferreira"
fakerBr.person.email();               // "lucas.ferreira@gmail.com"
fakerBr.person.email('Ana', 'Costa'); // "ana.costa@uol.com.br"
fakerBr.person.username();            // "marianasantos42"
```

### Criando uma instância customizada

```typescript
import { createFakerBr } from '@aldeia/faker-br';

// Com source de randomização customizado (útil para testes determinísticos)
const faker = createFakerBr(() => 0.5);
faker.lorem.sentence(); // Sempre retorna o mesmo resultado
```

## Módulos disponíveis

### `person` — Nomes, e-mails e usernames brasileiros

| Método | Parâmetros | Descrição |
|---|---|---|
| `firstName()` | `gender?: 'male' \| 'female'` | Sem argumento sorteia entre masculino e feminino |
| `lastName()` | — | Sobrenome aleatório |
| `fullName()` | `gender?: 'male' \| 'female'` | Nome completo (50% de chance de sobrenome duplo) |
| `email()` | `firstName?: string, lastName?: string` | E-mail com domínios BR, remove acentos automaticamente |
| `username()` | — | Nome + sobrenome + número, sem acentos |

### `lorem` — Texto placeholder em PT-BR

| Método | Descrição |
|---|---|
| `sentence()` | Frase aleatória |
| `sentences(n)` | N frases concatenadas |
| `paragraph()` | Parágrafo com 3-6 frases |
| `paragraphs(n)` | N parágrafos separados por `\n\n` |

### `marketing` — Textos de marketing e vendas

| Método | Descrição |
|---|---|
| `headline()` | Título de campanha |
| `description()` | Descrição de produto/serviço |
| `callToAction()` | Chamada para ação (CTA) |

### `support` — Mensagens de sistema/suporte

| Método | Descrição |
|---|---|
| `successMessage()` | Mensagem de sucesso |
| `errorMessage()` | Mensagem de erro |
| `warningMessage()` | Mensagem de aviso |
| `infoMessage()` | Mensagem informativa |

### `whatsapp` — Mensagens casuais estilo WhatsApp

| Método | Descrição |
|---|---|
| `casualMessage()` | Mensagem casual |
| `followupMessage()` | Mensagem de acompanhamento |
| `confirmationMessage()` | Mensagem de confirmação |

## Dados

Todos os dados ficam em arquivos JSON em `src/data/pt-br/`, facilitando edição e contribuição:

- `person.json` — 150 nomes masculinos, 150 femininos, 150 sobrenomes, 9 domínios de e-mail
- `lorem.json` — 566 palavras + 55 frases curtas + 55 frases longas
- `marketing.json` — 64 headlines, 64 descrições, 63 CTAs
- `support.json` — ~39 mensagens de cada tipo (success, error, warning, info)
- `whatsapp.json` — 50 casuais, 44 followup, 44 confirmação

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
