// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ivy from '@getivy/node-sdk';
import { Response } from 'node-fetch';

const client = new Ivy({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource refunds', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.refunds.create({ amount: 0 });
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
    const response = await client.refunds.create({
      amount: 0,
      description: 'description',
      displayedPaymentReference: 'SQ',
      email: 'dev@stainless.com',
      orderId: {},
      referenceId: 'referenceId',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('batch: only required params', async () => {
    const responsePromise = client.refunds.batch({ requestedRefunds: [{ amount: 0 }] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('batch: required and optional params', async () => {
    const response = await client.refunds.batch({
      requestedRefunds: [
        {
          amount: 0,
          description: 'description',
          displayedPaymentReference: 'SQ',
          email: 'dev@stainless.com',
          orderId: {},
          referenceId: 'referenceId',
        },
      ],
    });
  });
});
