# faker-br

Gerador de textos aleatórios em **PT-BR** para Node.js e NestJS.

Ideal para popular interfaces, prototipar telas, gerar seeds de banco de dados e testar aplicações com textos realistas em português.

## Instalação

```bash
npm install faker-br
```

## Uso Standalone

Funciona em qualquer projeto Node.js/TypeScript, sem dependência do NestJS.

```typescript
import { fakerBr } from 'faker-br';

// Lorem
fakerBr.lorem.sentence();       // "Caminho forte maior ainda muito bonito lado escola."
fakerBr.lorem.sentence(5);      // "Hoje livro forma igual nada."
fakerBr.lorem.sentences(3);     // Três frases concatenadas
fakerBr.lorem.paragraph();      // Parágrafo com 3-6 frases
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
import { createFakerBr } from 'faker-br';

// Com source de randomização customizado (útil para testes determinísticos)
const faker = createFakerBr(() => 0.5);
faker.lorem.sentence(); // Sempre retorna o mesmo resultado
```

## Uso com NestJS

### Configuração do módulo

```typescript
import { Module } from '@nestjs/common';
import { FakerModule } from 'faker-br';

@Module({
  imports: [FakerModule.forRoot()],
})
export class AppModule {}
```

O `FakerModule.forRoot()` registra o módulo como **global**, então o `FakerService` fica disponível em toda a aplicação.

### Injetando o FakerService

```typescript
import { Injectable } from '@nestjs/common';
import { FakerService } from 'faker-br';

@Injectable()
export class SeedService {
  constructor(private readonly faker: FakerService) {}

  generateProduct() {
    return {
      name: this.faker.marketing.headline(),
      description: this.faker.marketing.description(),
      cta: this.faker.marketing.callToAction(),
    };
  }

  generateNotification() {
    return {
      success: this.faker.support.successMessage(),
      error: this.faker.support.errorMessage(),
    };
  }
}
```

### Opções do módulo

```typescript
FakerModule.forRoot({
  randomSource: () => Math.random(), // Fonte de randomização customizada
})
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

- `lorem.json` — ~380 palavras em português
- `marketing.json` — 30 headlines, 30 descrições, 30 CTAs
- `support.json` — 20 mensagens de cada tipo (success, error, warning, info)
- `whatsapp.json` — 25 casuais, 20 followup, 20 confirmação

## Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em modo dev
npm run start:dev

# Rodar testes unitários
npm run test

# Rodar testes e2e
npm run test:e2e

# Build
npm run build
```

### Demo API

A aplicação demo expõe os seguintes endpoints:

| Endpoint | Descrição |
|---|---|
| `GET /lorem/sentence` | Frase aleatória |
| `GET /lorem/paragraph` | Parágrafo aleatório |
| `GET /marketing/headline` | Headline de marketing |
| `GET /marketing/description` | Descrição de marketing |
| `GET /marketing/cta` | Call-to-action |
| `GET /support/:type` | Mensagem de suporte (success, error, warning, info) |
| `GET /whatsapp/:type` | Mensagem WhatsApp (casual, followup, confirmation) |

## Estrutura do projeto

```
src/
  index.ts                  # Exports públicos da lib
  faker.ts                  # Factory standalone + singleton
  faker.module.ts           # NestJS dynamic module
  core/
    random.ts               # Classe Random (int, pickOne, pickMany)
  data/
    text-data.interface.ts  # Interfaces TypeScript
    data-loader.ts          # Importa e agrupa os JSONs
    pt-br/
      lorem.json
      marketing.json
      support.json
      whatsapp.json
  text/
    text.service.ts         # FakerService (NestJS injectable)
    lorem/
      lorem.generator.ts
    marketing/
      marketing.generator.ts
    support/
      support.generator.ts
    whatsapp/
      whatsapp.generator.ts
```

## Licença

[MIT](LICENSE)
