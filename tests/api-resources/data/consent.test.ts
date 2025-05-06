// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ivy from '@getivy/node-sdk';
import { Response } from 'node-fetch';

const client = new Ivy({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource consent', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.data.consent.retrieve({ sessionId: 'E1CB97d8EBbDbaAae6d9B1ca' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.data.consent.retrieve({ sessionId: 'E1CB97d8EBbDbaAae6d9B1ca' });
  });

  // skipped: tests are disabled for the time being
  test.skip('revoke: only required params', async () => {
    const responsePromise = client.data.consent.revoke({ sessionId: 'E1CB97d8EBbDbaAae6d9B1ca' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('revoke: required and optional params', async () => {
    const response = await client.data.consent.revoke({ sessionId: 'E1CB97d8EBbDbaAae6d9B1ca' });
  });
});
