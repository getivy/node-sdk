// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Ivy from '@getivy/node-sdk';
import { Response } from 'node-fetch';

const client = new Ivy({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource checkoutsession', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.checkoutsession.create({
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
    const response = await client.checkoutsession.create({
      price: { currency: 'EUR', total: 0, shipping: 0, subTotal: 0, totalNet: 0, vat: 0 },
      referenceId: 'referenceId',
      billingAddress: {
        city: 'city',
        country: 'AF',
        line1: 'line1',
        zipCode: 'zipCode',
        firstName: 'firstName',
        lastName: 'lastName',
        line2: 'line2',
        region: 'region',
      },
      completeCallbackUrl: 'completeCallbackUrl',
      created: 0,
      customer: { email: 'dev@stainless.com' },
      disableBankSelection: true,
      displayId: 'displayId',
      errorCallbackUrl: 'errorCallbackUrl',
      expiresAt: 0,
      express: true,
      lineItems: [
        {
          amount: 0,
          name: 'name',
          quantity: 0,
          singleNet: 0,
          singleVat: 0,
          category: 'category',
          EAN: 'EAN',
          image: 'image',
          referenceId: 'referenceId',
        },
      ],
      locale: 'de',
      mandate: {
        setup: true,
        accountHolderName: 'accountHolderName',
        referenceId: 'referenceId',
        userNotificationEmail: 'userNotificationEmail',
      },
      market: 'AF',
      metadata: [{ foo: 'bar' }],
      paymentMode: 'settlement',
      paymentSchemeSelection: 'instant_preferred',
      prefill: { bankId: 'bankId' },
      quoteCallbackUrl: 'quoteCallbackUrl',
      settlementDestination: {
        reference: 'reference',
        financialAddress: {
          type: 'type',
          bankCode: { accountHolderName: 'accountHolderName', accountNumber: 'accountNumber', code: 'code' },
          bban: { accountHolderName: 'accountHolderName', bban: 'bban', bic: 'bic' },
          iban: { accountHolderName: 'accountHolderName', iban: 'iban', bic: 'bic' },
          sortCode: {
            accountHolderName: 'accountHolderName',
            accountNumber: 'accountNumber',
            sortCode: 'sortCode',
          },
        },
      },
      subaccountId: 'subaccountId',
      successCallbackUrl: 'successCallbackUrl',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.checkoutsession.retrieve({ id: 'E1CB97d8EBbDbaAae6d9B1ca' });
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
    const response = await client.checkoutsession.retrieve({ id: 'E1CB97d8EBbDbaAae6d9B1ca' });
  });

  // skipped: tests are disabled for the time being
  test.skip('expire: only required params', async () => {
    const responsePromise = client.checkoutsession.expire({ id: 'E1CB97d8EBbDbaAae6d9B1ca' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('expire: required and optional params', async () => {
    const response = await client.checkoutsession.expire({ id: 'E1CB97d8EBbDbaAae6d9B1ca' });
  });
});
