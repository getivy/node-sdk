# Banks

Types:

- <code><a href="./src/resources/banks.ts">BankRetrieveResponse</a></code>
- <code><a href="./src/resources/banks.ts">BankListResponse</a></code>
- <code><a href="./src/resources/banks.ts">BankSearchResponse</a></code>

Methods:

- <code title="post /api/service/banks/details">client.banks.<a href="./src/resources/banks.ts">retrieve</a>({ ...params }) -> BankRetrieveResponse</code>
- <code title="post /api/service/banks/list">client.banks.<a href="./src/resources/banks.ts">list</a>({ ...params }) -> BankListResponse</code>
- <code title="post /api/service/banks/search">client.banks.<a href="./src/resources/banks.ts">search</a>({ ...params }) -> BankSearchResponse</code>

# Checkout

## Session

Types:

- <code><a href="./src/resources/checkout/session.ts">SessionCreateResponse</a></code>
- <code><a href="./src/resources/checkout/session.ts">SessionRetrieveResponse</a></code>
- <code><a href="./src/resources/checkout/session.ts">SessionExpireResponse</a></code>

Methods:

- <code title="post /api/service/checkout/session/create">client.checkout.session.<a href="./src/resources/checkout/session.ts">create</a>({ ...params }) -> SessionCreateResponse</code>
- <code title="post /api/service/checkout/session/details">client.checkout.session.<a href="./src/resources/checkout/session.ts">retrieve</a>({ ...params }) -> SessionRetrieveResponse</code>
- <code title="post /api/service/checkout/session/expire">client.checkout.session.<a href="./src/resources/checkout/session.ts">expire</a>({ ...params }) -> SessionExpireResponse</code>

# Customers

Types:

- <code><a href="./src/resources/customers.ts">CustomerCreateResponse</a></code>
- <code><a href="./src/resources/customers.ts">CustomerRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/customer/create">client.customers.<a href="./src/resources/customers.ts">create</a>({ ...params }) -> CustomerCreateResponse</code>
- <code title="post /api/service/customer/retrieve">client.customers.<a href="./src/resources/customers.ts">retrieve</a>({ ...params }) -> CustomerRetrieveResponse</code>

# Orders

Types:

- <code><a href="./src/resources/orders.ts">OrderRetrieveResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderUpdateResponse</a></code>

Methods:

- <code title="post /api/service/order/details">client.orders.<a href="./src/resources/orders.ts">retrieve</a>({ ...params }) -> OrderRetrieveResponse</code>
- <code title="post /api/service/order/update">client.orders.<a href="./src/resources/orders.ts">update</a>({ ...params }) -> OrderUpdateResponse</code>

# Charges

Types:

- <code><a href="./src/resources/charges.ts">Charge</a></code>

Methods:

- <code title="post /api/service/charge/create">client.charges.<a href="./src/resources/charges.ts">create</a>({ ...params }) -> Charge</code>

# Mandates

Types:

- <code><a href="./src/resources/mandates.ts">MandateResponse</a></code>
- <code><a href="./src/resources/mandates.ts">MandateRevokeResponse</a></code>

Methods:

- <code title="post /api/service/mandate/retrieve">client.mandates.<a href="./src/resources/mandates.ts">retrieve</a>({ ...params }) -> MandateResponse</code>
- <code title="post /api/service/mandate/lookup">client.mandates.<a href="./src/resources/mandates.ts">lookup</a>({ ...params }) -> MandateResponse</code>
- <code title="post /api/service/mandate/revoke">client.mandates.<a href="./src/resources/mandates.ts">revoke</a>({ ...params }) -> MandateRevokeResponse</code>

# Merchant

## Capabilities

Types:

- <code><a href="./src/resources/merchant/capabilities.ts">CapabilityRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/merchant/capabilities/details">client.merchant.capabilities.<a href="./src/resources/merchant/capabilities.ts">retrieve</a>({ ...params }) -> CapabilityRetrieveResponse</code>

## Payment

### Refunds

Types:

- <code><a href="./src/resources/merchant/payment/refunds.ts">RefundResponse</a></code>
- <code><a href="./src/resources/merchant/payment/refunds.ts">RefundBatchResponse</a></code>

Methods:

- <code title="post /api/service/merchant/payment/refund">client.merchant.payment.refunds.<a href="./src/resources/merchant/payment/refunds.ts">create</a>({ ...params }) -> RefundResponse</code>
- <code title="post /api/service/merchant/payment/refund/batch">client.merchant.payment.refunds.<a href="./src/resources/merchant/payment/refunds.ts">batch</a>({ ...params }) -> RefundBatchResponse</code>

## Payouts

### Reports

Types:

- <code><a href="./src/resources/merchant/payouts/reports.ts">PayoutReport</a></code>
- <code><a href="./src/resources/merchant/payouts/reports.ts">ReportCreateResponse</a></code>
- <code><a href="./src/resources/merchant/payouts/reports.ts">ReportRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/merchant/payout/export/create">client.merchant.payouts.reports.<a href="./src/resources/merchant/payouts/reports.ts">create</a>({ ...params }) -> ReportCreateResponse</code>
- <code title="post /api/service/merchant/payout/export/retrieve">client.merchant.payouts.reports.<a href="./src/resources/merchant/payouts/reports.ts">retrieve</a>({ ...params }) -> ReportRetrieveResponse</code>
- <code title="post /api/service/merchant/payout/export/download">client.merchant.payouts.reports.<a href="./src/resources/merchant/payouts/reports.ts">download</a>({ ...params }) -> PayoutReport</code>

# Subaccounts

Types:

- <code><a href="./src/resources/subaccounts.ts">Subaccount</a></code>

Methods:

- <code title="post /api/service/subaccount/create">client.subaccounts.<a href="./src/resources/subaccounts.ts">create</a>({ ...params }) -> Subaccount</code>
- <code title="post /api/service/subaccount/retrieve">client.subaccounts.<a href="./src/resources/subaccounts.ts">retrieve</a>({ ...params }) -> Subaccount</code>

# Balance

Types:

- <code><a href="./src/resources/balance.ts">BalanceRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/balance/retrieve">client.balance.<a href="./src/resources/balance.ts">retrieve</a>({ ...params }) -> BalanceRetrieveResponse</code>

# Customer

## Payouts

Types:

- <code><a href="./src/resources/customer/payouts.ts">PublicUserPayout</a></code>
- <code><a href="./src/resources/customer/payouts.ts">PayoutListResponse</a></code>

Methods:

- <code title="post /api/service/payout/create">client.customer.payouts.<a href="./src/resources/customer/payouts.ts">create</a>({ ...params }) -> PublicUserPayout</code>
- <code title="post /api/service/payout/retrieve">client.customer.payouts.<a href="./src/resources/customer/payouts.ts">retrieve</a>({ ...params }) -> PublicUserPayout</code>
- <code title="post /api/service/payout/list">client.customer.payouts.<a href="./src/resources/customer/payouts.ts">list</a>({ ...params }) -> PayoutListResponse</code>
