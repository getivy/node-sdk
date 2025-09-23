// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Fx extends APIResource {
  /**
   * Retrieve the details of a past fx transfer using the fxId.
   */
  retrieve(body: FxRetrieveParams, options?: Core.RequestOptions): Core.APIPromise<FxRetrieveResponse> {
    return this._client.post('/api/service/fx/retrieve', { body, ...options });
  }

  /**
   * Retrieve the current exchange rate for a given currency pair. The rate is not
   * guaranteed for any following transactions.
   */
  retrieveRate(
    body: FxRetrieveRateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FxRetrieveRateResponse> {
    return this._client.post('/api/service/fx/retrieve-rate', { body, ...options });
  }
}

export interface FxRetrieveResponse {
  /**
   * The fxId attached to the transfer.
   */
  id: string;

  /**
   * The exchange rate for the given currency pair.
   */
  rate: string;

  /**
   * The source currency code
   */
  sourceCurrency: 'EUR' | 'GBP' | 'USDC';

  /**
   * The status of the FX transaction.
   */
  status: 'success' | 'processing' | 'failed';

  /**
   * The target currency code
   */
  targetCurrency: 'EUR' | 'GBP' | 'USDC';

  /**
   * Additional metadata.
   */
  metadata?: { [key: string]: unknown };

  /**
   * The amount of source currency to convert.
   */
  sourceAmount?: string;

  /**
   * The amount of the target currency for the given source amount.
   */
  targetAmount?: string;
}

export interface FxRetrieveRateResponse {
  /**
   * The current exchange rate for the given currency pair.
   */
  rate: string;

  /**
   * The amount of source currency to convert. Only returned if the source amount is
   * provided.
   */
  sourceAmount?: string;

  /**
   * The amount of the target currency for the given source amount. Only returned if
   * the source amount is provided.
   */
  targetAmount?: string;
}

export interface FxRetrieveParams {
  /**
   * The fxId attached to the transfer.
   */
  fxId: string;
}

export interface FxRetrieveRateParams {
  /**
   * The source currency code.
   */
  sourceCurrency: 'EUR' | 'GBP' | 'USDC';

  /**
   * The target currency code.
   */
  targetCurrency: 'EUR' | 'GBP' | 'USDC';

  /**
   * The amount of source currency to convert. If not provided, only the rate will be
   * returned. Decimal places should be separated by a dot.
   */
  sourceAmount?: string;
}

export declare namespace Fx {
  export {
    type FxRetrieveResponse as FxRetrieveResponse,
    type FxRetrieveRateResponse as FxRetrieveRateResponse,
    type FxRetrieveParams as FxRetrieveParams,
    type FxRetrieveRateParams as FxRetrieveRateParams,
  };
}
