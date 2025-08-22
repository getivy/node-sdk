// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class BeneficiaryPayouts extends APIResource {
  /**
   * Perform a payout. This endpoint will be deprecated in favor of the new payout
   * endpoint that will support more payout types.
   */
  create(options?: Core.RequestOptions): Core.APIPromise<BeneficiaryPayoutCreateResponse> {
    return this._client.post('/api/service/beneficiary-payout/create', options);
  }
}

/**
 * Array of payout objects
 */
export type BeneficiaryPayoutCreateResponse =
  Array<BeneficiaryPayoutCreateResponse.BeneficiaryPayoutCreateResponseItem>;

export namespace BeneficiaryPayoutCreateResponse {
  export interface BeneficiaryPayoutCreateResponseItem {
    /**
     * The unique identifier of the payout
     */
    id: string;

    /**
     * The payout amount
     */
    amount: number;

    /**
     * The creation timestamp of the payout
     */
    createdAt: unknown;

    /**
     * The currency of the payout
     */
    currency: 'EUR' | 'GBP' | 'PLN' | 'SEK' | 'DKK';

    /**
     * Description of the payout
     */
    description: string;

    /**
     * The merchant identifier
     */
    merchant: string;

    /**
     * The reference identifier for the payout
     */
    referenceId: string;

    /**
     * The descriptor that appears on bank statements
     */
    statementDescriptor: string;

    /**
     * The current status of the payout
     */
    status: 'paid' | 'pending' | 'in_transit' | 'failed' | 'canceled';

    /**
     * The type of payout
     */
    type: 'merchant' | 'customer';
  }
}

export declare namespace BeneficiaryPayouts {
  export { type BeneficiaryPayoutCreateResponse as BeneficiaryPayoutCreateResponse };
}
