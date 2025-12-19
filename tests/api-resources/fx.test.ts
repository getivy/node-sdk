// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ivy from '@getivy/node-sdk';
import { Response } from 'node-fetch';

const client = new Ivy({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fx', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.fx.retrieve({ fxId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.fx.retrieve({ fxId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' });
  });

  // Prism tests are disabled
  test.skip('execute: only required params', async () => {
    const responsePromise = client.fx.execute({
      idempotencyKey: 'idempotencyKey',
      sourceAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      sourceAmount: 'sourceAmount',
      targetAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('execute: required and optional params', async () => {
    const response = await client.fx.execute({
      idempotencyKey: 'idempotencyKey',
      sourceAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      sourceAmount: 'sourceAmount',
      targetAccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      metadata: { foo: 'bar' },
    });
  });

  // Prism tests are disabled
  test.skip('retrieveRate: only required params', async () => {
    const responsePromise = client.fx.retrieveRate({ sourceCurrency: 'EUR', targetCurrency: 'EUR' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieveRate: required and optional params', async () => {
    const response = await client.fx.retrieveRate({
      sourceCurrency: 'EUR',
      targetCurrency: 'EUR',
      sourceAmount: 'sourceAmount',
    });
  });
});
