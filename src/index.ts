// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { Balance, BalanceRetrieveParams, BalanceRetrieveResponse } from './resources/balance';
import {
  BankListParams,
  BankListResponse,
  BankRetrieveParams,
  BankRetrieveResponse,
  BankSearchParams,
  BankSearchResponse,
  Banks,
} from './resources/banks';
import { Capabilities, CapabilityRetrieveParams, CapabilityRetrieveResponse } from './resources/capabilities';
import { Charge, ChargeCreateParams, Charges } from './resources/charges';
import {
  Checkoutsession,
  CheckoutsessionCreateParams,
  CheckoutsessionCreateResponse,
  CheckoutsessionExpireParams,
  CheckoutsessionExpireResponse,
  CheckoutsessionRetrieveParams,
  CheckoutsessionRetrieveResponse,
} from './resources/checkoutsession';
import {
  CustomerCreateParams,
  CustomerCreateResponse,
  CustomerRetrieveParams,
  CustomerRetrieveResponse,
  Customers,
} from './resources/customers';
import {
  MandateLookupParams,
  MandateResponse,
  MandateRetrieveParams,
  MandateRevokeParams,
  MandateRevokeResponse,
  Mandates,
} from './resources/mandates';
import {
  OrderRetrieveParams,
  OrderRetrieveResponse,
  OrderUpdateParams,
  OrderUpdateResponse,
  Orders,
} from './resources/orders';
import {
  RefundBatchParams,
  RefundBatchResponse,
  RefundCreateParams,
  RefundResponse,
  Refunds,
} from './resources/refunds';
import {
  Subaccount,
  SubaccountCreateParams,
  SubaccountRetrieveParams,
  Subaccounts,
} from './resources/subaccounts';
import { Customer } from './resources/customer/customer';
import { Payouts } from './resources/payouts/payouts';

const environments = {
  production: 'https://api.getivy.de',
  sandbox: 'https://api.sand.getivy.de',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * API key for authentication with Ivy API
   */
  apiKey?: string | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://api.getivy.de`
   * - `sandbox` corresponds to `https://api.sand.getivy.de`
   */
  environment?: Environment | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['GETIVY_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Getivy API.
 */
export class Getivy extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Getivy API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['IVY_API_KEY'] ?? undefined]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['GETIVY_BASE_URL'] ?? https://api.getivy.de] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('GETIVY_BASE_URL'),
    apiKey = Core.readEnv('IVY_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.GetivyError(
        "The IVY_API_KEY environment variable is missing or empty; either provide it, or instantiate the Getivy client with an apiKey option, like new Getivy({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.GetivyError(
        'Ambiguous URL; The `baseURL` option (or GETIVY_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  banks: API.Banks = new API.Banks(this);
  checkoutsession: API.Checkoutsession = new API.Checkoutsession(this);
  customers: API.Customers = new API.Customers(this);
  orders: API.Orders = new API.Orders(this);
  charges: API.Charges = new API.Charges(this);
  mandates: API.Mandates = new API.Mandates(this);
  capabilities: API.Capabilities = new API.Capabilities(this);
  refunds: API.Refunds = new API.Refunds(this);
  payouts: API.Payouts = new API.Payouts(this);
  subaccounts: API.Subaccounts = new API.Subaccounts(this);
  balance: API.Balance = new API.Balance(this);
  customer: API.Customer = new API.Customer(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { 'X-Ivy-Api-Key': this.apiKey };
  }

  static Getivy = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static GetivyError = Errors.GetivyError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Getivy.Banks = Banks;
Getivy.Checkoutsession = Checkoutsession;
Getivy.Customers = Customers;
Getivy.Orders = Orders;
Getivy.Charges = Charges;
Getivy.Mandates = Mandates;
Getivy.Capabilities = Capabilities;
Getivy.Refunds = Refunds;
Getivy.Payouts = Payouts;
Getivy.Subaccounts = Subaccounts;
Getivy.Balance = Balance;
Getivy.Customer = Customer;
export declare namespace Getivy {
  export type RequestOptions = Core.RequestOptions;

  export {
    Banks as Banks,
    type BankRetrieveResponse as BankRetrieveResponse,
    type BankListResponse as BankListResponse,
    type BankSearchResponse as BankSearchResponse,
    type BankRetrieveParams as BankRetrieveParams,
    type BankListParams as BankListParams,
    type BankSearchParams as BankSearchParams,
  };

  export {
    Checkoutsession as Checkoutsession,
    type CheckoutsessionCreateResponse as CheckoutsessionCreateResponse,
    type CheckoutsessionRetrieveResponse as CheckoutsessionRetrieveResponse,
    type CheckoutsessionExpireResponse as CheckoutsessionExpireResponse,
    type CheckoutsessionCreateParams as CheckoutsessionCreateParams,
    type CheckoutsessionRetrieveParams as CheckoutsessionRetrieveParams,
    type CheckoutsessionExpireParams as CheckoutsessionExpireParams,
  };

  export {
    Customers as Customers,
    type CustomerCreateResponse as CustomerCreateResponse,
    type CustomerRetrieveResponse as CustomerRetrieveResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerRetrieveParams as CustomerRetrieveParams,
  };

  export {
    Orders as Orders,
    type OrderRetrieveResponse as OrderRetrieveResponse,
    type OrderUpdateResponse as OrderUpdateResponse,
    type OrderRetrieveParams as OrderRetrieveParams,
    type OrderUpdateParams as OrderUpdateParams,
  };

  export { Charges as Charges, type Charge as Charge, type ChargeCreateParams as ChargeCreateParams };

  export {
    Mandates as Mandates,
    type MandateResponse as MandateResponse,
    type MandateRevokeResponse as MandateRevokeResponse,
    type MandateRetrieveParams as MandateRetrieveParams,
    type MandateLookupParams as MandateLookupParams,
    type MandateRevokeParams as MandateRevokeParams,
  };

  export {
    Capabilities as Capabilities,
    type CapabilityRetrieveResponse as CapabilityRetrieveResponse,
    type CapabilityRetrieveParams as CapabilityRetrieveParams,
  };

  export {
    Refunds as Refunds,
    type RefundResponse as RefundResponse,
    type RefundBatchResponse as RefundBatchResponse,
    type RefundCreateParams as RefundCreateParams,
    type RefundBatchParams as RefundBatchParams,
  };

  export { Payouts as Payouts };

  export {
    Subaccounts as Subaccounts,
    type Subaccount as Subaccount,
    type SubaccountCreateParams as SubaccountCreateParams,
    type SubaccountRetrieveParams as SubaccountRetrieveParams,
  };

  export {
    Balance as Balance,
    type BalanceRetrieveResponse as BalanceRetrieveResponse,
    type BalanceRetrieveParams as BalanceRetrieveParams,
  };

  export { Customer as Customer };
}

export { toFile, fileFromPath } from './uploads';
export {
  GetivyError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Getivy;
