// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Getivy from 'node-sdk';
import { Response } from 'node-fetch';

const client = new Getivy({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource charges', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.charges.create({
      idempotencyKey: 'idempotencyKey',
      mandateId: 'mandateId',
      price: { currency: 'EUR', total: 0 },
      referenceId: 'referenceId',
    });
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
    const response = await client.charges.create({
      idempotencyKey: 'idempotencyKey',
      mandateId: 'mandateId',
      price: { currency: 'EUR', total: 0, shipping: 0, subTotal: 0, totalNet: 0, vat: 0 },
      referenceId: 'referenceId',
      metadata: { verificationToken: 'verificationToken' },
      subaccountId: 'subaccountId',
    });
  });
});
