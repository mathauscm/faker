import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/lorem/sentence (GET)', () => {
    return request(app.getHttpServer())
      .get('/lorem/sentence')
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBeDefined();
        expect(typeof res.body.text).toBe('string');
        expect(res.body.text).toMatch(/\.$/);
      });
  });

  it('/lorem/paragraph (GET)', () => {
    return request(app.getHttpServer())
      .get('/lorem/paragraph')
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBeDefined();
        expect(res.body.text.length).toBeGreaterThan(20);
      });
  });

  it('/marketing/headline (GET)', () => {
    return request(app.getHttpServer())
      .get('/marketing/headline')
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBeDefined();
        expect(typeof res.body.text).toBe('string');
      });
  });

  it('/marketing/cta (GET)', () => {
    return request(app.getHttpServer())
      .get('/marketing/cta')
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBeDefined();
      });
  });

  it('/support/success (GET)', () => {
    return request(app.getHttpServer())
      .get('/support/success')
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBeDefined();
        expect(typeof res.body.text).toBe('string');
      });
  });

  it('/whatsapp/casual (GET)', () => {
    return request(app.getHttpServer())
      .get('/whatsapp/casual')
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBeDefined();
        expect(typeof res.body.text).toBe('string');
      });
  });
});
