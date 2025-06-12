// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Mandates extends APIResource {
  /**
   * Retrieves a direct debit mandate with mandate id.
   */
  retrieve(
    body: MandateRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MandateRetrieveResponse> {
    return this._client.post('/api/service/mandate/retrieve', { body, ...options });
  }

  /**
   * Returns a Direct Debit Mandate when a valid mandate referenceId is given.
   */
  lookup(body: MandateLookupParams, options?: Core.RequestOptions): Core.APIPromise<MandateLookupResponse> {
    return this._client.post('/api/service/mandate/lookup', { body, ...options });
  }

  /**
   * Revokes a Direct Debit Mandate with a valid mandate id.
   */
  revoke(body: MandateRevokeParams, options?: Core.RequestOptions): Core.APIPromise<MandateRevokeResponse> {
    return this._client.post('/api/service/mandate/revoke', { body, ...options });
  }
}

export interface MandateRetrieveResponse {
  id: string;

  creditor: MandateRetrieveResponse.Creditor;

  debtor: MandateRetrieveResponse.Debtor;

  reference: string;

  referenceId: string;

  signature: MandateRetrieveResponse.Signature;

  status: 'pending' | 'active' | 'inactive';

  revokedAt?: unknown;

  userNotificationEmail?: string;
}

export namespace MandateRetrieveResponse {
  export interface Creditor {
    id: string;

    address: Creditor.Address;

    name: string;
  }

  export namespace Creditor {
    export interface Address {
      city: string;

      country: string;

      postalCode: string;

      street: string;
    }
  }

  export interface Debtor {
    account: Debtor.Account;
  }

  export namespace Debtor {
    export interface Account {
      accountHolderName: string;

      iban: string;

      bic?: string;
    }
  }

  export interface Signature {
    token: string;

    ip: string;

    signedAt: unknown;
  }
}

export interface MandateLookupResponse {
  id: string;

  creditor: MandateLookupResponse.Creditor;

  debtor: MandateLookupResponse.Debtor;

  reference: string;

  referenceId: string;

  signature: MandateLookupResponse.Signature;

  status: 'pending' | 'active' | 'inactive';

  revokedAt?: unknown;

  userNotificationEmail?: string;
}

export namespace MandateLookupResponse {
  export interface Creditor {
    id: string;

    address: Creditor.Address;

    name: string;
  }

  export namespace Creditor {
    export interface Address {
      city: string;

      country: string;

      postalCode: string;

      street: string;
    }
  }

  export interface Debtor {
    account: Debtor.Account;
  }

  export namespace Debtor {
    export interface Account {
      accountHolderName: string;

      iban: string;

      bic?: string;
    }
  }

  export interface Signature {
    token: string;

    ip: string;

    signedAt: unknown;
  }
}

export interface MandateRevokeResponse {
  /**
   * Indicates whether the mandate was successfully revoked
   */
  success: boolean;
}

export interface MandateRetrieveParams {
  /**
   * A valid mandate id. This can be retrieved from the `mandate_setup_succeeded`
   * event.
   */
  id: string;
}

export interface MandateLookupParams {
  /**
   * A valid mandate reference id. This is set by the merchant during the checkout
   * session when the mandate setup is initiated.
   */
  referenceId: string;
}

export interface MandateRevokeParams {
  /**
   * A valid mandate id. This can be retrieved from the `mandate_setup_succeeded`
   * event.
   */
  id: string;
}

export declare namespace Mandates {
  export {
    type MandateRetrieveResponse as MandateRetrieveResponse,
    type MandateLookupResponse as MandateLookupResponse,
    type MandateRevokeResponse as MandateRevokeResponse,
    type MandateRetrieveParams as MandateRetrieveParams,
    type MandateLookupParams as MandateLookupParams,
    type MandateRevokeParams as MandateRevokeParams,
  };
}
