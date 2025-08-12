// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ivy from '@getivy/node-sdk';
import { Response } from 'node-fetch';

const client = new Ivy({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource charges', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.charges.create({
      idempotencyKey: 'idempotencyKey',
      mandateId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      metadata: {},
      price: { currency: 'EUR', total: 1.01 },
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

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.charges.create({
      idempotencyKey: 'idempotencyKey',
      mandateId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      metadata: { verificationToken: 'verificationToken' },
      price: { currency: 'EUR', total: 1.01, shipping: 0, subTotal: 0, totalNet: 0, vat: 0 },
      referenceId: 'referenceId',
      subaccountId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
