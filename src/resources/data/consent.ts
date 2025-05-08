// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Consent extends APIResource {
  /**
   * Retrieves the details of a consent by session ID.
   */
  retrieve(
    body: ConsentRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConsentRetrieveResponse> {
    return this._client.post('/api/service/data/consent/details', { body, ...options });
  }

  /**
   * Revokes a consent by session ID.
   */
  revoke(body: ConsentRevokeParams, options?: Core.RequestOptions): Core.APIPromise<ConsentRevokeResponse> {
    return this._client.post('/api/service/data/consent/revoke', { body, ...options });
  }
}

export interface ConsentRetrieveResponse {
  /**
   * The Epoch time in seconds when the consent was created.
   */
  createdAt: number;

  /**
   * The permissions granted in this consent.
   */
  permissions: Array<'accounts' | 'balances' | 'transactions'>;

  /**
   * The current status of the consent.
   */
  status: 'created' | 'authorised' | 'revoked' | 'expired' | 'failed';

  /**
   * The Epoch time in seconds when the consent was last updated.
   */
  updatedAt: number;

  /**
   * The Epoch time in seconds at which the consent expires.
   */
  expiresAt?: number;

  /**
   * The Epoch time in seconds at which the consent was revoked.
   */
  revokedAt?: number;
}

export interface ConsentRevokeResponse {
  /**
   * The Epoch time in seconds when the consent was created.
   */
  createdAt: number;

  /**
   * The permissions granted in this consent.
   */
  permissions: Array<'accounts' | 'balances' | 'transactions'>;

  /**
   * The Epoch time in seconds at which the consent was revoked.
   */
  revokedAt: number;

  /**
   * The current status of the consent.
   */
  status: 'revoked';

  /**
   * The Epoch time in seconds when the consent was last updated.
   */
  updatedAt: number;

  /**
   * The Epoch time in seconds at which the consent expires.
   */
  expiresAt?: number;
}

export interface ConsentRetrieveParams {
  /**
   * The ID of the data session to which the consent belongs.
   */
  sessionId: string;
}

export interface ConsentRevokeParams {
  /**
   * The ID of the data session to which the consent belongs.
   */
  sessionId: string;
}

export declare namespace Consent {
  export {
    type ConsentRetrieveResponse as ConsentRetrieveResponse,
    type ConsentRevokeResponse as ConsentRevokeResponse,
    type ConsentRetrieveParams as ConsentRetrieveParams,
    type ConsentRevokeParams as ConsentRevokeParams,
  };
}
