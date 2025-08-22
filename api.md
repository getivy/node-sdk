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

# Customers

Types:

- <code><a href="./src/resources/customers.ts">CustomerCreateResponse</a></code>
- <code><a href="./src/resources/customers.ts">CustomerRetrieveResponse</a></code>
- <code><a href="./src/resources/customers.ts">CustomerSearchResponse</a></code>

Methods:

- <code title="post /api/service/customer/create">client.customers.<a href="./src/resources/customers.ts">create</a>({ ...params }) -> CustomerCreateResponse</code>
- <code title="post /api/service/customer/retrieve">client.customers.<a href="./src/resources/customers.ts">retrieve</a>({ ...params }) -> CustomerRetrieveResponse</code>
- <code title="post /api/service/customer/search">client.customers.<a href="./src/resources/customers.ts">search</a>({ ...params }) -> CustomerSearchResponse</code>

# Orders

Types:

- <code><a href="./src/resources/orders.ts">OrderCreateResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderRetrieveResponse</a></code>
- <code><a href="./src/resources/orders.ts">OrderExpireResponse</a></code>

Methods:

- <code title="post /api/service/order/create">client.orders.<a href="./src/resources/orders.ts">create</a>({ ...params }) -> OrderCreateResponse</code>
- <code title="post /api/service/order/details">client.orders.<a href="./src/resources/orders.ts">retrieve</a>({ ...params }) -> OrderRetrieveResponse</code>
- <code title="post /api/service/order/expire">client.orders.<a href="./src/resources/orders.ts">expire</a>({ ...params }) -> OrderExpireResponse</code>

# Charges

Types:

- <code><a href="./src/resources/charges.ts">Charge</a></code>

Methods:

- <code title="post /api/service/charge/create">client.charges.<a href="./src/resources/charges.ts">create</a>({ ...params }) -> Charge</code>

# Deposits

Types:

- <code><a href="./src/resources/deposits.ts">DepositRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/deposit/retrieve">client.deposits.<a href="./src/resources/deposits.ts">retrieve</a>({ ...params }) -> DepositRetrieveResponse</code>

# Returns

Types:

- <code><a href="./src/resources/returns.ts">ReturnCreateResponse</a></code>
- <code><a href="./src/resources/returns.ts">ReturnRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/return/create">client.returns.<a href="./src/resources/returns.ts">create</a>({ ...params }) -> ReturnCreateResponse</code>
- <code title="post /api/service/return/retrieve">client.returns.<a href="./src/resources/returns.ts">retrieve</a>({ ...params }) -> ReturnRetrieveResponse</code>

# Fx

Types:

- <code><a href="./src/resources/fx.ts">FxRetrieveResponse</a></code>
- <code><a href="./src/resources/fx.ts">FxRetrieveRateResponse</a></code>

Methods:

- <code title="post /api/service/fx/retrieve">client.fx.<a href="./src/resources/fx.ts">retrieve</a>({ ...params }) -> FxRetrieveResponse</code>
- <code title="post /api/service/fx/retrieve-rate">client.fx.<a href="./src/resources/fx.ts">retrieveRate</a>({ ...params }) -> FxRetrieveRateResponse</code>

# BeneficiaryPayouts

Types:

- <code><a href="./src/resources/beneficiary-payouts.ts">BeneficiaryPayoutCreateResponse</a></code>

Methods:

- <code title="post /api/service/beneficiary-payout/create">client.beneficiaryPayouts.<a href="./src/resources/beneficiary-payouts.ts">create</a>() -> BeneficiaryPayoutCreateResponse</code>

# Transactions

Types:

- <code><a href="./src/resources/transactions.ts">TransactionListResponse</a></code>

Methods:

- <code title="post /api/service/transaction/list">client.transactions.<a href="./src/resources/transactions.ts">list</a>({ ...params }) -> TransactionListResponse</code>

# Mandates

Types:

- <code><a href="./src/resources/mandates.ts">Mandate</a></code>
- <code><a href="./src/resources/mandates.ts">MandateLookupResponse</a></code>
- <code><a href="./src/resources/mandates.ts">MandateRevokeResponse</a></code>

Methods:

- <code title="post /api/service/mandate/retrieve">client.mandates.<a href="./src/resources/mandates.ts">retrieve</a>({ ...params }) -> Mandate</code>
- <code title="post /api/service/mandate/lookup">client.mandates.<a href="./src/resources/mandates.ts">lookup</a>({ ...params }) -> MandateLookupResponse</code>
- <code title="post /api/service/mandate/revoke">client.mandates.<a href="./src/resources/mandates.ts">revoke</a>({ ...params }) -> MandateRevokeResponse</code>

# Capabilities

Types:

- <code><a href="./src/resources/capabilities.ts">CapabilityRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/merchant/capabilities/details">client.capabilities.<a href="./src/resources/capabilities.ts">retrieve</a>({ ...params }) -> CapabilityRetrieveResponse</code>

# Refunds

Types:

- <code><a href="./src/resources/refunds.ts">Refund</a></code>
- <code><a href="./src/resources/refunds.ts">RefundCreateResponse</a></code>
- <code><a href="./src/resources/refunds.ts">RefundRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/refund/create">client.refunds.<a href="./src/resources/refunds.ts">create</a>({ ...params }) -> RefundCreateResponse</code>
- <code title="post /api/service/refund/retrieve">client.refunds.<a href="./src/resources/refunds.ts">retrieve</a>({ ...params }) -> RefundRetrieveResponse</code>

# Payouts

Types:

- <code><a href="./src/resources/payouts.ts">Payout</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutRetrieveResponse</a></code>
- <code><a href="./src/resources/payouts.ts">PayoutListResponse</a></code>

Methods:

- <code title="post /api/service/payout/create">client.payouts.<a href="./src/resources/payouts.ts">create</a>({ ...params }) -> Payout</code>
- <code title="post /api/service/payout/retrieve">client.payouts.<a href="./src/resources/payouts.ts">retrieve</a>({ ...params }) -> PayoutRetrieveResponse</code>
- <code title="post /api/service/payout/list">client.payouts.<a href="./src/resources/payouts.ts">list</a>({ ...params }) -> PayoutListResponse</code>

# Subaccounts

Types:

- <code><a href="./src/resources/subaccounts.ts">Subaccount</a></code>
- <code><a href="./src/resources/subaccounts.ts">SubaccountCreateResponse</a></code>

Methods:

- <code title="post /api/service/subaccount/create">client.subaccounts.<a href="./src/resources/subaccounts.ts">create</a>({ ...params }) -> SubaccountCreateResponse</code>
- <code title="post /api/service/subaccount/retrieve">client.subaccounts.<a href="./src/resources/subaccounts.ts">retrieve</a>({ ...params }) -> Subaccount</code>

# Balance

Types:

- <code><a href="./src/resources/balance.ts">BalanceRetrieveResponse</a></code>

Methods:

- <code title="post /api/service/balance/retrieve">client.balance.<a href="./src/resources/balance.ts">retrieve</a>({ ...params }) -> BalanceRetrieveResponse</code>
