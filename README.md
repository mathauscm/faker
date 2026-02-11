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
import { fakerPtBR } from 'faker-br';

// Lorem
fakerPtBR.lorem.sentence();       // "Caminho forte maior ainda muito bonito lado escola."
fakerPtBR.lorem.sentence(5);      // "Hoje livro forma igual nada."
fakerPtBR.lorem.sentences(3);     // Três frases concatenadas
fakerPtBR.lorem.paragraph();      // Parágrafo com 3-6 frases
fakerPtBR.lorem.paragraphs(2);    // Dois parágrafos separados por \n\n

// Marketing
fakerPtBR.marketing.headline();      // "Transforme seus resultados com nossa solução inovadora"
fakerPtBR.marketing.description();   // "Nossa plataforma oferece ferramentas completas..."
fakerPtBR.marketing.callToAction();  // "Comece agora gratuitamente"

// Suporte
fakerPtBR.support.successMessage();  // "Operação realizada com sucesso!"
fakerPtBR.support.errorMessage();    // "Ocorreu um erro inesperado. Tente novamente mais tarde."
fakerPtBR.support.warningMessage();  // "Atenção: esta ação não pode ser desfeita."
fakerPtBR.support.infoMessage();     // "Sua solicitação está sendo processada."

// WhatsApp
fakerPtBR.whatsapp.casualMessage();        // "E aí, tudo bem? Vamos marcar aquele café?"
fakerPtBR.whatsapp.followupMessage();      // "Conseguiu ver aquilo que te mandei?"
fakerPtBR.whatsapp.confirmationMessage();  // "Perfeito, tá combinado então!"
```

### Criando uma instância customizada

```typescript
import { createFakerPtBR } from 'faker-br';

// Com source de randomização customizado (útil para testes determinísticos)
const faker = createFakerPtBR(() => 0.5);
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

- `lorem.json` — 98 palavras em português
- `marketing.json` — 10 headlines, 10 descrições, 10 CTAs
- `support.json` — 5 mensagens de cada tipo (success, error, warning, info)
- `whatsapp.json` — 8 casuais, 6 followup, 5 confirmação

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
