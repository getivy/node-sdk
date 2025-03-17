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

/**
 * Returns the id, email, merchantId of the customer and array of banks remembered
 * by customer
 */
export interface CustomerRetrieveResponse {
  /**
   * Customer id
   */
  id: string;

  /**
   * List of bank accounts rememberd by customer
   */
  bankAccounts: Array<CustomerRetrieveResponse.BankAccount>;

  /**
   * Customer email address
   */
  emailAddress: string;

  /**
   * Id of the merchant to which the customer belongs
   */
  merchantId: string;
}

export namespace CustomerRetrieveResponse {
  export interface BankAccount {
    /**
     * Bank details
     */
    bank: BankAccount.Bank;
  }

  export namespace BankAccount {
    /**
     * Bank details
     */
    export interface Bank {
      /**
       * Bank id used to initiate checkout session with preselected bank
       */
      id: string;

      /**
       * Bank name
       */
      name: string;

      /**
       * Name of the branch if bank belongs to a group
       */
      branchName?: string;

      /**
       * Bank logo url
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
