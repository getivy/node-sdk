// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ivy from '@getivy/node-sdk';
import { Response } from 'node-fetch';

const client = new Ivy({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource payouts', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.payouts.create({ amount: 0, currency: 'EUR', destination: {} });
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
    const response = await client.payouts.create({
      amount: 0,
      currency: 'EUR',
      destination: {
        financialAddress: {
          psuData: {
            branchNumber: 'branchNumber',
            clientId: 'clientId',
            ipAddress: 'ipAddress',
            oib: 'oib',
            psuId: 'psuId',
            ssn: 'ssn',
            username: 'username',
          },
          type: 'iban',
          bankCode: { accountHolderName: 'x', accountNumber: 'accountNumber', code: 'code' },
          bban: { accountHolderName: 'x', bban: 'bban', bic: 'bic' },
          iban: { accountHolderName: 'x', iban: 'iban', bic: 'bic' },
          paymentReference: 'paymentReference',
          sortCode: { accountHolderName: 'x', accountNumber: '095', sortCode: '269125115713' },
        },
        orderId: 'orderId',
      },
      metadata: { foo: 'bar' },
      paymentReference: 'paymentReference',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.payouts.retrieve({ id: 'id' });
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
    const response = await client.payouts.retrieve({ id: 'id' });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.payouts.list({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
