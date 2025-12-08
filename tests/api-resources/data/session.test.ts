// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ivy from '@getivy/node-sdk';
import { Response } from 'node-fetch';

const client = new Ivy({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource session', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.data.session.create({ referenceId: 'referenceId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.data.session.create({
      referenceId: 'referenceId',
      createdAt: 0,
      disableBankSelection: true,
      displayId: 'displayId',
      errorCallbackUrl: 'errorCallbackUrl',
      expiresAt: 0,
      locale: 'de',
      market: 'AF',
      metadata: { foo: 'bar' },
      prefill: { bankId: 'se-k+' },
      successCallbackUrl: 'successCallbackUrl',
      themeVariant: 'light',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.data.session.retrieve({ id: 'id' });
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
    const response = await client.data.session.retrieve({ id: 'id' });
  });
});
