// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AccountsAPI from './accounts';
import { Accounts } from './accounts';
import * as BalancesAPI from './balances';
import { Balances } from './balances';
import * as ConsentAPI from './consent';
import { Consent } from './consent';
import * as SessionAPI from './session';
import { Session } from './session';
import * as TransactionsAPI from './transactions';
import { Transactions } from './transactions';

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
  export { Session as Session };

  export { Consent as Consent };

  export { Accounts as Accounts };

  export { Transactions as Transactions };

  export { Balances as Balances };
}
