// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AccountsAPI from './accounts';
import { AccountListParams, AccountListResponse, Accounts } from './accounts';
import * as BalancesAPI from './balances';
import { BalanceListParams, BalanceListResponse, Balances } from './balances';
import * as ConsentAPI from './consent';
import {
  Consent,
  ConsentRetrieveParams,
  ConsentRetrieveResponse,
  ConsentRevokeParams,
  ConsentRevokeResponse,
} from './consent';
import * as SessionAPI from './session';
import {
  Session,
  SessionCreateParams,
  SessionCreateResponse,
  SessionRetrieveParams,
  SessionRetrieveResponse,
} from './session';
import * as TransactionsAPI from './transactions';
import { TransactionListParams, TransactionListResponse, Transactions } from './transactions';

export class Data extends APIResource {
  session: SessionAPI.Session = new SessionAPI.Session(this._client);
  consent: ConsentAPI.Consent = new ConsentAPI.Consent(this._client);
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  transactions: TransactionsAPI.Transactions = new TransactionsAPI.Transactions(this._client);
  balances: BalancesAPI.Balances = new BalancesAPI.Balances(this._client);
}

Data.Session = Session;
Data.Consent = Consent;
Data.Accounts = Accounts;
Data.Transactions = Transactions;
Data.Balances = Balances;

export declare namespace Data {
  export {
    Session as Session,
    type SessionCreateResponse as SessionCreateResponse,
    type SessionRetrieveResponse as SessionRetrieveResponse,
    type SessionCreateParams as SessionCreateParams,
    type SessionRetrieveParams as SessionRetrieveParams,
  };

  export {
    Consent as Consent,
    type ConsentRetrieveResponse as ConsentRetrieveResponse,
    type ConsentRevokeResponse as ConsentRevokeResponse,
    type ConsentRetrieveParams as ConsentRetrieveParams,
    type ConsentRevokeParams as ConsentRevokeParams,
  };

  export {
    Accounts as Accounts,
    type AccountListResponse as AccountListResponse,
    type AccountListParams as AccountListParams,
  };

  export {
    Transactions as Transactions,
    type TransactionListResponse as TransactionListResponse,
    type TransactionListParams as TransactionListParams,
  };

  export {
    Balances as Balances,
    type BalanceListResponse as BalanceListResponse,
    type BalanceListParams as BalanceListParams,
  };
}
