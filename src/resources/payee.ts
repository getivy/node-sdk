// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Payee extends APIResource {
  /**
   * Verify that the provided account holder name matches the bank account details.
   *
   * **Currently supported financial address types:**
   *
   * - `iban`: IBAN-based accounts (EU/SEPA). It implements Verification of Payee
   *   (VoP) as required by EU Instant Payments Regulation.
   *
   * **Possible status values:**
   *
   * - `match`: Exact match - the name matches the account holder's name
   * - `partial_match`: Close match - similar but not identical (e.g., typos,
   *   abbreviations). The `suggestedAccountHolderName` field will contain the
   *   suggested account holder name.
   * - `no_match`: No match - the name does not match the account holder
   * - `not_available`: Verification not possible (e.g., bank unreachable, timeout,
   *   unsupported)
   */
  verify(body: PayeeVerifyParams, options?: Core.RequestOptions): Core.APIPromise<PayeeVerifyResponse> {
    return this._client.post('/api/service/payee/verify', { body, ...options });
  }
}

export interface PayeeVerifyResponse {
  /**
   * The verification result status
   */
  status: 'match' | 'partial_match' | 'no_match' | 'not_available';

  suggestedAccountHolderName?: string;
}

export interface PayeeVerifyParams {
  payee: PayeeVerifyParams.Payee;
}

export namespace PayeeVerifyParams {
  export interface Payee {
    iban: Payee.Iban;

    type: 'iban';
  }

  export namespace Payee {
    export interface Iban {
      accountHolderName: string;

      iban: string;

      bic?: string;
    }
  }
}

export declare namespace Payee {
  export { type PayeeVerifyResponse as PayeeVerifyResponse, type PayeeVerifyParams as PayeeVerifyParams };
}
