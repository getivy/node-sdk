// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CapabilitiesAPI from './capabilities';
import { Capabilities, CapabilityRetrieveParams, CapabilityRetrieveResponse } from './capabilities';
import * as PaymentAPI from './payment/payment';
import { Payment } from './payment/payment';
import * as PayoutsAPI from './payouts/payouts';
import { Payouts } from './payouts/payouts';

export class Merchant extends APIResource {
  capabilities: CapabilitiesAPI.Capabilities = new CapabilitiesAPI.Capabilities(this._client);
  payment: PaymentAPI.Payment = new PaymentAPI.Payment(this._client);
  payouts: PayoutsAPI.Payouts = new PayoutsAPI.Payouts(this._client);
}

Merchant.Capabilities = Capabilities;
Merchant.Payment = Payment;
Merchant.Payouts = Payouts;

export declare namespace Merchant {
  export {
    Capabilities as Capabilities,
    type CapabilityRetrieveResponse as CapabilityRetrieveResponse,
    type CapabilityRetrieveParams as CapabilityRetrieveParams,
  };

  export { Payment as Payment };

  export { Payouts as Payouts };
}
