// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Getivy from 'getivy';
import { Response } from 'node-fetch';

const client = new Getivy({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource reports', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.merchant.payouts.reports.create({ intervalEnd: 0, intervalStart: 0 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.merchant.payouts.reports.create({
      intervalEnd: 0,
      intervalStart: 0,
      currency: 'EUR',
      webhookUrl: 'webhookUrl',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.merchant.payouts.reports.retrieve({ reportId: 'reportId' });
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
    const response = await client.merchant.payouts.reports.retrieve({ reportId: 'reportId' });
  });

  // skipped: tests are disabled for the time being
  test.skip('download: only required params', async () => {
    const responsePromise = client.merchant.payouts.reports.download({ reportId: 'reportId' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('download: required and optional params', async () => {
    const response = await client.merchant.payouts.reports.download({ reportId: 'reportId', format: 'csv' });
  });
});
