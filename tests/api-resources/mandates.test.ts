// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Getivy from 'getivy';
import { Response } from 'node-fetch';

const client = new Getivy({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource mandates', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.mandates.retrieve({ id: 'id' });
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
    const response = await client.mandates.retrieve({ id: 'id' });
  });

  // skipped: tests are disabled for the time being
  test.skip('lookup: only required params', async () => {
    const responsePromise = client.mandates.lookup({ referenceId: 'referenceId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('lookup: required and optional params', async () => {
    const response = await client.mandates.lookup({ referenceId: 'referenceId' });
  });

  // skipped: tests are disabled for the time being
  test.skip('revoke: only required params', async () => {
    const responsePromise = client.mandates.revoke({ id: 'id' });
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
    const response = await client.mandates.revoke({ id: 'id' });
  });
});
