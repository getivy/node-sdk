// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Customers extends APIResource {
  /**
   * This endpoint allows merchants to create a new customer with email
   */
  create(body: CustomerCreateParams, options?: Core.RequestOptions): Core.APIPromise<CustomerCreateResponse> {
    return this._client.post('/api/service/customer/create', { body, ...options });
  }

  /**
   * This endpoint allows merchants to retrieve the customer info by id
   */
  retrieve(
    body: CustomerRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerRetrieveResponse> {
    return this._client.post('/api/service/customer/retrieve', { body, ...options });
  }
}

/**
 * Returns the id and email of the created customer
 */
export interface CustomerCreateResponse {
  id: string;

  email: string;
}

export interface CustomerRetrieveResponse {
  /**
   * Customer id
   */
  id: string;

  /**
   * List of remembered bank accounts for this Customer
   */
  bankAccounts: Array<CustomerRetrieveResponse.BankAccount>;

  /**
   * Customer email address
   */
  emailAddress: string;
}

export namespace CustomerRetrieveResponse {
  export interface BankAccount {
    /**
     * Bank details
     */
    bank: BankAccount.Bank;

    /**
     * Last 4 digits of remembered account number
     */
    last4digits?: string;
  }

  export namespace BankAccount {
    /**
     * Bank details
     */
    export interface Bank {
      /**
       * Ivy bank id used to initiate checkout session with preselected bank
       */
      id: string;

      /**
       * The customer-facing name of the Bank.
       */
      name: string;

      /**
       * The Bank Logo as a URL
       */
      logo?: string;
    }
  }
}

export interface CustomerCreateParams {
  email: string;
}

export interface CustomerRetrieveParams {
  id: string;
}

export declare namespace Customers {
  export {
    type CustomerCreateResponse as CustomerCreateResponse,
    type CustomerRetrieveResponse as CustomerRetrieveResponse,
    type CustomerCreateParams as CustomerCreateParams,
    type CustomerRetrieveParams as CustomerRetrieveParams,
  };
}
