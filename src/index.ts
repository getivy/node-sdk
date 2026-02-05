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
import { BeneficiaryPayoutCreateResponse, BeneficiaryPayouts } from './resources/beneficiary-payouts';
import { Capabilities, CapabilityRetrieveParams, CapabilityRetrieveResponse } from './resources/capabilities';
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
  CustomerDeleteParams,
  CustomerDeleteResponse,
  CustomerRetrieveParams,
  CustomerRetrieveResponse,
  CustomerSearchParams,
  CustomerSearchResponse,
  CustomerUpdateParams,
  CustomerUpdateResponse,
  Customers,
} from './resources/customers';
import { DepositRetrieveParams, DepositRetrieveResponse, Deposits } from './resources/deposits';
import {
  Fx,
  FxExecuteParams,
  FxExecuteResponse,
  FxRetrieveParams,
  FxRetrieveRateParams,
  FxRetrieveRateResponse,
  FxRetrieveResponse,
} from './resources/fx';
import {
  OrderCreateParams,
  OrderCreateResponse,
  OrderExpireParams,
  OrderExpireResponse,
  OrderRetrieveParams,
  OrderRetrieveResponse,
  Orders,
} from './resources/orders';
import { Payee, PayeeVerifyParams, PayeeVerifyResponse } from './resources/payee';
import {
  Payout,
  PayoutCreateParams,
  PayoutListParams,
  PayoutListResponse,
  PayoutRetrieveParams,
  PayoutRetrieveResponse,
  Payouts,
} from './resources/payouts';
import {
  RefundCreateParams,
  RefundCreateResponse,
  RefundRetrieveParams,
  RefundRetrieveResponse,
  Refunds,
} from './resources/refunds';
import {
  ReturnCreateParams,
  ReturnCreateResponse,
  ReturnRetrieveParams,
  ReturnRetrieveResponse,
  Returns,
} from './resources/returns';
import {
  Subaccount,
  SubaccountCreateParams,
  SubaccountCreateResponse,
  SubaccountRetrieveParams,
  Subaccounts,
} from './resources/subaccounts';
import { TransactionListParams, TransactionListResponse, Transactions } from './resources/transactions';
import { Data } from './resources/data/data';
import { Webhook, WebhookTriggerParams, WebhookTriggerResponse } from './resources/webhook/webhook';

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
   * Defaults to process.env['IVY_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   *
   * @unit milliseconds
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
 * API Client for interfacing with the Ivy API.
 */
export class Ivy extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Ivy API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['IVY_API_KEY'] ?? undefined]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['IVY_BASE_URL'] ?? https://api.getivy.de] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('IVY_BASE_URL'),
    apiKey = Core.readEnv('IVY_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.IvyError(
        "The IVY_API_KEY environment variable is missing or empty; either provide it, or instantiate the Ivy client with an apiKey option, like new Ivy({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.IvyError(
        'Ambiguous URL; The `baseURL` option (or IVY_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      baseURLOverridden: baseURL ? baseURL !== environments[options.environment || 'production'] : false,
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
  data: API.Data = new API.Data(this);
  customers: API.Customers = new API.Customers(this);
  orders: API.Orders = new API.Orders(this);
  deposits: API.Deposits = new API.Deposits(this);
  returns: API.Returns = new API.Returns(this);
  fx: API.Fx = new API.Fx(this);
  beneficiaryPayouts: API.BeneficiaryPayouts = new API.BeneficiaryPayouts(this);
  transactions: API.Transactions = new API.Transactions(this);
  capabilities: API.Capabilities = new API.Capabilities(this);
  refunds: API.Refunds = new API.Refunds(this);
  payouts: API.Payouts = new API.Payouts(this);
  subaccounts: API.Subaccounts = new API.Subaccounts(this);
  balance: API.Balance = new API.Balance(this);
  webhook: API.Webhook = new API.Webhook(this);
  payee: API.Payee = new API.Payee(this);

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== environments[this._options.environment || 'production'];
  }

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

  static Ivy = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static IvyError = Errors.IvyError;
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

Ivy.Banks = Banks;
Ivy.Checkoutsession = Checkoutsession;
Ivy.Data = Data;
Ivy.Customers = Customers;
Ivy.Orders = Orders;
Ivy.Deposits = Deposits;
Ivy.Returns = Returns;
Ivy.Fx = Fx;
Ivy.BeneficiaryPayouts = BeneficiaryPayouts;
Ivy.Transactions = Transactions;
Ivy.Capabilities = Capabilities;
Ivy.Refunds = Refunds;
Ivy.Payouts = Payouts;
Ivy.Subaccounts = Subaccounts;
Ivy.Balance = Balance;
Ivy.Webhook = Webhook;
Ivy.Payee = Payee;

export declare namespace Ivy {
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

  export { Data as Data };

  export {
    Customers as Customers,
    type CustomerCreateResponse as CustomerCreateResponse,
    type CustomerRetrieveResponse as CustomerRetrieveResponse,
    type CustomerUpdateResponse as CustomerUpdateResponse,
    type CustomerDeleteResponse as CustomerDeleteResponse,
    type CustomerSearchResponse as CustomerSearchResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerRetrieveParams as CustomerRetrieveParams,
    type CustomerUpdateParams as CustomerUpdateParams,
    type CustomerDeleteParams as CustomerDeleteParams,
    type CustomerSearchParams as CustomerSearchParams,
  };

  export {
    Orders as Orders,
    type OrderCreateResponse as OrderCreateResponse,
    type OrderRetrieveResponse as OrderRetrieveResponse,
    type OrderExpireResponse as OrderExpireResponse,
    type OrderCreateParams as OrderCreateParams,
    type OrderRetrieveParams as OrderRetrieveParams,
    type OrderExpireParams as OrderExpireParams,
  };

  export {
    Deposits as Deposits,
    type DepositRetrieveResponse as DepositRetrieveResponse,
    type DepositRetrieveParams as DepositRetrieveParams,
  };

  export {
    Returns as Returns,
    type ReturnCreateResponse as ReturnCreateResponse,
    type ReturnRetrieveResponse as ReturnRetrieveResponse,
    type ReturnCreateParams as ReturnCreateParams,
    type ReturnRetrieveParams as ReturnRetrieveParams,
  };

  export {
    Fx as Fx,
    type FxRetrieveResponse as FxRetrieveResponse,
    type FxExecuteResponse as FxExecuteResponse,
    type FxRetrieveRateResponse as FxRetrieveRateResponse,
    type FxRetrieveParams as FxRetrieveParams,
    type FxExecuteParams as FxExecuteParams,
    type FxRetrieveRateParams as FxRetrieveRateParams,
  };

  export {
    BeneficiaryPayouts as BeneficiaryPayouts,
    type BeneficiaryPayoutCreateResponse as BeneficiaryPayoutCreateResponse,
  };

  export {
    Transactions as Transactions,
    type TransactionListResponse as TransactionListResponse,
    type TransactionListParams as TransactionListParams,
  };

  export {
    Capabilities as Capabilities,
    type CapabilityRetrieveResponse as CapabilityRetrieveResponse,
    type CapabilityRetrieveParams as CapabilityRetrieveParams,
  };

  export {
    Refunds as Refunds,
    type RefundCreateResponse as RefundCreateResponse,
    type RefundRetrieveResponse as RefundRetrieveResponse,
    type RefundCreateParams as RefundCreateParams,
    type RefundRetrieveParams as RefundRetrieveParams,
  };

  export {
    Payouts as Payouts,
    type Payout as Payout,
    type PayoutRetrieveResponse as PayoutRetrieveResponse,
    type PayoutListResponse as PayoutListResponse,
    type PayoutCreateParams as PayoutCreateParams,
    type PayoutRetrieveParams as PayoutRetrieveParams,
    type PayoutListParams as PayoutListParams,
  };

  export {
    Subaccounts as Subaccounts,
    type Subaccount as Subaccount,
    type SubaccountCreateResponse as SubaccountCreateResponse,
    type SubaccountCreateParams as SubaccountCreateParams,
    type SubaccountRetrieveParams as SubaccountRetrieveParams,
  };

  export {
    Balance as Balance,
    type BalanceRetrieveResponse as BalanceRetrieveResponse,
    type BalanceRetrieveParams as BalanceRetrieveParams,
  };

  export {
    Webhook as Webhook,
    type WebhookTriggerResponse as WebhookTriggerResponse,
    type WebhookTriggerParams as WebhookTriggerParams,
  };

  export {
    Payee as Payee,
    type PayeeVerifyResponse as PayeeVerifyResponse,
    type PayeeVerifyParams as PayeeVerifyParams,
  };
}

export { toFile, fileFromPath } from './uploads';
export {
  IvyError,
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

export default Ivy;
