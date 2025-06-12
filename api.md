# Banks

Types:

- <code><a href="./src/resources/banks.ts">BankRetrieveResponse</a></code>
- <code><a href="./src/resources/banks.ts">BankListResponse</a></code>
- <code><a href="./src/resources/banks.ts">BankSearchResponse</a></code>

Methods:

- <code title="post /api/service/banks/details">client.banks.<a href="./src/resources/banks.ts">retrieve</a>({ ...params }) -> BankRetrieveResponse</code>
- <code title="post /api/service/banks/list">client.banks.<a href="./src/resources/banks.ts">list</a>({ ...params }) -> BankListResponse</code>
- <code title="post /api/service/banks/search">client.banks.<a href="./src/resources/banks.ts">search</a>({ ...params }) -> BankSearchResponse</code>

# Checkoutsession

Types:

- <code><a href="./src/resources/checkoutsession.ts">CheckoutsessionCreateResponse</a></code>
- <code><a href="./src/resources/checkoutsession.ts">CheckoutsessionRetrieveResponse</a></code>
- <code><a href="./src/resources/checkoutsession.ts">CheckoutsessionExpireResponse</a></code>

Methods:

- <code title="post /api/service/checkout/session/create">client.checkoutsession.<a href="./src/resources/checkoutsession.ts">create</a>({ ...params }) -> CheckoutsessionCreateResponse</code>
- <code title="post /api/service/checkout/session/details">client.checkoutsession.<a href="./src/resources/checkoutsession.ts">retrieve</a>({ ...params }) -> CheckoutsessionRetrieveResponse</code>
- <code title="post /api/service/checkout/session/expire">client.checkoutsession.<a href="./src/resources/checkoutsession.ts">expire</a>({ ...params }) -> CheckoutsessionExpireResponse</code>

# Data

## Session

## Consent

## Accounts

## Transactions

## Balances

# Customers

Types:

- <code><a href="./src/resources/customers.ts">CustomerCreateResponse</a></code>
- <code><a href="./src/resources/customers.ts">CustomerRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/customer/create">client.customers.<a href="./src/resources/customers.ts">create</a>({ ...params }) -> CustomerCreateResponse</code>
- <code title="post /api/service/customer/retrieve">client.customers.<a href="./src/resources/customers.ts">retrieve</a>({ ...params }) -> CustomerRetrieveResponse</code>

# Orders

Types:

- <code><a href="./src/resources/orders.ts">OrderCreateResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/order/create">client.orders.<a href="./src/resources/orders.ts">create</a>({ ...params }) -> OrderCreateResponse</code>
- <code title="post /api/service/order/details">client.orders.<a href="./src/resources/orders.ts">retrieve</a>({ ...params }) -> OrderRetrieveResponse</code>

# Charges

Types:

- <code><a href="./src/resources/charges.ts">ChargeCreateResponse</a></code>

Methods:

- <code title="post /api/service/charge/create">client.charges.<a href="./src/resources/charges.ts">create</a>({ ...params }) -> ChargeCreateResponse</code>

# Mandates

Types:

- <code><a href="./src/resources/mandates.ts">MandateRetrieveResponse</a></code>
- <code><a href="./src/resources/mandates.ts">MandateLookupResponse</a></code>
- <code><a href="./src/resources/mandates.ts">MandateRevokeResponse</a></code>

Methods:

- <code title="post /api/service/mandate/retrieve">client.mandates.<a href="./src/resources/mandates.ts">retrieve</a>({ ...params }) -> MandateRetrieveResponse</code>
- <code title="post /api/service/mandate/lookup">client.mandates.<a href="./src/resources/mandates.ts">lookup</a>({ ...params }) -> MandateLookupResponse</code>
- <code title="post /api/service/mandate/revoke">client.mandates.<a href="./src/resources/mandates.ts">revoke</a>({ ...params }) -> MandateRevokeResponse</code>

# Capabilities

Types:

- <code><a href="./src/resources/capabilities.ts">CapabilityRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/merchant/capabilities/details">client.capabilities.<a href="./src/resources/capabilities.ts">retrieve</a>({ ...params }) -> CapabilityRetrieveResponse</code>

# Refunds

Types:

- <code><a href="./src/resources/refunds.ts">RefundCreateResponse</a></code>
- <code><a href="./src/resources/refunds.ts">RefundBatchResponse</a></code>

Methods:

- <code title="post /api/service/merchant/payment/refund">client.refunds.<a href="./src/resources/refunds.ts">create</a>({ ...params }) -> RefundCreateResponse</code>
- <code title="post /api/service/merchant/payment/refund/batch">client.refunds.<a href="./src/resources/refunds.ts">batch</a>({ ...params }) -> RefundBatchResponse</code>

# Payouts

Types:

- <code><a href="./src/resources/payouts.ts">PayoutCreateResponse</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutRetrieveResponse</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutListResponse</a></code>

Methods:

- <code title="post /api/service/payout/create">client.payouts.<a href="./src/resources/payouts.ts">create</a>({ ...params }) -> PayoutCreateResponse</code>
- <code title="post /api/service/payout/retrieve">client.payouts.<a href="./src/resources/payouts.ts">retrieve</a>({ ...params }) -> PayoutRetrieveResponse</code>
- <code title="post /api/service/payout/list">client.payouts.<a href="./src/resources/payouts.ts">list</a>({ ...params }) -> PayoutListResponse</code>

# Reports

Types:

- <code><a href="./src/resources/reports.ts">ReportCreateResponse</a></code>
- <code><a href="./src/resources/reports.ts">ReportRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/merchant/payout/export/create">client.reports.<a href="./src/resources/reports.ts">create</a>({ ...params }) -> ReportCreateResponse</code>
- <code title="post /api/service/merchant/payout/export/retrieve">client.reports.<a href="./src/resources/reports.ts">retrieve</a>({ ...params }) -> ReportRetrieveResponse</code>
- <code title="post /api/service/merchant/payout/export/download">client.reports.<a href="./src/resources/reports.ts">download</a>({ ...params }) -> void</code>

# Subaccounts

Types:

- <code><a href="./src/resources/subaccounts.ts">SubaccountCreateResponse</a></code>
- <code><a href="./src/resources/subaccounts.ts">SubaccountRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/subaccount/create">client.subaccounts.<a href="./src/resources/subaccounts.ts">create</a>({ ...params }) -> SubaccountCreateResponse</code>
- <code title="post /api/service/subaccount/retrieve">client.subaccounts.<a href="./src/resources/subaccounts.ts">retrieve</a>({ ...params }) -> SubaccountRetrieveResponse</code>

# Balance

Types:

- <code><a href="./src/resources/balance.ts">BalanceRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/balance/retrieve">client.balance.<a href="./src/resources/balance.ts">retrieve</a>({ ...params }) -> BalanceRetrieveResponse</code>

# Webhooksubscription
