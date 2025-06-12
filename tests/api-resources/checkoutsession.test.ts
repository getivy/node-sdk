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

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.checkoutsession.create({
      price: { currency: 'EUR', total: 1.01, shipping: 0, subTotal: 0, totalNet: 0, vat: 0 },
      referenceId: 'referenceId',
      billingAddress: {
        city: 'city',
        country: 'AF',
        firstName: 'firstName',
        lastName: 'lastName',
        line1: 'line1',
        line2: 'line2',
        region: 'region',
        zipCode: 'zipCode',
      },
      completeCallbackUrl: 'completeCallbackUrl',
      created: 1,
      customer: { id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', email: 'dev@stainless.com' },
      disableBankSelection: true,
      displayId: 'displayId',
      errorCallbackUrl: 'errorCallbackUrl',
      expiresAt: 0,
      express: true,
      lineItems: [
        {
          amount: 0,
          name: 'name',
          singleNet: 0,
          singleVat: 0,
          category: '5045',
          EAN: 'EAN',
          image: 'image',
          quantity: 0,
          referenceId: 'referenceId',
        },
      ],
      locale: 'de',
      mandate: {
        accountHolderName: 'accountHolderName',
        additionalDisplayInformation: { cadence: 'BI_WEEKLY', price: { amount: 0, currency: 'EUR' } },
        referenceId: 'referenceId',
        setup: true,
        userNotificationEmail: 'userNotificationEmail',
      },
      market: 'AF',
      metadata: { foo: 'bar' },
      paymentMode: 'direct',
      paymentSchemeSelection: 'instant_preferred',
      prefill: { bankId: 'bankId' },
      quoteCallbackUrl: 'quoteCallbackUrl',
      settlementDestination: {
        reference: 'reference',
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
      },
      subaccountId: 'subaccountId',
      successCallbackUrl: 'successCallbackUrl',
      themeVariant: 'light',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.checkoutsession.retrieve({ id: 'id' });
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
    const response = await client.checkoutsession.retrieve({ id: 'id' });
  });

  // skipped: tests are disabled for the time being
  test.skip('expire: only required params', async () => {
    const responsePromise = client.checkoutsession.expire({ id: 'id' });
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
    const response = await client.checkoutsession.expire({ id: 'id' });
  });
});
