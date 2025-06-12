// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Customers extends APIResource {
  /**
   * Create a new Customer representing your Customers. You can use the Customer to
   * simplify the checkout process for returning journeys.
   */
  create(body: CustomerCreateParams, options?: Core.RequestOptions): Core.APIPromise<CustomerCreateResponse> {
    return this._client.post('/api/service/customer/create', { body, ...options });
  }

  /**
   * Retrieve a Customer Object by its id.
   */
  retrieve(
    body: CustomerRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomerRetrieveResponse> {
    return this._client.post('/api/service/customer/retrieve', { body, ...options });
  }
}

export interface CustomerCreateResponse {
  /**
   * The id of the created customer
   */
  id: string;

  /**
   * The email address of the created customer
   */
  email: string;
}

export interface CustomerRetrieveResponse {
  /**
   * The id of the customer
   */
  id: string;

  /**
   * Array of bank accounts remembered by user
   */
  bankAccounts: Array<CustomerRetrieveResponse.BankAccount>;

  /**
   * The email address of the customer
   */
  emailAddress: string;
}

export namespace CustomerRetrieveResponse {
  export interface BankAccount {
    /**
     * Remembered bank details
     */
    bank: BankAccount.Bank;

    /**
     * Last 4 digits of remembered account number
     */
    last4digits: string;
  }

  export namespace BankAccount {
    /**
     * Remembered bank details
     */
    export interface Bank {
      /**
       * The id of the bank
       */
      id: string;

      /**
       * The name of the bank
       */
      name: string;

      /**
       * URL address of bank logo image
       */
      logo?: string;
    }
  }
}

export interface CustomerCreateParams {
  /**
   * The email address of the customer
   */
  email: string;
}

export interface CustomerRetrieveParams {
  /**
   * The id of the customer
   */
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
