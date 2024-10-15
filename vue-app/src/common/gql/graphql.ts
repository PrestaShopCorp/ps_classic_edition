/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A country code as defined by ISO 3166-1 alpha-2 */
  CountryCode: { input: any; output: any };
  DateTime: { input: any; output: any };
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  Email: { input: any; output: any };
  /** A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/. */
  EmailAddress: { input: any; output: any };
  HostedEmail: { input: any; output: any };
  /** SshOnInstanceCommand custom scalar type */
  HostedSshOnInstanceCommand: { input: any; output: any };
  /** UploadOnInstanceCommandScalar custom scalar type */
  HostedUploadOnInstanceCommand: { input: any; output: any };
  Hostname: { input: any; output: any };
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any };
  /** The locale in the format of a BCP 47 (RFC 5646) standard string */
  Locale: { input: any; output: any };
  /** Floats that will have a value of 0 or more. */
  NonNegativeFloat: { input: any; output: any };
  /** Floats that will have a value greater than 0. */
  PositiveFloat: { input: any; output: any };
  URL: { input: any; output: any };
  /** Represents empty values */
  Void: { input: any; output: any };
  /** The component id for which an estimate must be created. It must be a "plan" type */
  mutationInput_addSubscriptionEstimateForCustomer_input_componentId: { input: any; output: any };
  /** A coupon code. It will be applied to the estimate to include this in the estimated price. */
  mutationInput_addSubscriptionEstimateForCustomer_input_coupon_couponCode: { input: any; output: any };
  /** The id of the customer. The billing address of the customer should have an impact on the estimate, as the taxes are country-related. */
  mutationInput_addSubscriptionEstimateForCustomer_input_customerId: { input: any; output: any };
  /** The product id for which an estimate must be created */
  mutationInput_addSubscriptionEstimateForCustomer_input_productId: { input: any; output: any };
  /** The id of the existing subscription. */
  mutationInput_addSubscriptionEstimateForCustomer_input_subscriptionId: { input: any; output: any };
  /** Unique identifier of the coupon */
  mutation_addSubscriptionEstimateForCustomer_oneOf_0_allOf_1_item_coupon_id: { input: any; output: any };
};

export type AddUserInfoDto_Input = {
  personal: PersonalInfos_Input;
  professional: Scalars["JSON"]["input"];
  profile: MutationInput_UserController_AddInfo_Input_Profile;
};

export type AddonDto = {
  __typename?: "AddonDto";
  /** Indicates the group to which this component belongs. For example when you have multiple billing periods, for the same offer you will get 2 components: "builtfor_example-standard-EUR-Monthly" and "builtfor_example-standard-EUR-Yearly". Both of them belong to the group "builtfor_example-standard". */
  componentGroupId: Scalars["String"]["output"];
  componentType: Query_GetProductComponents_OneOf_0_AllOf_1_Items_Items_OneOf_1_ComponentType;
  /** Id of the product component */
  id: Scalars["String"]["output"];
  /** Indicates whether or not this components is usage based. If yes, you can use the route usage with this componentId to update the usage associated to a subscription / component. */
  isUsageBased: Scalars["Boolean"]["output"];
  /** Price of the component. Available only when pricing model is flat_fee or per_unit. When the pricing model is per_unit this is the price of a unit */
  price?: Maybe<Scalars["NonNegativeFloat"]["output"]>;
  pricingModel: Query_GetProductComponents_OneOf_0_AllOf_1_Items_Items_OneOf_1_PricingModel;
  /** Id of the product on which this component is attached. In case of a Built For, your product id is the technical name of your product, not the technical id from the marketplace (partner solution engineering team can help you to find it). */
  productId: Scalars["String"]["output"];
  status: Query_GetProductComponents_OneOf_0_AllOf_1_Items_Items_OneOf_1_Status;
  /** Range of pricing for this component. Available only when pricing model is stairstep */
  tiers?: Maybe<Array<Maybe<ProductComponentTiersDto>>>;
};

export type BillingAddressDto = {
  __typename?: "BillingAddressDto";
  /** City of the customer */
  city?: Maybe<Scalars["String"]["output"]>;
  /** Company name of the customer */
  companyName?: Maybe<Scalars["String"]["output"]>;
  /** Country of the customer: ISO 3166 alpha-2 country code */
  country?: Maybe<Scalars["String"]["output"]>;
  /** First name of the customer */
  firstName?: Maybe<Scalars["String"]["output"]>;
  /** Last name of the customer */
  lastName?: Maybe<Scalars["String"]["output"]>;
  /** First address line of the customer */
  line1?: Maybe<Scalars["String"]["output"]>;
  /** Second address line of the customer */
  line2?: Maybe<Scalars["String"]["output"]>;
  /** Zip code of the customer */
  zip?: Maybe<Scalars["String"]["output"]>;
};

export type ChargeAtTermDto = {
  __typename?: "ChargeAtTermDto";
  /** Amount in cents */
  amount: Scalars["NonNegativeFloat"]["output"];
  /** Description of the charge. This description will appear on the next invoice. */
  description: Scalars["String"]["output"];
};

export type ChargeAtTermDto_Input = {
  /** Amount in cents */
  amount: Scalars["NonNegativeFloat"]["input"];
  /** Description of the charge. This description will appear on the next invoice. */
  description: Scalars["String"]["input"];
};

/** A container for all the information required to onboard a new user. */
export type Checkout = {
  __typename?: "Checkout";
  /** The checkout completed at date */
  completedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** The shop hosting ID. */
  hostingId?: Maybe<Scalars["ID"]["output"]>;
  /** The checkout ID. */
  id: Scalars["ID"]["output"];
  /** The plan code. */
  planCode: PlanCode;
  /** The shop operation country. */
  shopCountry?: Maybe<Scalars["CountryCode"]["output"]>;
  /** The shop domain. */
  shopDomain?: Maybe<Scalars["Hostname"]["output"]>;
  /** The shop ID. */
  shopId?: Maybe<Scalars["ID"]["output"]>;
  /** The shop name. */
  shopName?: Maybe<Scalars["String"]["output"]>;
  /** The billing subscription ID. */
  subscriptionId?: Maybe<Scalars["ID"]["output"]>;
  /** The user ID. */
  userId: Scalars["ID"]["output"];
  /** The user preferred language. */
  userLang?: Maybe<Scalars["Locale"]["output"]>;
};

export type CheckoutAlreadyCompletedError = Error & {
  __typename?: "CheckoutAlreadyCompletedError";
  code: ErrorCode;
  completedAt: Scalars["DateTime"]["output"];
  message: Scalars["String"]["output"];
};

export type CheckoutIncompleteError = Error & {
  __typename?: "CheckoutIncompleteError";
  code: ErrorCode;
  message: Scalars["String"]["output"];
};

export type Company_Input = {
  name?: InputMaybe<Scalars["String"]["input"]>;
  taxId?: InputMaybe<Scalars["String"]["input"]>;
  vatId?: InputMaybe<Scalars["String"]["input"]>;
};

export type CompleteCheckoutInput = {
  id: Scalars["ID"]["input"];
  sandbox?: Scalars["Boolean"]["input"];
};

export type CompleteCheckoutPayload = {
  __typename?: "CompleteCheckoutPayload";
  checkout: Checkout;
};

export type CompleteCheckoutResult = CheckoutAlreadyCompletedError | CheckoutIncompleteError | CompleteCheckoutPayload;

export type CreateCheckoutInput = {
  planCode: PlanCode;
  userId: Scalars["ID"]["input"];
};

export type CreateCheckoutPayload = {
  __typename?: "CreateCheckoutPayload";
  checkout: Checkout;
};

export type CreateCheckoutResult = CreateCheckoutPayload;

export type CreateCustomerDto_Input = {
  /** Email of customer. This email should match the email provided in the JWT token */
  email: Scalars["EmailAddress"]["input"];
  /** The id of the customer, it should match the sub in the JWT */
  id: Scalars["String"]["input"];
  locale: MutationInput_AddCustomer_Input_Locale;
  type: MutationInput_AddCustomer_Input_Type;
};

export type CreateEstimateCouponDto_Input = {
  /** A coupon code. It will be applied to the estimate to include this in the estimated price. */
  couponCode: Scalars["mutationInput_addSubscriptionEstimateForCustomer_input_coupon_couponCode"]["input"];
  /** When set to true, it indicates that the coupon code provided is already used. You should use it when you want to update a subscription that already has a coupon code applied. */
  isCurrentlyApplied: Scalars["Boolean"]["input"];
};

export type CreateEstimateDto_Input = {
  /** The component id for which an estimate must be created. It must be a "plan" type */
  componentId: Scalars["mutationInput_addSubscriptionEstimateForCustomer_input_componentId"]["input"];
  coupon?: InputMaybe<CreateEstimateCouponDto_Input>;
  /** The id of the customer. The billing address of the customer should have an impact on the estimate, as the taxes are country-related. */
  customerId: Scalars["mutationInput_addSubscriptionEstimateForCustomer_input_customerId"]["input"];
  /** The product id for which an estimate must be created */
  productId: Scalars["mutationInput_addSubscriptionEstimateForCustomer_input_productId"]["input"];
  /** If applicable, the quantity with which the estimate must be created. Quantity is applicable for quantity based or metered plan. */
  quantity?: InputMaybe<Scalars["NonNegativeFloat"]["input"]>;
  /** The id of the existing subscription. */
  subscriptionId?: InputMaybe<
    Scalars["mutationInput_addSubscriptionEstimateForCustomer_input_subscriptionId"]["input"]
  >;
};

export type CreateOrganizationAddressDto_Input = {
  addonsAddressId: Scalars["Float"]["input"];
  countryCode: Scalars["String"]["input"];
  email?: InputMaybe<Scalars["String"]["input"]>;
  extendedAddr1?: InputMaybe<Scalars["String"]["input"]>;
  extendedAddr2?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  locality?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  postalCode?: InputMaybe<Scalars["String"]["input"]>;
  source?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
  stateCode?: InputMaybe<Scalars["String"]["input"]>;
  streetAddress?: InputMaybe<Scalars["String"]["input"]>;
  type: Scalars["String"]["input"];
};

export type CreateOrganizationDto_Input = {
  company?: InputMaybe<Company_Input>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  profile?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateShopDraftDto_Input = {
  domain: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  sslDomain?: InputMaybe<Scalars["String"]["input"]>;
};

export type CreateShopDto_Input = {
  adminBoUrl?: InputMaybe<Scalars["String"]["input"]>;
  allowAnonymousDataCollection?: InputMaybe<Scalars["Boolean"]["input"]>;
  domain: Scalars["String"]["input"];
  employeeId: Scalars["String"]["input"];
  favicon?: InputMaybe<Scalars["String"]["input"]>;
  frontendUrl?: InputMaybe<Scalars["String"]["input"]>;
  lang?: InputMaybe<Scalars["String"]["input"]>;
  moduleName?: InputMaybe<Scalars["String"]["input"]>;
  moduleVersion: Scalars["String"]["input"];
  multishop: Scalars["Boolean"]["input"];
  physicalUri: Scalars["String"]["input"];
  prestashopCreationDate?: InputMaybe<Scalars["Float"]["input"]>;
  psVersion?: InputMaybe<Scalars["String"]["input"]>;
  publicKey: Scalars["String"]["input"];
  shopId: Scalars["String"]["input"];
  shopName?: InputMaybe<Scalars["String"]["input"]>;
  sslDomain?: InputMaybe<Scalars["String"]["input"]>;
  virtualUri: Scalars["String"]["input"];
};

export type CreateShopsDto_Input = {
  shops: Array<InputMaybe<Scalars["String"]["input"]>>;
};

export type CreateUserDto_Input = {
  source: Scalars["String"]["input"];
};

export type CustomerDto = {
  __typename?: "CustomerDto";
  billingAddress?: Maybe<BillingAddressDto>;
  /** Email of customer. This email should match the email provided in the JWT token */
  email: Scalars["EmailAddress"]["output"];
  /** The id of the customer, it should match the sub in the JWT */
  id: Scalars["String"]["output"];
  locale: Mutation_AddCustomer_OneOf_0_AllOf_1_Item_Locale;
  type: Mutation_AddCustomer_OneOf_0_AllOf_1_Item_Type;
  /** Vat of the company associated to this account */
  vatNumber?: Maybe<Scalars["String"]["output"]>;
};

export type Error = {
  code: ErrorCode;
  message: Scalars["String"]["output"];
};

export enum ErrorCode {
  BaseError = "BASE_ERROR",
  CheckoutAlreadyCompleted = "CHECKOUT_ALREADY_COMPLETED",
  CheckoutIncomplete = "CHECKOUT_INCOMPLETE",
  ShopNameTaken = "SHOP_NAME_TAKEN",
}

export type EstimateCouponDto = {
  __typename?: "EstimateCouponDto";
  /** Amount of the discount in EUR/2 format (20€ equals 2000) */
  discountAmount?: Maybe<Scalars["NonNegativeFloat"]["output"]>;
  /** Percentage of the discount */
  discountPercentage?: Maybe<Scalars["NonNegativeFloat"]["output"]>;
  discountType: Mutation_AddSubscriptionEstimateForCustomer_OneOf_0_AllOf_1_Item_Coupon_DiscountType;
  /** Unique identifier of the coupon */
  id: Scalars["mutation_addSubscriptionEstimateForCustomer_oneOf_0_allOf_1_item_coupon_id"]["output"];
  /** Number of periodUnit during which the coupon is applied. For example when a discount is applied for 2 months period will be 2 and periodUnit "month" */
  period?: Maybe<Scalars["Float"]["output"]>;
  /** Unit of the period to apply the coupon */
  periodUnit?: Maybe<Scalars["String"]["output"]>;
  status: Mutation_AddSubscriptionEstimateForCustomer_OneOf_0_AllOf_1_Item_Coupon_Status;
};

export type EstimateDto = {
  __typename?: "EstimateDto";
  coupon?: Maybe<EstimateCouponDto>;
  invoiceEstimate: EstimateInvoiceDto;
};

export type EstimateInvoiceDiscountDto = {
  __typename?: "EstimateInvoiceDiscountDto";
  /** Amount of the discount in EUR/2 format (20€ equals 2000). */
  amount: Scalars["NonNegativeFloat"]["output"];
  discountType: Mutation_AddSubscriptionEstimateForCustomer_OneOf_0_AllOf_1_Item_InvoiceEstimate_Discounts_Items_DiscountType;
  /** When the deduction is due to a coupon or a discount, then this is the id of the coupon or discount. */
  entityId?: Maybe<Scalars["String"]["output"]>;
};

export type EstimateInvoiceDto = {
  __typename?: "EstimateInvoiceDto";
  /** Amount due  in EUR/2 format (20€ equals 2000). */
  amountDue: Scalars["NonNegativeFloat"]["output"];
  /** List of all discounts applied to the invoice estimate. */
  discounts: Array<Maybe<EstimateInvoiceDiscountDto>>;
  /** Tax applied on each line item of the invoice estimate. */
  lineItemTaxes: Array<Maybe<EstimateInvoiceLineItemTaxDto>>;
  /** Items applied to the invoice estimate. */
  lineItems: Array<Maybe<EstimateInvoiceLineItemDto>>;
  /** Amount of the next invoice, only available when current estimate is 0 for free trial or downgrade. */
  nextBillingPeriodAmountDue?: Maybe<Scalars["Float"]["output"]>;
  /** Sub-total in EUR/2 format (20€ equals 2000). */
  subTotal: Scalars["NonNegativeFloat"]["output"];
  /** List of all taxes applied to the invoice estimate. */
  taxes: Array<Maybe<EstimateInvoiceTaxItemDto>>;
  /** Total in EUR/2 format (20€ equals 2000). */
  total: Scalars["NonNegativeFloat"]["output"];
};

export type EstimateInvoiceLineItemDto = {
  __typename?: "EstimateInvoiceLineItemDto";
  /** Amount of the line item in EUR/2 format (20€ equals 2000) */
  amount: Scalars["NonNegativeFloat"]["output"];
  entityType: Mutation_AddSubscriptionEstimateForCustomer_OneOf_0_AllOf_1_Item_InvoiceEstimate_LineItems_Items_EntityType;
};

export type EstimateInvoiceLineItemTaxDto = {
  __typename?: "EstimateInvoiceLineItemTaxDto";
  /** Country (or jurisdiction) of taxation */
  taxJurisName: Scalars["String"]["output"];
  /** Tax rate */
  taxRate: Scalars["Float"]["output"];
};

export type EstimateInvoiceTaxItemDto = {
  __typename?: "EstimateInvoiceTaxItemDto";
  /** Amount of the tax item in EUR/2 format (20€ equals 2000) */
  amount: Scalars["NonNegativeFloat"]["output"];
  /** Name of the tax, for example VAT */
  name: Scalars["String"]["output"];
};

export type FirebaseTokenResponse = {
  __typename?: "FirebaseTokenResponse";
  shopRefreshToken: Scalars["String"]["output"];
  shopToken: Scalars["String"]["output"];
  userRefreshToken: Scalars["String"]["output"];
  userToken: Scalars["String"]["output"];
};

export type HomepageDynamicBloc = {
  __typename?: "HomepageDynamicBloc";
  id: Scalars["ID"]["output"];
  image: HomepageDynamicBlocImage;
  isActive: Scalars["Boolean"]["output"];
  link: HomepageDynamicBlocLink;
  subTitle: Array<LangObject>;
  text: Array<LangObject>;
  title: Array<LangObject>;
};

export type HomepageDynamicBlocImage = {
  __typename?: "HomepageDynamicBlocImage";
  id: Scalars["ID"]["output"];
  src: Array<LangObject>;
};

export type HomepageDynamicBlocLink = {
  __typename?: "HomepageDynamicBlocLink";
  href: Array<LangObject>;
  icon: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  referrerpolicy: Scalars["String"]["output"];
  rel: Scalars["String"]["output"];
  target: Scalars["String"]["output"];
  text: Array<LangObject>;
};

export type HomepageDynamicData = {
  __typename?: "HomepageDynamicData";
  blocs: Array<HomepageDynamicBloc>;
  formFeedback: HomepageFormFeedback;
  id: Scalars["ID"]["output"];
  promoBanners: Array<HomepagePromoBanner>;
};

export type HomepageFormFeedback = {
  __typename?: "HomepageFormFeedback";
  id: Scalars["ID"]["output"];
  link: HomepageDynamicBlocLink;
  text: Array<LangObject>;
};

export type HomepagePromoBanner = {
  __typename?: "HomepagePromoBanner";
  condition: HomepagePromoCondition;
  icon: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  link: HomepageDynamicBlocLink;
  text: Array<LangObject>;
};

export type HomepagePromoCondition = {
  __typename?: "HomepagePromoCondition";
  id: Scalars["ID"]["output"];
  subscriptionBillingUnit: Scalars["String"]["output"];
  subscriptionMonthOld: Scalars["Int"]["output"];
};

export type HomepageSimpleDynamicBloc = {
  __typename?: "HomepageSimpleDynamicBloc";
  id: Scalars["ID"]["output"];
  image: HomepageSimpleDynamicBlocImage;
  isActive: Scalars["Boolean"]["output"];
  link: HomepageSimpleDynamicBlocLink;
  subTitle: Scalars["String"]["output"];
  text: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
};

export type HomepageSimpleDynamicBlocImage = {
  __typename?: "HomepageSimpleDynamicBlocImage";
  id: Scalars["ID"]["output"];
  src: Scalars["String"]["output"];
};

export type HomepageSimpleDynamicBlocLink = {
  __typename?: "HomepageSimpleDynamicBlocLink";
  href: Scalars["String"]["output"];
  icon: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  referrerpolicy: Scalars["String"]["output"];
  rel: Scalars["String"]["output"];
  target: Scalars["String"]["output"];
  text: Scalars["String"]["output"];
};

export type HomepageSimpleDynamicData = {
  __typename?: "HomepageSimpleDynamicData";
  blocs: Array<HomepageSimpleDynamicBloc>;
  formFeedback: HomepageSimpleFormFeedback;
  id: Scalars["ID"]["output"];
  promoBanners: Array<HomepageSimplePromoBanner>;
};

export type HomepageSimpleFormFeedback = {
  __typename?: "HomepageSimpleFormFeedback";
  id: Scalars["ID"]["output"];
  link: HomepageSimpleDynamicBlocLink;
  text: Scalars["String"]["output"];
};

export type HomepageSimplePromoBanner = {
  __typename?: "HomepageSimplePromoBanner";
  icon: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  link: HomepageSimpleDynamicBlocLink;
  text: Scalars["String"]["output"];
};

export type HostedAllBulkActionsOnInstancesReportsResult = {
  __typename?: "HostedAllBulkActionsOnInstancesReportsResult";
  data?: Maybe<Array<Maybe<HostedBulkActionsOnInstancesReportLight>>>;
  error?: Maybe<Scalars["String"]["output"]>;
};

export type HostedBackupFilesLink = {
  __typename?: "HostedBackupFilesLink";
  endDate?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  password: Scalars["String"]["output"];
  startDate: Scalars["String"]["output"];
  username: Scalars["String"]["output"];
};

export type HostedBillingCustomer = {
  __typename?: "HostedBillingCustomer";
  chargebeeCustomerId?: Maybe<Scalars["String"]["output"]>;
  email: Scalars["String"]["output"];
  shopId: Scalars["String"]["output"];
  subscription: HostedIBillingSubscription;
};

export enum HostedBillingPeriodUnitEnum {
  Day = "day",
  Month = "month",
  Week = "week",
  Year = "year",
}

export type HostedBillingProductsAndPlan = {
  __typename?: "HostedBillingProductsAndPlan";
  plan: Scalars["String"]["output"];
  product: Scalars["String"]["output"];
};

export type HostedBulkActionOnInstanceLogs = {
  __typename?: "HostedBulkActionOnInstanceLogs";
  bulkActionsOnInstancesReportId: Scalars["String"]["output"];
  instanceId: Scalars["String"]["output"];
  logs: Array<Scalars["String"]["output"]>;
};

export type HostedBulkActionOnInstanceLogsResult = {
  __typename?: "HostedBulkActionOnInstanceLogsResult";
  data?: Maybe<HostedBulkActionOnInstanceLogs>;
  error?: Maybe<Scalars["String"]["output"]>;
};

export enum HostedBulkActionOnInstanceType {
  IncludeFileContent = "INCLUDE_FILE_CONTENT",
  LaunchSshCommand = "LAUNCH_SSH_COMMAND",
  UploadFile = "UPLOAD_FILE",
}

export type HostedBulkActionsOnInstancesInput = {
  actions: Array<HostedCommandOnInstanceInput>;
  instances: Array<Scalars["ID"]["input"]>;
  schedule?: InputMaybe<HostedScheduleInput>;
  usePrelude?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type HostedBulkActionsOnInstancesReport = {
  __typename?: "HostedBulkActionsOnInstancesReport";
  actions: Array<HostedCommandOnInstanceLight>;
  date: Scalars["DateTime"]["output"];
  instances: Array<HostedInstanceFromDbDetailsLight>;
};

export type HostedBulkActionsOnInstancesReportContainingKeywordsResult = {
  __typename?: "HostedBulkActionsOnInstancesReportContainingKeywordsResult";
  data?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  error?: Maybe<Scalars["String"]["output"]>;
};

export type HostedBulkActionsOnInstancesReportLight = {
  __typename?: "HostedBulkActionsOnInstancesReportLight";
  date: Scalars["DateTime"]["output"];
  id: Scalars["ID"]["output"];
  nbrOfInstances: Scalars["Int"]["output"];
};

export type HostedBulkActionsOnInstancesReportResult = {
  __typename?: "HostedBulkActionsOnInstancesReportResult";
  data?: Maybe<HostedBulkActionsOnInstancesReport>;
  error?: Maybe<Scalars["String"]["output"]>;
};

export type HostedBulkActionsOnInstancesResult = {
  __typename?: "HostedBulkActionsOnInstancesResult";
  data?: Maybe<HostedGenericMutationSucceeded>;
  error?: Maybe<HostedGenericMutationFailed>;
};

export type HostedBuyDomainFailed = {
  __typename?: "HostedBuyDomainFailed";
  errorList: Array<Maybe<Scalars["String"]["output"]>>;
  status: HostedBuyDomainResultStatus;
};

export type HostedBuyDomainInput = {
  /** Billing Subscription ID */
  billingSubscriptionId: Scalars["ID"]["input"];
  /** Instance ID (from Gandi) */
  instanceId: Scalars["ID"]["input"];
  /** Domain owner informations */
  owner: HostedDomainOwnerInput;
  /** Price */
  price: Scalars["Float"]["input"];
  /** New shop domain, ex: myshop.com */
  shopDomain: Scalars["String"]["input"];
};

export type HostedBuyDomainResult = {
  __typename?: "HostedBuyDomainResult";
  data?: Maybe<HostedBuyDomainStarted>;
  error?: Maybe<HostedBuyDomainFailed>;
};

export enum HostedBuyDomainResultStatus {
  Failure = "FAILURE",
  Success = "SUCCESS",
}

export type HostedBuyDomainStarted = {
  __typename?: "HostedBuyDomainStarted";
  startedAt: Scalars["DateTime"]["output"];
  status: HostedBuyDomainResultStatus;
};

export type HostedCleanDatabaseResult = {
  __typename?: "HostedCleanDatabaseResult";
  data?: Maybe<HostedGenericMutationSucceeded>;
  error?: Maybe<HostedGenericMutationFailed>;
};

export type HostedCleanForwardingAddressesResult = {
  __typename?: "HostedCleanForwardingAddressesResult";
  data?: Maybe<HostedGenericMutationSucceeded>;
  error?: Maybe<HostedGenericMutationFailed>;
};

export type HostedCommandOnInstanceInput = {
  fileToIncludeCommands?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  sshCommands?: InputMaybe<Array<InputMaybe<Scalars["HostedSshOnInstanceCommand"]["input"]>>>;
  type: HostedBulkActionOnInstanceType;
  uploadCommands?: InputMaybe<Array<InputMaybe<Scalars["HostedUploadOnInstanceCommand"]["input"]>>>;
};

export type HostedCommandOnInstanceLight = {
  __typename?: "HostedCommandOnInstanceLight";
  commands: Array<Scalars["String"]["output"]>;
  type: HostedBulkActionOnInstanceType;
};

export type HostedCreateBackupResult = {
  __typename?: "HostedCreateBackupResult";
  data?: Maybe<HostedGenericMutationSucceeded>;
  error?: Maybe<HostedGenericMutationFailed>;
};

export type HostedCreateVHostDomainInput = {
  /** New shop domain, ex: myshop.com */
  shopDomain: Scalars["String"]["input"];
  /** Shop ID (from Gandi) */
  shopId: Scalars["ID"]["input"];
};

export type HostedCreateVHostFailed = {
  __typename?: "HostedCreateVHostFailed";
  errorList: Array<Maybe<Scalars["String"]["output"]>>;
  status: HostedCreateVHostResultStatus;
};

export type HostedCreateVHostResult = {
  __typename?: "HostedCreateVHostResult";
  data?: Maybe<HostedCreateVHostStarted>;
  error?: Maybe<HostedCreateVHostFailed>;
};

export enum HostedCreateVHostResultStatus {
  Failure = "FAILURE",
  Success = "SUCCESS",
}

export type HostedCreateVHostStarted = {
  __typename?: "HostedCreateVHostStarted";
  infos: HostedVhostInfos;
  startedAt: Scalars["DateTime"]["output"];
  status: HostedCreateVHostResultStatus;
};

export type HostedDnsResponse = {
  __typename?: "HostedDNSResponse";
  isDouble: Scalars["Boolean"]["output"];
  status: Scalars["Boolean"]["output"];
};

export type HostedDeleteVHostDomainInput = {
  /** New shop domain, ex: myshop.com */
  shopDomain: Scalars["String"]["input"];
  /** Shop ID (from Gandi) */
  shopId: Scalars["ID"]["input"];
};

export type HostedDeleteVHostFailed = {
  __typename?: "HostedDeleteVHostFailed";
  errorList: Array<Maybe<Scalars["String"]["output"]>>;
  status: HostedDeleteVHostResultStatus;
};

export type HostedDeleteVHostResult = {
  __typename?: "HostedDeleteVHostResult";
  data?: Maybe<HostedDeleteVHostStarted>;
  error?: Maybe<HostedDeleteVHostFailed>;
};

export enum HostedDeleteVHostResultStatus {
  Failure = "FAILURE",
  Success = "SUCCESS",
}

export type HostedDeleteVHostStarted = {
  __typename?: "HostedDeleteVHostStarted";
  startedAt: Scalars["DateTime"]["output"];
  status: HostedDeleteVHostResultStatus;
};

export type HostedDiskUsage = {
  __typename?: "HostedDiskUsage";
  total: Scalars["Float"]["output"];
  used: Scalars["Float"]["output"];
};

export type HostedDomain = {
  __typename?: "HostedDomain";
  billing?: Maybe<HostedDomainBilling>;
  name: Scalars["String"]["output"];
};

export type HostedDomainAvailable = {
  __typename?: "HostedDomainAvailable";
  billing?: Maybe<HostedBillingProductsAndPlan>;
  domain: Scalars["String"]["output"];
  price: Scalars["Float"]["output"];
};

export type HostedDomainBilling = {
  __typename?: "HostedDomainBilling";
  date?: Maybe<Scalars["Float"]["output"]>;
  dateRenew?: Maybe<Scalars["Float"]["output"]>;
  gandiPrice?: Maybe<Scalars["Float"]["output"]>;
  gandiRenewPrice?: Maybe<Scalars["Float"]["output"]>;
  hostingPrice?: Maybe<Scalars["Float"]["output"]>;
  plan?: Maybe<Scalars["String"]["output"]>;
  product?: Maybe<Scalars["String"]["output"]>;
  subscriptionId?: Maybe<Scalars["String"]["output"]>;
};

export type HostedDomainNamesAutorenewCheckResult = {
  __typename?: "HostedDomainNamesAutorenewCheckResult";
  data?: Maybe<HostedGenericMutationSucceeded>;
  error?: Maybe<HostedGenericMutationFailed>;
};

export type HostedDomainOwnerInput = {
  city?: InputMaybe<Scalars["String"]["input"]>;
  countryCode: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  firstname: Scalars["String"]["input"];
  lastname: Scalars["String"]["input"];
  phone?: InputMaybe<Scalars["String"]["input"]>;
  street: Scalars["String"]["input"];
  type: HostedOwnerType;
  zip?: InputMaybe<Scalars["String"]["input"]>;
};

export type HostedDomainResult = {
  __typename?: "HostedDomainResult";
  data: Array<Maybe<HostedDomainAvailable>>;
};

export type HostedEnableConsoleInput = {
  instanceId: Scalars["String"]["input"];
};

export type HostedEnableConsoleResult = {
  __typename?: "HostedEnableConsoleResult";
  data?: Maybe<HostedGenericMutationSucceeded>;
  error?: Maybe<HostedGenericMutationFailed>;
};

export enum HostedGandiInstanceStatus {
  Active = "active",
  BeingCreated = "being_created",
  BeingDeleted = "being_deleted",
  BeingUpgraded = "being_upgraded",
  Deleted = "deleted",
  Locked = "locked",
  Paused = "paused",
  WaitingBill = "waiting_bill",
  WaitingConfiguration = "waiting_configuration",
}

export type HostedGenericMutationFailed = {
  __typename?: "HostedGenericMutationFailed";
  errorList: Array<Maybe<Scalars["String"]["output"]>>;
  status: HostedMutationResultStatus;
};

export type HostedGenericMutationSucceeded = {
  __typename?: "HostedGenericMutationSucceeded";
  status: HostedMutationResultStatus;
};

export type HostedGetAllPlansResult = {
  __typename?: "HostedGetAllPlansResult";
  plans?: Maybe<Array<Maybe<HostedPlan>>>;
};

export type HostedGetAllVhostsResult = {
  __typename?: "HostedGetAllVhostsResult";
  data?: Maybe<HostedVhostsResult>;
  error?: Maybe<Scalars["String"]["output"]>;
};

export type HostedGetInstanceDetailsResult = {
  __typename?: "HostedGetInstanceDetailsResult";
  data?: Maybe<HostedInstanceDetailsResult>;
  error?: Maybe<Scalars["String"]["output"]>;
};

export type HostedGetInstancesFromDbResult = {
  __typename?: "HostedGetInstancesFromDbResult";
  data?: Maybe<HostedInstanceFromDbListResult>;
  error?: Maybe<Scalars["String"]["output"]>;
};

export type HostedGetInstancesFromHosterResult = {
  __typename?: "HostedGetInstancesFromHosterResult";
  data?: Maybe<HostedInstanceFromHosterListResult>;
  error?: Maybe<Scalars["String"]["output"]>;
};

export enum HostedHostedAdminStatus {
  Authorized = "AUTHORIZED",
  Forbidden = "FORBIDDEN",
}

export type HostedHosting = {
  __typename?: "HostedHosting";
  completedAt?: Maybe<Scalars["DateTime"]["output"]>;
  failureReason?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  installationProcess?: Maybe<HostedInstallationProcess>;
  shop: HostedShop;
  status: HostedHostingStatus;
  user: HostedUser;
};

export type HostedHostingInstallationProcessArgs = {
  userLang?: InputMaybe<Scalars["Locale"]["input"]>;
};

export type HostedHostingCompletedEvent = {
  __typename?: "HostedHostingCompletedEvent";
  hosting: HostedHosting;
  id: Scalars["ID"]["output"];
};

export type HostedHostingCreateInput = {
  /** Instance Id to use */
  instanceId?: InputMaybe<Scalars["String"]["input"]>;
  /** Sandbox mode (dry-run) */
  sandbox?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** New shop operation country */
  shopCountry: Scalars["CountryCode"]["input"];
  /** New shop domain, ex: myshop */
  shopDomain: Scalars["String"]["input"];
  /** New shop ID */
  shopId: Scalars["ID"]["input"];
  /** New shop name */
  shopName: Scalars["String"]["input"];
  /** Subscription ID (from billing) */
  subscriptionId: Scalars["ID"]["input"];
  /** Billing email */
  userEmail: Scalars["HostedEmail"]["input"];
  /** User firstname */
  userFirstname: Scalars["String"]["input"];
  /** User ID (from accounts) */
  userId: Scalars["ID"]["input"];
  /** User lang (from context) */
  userLang: Scalars["Locale"]["input"];
  /** User lastname */
  userLastname: Scalars["String"]["input"];
};

export type HostedHostingCreateMetadatas = {
  __typename?: "HostedHostingCreateMetadatas";
  boUrl?: Maybe<Scalars["String"]["output"]>;
  instanceId?: Maybe<Scalars["String"]["output"]>;
  shopCountry?: Maybe<Scalars["CountryCode"]["output"]>;
  shopDomain: Scalars["String"]["output"];
  shopId: Scalars["ID"]["output"];
  shopName: Scalars["String"]["output"];
  shopPassword?: Maybe<Scalars["String"]["output"]>;
  subscriptionId: Scalars["ID"]["output"];
  userEmail: Scalars["HostedEmail"]["output"];
  userFirstname: Scalars["String"]["output"];
  userId: Scalars["ID"]["output"];
  userLang: Scalars["Locale"]["output"];
  userLastname: Scalars["String"]["output"];
};

export type HostedHostingCreateResult = {
  __typename?: "HostedHostingCreateResult";
  data?: Maybe<HostedHostingCreationStarted>;
  error?: Maybe<HostedHostingCreationFailed>;
};

export type HostedHostingCreationFailed = {
  __typename?: "HostedHostingCreationFailed";
  errorList: Array<Maybe<Scalars["String"]["output"]>>;
  status: HostedMutationResultStatus;
};

export type HostedHostingCreationStarted = {
  __typename?: "HostedHostingCreationStarted";
  hostingId: Scalars["ID"]["output"];
  startedAt: Scalars["DateTime"]["output"];
  status: HostedMutationResultStatus;
};

export type HostedHostingFailedEvent = {
  __typename?: "HostedHostingFailedEvent";
  hosting: HostedHosting;
  id: Scalars["ID"]["output"];
};

export enum HostedHostingStatus {
  Completed = "COMPLETED",
  Failed = "FAILED",
  ShopLinkingAsked = "SHOP_LINKING_ASKED",
  ShopLinkingFailed = "SHOP_LINKING_FAILED",
}

export type HostedHostingTimelineEvent = {
  __typename?: "HostedHostingTimelineEvent";
  event: Scalars["String"]["output"];
  timestamp: Scalars["String"]["output"];
};

export type HostedIBillingSubscription = {
  __typename?: "HostedIBillingSubscription";
  activated_at: Scalars["Int"]["output"];
  billing_period: Scalars["Int"]["output"];
  billing_period_unit: HostedBillingPeriodUnitEnum;
  cancelled_at: Scalars["Int"]["output"];
  coupon?: Maybe<HostedICouponInSubscription>;
  created_at: Scalars["Int"]["output"];
  currency_code: Scalars["String"]["output"];
  customer_id: Scalars["ID"]["output"];
  due_invoices_count: Scalars["Int"]["output"];
  has_scheduled_changes: Scalars["Boolean"]["output"];
  id: Scalars["ID"]["output"];
  is_free_trial_used: Scalars["Boolean"]["output"];
  meta_data: HostedISubscriptionMetadata;
  mrr: Scalars["Int"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  next_billing_at: Scalars["Int"]["output"];
  parent_plan_name?: Maybe<Scalars["String"]["output"]>;
  parent_product_id?: Maybe<Scalars["String"]["output"]>;
  period: Scalars["Int"]["output"];
  period_unit: HostedBillingPeriodUnitEnum;
  plan_amount: Scalars["Int"]["output"];
  plan_id: Scalars["ID"]["output"];
  plan_quantity: Scalars["Int"]["output"];
  plan_unit_price: Scalars["Int"]["output"];
  price: Scalars["Int"]["output"];
  pricing_model: HostedPricingModel;
  product_name?: Maybe<Scalars["String"]["output"]>;
  scheduled_change?: Maybe<Scalars["Boolean"]["output"]>;
  status: HostedSubscriptionStatus;
  subscription_items: Array<Maybe<HostedISubscriptionItem>>;
  subscription_scheduled_changes?: Maybe<HostedISubscriptionScheduledChanges>;
  trial_end: Scalars["Int"]["output"];
  updated_at: Scalars["Int"]["output"];
};

export type HostedICouponInSubscription = {
  __typename?: "HostedICouponInSubscription";
  applied_count: Scalars["Int"]["output"];
  apply_till?: Maybe<Scalars["Int"]["output"]>;
  coupon_code?: Maybe<Scalars["String"]["output"]>;
  coupon_id: Scalars["String"]["output"];
};

export type HostedISubscriptionItem = {
  __typename?: "HostedISubscriptionItem";
  amount?: Maybe<Scalars["Int"]["output"]>;
  item_price_id: Scalars["String"]["output"];
  item_type: HostedItemType;
  quantity?: Maybe<Scalars["Int"]["output"]>;
  unit_price?: Maybe<Scalars["Int"]["output"]>;
};

export type HostedISubscriptionMetadata = {
  __typename?: "HostedISubscriptionMetadata";
  module: Scalars["String"]["output"];
};

export type HostedISubscriptionScheduledChanges = {
  __typename?: "HostedISubscriptionScheduledChanges";
  item_price_id: Scalars["String"]["output"];
  quantity: Scalars["Int"]["output"];
  unit_price: Scalars["Int"]["output"];
};

export type HostedInstallationProcess = {
  __typename?: "HostedInstallationProcess";
  maxRetry: Scalars["Int"]["output"];
  percentage: Scalars["Int"]["output"];
  retry: Scalars["Int"]["output"];
  status: Scalars["String"]["output"];
  steps: Array<HostedInstallationProcessSteps>;
};

export type HostedInstallationProcessSteps = {
  __typename?: "HostedInstallationProcessSteps";
  name: Scalars["String"]["output"];
  percentage: Scalars["Int"]["output"];
  weight: Scalars["Int"]["output"];
};

export type HostedInstanceDetailsResult = {
  __typename?: "HostedInstanceDetailsResult";
  apiVersion: Scalars["String"]["output"];
  backupFilesLink?: Maybe<HostedBackupFilesLink>;
  billingCustomer?: Maybe<HostedBillingCustomer>;
  bulkActionsOnInstances: Array<Maybe<Scalars["ID"]["output"]>>;
  consoleEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  consoleUrl?: Maybe<Scalars["String"]["output"]>;
  cpu?: Maybe<Scalars["Int"]["output"]>;
  creationDateTimestamp: Scalars["String"]["output"];
  datacenter?: Maybe<Scalars["String"]["output"]>;
  diskUsage?: Maybe<HostedDiskUsage>;
  diskUsageString?: Maybe<Scalars["String"]["output"]>;
  error?: Maybe<Scalars["String"]["output"]>;
  errorUpdateDomain?: Maybe<Scalars["String"]["output"]>;
  ftpUrl?: Maybe<Scalars["String"]["output"]>;
  gandiBoUrl?: Maybe<Scalars["String"]["output"]>;
  installationStatus: Scalars["String"]["output"];
  instanceCreationDate?: Maybe<Scalars["String"]["output"]>;
  instanceId: Scalars["ID"]["output"];
  instancePassword?: Maybe<Scalars["String"]["output"]>;
  instanceStatus?: Maybe<Scalars["String"]["output"]>;
  logStack?: Maybe<HostedLogStackResult>;
  metadatas?: Maybe<HostedHostingCreateMetadatas>;
  mongoId: Scalars["String"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  passwordUpdatedDate?: Maybe<Scalars["String"]["output"]>;
  phpMyAdminUrl?: Maybe<Scalars["String"]["output"]>;
  ram?: Maybe<Scalars["String"]["output"]>;
  shopDomain?: Maybe<Scalars["String"]["output"]>;
  shopId: Scalars["String"]["output"];
  shopLinked?: Maybe<Scalars["Boolean"]["output"]>;
  size?: Maybe<Scalars["String"]["output"]>;
  subscriptionId: Scalars["String"]["output"];
  subscription_cancelled?: Maybe<Scalars["Boolean"]["output"]>;
  timeline: Array<Maybe<HostedHostingTimelineEvent>>;
  trialRenewed?: Maybe<Scalars["Boolean"]["output"]>;
  updateDomainStatus?: Maybe<Scalars["String"]["output"]>;
  userId: Scalars["String"]["output"];
  vhosts?: Maybe<Array<HostedInstanceDetailsVhost>>;
};

export type HostedInstanceDetailsVhost = {
  __typename?: "HostedInstanceDetailsVhost";
  fqdn: Scalars["String"]["output"];
  href: Scalars["String"]["output"];
};

export type HostedInstanceFromDbDetailsLight = {
  __typename?: "HostedInstanceFromDbDetailsLight";
  hostingCreationDate: Scalars["String"]["output"];
  installationStatus: Scalars["String"]["output"];
  instanceId?: Maybe<Scalars["ID"]["output"]>;
  mongoId: Scalars["ID"]["output"];
  shopId: Scalars["String"]["output"];
  shopName: Scalars["String"]["output"];
};

export type HostedInstanceFromDbListResult = {
  __typename?: "HostedInstanceFromDbListResult";
  instances?: Maybe<Array<HostedInstanceFromDbDetailsLight>>;
  totalCount: Scalars["Int"]["output"];
};

export type HostedInstanceFromHosterDetailsLight = {
  __typename?: "HostedInstanceFromHosterDetailsLight";
  creationDate: Scalars["String"]["output"];
  instanceId: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  status: Scalars["String"]["output"];
};

export type HostedInstanceFromHosterListResult = {
  __typename?: "HostedInstanceFromHosterListResult";
  instances?: Maybe<Array<HostedInstanceFromHosterDetailsLight>>;
  totalCount: Scalars["Int"]["output"];
};

export type HostedInstancesFromHosterSearchParams = {
  numberOfResultsPerPage?: InputMaybe<Scalars["Int"]["input"]>;
  pageNumber?: InputMaybe<Scalars["Int"]["input"]>;
  searchString?: InputMaybe<Scalars["String"]["input"]>;
  sortBy?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<HostedGandiInstanceStatus>;
};

export enum HostedItemType {
  Addon = "addon",
  Charge = "charge",
  Plan = "plan",
}

export type HostedLinkShopWithAccountInput = {
  instanceId: Scalars["String"]["input"];
};

export type HostedLinkShopWithAccountResult = {
  __typename?: "HostedLinkShopWithAccountResult";
  data?: Maybe<HostedGenericMutationSucceeded>;
  error?: Maybe<HostedGenericMutationFailed>;
};

export type HostedLiveActionsOnInstancesResult = {
  __typename?: "HostedLiveActionsOnInstancesResult";
  event: Scalars["String"]["output"];
};

export type HostedLiveEventsInput = {
  channelFilter?: InputMaybe<Scalars["String"]["input"]>;
};

export enum HostedLiveEventsMainChannels {
  AccountsCommunication = "accountsCommunication",
  BulkActionsOnInstances = "bulkActionsOnInstances",
  GlobalHosting = "globalHosting",
}

export type HostedLiveEventsResult = {
  __typename?: "HostedLiveEventsResult";
  message: Scalars["String"]["output"];
  trigger: Scalars["String"]["output"];
};

export type HostedLogStackResult = {
  __typename?: "HostedLogStackResult";
  logs: Array<Scalars["String"]["output"]>;
};

export enum HostedMutationResultStatus {
  Failure = "FAILURE",
  Success = "SUCCESS",
}

export enum HostedOwnerType {
  Association = "association",
  Company = "company",
  Individual = "individual",
  Publicbody = "publicbody",
}

export type HostedPatchSslResult = {
  __typename?: "HostedPatchSSLResult";
  data?: Maybe<HostedGenericMutationSucceeded>;
  error?: Maybe<HostedGenericMutationFailed>;
};

export type HostedPlan = {
  __typename?: "HostedPlan";
  id: Scalars["String"]["output"];
  periodUnit: Scalars["String"]["output"];
  price: Scalars["Float"]["output"];
  productId: Scalars["String"]["output"];
  status: Scalars["String"]["output"];
  title?: Maybe<Scalars["String"]["output"]>;
  trialPeriodUnit?: Maybe<Scalars["String"]["output"]>;
  trialPeriodValue?: Maybe<Scalars["Float"]["output"]>;
};

export enum HostedPricingModel {
  FlatFee = "flat_fee",
  PerUnit = "per_unit",
  Stairstep = "stairstep",
  Tiered = "tiered",
  Volume = "volume",
}

export type HostedResetPasswordInput = {
  instanceId: Scalars["String"]["input"];
};

export type HostedResetPasswordResult = {
  __typename?: "HostedResetPasswordResult";
  data?: Maybe<HostedGenericMutationSucceeded>;
  error?: Maybe<HostedGenericMutationFailed>;
};

export type HostedScheduleInput = {
  day: Scalars["Int"]["input"];
  hour: Scalars["Int"]["input"];
  minutes: Scalars["Int"]["input"];
  month: Scalars["Int"]["input"];
  seconds: Scalars["Int"]["input"];
  year: Scalars["Int"]["input"];
};

export type HostedSetInstanceStatusToErrorResult = {
  __typename?: "HostedSetInstanceStatusToErrorResult";
  data?: Maybe<HostedGenericMutationSucceeded>;
  error?: Maybe<HostedGenericMutationFailed>;
};

/** The deployment of an hosted shop @hosting */
export type HostedShop = {
  __typename?: "HostedShop";
  adminUrl?: Maybe<Scalars["String"]["output"]>;
  country: Scalars["CountryCode"]["output"];
  domain: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  subscriptionId: Scalars["ID"]["output"];
};

export type HostedShopDomainInfos = {
  __typename?: "HostedShopDomainInfos";
  boUrl?: Maybe<Scalars["String"]["output"]>;
  currentShopDomain?: Maybe<Scalars["String"]["output"]>;
  domains?: Maybe<Array<Maybe<HostedDomain>>>;
  hasBeenChanged: Scalars["Boolean"]["output"];
  instanceId: Scalars["ID"]["output"];
  originShopDomain: Scalars["String"]["output"];
  shopCountry: Scalars["String"]["output"];
  trialRenewed?: Maybe<Scalars["Boolean"]["output"]>;
};

export type HostedShopLinkingFailedEvent = {
  __typename?: "HostedShopLinkingFailedEvent";
  hosting: HostedHosting;
  id: Scalars["ID"]["output"];
};

export type HostedShopOrInstanceIdInput = {
  instanceId?: InputMaybe<Scalars["ID"]["input"]>;
  shopId?: InputMaybe<Scalars["ID"]["input"]>;
};

export type HostedStopHostingCreationResult = {
  __typename?: "HostedStopHostingCreationResult";
  data?: Maybe<HostedGenericMutationSucceeded>;
  error?: Maybe<HostedGenericMutationFailed>;
};

export enum HostedSubscriptionStatus {
  Active = "active",
  Cancelled = "cancelled",
  Future = "future",
  InTrial = "in_trial",
  NonRenewing = "non_renewing",
  Paused = "paused",
}

export type HostedUpdateDomainFailed = {
  __typename?: "HostedUpdateDomainFailed";
  errorList: Array<Maybe<Scalars["String"]["output"]>>;
  status: HostedUpdateDomainResultStatus;
};

export type HostedUpdateDomainInput = {
  /** Is the action is from care ? */
  fromCare?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Instance ID (from Gandi) */
  instanceId: Scalars["ID"]["input"];
  /** New shop domain, ex: myshop.com */
  shopDomain: Scalars["String"]["input"];
};

export type HostedUpdateDomainResult = {
  __typename?: "HostedUpdateDomainResult";
  data?: Maybe<HostedUpdateDomainStarted>;
  error?: Maybe<HostedUpdateDomainFailed>;
};

export enum HostedUpdateDomainResultStatus {
  Failure = "FAILURE",
  Success = "SUCCESS",
}

export type HostedUpdateDomainStarted = {
  __typename?: "HostedUpdateDomainStarted";
  startedAt: Scalars["DateTime"]["output"];
  status: HostedUpdateDomainResultStatus;
};

export type HostedUser = {
  __typename?: "HostedUser";
  country: Scalars["String"]["output"];
  email: Scalars["HostedEmail"]["output"];
  firstname: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  lang: Scalars["Locale"]["output"];
  lastname: Scalars["String"]["output"];
};

export type HostedValidateHostedAdminResult = {
  __typename?: "HostedValidateHostedAdminResult";
  status?: Maybe<HostedHostedAdminStatus>;
};

export type HostedVhostAndRelatedInstance = {
  __typename?: "HostedVhostAndRelatedInstance";
  fqdn: Scalars["String"]["output"];
  instanceId: Scalars["String"]["output"];
  instanceName: Scalars["String"]["output"];
};

export type HostedVhostInfos = {
  __typename?: "HostedVhostInfos";
  A?: Maybe<Scalars["String"]["output"]>;
  AAAA?: Maybe<Scalars["String"]["output"]>;
  TXT?: Maybe<Scalars["String"]["output"]>;
  key?: Maybe<Scalars["String"]["output"]>;
  redirectUri?: Maybe<Scalars["String"]["output"]>;
  status: Array<Maybe<HostedVhostStatus>>;
};

export type HostedVhostInfosChecked = {
  __typename?: "HostedVhostInfosChecked";
  A: HostedDnsResponse;
  AAAA: HostedDnsResponse;
  TXT: Scalars["Boolean"]["output"];
};

export type HostedVhostInfosResult = {
  __typename?: "HostedVhostInfosResult";
  data?: Maybe<HostedVhostInfos>;
  error?: Maybe<Scalars["String"]["output"]>;
};

export type HostedVhostInput = {
  instanceId?: InputMaybe<Scalars["ID"]["input"]>;
  shopDomain: Scalars["String"]["input"];
  shopId?: InputMaybe<Scalars["ID"]["input"]>;
};

export enum HostedVhostStatus {
  Done = "DONE",
  Ending = "ENDING",
  EndingFailed = "ENDING_FAILED",
  EndingSuccess = "ENDING_SUCCESS",
  Error = "ERROR",
  Generatessl = "GENERATESSL",
  GeneratesslFailed = "GENERATESSL_FAILED",
  GeneratesslSuccess = "GENERATESSL_SUCCESS",
  Ongoing = "ONGOING",
  OngoingFailed = "ONGOING_FAILED",
  OngoingSuccess = "ONGOING_SUCCESS",
  Starting = "STARTING",
  StartingFailed = "STARTING_FAILED",
  StartingSuccess = "STARTING_SUCCESS",
}

export type HostedVhostsResult = {
  __typename?: "HostedVhostsResult";
  vhosts: Array<Maybe<HostedVhostAndRelatedInstance>>;
};

export type InvoiceDownloadDto = {
  __typename?: "InvoiceDownloadDto";
  /** The URL at which the file is available for download. */
  downloadUrl: Scalars["String"]["output"];
  /** The time until which the downloadUrl is valid */
  validTill: Scalars["Float"]["output"];
};

export type InvoiceDto = {
  __typename?: "InvoiceDto";
  /** Amount of the invoice that must be still paid in EUR/2 format (20€ equals 2000) */
  amountDue?: Maybe<Scalars["Float"]["output"]>;
  /** Amount of the invoice that is already paid in EUR/2 format (20€ equals 2000) */
  amountPaid?: Maybe<Scalars["Float"]["output"]>;
  /** Amount of the invoice in EUR/2 format (20€ equals 2000) */
  amountTotal: Scalars["Float"]["output"];
  /** Currency used. Only EUR is supported. */
  currencyCode: Scalars["String"]["output"];
  /** Id of the customer who owns the subscription. It is mostly the shop id, but can also be the customer account id. */
  customerId: Scalars["String"]["output"];
  /** Timestamp at which the invoice has been generated */
  invoiceDate?: Maybe<Scalars["Float"]["output"]>;
  /** Id of the invoice. */
  invoiceId: Scalars["String"]["output"];
  /** List of InvoiceLineItems */
  lineItems: Array<Maybe<InvoiceLineItemDto>>;
  /** Timestamp at which the invoice has been paid */
  paymentDate?: Maybe<Scalars["Float"]["output"]>;
  /** Id of the product linked to the invoice. */
  productId?: Maybe<Scalars["String"]["output"]>;
  /** Status of the invoice */
  status: Scalars["String"]["output"];
  /** Id of the subscription linked to the invoice. */
  subscriptionId: Scalars["String"]["output"];
  /** Amount of tax in EUR/2 format (20€ equals 2000) */
  taxAmount: Scalars["Float"]["output"];
  /** Whether the invoice contains the tax or not */
  taxIncluded: Scalars["Boolean"]["output"];
};

export type InvoiceLineItemDto = {
  __typename?: "InvoiceLineItemDto";
  /** Amount without tax of the line in EUR/2 format (20€ equals 2000) */
  amount?: Maybe<Scalars["Float"]["output"]>;
  /** Id of the component */
  componentId?: Maybe<Scalars["String"]["output"]>;
  /** Description of the line. In case the line has been added from a charge at term you will find the description associated to the charge at term. */
  description?: Maybe<Scalars["String"]["output"]>;
  /** Type of the line item */
  entityType: Scalars["String"]["output"];
  /** Id of the parent invoice */
  invoiceId: Scalars["String"]["output"];
  /** Id of the line item */
  invoiceLineItemId: Scalars["String"]["output"];
  /** Id of the subscription */
  subscriptionId: Scalars["String"]["output"];
  /** Amount of tax for the line in EUR/2 format (4€ equals 400) */
  taxAmount?: Maybe<Scalars["Float"]["output"]>;
  /** Tax rate for the line in percent with */
  taxRate?: Maybe<Scalars["Float"]["output"]>;
};

export type Json_Container = {
  __typename?: "JSON_container";
  JSON?: Maybe<Scalars["JSON"]["output"]>;
};

export type LangObject = {
  __typename?: "LangObject";
  id: Scalars["ID"]["output"];
  lang: Scalars["String"]["output"];
  value: Scalars["String"]["output"];
};

export type LangObjectInput = {
  id: Scalars["String"]["input"];
  lang: Scalars["String"]["input"];
  value: Scalars["String"]["input"];
};

export type ModuleUpdateDto_Input = {
  data: Scalars["JSON"]["input"];
  version: Scalars["String"]["input"];
};

export type Mutation = {
  __typename?: "Mutation";
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.BILLING_API_URL}`
   * >**Path**: `/v1/customers`
   * Create a customer that will be able to subscribe to a product. A customer could be of 2 types : a shop or a user. At this time, this route only allows to create a user customer.
   *
   */
  addCustomer?: Maybe<AddCustomer_Response>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/user/{args.userUid}/info`
   * Create user account informations by user Id
   *
   */
  addInfo?: Maybe<Scalars["JSON"]["output"]>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.BILLING_API_URL}`
   * >**Path**: `/v1/subscriptions/{args.subscriptionId}/charge_at_term`
   * Oauth Scope: `subscription.write.charge_at_term`
   *
   * ---
   * A charge at term can be added to a subscription, the amount and description is customisable. This charge at term will be added to the next invoice. Several charges at term can be added for the same subscription period. The subscription should be in status 'active' or 'non_renewing' to allow to add a charge at term.
   *
   */
  addSubscriptionChargeAtTerm?: Maybe<AddSubscriptionChargeAtTerm_Response>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.BILLING_API_URL}`
   * >**Path**: `/v1/estimates`
   * OAuth Scope: `customer.write.estimate`
   *
   * ---
   *  Creates an estimate for a given user (`:customer_id`) for the plan given in the body of the request. A coupon may be provided which may affect the resulting estimate.
   *
   */
  addSubscriptionEstimateForCustomer?: Maybe<AddSubscriptionEstimateForCustomer_Response>;
  bulkActionsOnInstances: HostedBulkActionsOnInstancesResult;
  buyDomain: HostedBuyDomainResult;
  cleanDatabase: HostedCleanDatabaseResult;
  cleanForwardingAddresses: HostedCleanForwardingAddressesResult;
  completeCheckout: CompleteCheckoutResult;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/user`
   * Create a user as an account
   *
   */
  create?: Maybe<Scalars["JSON"]["output"]>;
  createBackup: HostedCreateBackupResult;
  createCheckout: CreateCheckoutResult;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v2/organizations`
   * Create a new organization with a type
   *
   */
  createOrganization?: Maybe<CreateOrganization_Response>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v2/organizations/{args.organizationId}/addresses`
   * Create a new organization address with a type
   *
   */
  createOrganizationAddress?: Maybe<CreateOrganizationAddress_Response>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/user/create-organizations-from-users-info`
   *
   *
   */
  createOrganizationsFromUsersInfo?: Maybe<Scalars["JSON"]["output"]>;
  createVHostDomain: HostedCreateVHostResult;
  /**
   *
   * >**Method**: `DELETE`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v2/organizations/{args.organizationId}/addresses/{args.addressId}`
   * Delete organization address by address Id
   *
   */
  deleteOrganizationAddressById?: Maybe<DeleteOrganizationAddressById_Response>;
  /**
   *
   * >**Method**: `DELETE`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v2/organizations/{args.organizationId}`
   * Delete organization by Id
   *
   */
  deleteOrganizationById?: Maybe<DeleteOrganizationById_Response>;
  /**
   *
   * >**Method**: `DELETE`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/shop/{args.shopId}/delete`
   *
   *
   */
  deleteShop?: Maybe<Scalars["JSON"]["output"]>;
  deleteVHostDomain: HostedDeleteVHostResult;
  domainNamesAutorenewCheck: HostedDomainNamesAutorenewCheckResult;
  enableConsole: HostedEnableConsoleResult;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/webhook`
   *
   *
   */
  handleWebhook?: Maybe<Scalars["JSON"]["output"]>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v2/webhook`
   *
   *
   */
  handleWebhookV2?: Maybe<Scalars["JSON"]["output"]>;
  hostingCreate: HostedHostingCreateResult;
  linkShopWithAccount: HostedLinkShopWithAccountResult;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/users/migrate-from-addons`
   *
   *
   */
  migrateUsersBatch?: Maybe<Scalars["JSON"]["output"]>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v2/shop/module/update`
   * Do operation on module update
   *
   */
  moduleUpdate?: Maybe<Scalars["JSON"]["output"]>;
  patchSSL: HostedPatchSslResult;
  /**
   *
   * >**Method**: `PATCH`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/user/{args.userUid}/shop/{args.shopUid}`
   *
   *
   */
  patchShop?: Maybe<Scalars["JSON"]["output"]>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/admin/shops/reassociate`
   * Reassociate all shops
   *
   */
  reassociate?: Maybe<Scalars["JSON"]["output"]>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/shop/token/refresh`
   * Refresh shop access token.
   *
   */
  refreshAccessToken?: Maybe<Scalars["JSON"]["output"]>;
  renewTrial: Scalars["Boolean"]["output"];
  resetPassword: HostedResetPasswordResult;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/shop/{args.shopId}/queue-dlq/{args.idJob}/retry`
   * Retry job association stored in the Dead Letter Queue by shop and job id.
   *
   */
  retryJobDLQ?: Maybe<Scalars["JSON"]["output"]>;
  setInstanceStatusToError: HostedSetInstanceStatusToErrorResult;
  /**
   *
   * >**Method**: `PUT`
   * >**Base URL**: `{env.BILLING_API_URL}`
   * >**Path**: `/v1/subscriptions/{args.subscriptionId}/items/{args.subscriptionItemId}/quantity`
   * OAuth Scope: `subscription.write.quantity`
   *
   * ---
   * Quantity is not cumulative, and does not reset on its own on each new billing cycle. The quantity must be explicitely set via this endpoint for the next billing cycle to be updated accordingly.
   *
   */
  setSubscriptionItemQuantity?: Maybe<SetSubscriptionItemQuantity_Response>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.BILLING_API_URL}`
   * >**Path**: `/v1/subscriptions/{args.subscriptionId}/items/{args.subscriptionItemId}/usage`
   * OAuth Scope: `subscription.write.usage`
   *
   * ---
   * Usage is cumulative within a billing period and resets at the end of the billing period. It's only applicable for items related to a metered component.
   *
   */
  setSubscriptionItemUsage?: Maybe<SetSubscriptionItemUsage_Response>;
  /**
   *
   * >**Method**: `PATCH`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/shop/{args.shopId}/validate/edition`
   * Associate Edition shop.
   *
   */
  shopAssociateEdition?: Maybe<Scalars["JSON"]["output"]>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/user/{args.userUid}/shop`
   *
   *
   */
  shopCreate?: Maybe<Scalars["JSON"]["output"]>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/user/shop/draft`
   *
   *
   */
  shopDraftCreate?: Maybe<UserShopController_ShopDraftCreate_201_Response>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/user/{args.userUid}/shop/{args.shopUid}/reonboard`
   *
   *
   */
  shopReonboard?: Maybe<Scalars["JSON"]["output"]>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/user/{args.userUid}/shops`
   *
   *
   */
  shopsCreate?: Maybe<Scalars["JSON"]["output"]>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/user/sso-user-event`
   *
   *
   */
  triggerSsoUserEvent?: Maybe<Scalars["JSON"]["output"]>;
  /**
   *
   * >**Method**: `DELETE`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/user/{args.userUid}/shop/{args.shopUid}`
   *
   *
   */
  unlinkShop?: Maybe<UserShopController_UnlinkShop_Response>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/user/update-users-info`
   *
   *
   */
  updateAllUsers?: Maybe<Scalars["JSON"]["output"]>;
  updateCheckout: UpdateCheckoutResult;
  updateDomain: HostedUpdateDomainResult;
  updateDynamicData: HomepageDynamicData;
  /**
   *
   * >**Method**: `PATCH`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/user/{args.userUid}/info`
   * Update user account informations by user Id
   *
   */
  updateInfo?: Maybe<Scalars["JSON"]["output"]>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/shop/update-oauth2-clients`
   *
   *
   */
  updateOauth2Clients?: Maybe<Scalars["JSON"]["output"]>;
  /**
   *
   * >**Method**: `PUT`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v2/organizations/{args.organizationId}/addresses/{args.addressId}`
   * Update an organization address by address id
   *
   */
  updateOrganizationAddressById?: Maybe<UpdateOrganizationAddressById_Response>;
  /**
   *
   * >**Method**: `PUT`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v2/organizations/{args.organizationId}`
   * Update an user organization by organization id
   *
   */
  updateOrganizationById?: Maybe<UpdateOrganizationById_Response>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/user/refresh-shop-tokens`
   *
   *
   */
  updateShopTokens?: Maybe<Scalars["JSON"]["output"]>;
  /**
   *
   * >**Method**: `PATCH`
   * >**Base URL**: `{env.BILLING_API_URL}`
   * >**Path**: `/v1/subscriptions/{args.subscriptionId}`
   * OAuth Scope: `subscription.write`
   *
   * ---
   * Update a subscription, it's only possible to update the items associated with the subscription and the billing period.
   *
   */
  updateSubscription?: Maybe<UpdateSubscription_Response>;
  /**
   *
   * >**Method**: `POST`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/shop/token/verify`
   * Verify shop token
   *
   */
  verifyToken?: Maybe<Scalars["JSON"]["output"]>;
};

export type MutationAddCustomerArgs = {
  input?: InputMaybe<CreateCustomerDto_Input>;
};

export type MutationAddInfoArgs = {
  input?: InputMaybe<AddUserInfoDto_Input>;
  userUid: Scalars["String"]["input"];
};

export type MutationAddSubscriptionChargeAtTermArgs = {
  input?: InputMaybe<ChargeAtTermDto_Input>;
  subscriptionId: Scalars["String"]["input"];
};

export type MutationAddSubscriptionEstimateForCustomerArgs = {
  input?: InputMaybe<CreateEstimateDto_Input>;
};

export type MutationBulkActionsOnInstancesArgs = {
  input: HostedBulkActionsOnInstancesInput;
};

export type MutationBuyDomainArgs = {
  input: HostedBuyDomainInput;
};

export type MutationCompleteCheckoutArgs = {
  input: CompleteCheckoutInput;
};

export type MutationCreateArgs = {
  input?: InputMaybe<CreateUserDto_Input>;
};

export type MutationCreateBackupArgs = {
  instanceId: Scalars["String"]["input"];
};

export type MutationCreateCheckoutArgs = {
  input: CreateCheckoutInput;
};

export type MutationCreateOrganizationArgs = {
  input?: InputMaybe<CreateOrganizationDto_Input>;
};

export type MutationCreateOrganizationAddressArgs = {
  input?: InputMaybe<CreateOrganizationAddressDto_Input>;
  organizationId: Scalars["String"]["input"];
};

export type MutationCreateVHostDomainArgs = {
  input: HostedCreateVHostDomainInput;
};

export type MutationDeleteOrganizationAddressByIdArgs = {
  addressId: Scalars["String"]["input"];
  organizationId: Scalars["String"]["input"];
};

export type MutationDeleteOrganizationByIdArgs = {
  organizationId: Scalars["String"]["input"];
};

export type MutationDeleteShopArgs = {
  shopId: Scalars["String"]["input"];
};

export type MutationDeleteVHostDomainArgs = {
  input: HostedDeleteVHostDomainInput;
};

export type MutationEnableConsoleArgs = {
  input: HostedEnableConsoleInput;
};

export type MutationHandleWebhookArgs = {
  input?: InputMaybe<Scalars["JSON"]["input"]>;
};

export type MutationHandleWebhookV2Args = {
  input?: InputMaybe<Scalars["JSON"]["input"]>;
};

export type MutationHostingCreateArgs = {
  input: HostedHostingCreateInput;
};

export type MutationLinkShopWithAccountArgs = {
  instanceId: Scalars["String"]["input"];
};

export type MutationMigrateUsersBatchArgs = {
  input?: InputMaybe<PostCustomersBatchDto_Input>;
};

export type MutationModuleUpdateArgs = {
  input?: InputMaybe<ModuleUpdateDto_Input>;
};

export type MutationPatchSslArgs = {
  fqdn: Scalars["String"]["input"];
};

export type MutationPatchShopArgs = {
  input?: InputMaybe<UpdateShopDto_Input>;
  shopUid: Scalars["String"]["input"];
  userUid: Scalars["String"]["input"];
};

export type MutationRefreshAccessTokenArgs = {
  input?: InputMaybe<Scalars["JSON"]["input"]>;
};

export type MutationRenewTrialArgs = {
  shopId: Scalars["ID"]["input"];
};

export type MutationResetPasswordArgs = {
  input: HostedResetPasswordInput;
};

export type MutationRetryJobDlqArgs = {
  idJob: Scalars["String"]["input"];
  shopId: Scalars["String"]["input"];
};

export type MutationSetInstanceStatusToErrorArgs = {
  instanceId: Scalars["String"]["input"];
};

export type MutationSetSubscriptionItemQuantityArgs = {
  input?: InputMaybe<SubscriptionItemQuantityDto_Input>;
  subscriptionId: Scalars["String"]["input"];
  subscriptionItemId: Scalars["String"]["input"];
};

export type MutationSetSubscriptionItemUsageArgs = {
  input?: InputMaybe<SubscriptionItemUsageDto_Input>;
  subscriptionId: Scalars["String"]["input"];
  subscriptionItemId: Scalars["String"]["input"];
};

export type MutationShopAssociateEditionArgs = {
  input?: InputMaybe<Scalars["JSON"]["input"]>;
  shopId: Scalars["String"]["input"];
};

export type MutationShopCreateArgs = {
  input?: InputMaybe<CreateShopDto_Input>;
  userUid: Scalars["String"]["input"];
};

export type MutationShopDraftCreateArgs = {
  input?: InputMaybe<CreateShopDraftDto_Input>;
};

export type MutationShopReonboardArgs = {
  input?: InputMaybe<CreateShopDto_Input>;
  shopUid: Scalars["String"]["input"];
  userUid: Scalars["String"]["input"];
};

export type MutationShopsCreateArgs = {
  input?: InputMaybe<CreateShopsDto_Input>;
  userUid: Scalars["String"]["input"];
};

export type MutationUnlinkShopArgs = {
  shopUid: Scalars["String"]["input"];
  userUid: Scalars["String"]["input"];
};

export type MutationUpdateCheckoutArgs = {
  input: UpdateCheckoutInput;
};

export type MutationUpdateDomainArgs = {
  input: HostedUpdateDomainInput;
};

export type MutationUpdateDynamicDataArgs = {
  input: UpdateDynamicDataInput;
};

export type MutationUpdateInfoArgs = {
  input?: InputMaybe<UpdateUserInfoDto_Input>;
  userUid: Scalars["String"]["input"];
};

export type MutationUpdateOrganizationAddressByIdArgs = {
  addressId: Scalars["String"]["input"];
  input?: InputMaybe<UpdateOrganizationAddressDto_Input>;
  organizationId: Scalars["String"]["input"];
};

export type MutationUpdateOrganizationByIdArgs = {
  input?: InputMaybe<UpdateOrganizationDto_Input>;
  organizationId: Scalars["String"]["input"];
};

export type MutationUpdateSubscriptionArgs = {
  input?: InputMaybe<UpdateSubscriptionDto_Input>;
  subscriptionId: Scalars["String"]["input"];
};

export type MutationVerifyTokenArgs = {
  input?: InputMaybe<Scalars["JSON"]["input"]>;
};

export type OrganizationAddressResponse = {
  __typename?: "OrganizationAddressResponse";
  company: Scalars["String"]["output"];
  countryCode: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  extendedAddr1: Scalars["String"]["output"];
  extendedAddr2: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  label: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
  locality: Scalars["String"]["output"];
  phone: Scalars["String"]["output"];
  postalCode: Scalars["String"]["output"];
  state: Scalars["String"]["output"];
  stateCode: Scalars["String"]["output"];
  streetAddress: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type OrganizationResponse = {
  __typename?: "OrganizationResponse";
  id: Scalars["String"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  phoneNumber?: Maybe<Scalars["String"]["output"]>;
  profile: Scalars["String"]["output"];
  taxId?: Maybe<Scalars["String"]["output"]>;
  vatId?: Maybe<Scalars["String"]["output"]>;
};

export type PersonalInfos_Input = {
  country: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
  phone?: InputMaybe<Scalars["String"]["input"]>;
};

export enum PlanCode {
  Hosted = "HOSTED",
  Supported = "SUPPORTED",
  Unknown = "UNKNOWN",
}

export type PlanDetailDto = {
  __typename?: "PlanDetailDto";
  /** Title of the plan */
  features?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** Title of the plan */
  title: Scalars["String"]["output"];
};

export type PlanDto = {
  __typename?: "PlanDto";
  billingPeriodUnit: Query_GetProductComponents_OneOf_0_AllOf_1_Items_Items_OneOf_0_BillingPeriodUnit;
  /** Indicates the group to which this component belongs. For example when you have multiple billing periods, for the same offer you will get 2 components: "builtfor_example-standard-EUR-Monthly" and "builtfor_example-standard-EUR-Yearly". Both of them belong to the group "builtfor_example-standard". */
  componentGroupId: Scalars["String"]["output"];
  componentType: Query_GetProductComponents_OneOf_0_AllOf_1_Items_Items_OneOf_0_ComponentType;
  details?: Maybe<PlanDetailDto>;
  /** Free quantity applied to the subscription. Your customer will be charged only when the quantity or usage provided exceed this value. */
  freeQuantity?: Maybe<Scalars["NonNegativeFloat"]["output"]>;
  /** Id of the product component */
  id: Scalars["String"]["output"];
  /** Indicates whether or not this components is usage based. If yes, you can use the route usage with this componentId to update the usage associated to a subscription / component. */
  isUsageBased: Scalars["Boolean"]["output"];
  /** An array of all mandatory component which will be applied to subscription to this plan. */
  mandatoryComponentIds?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  /** Price of the component. Available only when pricing model is flat_fee or per_unit. When the pricing model is per_unit this is the price of a unit */
  price?: Maybe<Scalars["NonNegativeFloat"]["output"]>;
  pricingModel: Query_GetProductComponents_OneOf_0_AllOf_1_Items_Items_OneOf_0_PricingModel;
  /** Id of the product on which this component is attached. In case of a Built For, your product id is the technical name of your product, not the technical id from the marketplace (partner solution engineering team can help you to find it). */
  productId: Scalars["String"]["output"];
  status: Query_GetProductComponents_OneOf_0_AllOf_1_Items_Items_OneOf_0_Status;
  /** Range of pricing for this component. Available only when pricing model is stairstep */
  tiers?: Maybe<Array<Maybe<ProductComponentTiersDto>>>;
  trialPeriodUnit?: Maybe<Query_GetProductComponents_OneOf_0_AllOf_1_Items_Items_OneOf_0_TrialPeriodUnit>;
  /** Value of the trial period. A trial period unit is required when a value is specified */
  trialPeriodValue?: Maybe<Scalars["NonNegativeFloat"]["output"]>;
};

export type PostCustomersBatchDto_Input = {
  batch: Array<InputMaybe<Scalars["String"]["input"]>>;
};

export type ProductComponentTiersDto = {
  __typename?: "ProductComponentTiersDto";
  /** Upper limit of the quantity or usage range */
  endingUnit?: Maybe<Scalars["PositiveFloat"]["output"]>;
  /** The per-unit price for the tier when the pricing_model is tiered the total cost for the item price when the pricing_model is stairstep */
  price: Scalars["NonNegativeFloat"]["output"];
  /** Lower limit of the quantity or usage range */
  startingUnit: Scalars["PositiveFloat"]["output"];
};

export type Query = {
  __typename?: "Query";
  allHomepageDynamicData: HomepageDynamicData;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/user/{args.userUid}/shop/{args.shopUid}/auth`
   *
   *
   */
  authWithUid?: Maybe<Scalars["JSON"]["output"]>;
  checkVhostInfos: HostedVhostInfosChecked;
  checkout?: Maybe<Checkout>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/users/{args.userId}/associated-shops`
   * List user associated shops
   *
   */
  findAll?: Maybe<Array<Maybe<UserAssociatedShopResponse>>>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v2/organizations`
   * Find account organizations
   *
   */
  findOrganizations?: Maybe<FindOrganizations_Response>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/user/{args.userUid}`
   * Get user account basic informations by user Id
   *
   */
  get?: Maybe<Scalars["JSON"]["output"]>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/user/{args.userId}/organization/correlation-id`
   *
   *
   */
  getAdminUserCorrelationId?: Maybe<Scalars["JSON"]["output"]>;
  getAllBulkActionsOnInstancesReports: HostedAllBulkActionsOnInstancesReportsResult;
  getAllPlans: HostedGetAllPlansResult;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/user/{args.userUid}/shops`
   *
   *
   */
  getAllShop?: Maybe<Array<Maybe<UserShopResponse>>>;
  getAllVhosts: HostedGetAllVhostsResult;
  getBulkActionOnInstanceLogs: HostedBulkActionOnInstanceLogsResult;
  getBulkActionsOnInstancesReport: HostedBulkActionsOnInstancesReportResult;
  getBulkActionsOnInstancesReportContainingKeywords: HostedBulkActionsOnInstancesReportContainingKeywordsResult;
  getDomainAvailability: HostedDomainResult;
  getDomainIsAvailableForHosting: Scalars["Boolean"]["output"];
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/user/{args.userUid}/info`
   * Get user account informations by user Id
   *
   */
  getInfo?: Maybe<Scalars["JSON"]["output"]>;
  getInstanceDetails: HostedGetInstanceDetailsResult;
  getInstancesFromDb: HostedGetInstancesFromDbResult;
  getInstancesFromHoster: HostedGetInstancesFromHosterResult;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.BILLING_API_URL}`
   * >**Path**: `/v1/invoices/{args.invoiceId}/download`
   * OAuth Scope: `invoices.read`
   *
   * ---
   *  Get a download link for the invoice
   *
   */
  getInvoiceDownload?: Maybe<GetInvoiceDownload_Response>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.BILLING_API_URL}`
   * >**Path**: `/v1/invoices`
   * OAuth Scope: `invoices.read`
   *
   * ---
   *  Search for a list of invoices by sybscriptionId, and retrieve it as a paginated list of invoices.
   *
   */
  getInvoices?: Maybe<GetInvoices_Response>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/user/me`
   * Get current account profile informations
   *
   */
  getMe?: Maybe<Scalars["JSON"]["output"]>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v2/organizations/{args.organizationId}/addresses`
   * Get organization addresses by organization Id
   *
   */
  getOrganizationAddressesByOrganizationId?: Maybe<GetOrganizationAddressesByOrganizationId_Response>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v2/organizations/{args.organizationId}`
   * Get organization by Id
   *
   */
  getOrganizationById?: Maybe<GetOrganizationById_Response>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.BILLING_API_URL}`
   * >**Path**: `/v1/products/{args.productId}/components`
   * A product is composed by multiple components. A component can be a plan or an addon. A plan is the main component of a subscription. A subscription can have multiple addons associated with it.
   *
   */
  getProductComponents?: Maybe<GetProductComponents_Response>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/shop/{args.shopUid}`
   * Get Shop Data by Id
   *
   */
  getShopData?: Maybe<ShopResponse>;
  getShopDomainInfos: HostedShopDomainInfos;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/shop/{args.shopId}/queue-dlq`
   * Get shop association retry in the queue by shop id.
   *
   */
  getShopJobsDLQ?: Maybe<Scalars["JSON"]["output"]>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v2/shop/firebase/tokens`
   *
   *
   */
  getSpecificShop?: Maybe<FirebaseTokenResponse>;
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `{env.ACCOUNT_API_URL}`
   * >**Path**: `/v1/user/organization/correlation-id`
   *
   *
   */
  getUserCorrelationId?: Maybe<Scalars["JSON"]["output"]>;
  getVhostInfos: HostedVhostInfosResult;
  getVhostList: Scalars["Boolean"]["output"];
  homepageDynamicData: HomepageSimpleDynamicData;
  hosting?: Maybe<HostedHosting>;
  me?: Maybe<User>;
  validateHostedAdmin: HostedValidateHostedAdminResult;
};

export type QueryAuthWithUidArgs = {
  shopUid: Scalars["String"]["input"];
  userUid: Scalars["String"]["input"];
};

export type QueryCheckVhostInfosArgs = {
  input?: InputMaybe<HostedVhostInput>;
};

export type QueryFindAllArgs = {
  limit?: InputMaybe<Scalars["Float"]["input"]>;
  offset?: InputMaybe<Scalars["Float"]["input"]>;
  userId: Scalars["String"]["input"];
};

export type QueryFindOrganizationsArgs = {
  limit?: InputMaybe<Scalars["Float"]["input"]>;
  offset?: InputMaybe<Scalars["Float"]["input"]>;
};

export type QueryGetArgs = {
  userUid: Scalars["String"]["input"];
};

export type QueryGetAdminUserCorrelationIdArgs = {
  userId: Scalars["String"]["input"];
};

export type QueryGetAllShopArgs = {
  userUid: Scalars["String"]["input"];
};

export type QueryGetBulkActionOnInstanceLogsArgs = {
  bulkActionsOnInstancesReportId: Scalars["ID"]["input"];
  instanceId: Scalars["ID"]["input"];
};

export type QueryGetBulkActionsOnInstancesReportArgs = {
  bulkActionsOnInstancesReportId: Scalars["ID"]["input"];
};

export type QueryGetBulkActionsOnInstancesReportContainingKeywordsArgs = {
  bulkActionsOnInstancesReportId: Scalars["ID"]["input"];
  keywords: Array<Scalars["String"]["input"]>;
};

export type QueryGetDomainAvailabilityArgs = {
  domain: Scalars["String"]["input"];
};

export type QueryGetDomainIsAvailableForHostingArgs = {
  domainName: Scalars["String"]["input"];
};

export type QueryGetInfoArgs = {
  userUid: Scalars["String"]["input"];
};

export type QueryGetInstanceDetailsArgs = {
  instanceId: Scalars["String"]["input"];
};

export type QueryGetInstancesFromHosterArgs = {
  searchParams?: InputMaybe<HostedInstancesFromHosterSearchParams>;
};

export type QueryGetInvoiceDownloadArgs = {
  invoiceId: Scalars["String"]["input"];
};

export type QueryGetInvoicesArgs = {
  id: Scalars["String"]["input"];
  limit: Scalars["Float"]["input"];
  offset: Scalars["Float"]["input"];
  order?: InputMaybe<Scalars["String"]["input"]>;
  type: Scalars["String"]["input"];
};

export type QueryGetOrganizationAddressesByOrganizationIdArgs = {
  limit?: InputMaybe<Scalars["Float"]["input"]>;
  offset?: InputMaybe<Scalars["Float"]["input"]>;
  organizationId: Scalars["String"]["input"];
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type QueryGetOrganizationByIdArgs = {
  organizationId: Scalars["String"]["input"];
};

export type QueryGetProductComponentsArgs = {
  filter_component_type?: InputMaybe<QueryInput_GetProductComponents_Filter_Component_Type>;
  filter_period_unit?: InputMaybe<QueryInput_GetProductComponents_Filter_Period_Unit>;
  filter_status?: InputMaybe<QueryInput_GetProductComponents_Filter_Status>;
  lang_iso_code?: InputMaybe<QueryInput_GetProductComponents_Lang_Iso_Code>;
  productId: Scalars["String"]["input"];
};

export type QueryGetShopDataArgs = {
  shopUid: Scalars["String"]["input"];
};

export type QueryGetShopDomainInfosArgs = {
  input?: InputMaybe<HostedShopOrInstanceIdInput>;
};

export type QueryGetShopJobsDlqArgs = {
  shopId: Scalars["String"]["input"];
};

export type QueryGetVhostInfosArgs = {
  input?: InputMaybe<HostedVhostInput>;
};

export type QueryGetVhostListArgs = {
  input?: InputMaybe<HostedVhostInput>;
};

export type QueryHomepageDynamicDataArgs = {
  lang?: InputMaybe<Scalars["String"]["input"]>;
  subscriptionBillingUnit?: InputMaybe<Scalars["String"]["input"]>;
  subscriptionStartedAt?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryHostingArgs = {
  hostingId: Scalars["ID"]["input"];
  targetLang?: InputMaybe<Scalars["Locale"]["input"]>;
};

export type ShopNameTakenError = Error & {
  __typename?: "ShopNameTakenError";
  alternatives?: Maybe<Array<Scalars["String"]["output"]>>;
  code: ErrorCode;
  message: Scalars["String"]["output"];
};

export type ShopResponse = {
  __typename?: "ShopResponse";
  allowAnonymousDataCollection?: Maybe<Scalars["Boolean"]["output"]>;
  boBaseUrl?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["Float"]["output"]>;
  domain: Scalars["String"]["output"];
  employeeId: Scalars["String"]["output"];
  firebaseShopEmail?: Maybe<Scalars["String"]["output"]>;
  firebaseShopUid?: Maybe<Scalars["String"]["output"]>;
  frontUrl?: Maybe<Scalars["String"]["output"]>;
  hmac: Scalars["String"]["output"];
  isLinkedV4?: Maybe<Scalars["Boolean"]["output"]>;
  linkServiceName?: Maybe<Scalars["String"]["output"]>;
  moduleName?: Maybe<Scalars["String"]["output"]>;
  multishop: Scalars["Boolean"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  ownerEmail: Scalars["String"]["output"];
  ownerEmailVerified: Scalars["Boolean"]["output"];
  ownerUid: Scalars["String"]["output"];
  ownershipLastVerificationFailedAt?: Maybe<Scalars["Float"]["output"]>;
  ownershipLastVerificationFailureReason?: Maybe<Scalars["String"]["output"]>;
  ownershipVerified: Scalars["Boolean"]["output"];
  ownershipVerifiedAt: Scalars["Float"]["output"];
  physicalUri: Scalars["String"]["output"];
  psVersion?: Maybe<Scalars["String"]["output"]>;
  publicKey: Scalars["String"]["output"];
  shopId: Scalars["String"]["output"];
  sslDomain?: Maybe<Scalars["String"]["output"]>;
  status?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["Float"]["output"]>;
  user?: Maybe<ShopUserResponse>;
  virtualUri?: Maybe<Scalars["String"]["output"]>;
};

export type ShopUserResponse = {
  __typename?: "ShopUserResponse";
  email: Scalars["String"]["output"];
  emailIsValidated: Scalars["Boolean"]["output"];
  uuid: Scalars["String"]["output"];
};

export type Subscription = {
  __typename?: "Subscription";
  liveEvents: HostedLiveEventsResult;
};

export type SubscriptionLiveEventsArgs = {
  input?: InputMaybe<HostedLiveEventsInput>;
};

export type SubscriptionDto = {
  __typename?: "SubscriptionDto";
  /** Date of activation, could be in the future (in seconds) */
  activatedAt?: Maybe<Scalars["Float"]["output"]>;
  /** Unit of the billing period, the value associated is always 1 */
  billingPeriodUnit: Scalars["String"]["output"];
  /** Indicates the main product of the bundle */
  bundleMainProductId?: Maybe<Scalars["String"]["output"]>;
  /** Date of cancellation, should be in the futur (in seconds) */
  cancelledAt?: Maybe<Scalars["Float"]["output"]>;
  /** Currency code in ISO-4217 format */
  currencyCode: Scalars["String"]["output"];
  /** Indicates whether the subscription will have change on the next renewal. Changes are mostly about price or status. */
  hasScheduledChanges?: Maybe<Scalars["Boolean"]["output"]>;
  /** The id of the subscription */
  id: Scalars["String"]["output"];
  /** Date of the next renewal, should be in the futur (in seconds) */
  nextRenewalAt?: Maybe<Scalars["Float"]["output"]>;
  /** Id of the product of the subscription */
  productId: Scalars["String"]["output"];
  /** Indicates the version of the resource, could be usefull to know if the resource received is older or newer. */
  resourceVersion: Scalars["String"]["output"];
  /** Id of the shop */
  shopId: Scalars["String"]["output"];
  /** Status of the subscription */
  status: Scalars["String"]["output"];
  /** An array of subscription items linked to the subscription */
  subscriptionItems: Array<Maybe<SubscriptionItemDto>>;
  subscriptionWithScheduledChanges?: Maybe<SubscriptionWithScheduledChangesDto>;
  /** Date of the end of the trial, should be in the futur (in seconds) */
  trialEndAt?: Maybe<Scalars["Float"]["output"]>;
};

export type SubscriptionItemDto = {
  __typename?: "SubscriptionItemDto";
  /** Amount for this item */
  amount?: Maybe<Scalars["Float"]["output"]>;
  /** Indicates the allowed free quantity. Only itemType "plan" can have free quantity */
  freeQuantity?: Maybe<Scalars["Float"]["output"]>;
  /** Indicates the group to which this component belongs. For example when you have multiple billing periods, for the same offer you will get 2 components: "builtfor_example-standard-EUR-Monthly" and "builtfor_example-standard-EUR-Yearly". Both of them belong to the group "builtfor_example-standard". */
  groupId: Scalars["String"]["output"];
  /** Id of the component. */
  id: Scalars["String"]["output"];
  /** Indicates the type of the subscription item. */
  itemType: Scalars["String"]["output"];
  /** Indicates the quantity for non metered component */
  quantity?: Maybe<Scalars["Float"]["output"]>;
  /** Unit value of this item */
  unitPrice?: Maybe<Scalars["Float"]["output"]>;
  /** Indicates the quantity for metered component */
  usage?: Maybe<Scalars["Float"]["output"]>;
};

export type SubscriptionItemQuantityDto = {
  __typename?: "SubscriptionItemQuantityDto";
  /** The current quantity value */
  quantity: Scalars["PositiveFloat"]["output"];
};

export type SubscriptionItemQuantityDto_Input = {
  /** The current quantity value */
  quantity: Scalars["PositiveFloat"]["input"];
};

export type SubscriptionItemUsageDto = {
  __typename?: "SubscriptionItemUsageDto";
  /** The value to be added to the current usage. */
  usageQuantity: Scalars["PositiveFloat"]["output"];
};

export type SubscriptionItemUsageDto_Input = {
  /** The value to be added to the current usage. */
  usageQuantity: Scalars["PositiveFloat"]["input"];
};

export type SubscriptionWithScheduledChangesDto = {
  __typename?: "SubscriptionWithScheduledChangesDto";
  /** Unit of the billing period */
  billingPeriodUnit: Scalars["String"]["output"];
  /** The Id of the component */
  componentId: Scalars["String"]["output"];
  /** Indicates the group to which this component belongs. For example when you have multiple billing periods, for the same offer you will get 2 components: "builtfor_example-standard-EUR-Monthly" and "builtfor_example-standard-EUR-Yearly". Both of them belong to the group "builtfor_example-standard". */
  groupId: Scalars["String"]["output"];
  /** Indicates the quantity for non metered components */
  quantity?: Maybe<Scalars["Float"]["output"]>;
  /** Indicates the quantity for non metered components */
  unitPrice?: Maybe<Scalars["Float"]["output"]>;
};

export type UpdateCheckoutInput = {
  id: Scalars["ID"]["input"];
  shopCountry?: InputMaybe<Scalars["CountryCode"]["input"]>;
  shopName?: InputMaybe<Scalars["String"]["input"]>;
  subscriptionId?: InputMaybe<Scalars["ID"]["input"]>;
  userLang?: InputMaybe<Scalars["Locale"]["input"]>;
};

export type UpdateCheckoutPayload = {
  __typename?: "UpdateCheckoutPayload";
  checkout: Checkout;
};

export type UpdateCheckoutResult = ShopNameTakenError | UpdateCheckoutPayload;

export type UpdateDynamicBlocInput = {
  id: Scalars["ID"]["input"];
  image: UpdateDynamicImageInput;
  isActive: Scalars["Boolean"]["input"];
  link: UpdateDynamicLinkInput;
  subTitle: Array<LangObjectInput>;
  text: Array<LangObjectInput>;
  title: Array<LangObjectInput>;
};

export type UpdateDynamicDataInput = {
  blocs: Array<UpdateDynamicBlocInput>;
  formFeedback: UpdateFormFeedbackInput;
  id: Scalars["ID"]["input"];
  promoBanners: Array<UpdatePromoBannerInput>;
};

export type UpdateDynamicImageInput = {
  id: Scalars["ID"]["input"];
  src: Array<LangObjectInput>;
};

export type UpdateDynamicLinkInput = {
  href: Array<LangObjectInput>;
  icon: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
  referrerpolicy: Scalars["String"]["input"];
  rel: Scalars["String"]["input"];
  target: Scalars["String"]["input"];
  text: Array<LangObjectInput>;
};

export type UpdateFormFeedbackInput = {
  id: Scalars["ID"]["input"];
  link: UpdateDynamicLinkInput;
  text: Array<LangObjectInput>;
};

export type UpdateOrganizationAddressDto_Input = {
  countryCode: Scalars["String"]["input"];
  email?: InputMaybe<Scalars["String"]["input"]>;
  extendedAddr1?: InputMaybe<Scalars["String"]["input"]>;
  extendedAddr2?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  label?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  locality?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  postalCode?: InputMaybe<Scalars["String"]["input"]>;
  source?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
  stateCode?: InputMaybe<Scalars["String"]["input"]>;
  streetAddress?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateOrganizationDto_Input = {
  company?: InputMaybe<Company_Input>;
  phoneNumber?: InputMaybe<Scalars["String"]["input"]>;
  profile?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdatePromoBannerConditionInput = {
  id: Scalars["ID"]["input"];
  subscriptionBillingUnit: Scalars["String"]["input"];
  subscriptionMonthOld: Scalars["Int"]["input"];
};

export type UpdatePromoBannerInput = {
  condition: UpdatePromoBannerConditionInput;
  icon: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
  link: UpdateDynamicLinkInput;
  text: Array<LangObjectInput>;
};

export type UpdateShopDto_Input = {
  boBaseUrl: Scalars["String"]["input"];
  domain: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  physicalUri: Scalars["String"]["input"];
  shopId: Scalars["String"]["input"];
  sslDomain: Scalars["String"]["input"];
  virtualUri: Scalars["String"]["input"];
};

export type UpdateSubscriptionDto_Input = {
  /** A coupon to add to the subscription */
  couponCode?: InputMaybe<Scalars["String"]["input"]>;
  /** The id of the new "plan" component to use for the subscription */
  subscriptionItemId: Scalars["String"]["input"];
};

export type UpdateUserInfoDto_Input = {
  personal: PersonalInfos_Input;
  professional: Scalars["JSON"]["input"];
};

export type User = {
  __typename?: "User";
  country?: Maybe<Scalars["CountryCode"]["output"]>;
  email: Scalars["Email"]["output"];
  emailVerified: Scalars["Boolean"]["output"];
  firstname: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  idToken: Scalars["String"]["output"];
  lang?: Maybe<Scalars["Locale"]["output"]>;
  lastname: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  picture: Scalars["String"]["output"];
};

export type UserAssociatedShopResponse = {
  __typename?: "UserAssociatedShopResponse";
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  url: Scalars["String"]["output"];
};

export type UserShopController_ShopDraftCreate_201_Response = {
  __typename?: "UserShopController_shopDraftCreate_201_response";
  firebaseShopUid?: Maybe<Scalars["String"]["output"]>;
};

export type UserShopController_UnlinkShop_400_Response = {
  __typename?: "UserShopController_unlinkShop_400_response";
  message?: Maybe<Scalars["String"]["output"]>;
};

export type UserShopController_UnlinkShop_403_Response = {
  __typename?: "UserShopController_unlinkShop_403_response";
  message?: Maybe<Scalars["String"]["output"]>;
};

export type UserShopController_UnlinkShop_Response =
  | UserShopController_UnlinkShop_400_Response
  | UserShopController_UnlinkShop_403_Response;

export type UserShopResponse = {
  __typename?: "UserShopResponse";
  domain: Scalars["String"]["output"];
  favicon?: Maybe<Scalars["String"]["output"]>;
  firebaseShopEmail: Scalars["String"]["output"];
  firebaseShopUid: Scalars["String"]["output"];
  frontUrl?: Maybe<Scalars["String"]["output"]>;
  multishop?: Maybe<Scalars["Boolean"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  ownerEmail: Scalars["String"]["output"];
  ownerEmailVerified: Scalars["Boolean"]["output"];
  ownerUid: Scalars["String"]["output"];
  ownershipVerified: Scalars["Boolean"]["output"];
  ownershipVerifiedAt: Scalars["Float"]["output"];
  shopId: Scalars["String"]["output"];
  sslDomain?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type UserShopResponse2 = {
  __typename?: "UserShopResponse2";
  domain: Scalars["String"]["output"];
  favicon?: Maybe<Scalars["String"]["output"]>;
  firebaseShopEmail: Scalars["String"]["output"];
  firebaseShopUid: Scalars["String"]["output"];
  frontUrl?: Maybe<Scalars["String"]["output"]>;
  multishop?: Maybe<Scalars["Boolean"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  ownerEmail: Scalars["String"]["output"];
  ownerEmailVerified: Scalars["Boolean"]["output"];
  ownerUid: Scalars["String"]["output"];
  ownershipVerified: Scalars["Boolean"]["output"];
  ownershipVerifiedAt: Scalars["Float"]["output"];
  shopId: Scalars["String"]["output"];
  sslDomain?: Maybe<Scalars["String"]["output"]>;
  url?: Maybe<Scalars["String"]["output"]>;
};

export type Void_Container = {
  __typename?: "Void_container";
  Void?: Maybe<Scalars["Void"]["output"]>;
};

export type AddCustomer_201_Response = {
  __typename?: "addCustomer_201_response";
  item?: Maybe<CustomerDto>;
};

export type AddCustomer_401_Response = {
  __typename?: "addCustomer_401_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type AddCustomer_403_Response = {
  __typename?: "addCustomer_403_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type AddCustomer_404_Response = {
  __typename?: "addCustomer_404_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type AddCustomer_Response =
  | AddCustomer_201_Response
  | AddCustomer_401_Response
  | AddCustomer_403_Response
  | AddCustomer_404_Response;

export type AddSubscriptionChargeAtTerm_201_Response = {
  __typename?: "addSubscriptionChargeAtTerm_201_response";
  item?: Maybe<ChargeAtTermDto>;
};

export type AddSubscriptionChargeAtTerm_400_Response = {
  __typename?: "addSubscriptionChargeAtTerm_400_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type AddSubscriptionChargeAtTerm_401_Response = {
  __typename?: "addSubscriptionChargeAtTerm_401_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type AddSubscriptionChargeAtTerm_403_Response = {
  __typename?: "addSubscriptionChargeAtTerm_403_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type AddSubscriptionChargeAtTerm_404_Response = {
  __typename?: "addSubscriptionChargeAtTerm_404_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type AddSubscriptionChargeAtTerm_Response =
  | AddSubscriptionChargeAtTerm_201_Response
  | AddSubscriptionChargeAtTerm_400_Response
  | AddSubscriptionChargeAtTerm_401_Response
  | AddSubscriptionChargeAtTerm_403_Response
  | AddSubscriptionChargeAtTerm_404_Response;

export type AddSubscriptionEstimateForCustomer_201_Response = {
  __typename?: "addSubscriptionEstimateForCustomer_201_response";
  item?: Maybe<EstimateDto>;
};

export type AddSubscriptionEstimateForCustomer_401_Response = {
  __typename?: "addSubscriptionEstimateForCustomer_401_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type AddSubscriptionEstimateForCustomer_403_Response = {
  __typename?: "addSubscriptionEstimateForCustomer_403_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type AddSubscriptionEstimateForCustomer_404_Response = {
  __typename?: "addSubscriptionEstimateForCustomer_404_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type AddSubscriptionEstimateForCustomer_Response =
  | AddSubscriptionEstimateForCustomer_201_Response
  | AddSubscriptionEstimateForCustomer_401_Response
  | AddSubscriptionEstimateForCustomer_403_Response
  | AddSubscriptionEstimateForCustomer_404_Response;

export type CreateOrganizationAddress_404_Response = {
  __typename?: "createOrganizationAddress_404_response";
  message?: Maybe<Scalars["String"]["output"]>;
};

export type CreateOrganizationAddress_Response =
  | OrganizationAddressResponse
  | CreateOrganizationAddress_404_Response
  | GetOrganizationAddressesByOrganizationId_403_Response;

export type CreateOrganization_400_Response = {
  __typename?: "createOrganization_400_response";
  message?: Maybe<Scalars["String"]["output"]>;
};

export type CreateOrganization_403_Response = {
  __typename?: "createOrganization_403_response";
  message?: Maybe<Scalars["String"]["output"]>;
};

export type CreateOrganization_Response =
  | OrganizationResponse
  | CreateOrganization_400_Response
  | CreateOrganization_403_Response;

export type DeleteOrganizationAddressById_404_Response = {
  __typename?: "deleteOrganizationAddressById_404_response";
  message?: Maybe<Scalars["String"]["output"]>;
};

export type DeleteOrganizationAddressById_Response =
  | Void_Container
  | DeleteOrganizationAddressById_404_Response
  | GetOrganizationAddressesByOrganizationId_403_Response;

export type DeleteOrganizationById_404_Response = {
  __typename?: "deleteOrganizationById_404_response";
  message?: Maybe<Scalars["String"]["output"]>;
};

export type DeleteOrganizationById_Response =
  | Void_Container
  | CreateOrganization_403_Response
  | DeleteOrganizationById_404_Response;

export type FindOrganizations_Response = Json_Container | CreateOrganization_403_Response;

export type GetInvoiceDownload_200_Response = {
  __typename?: "getInvoiceDownload_200_response";
  item?: Maybe<InvoiceDownloadDto>;
};

export type GetInvoiceDownload_401_Response = {
  __typename?: "getInvoiceDownload_401_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type GetInvoiceDownload_403_Response = {
  __typename?: "getInvoiceDownload_403_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type GetInvoiceDownload_404_Response = {
  __typename?: "getInvoiceDownload_404_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type GetInvoiceDownload_Response =
  | GetInvoiceDownload_200_Response
  | GetInvoiceDownload_401_Response
  | GetInvoiceDownload_403_Response
  | GetInvoiceDownload_404_Response;

export type GetInvoices_200_Response = {
  __typename?: "getInvoices_200_response";
  items?: Maybe<Array<Maybe<InvoiceDto>>>;
  /** Total of item available for the resource. */
  total: Scalars["Float"]["output"];
};

export type GetInvoices_401_Response = {
  __typename?: "getInvoices_401_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type GetInvoices_403_Response = {
  __typename?: "getInvoices_403_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type GetInvoices_404_Response = {
  __typename?: "getInvoices_404_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type GetInvoices_Response =
  | GetInvoices_200_Response
  | GetInvoices_401_Response
  | GetInvoices_403_Response
  | GetInvoices_404_Response;

export type GetOrganizationAddressesByOrganizationId_403_Response = {
  __typename?: "getOrganizationAddressesByOrganizationId_403_response";
  message?: Maybe<Scalars["String"]["output"]>;
};

export type GetOrganizationAddressesByOrganizationId_404_Response = {
  __typename?: "getOrganizationAddressesByOrganizationId_404_response";
  message?: Maybe<Scalars["String"]["output"]>;
};

export type GetOrganizationAddressesByOrganizationId_Response =
  | Json_Container
  | GetOrganizationAddressesByOrganizationId_403_Response
  | GetOrganizationAddressesByOrganizationId_404_Response;

export type GetOrganizationById_404_Response = {
  __typename?: "getOrganizationById_404_response";
  message?: Maybe<Scalars["String"]["output"]>;
};

export type GetOrganizationById_Response =
  | OrganizationResponse
  | CreateOrganization_403_Response
  | GetOrganizationById_404_Response;

export type GetProductComponents_200_Response = {
  __typename?: "getProductComponents_200_response";
  items?: Maybe<Array<Maybe<Query_GetProductComponents_OneOf_0_AllOf_1_Items_Items>>>;
  /** Total of item available for the resource. */
  total: Scalars["Float"]["output"];
};

export type GetProductComponents_400_Response = {
  __typename?: "getProductComponents_400_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type GetProductComponents_404_Response = {
  __typename?: "getProductComponents_404_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type GetProductComponents_Response =
  | GetProductComponents_200_Response
  | GetProductComponents_400_Response
  | GetProductComponents_404_Response;

export enum MutationInput_UserController_AddInfo_Input_Profile {
  "0" = "_0",
  "1" = "_1",
  "2" = "_2",
}

/** Language of the customer */
export enum MutationInput_AddCustomer_Input_Locale {
  De = "de",
  En = "en",
  Es = "es",
  Fr = "fr",
  It = "it",
  Nl = "nl",
  Pl = "pl",
  Pt = "pt",
  Ro = "ro",
}

/** Type of the customer */
export enum MutationInput_AddCustomer_Input_Type {
  User = "user",
}

/** Language of the customer */
export enum Mutation_AddCustomer_OneOf_0_AllOf_1_Item_Locale {
  De = "de",
  En = "en",
  Es = "es",
  Fr = "fr",
  It = "it",
  Nl = "nl",
  Pl = "pl",
  Pt = "pt",
  Ro = "ro",
}

/** Type of the customer */
export enum Mutation_AddCustomer_OneOf_0_AllOf_1_Item_Type {
  User = "user",
}

/** Type of discount */
export enum Mutation_AddSubscriptionEstimateForCustomer_OneOf_0_AllOf_1_Item_Coupon_DiscountType {
  FixedAmount = "fixed_amount",
  Percentage = "percentage",
}

/** Coupon status */
export enum Mutation_AddSubscriptionEstimateForCustomer_OneOf_0_AllOf_1_Item_Coupon_Status {
  Active = "active",
  Archived = "archived",
  Deleted = "deleted",
  Expired = "expired",
}

/** Type of discount. */
export enum Mutation_AddSubscriptionEstimateForCustomer_OneOf_0_AllOf_1_Item_InvoiceEstimate_Discounts_Items_DiscountType {
  FixedAmount = "fixed_amount",
  Percentage = "percentage",
}

/** Product type of entity on which this line item is applied. */
export enum Mutation_AddSubscriptionEstimateForCustomer_OneOf_0_AllOf_1_Item_InvoiceEstimate_LineItems_Items_EntityType {
  AddonItemPrice = "addon_item_price",
  Adhoc = "adhoc",
  ChargeItemPrice = "charge_item_price",
  PlanItemPrice = "plan_item_price",
}

export type Mutation_UpdateOrganizationAddressById_OneOf_0_Response = {
  __typename?: "mutation_updateOrganizationAddressById_oneOf_0_response";
  countryCode?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  locality?: Maybe<Scalars["String"]["output"]>;
  postalCode?: Maybe<Scalars["String"]["output"]>;
  streetAddress?: Maybe<Scalars["String"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
};

/** Filter on component type. */
export enum QueryInput_GetProductComponents_Filter_Component_Type {
  Addon = "addon",
  Charge = "charge",
  Plan = "plan",
}

/** Filter on period unit */
export enum QueryInput_GetProductComponents_Filter_Period_Unit {
  Day = "day",
  Month = "month",
  Year = "year",
}

/** Filter on component status. */
export enum QueryInput_GetProductComponents_Filter_Status {
  Active = "active",
  Archived = "archived",
  Deleted = "deleted",
}

/** Language of plan description and title (will be deprecated soon). If not provided you will not retrieve the "details" part of your plan. */
export enum QueryInput_GetProductComponents_Lang_Iso_Code {
  De = "de",
  En = "en",
  Es = "es",
  Fr = "fr",
  It = "it",
  Nl = "nl",
  Pl = "pl",
  Pt = "pt",
  Ro = "ro",
}

export type Query_GetProductComponents_OneOf_0_AllOf_1_Items_Items = AddonDto | PlanDto;

/** Unit of the period between 2 invoices. The value is always 1, so the billing period could be monthly or yearly. */
export enum Query_GetProductComponents_OneOf_0_AllOf_1_Items_Items_OneOf_0_BillingPeriodUnit {
  Day = "day",
  Month = "month",
  Year = "year",
}

/** Type of component. A plan is the main component attached to a subscription, an addon is an additional cost (mandatory or not) */
export enum Query_GetProductComponents_OneOf_0_AllOf_1_Items_Items_OneOf_0_ComponentType {
  Addon = "addon",
  Charge = "charge",
  Plan = "plan",
}

/** Pricing model of the component. See documentation to have more information about pricing model. */
export enum Query_GetProductComponents_OneOf_0_AllOf_1_Items_Items_OneOf_0_PricingModel {
  FlatFee = "flat_fee",
  PerUnit = "per_unit",
  Stairstep = "stairstep",
}

/** Status of the component */
export enum Query_GetProductComponents_OneOf_0_AllOf_1_Items_Items_OneOf_0_Status {
  Active = "active",
  Archived = "archived",
  Deleted = "deleted",
}

/** Unit of the trial value */
export enum Query_GetProductComponents_OneOf_0_AllOf_1_Items_Items_OneOf_0_TrialPeriodUnit {
  Day = "day",
  Month = "month",
  Week = "week",
  Year = "year",
}

/** Type of component. A plan is the main component attached to a subscription, an addon is an additional cost (mandatory or not) */
export enum Query_GetProductComponents_OneOf_0_AllOf_1_Items_Items_OneOf_1_ComponentType {
  Addon = "addon",
  Charge = "charge",
  Plan = "plan",
}

/** Pricing model of the component. See documentation to have more information about pricing model. */
export enum Query_GetProductComponents_OneOf_0_AllOf_1_Items_Items_OneOf_1_PricingModel {
  FlatFee = "flat_fee",
  PerUnit = "per_unit",
  Stairstep = "stairstep",
}

/** Status of the component */
export enum Query_GetProductComponents_OneOf_0_AllOf_1_Items_Items_OneOf_1_Status {
  Active = "active",
  Archived = "archived",
  Deleted = "deleted",
}

export type SetSubscriptionItemQuantity_200_Response = {
  __typename?: "setSubscriptionItemQuantity_200_response";
  item?: Maybe<SubscriptionItemQuantityDto>;
};

export type SetSubscriptionItemQuantity_400_Response = {
  __typename?: "setSubscriptionItemQuantity_400_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type SetSubscriptionItemQuantity_401_Response = {
  __typename?: "setSubscriptionItemQuantity_401_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type SetSubscriptionItemQuantity_403_Response = {
  __typename?: "setSubscriptionItemQuantity_403_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type SetSubscriptionItemQuantity_404_Response = {
  __typename?: "setSubscriptionItemQuantity_404_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type SetSubscriptionItemQuantity_Response =
  | SetSubscriptionItemQuantity_200_Response
  | SetSubscriptionItemQuantity_400_Response
  | SetSubscriptionItemQuantity_401_Response
  | SetSubscriptionItemQuantity_403_Response
  | SetSubscriptionItemQuantity_404_Response;

export type SetSubscriptionItemUsage_201_Response = {
  __typename?: "setSubscriptionItemUsage_201_response";
  item?: Maybe<SubscriptionItemUsageDto>;
};

export type SetSubscriptionItemUsage_400_Response = {
  __typename?: "setSubscriptionItemUsage_400_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type SetSubscriptionItemUsage_401_Response = {
  __typename?: "setSubscriptionItemUsage_401_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type SetSubscriptionItemUsage_403_Response = {
  __typename?: "setSubscriptionItemUsage_403_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type SetSubscriptionItemUsage_404_Response = {
  __typename?: "setSubscriptionItemUsage_404_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type SetSubscriptionItemUsage_Response =
  | SetSubscriptionItemUsage_201_Response
  | SetSubscriptionItemUsage_400_Response
  | SetSubscriptionItemUsage_401_Response
  | SetSubscriptionItemUsage_403_Response
  | SetSubscriptionItemUsage_404_Response;

export type UpdateOrganizationAddressById_200_Response = {
  __typename?: "updateOrganizationAddressById_200_response";
  response?: Maybe<Mutation_UpdateOrganizationAddressById_OneOf_0_Response>;
};

export type UpdateOrganizationAddressById_404_Response = {
  __typename?: "updateOrganizationAddressById_404_response";
  message?: Maybe<Scalars["String"]["output"]>;
};

export type UpdateOrganizationAddressById_Response =
  | GetOrganizationAddressesByOrganizationId_403_Response
  | UpdateOrganizationAddressById_200_Response
  | UpdateOrganizationAddressById_404_Response;

export type UpdateOrganizationById_404_Response = {
  __typename?: "updateOrganizationById_404_response";
  message?: Maybe<Scalars["String"]["output"]>;
};

export type UpdateOrganizationById_Response =
  | OrganizationResponse
  | CreateOrganization_403_Response
  | UpdateOrganizationById_404_Response;

export type UpdateSubscription_200_Response = {
  __typename?: "updateSubscription_200_response";
  item?: Maybe<SubscriptionDto>;
};

export type UpdateSubscription_400_Response = {
  __typename?: "updateSubscription_400_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type UpdateSubscription_401_Response = {
  __typename?: "updateSubscription_401_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type UpdateSubscription_403_Response = {
  __typename?: "updateSubscription_403_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type UpdateSubscription_404_Response = {
  __typename?: "updateSubscription_404_response";
  errorCode?: Maybe<Scalars["String"]["output"]>;
  message?: Maybe<Scalars["String"]["output"]>;
  statusCode?: Maybe<Scalars["Float"]["output"]>;
};

export type UpdateSubscription_Response =
  | UpdateSubscription_200_Response
  | UpdateSubscription_400_Response
  | UpdateSubscription_401_Response
  | UpdateSubscription_403_Response
  | UpdateSubscription_404_Response;

export type GetShopDomainInfosQueryVariables = Exact<{
  shopId: Scalars["ID"]["input"];
}>;

export type GetShopDomainInfosQuery = {
  __typename?: "Query";
  getShopDomainInfos: { __typename?: "HostedShopDomainInfos"; instanceId: string };
};

export type GetInstanceDetailsQueryVariables = Exact<{
  instanceId: Scalars["String"]["input"];
}>;

export type GetInstanceDetailsQuery = {
  __typename?: "Query";
  getInstanceDetails: {
    __typename?: "HostedGetInstanceDetailsResult";
    data?: {
      __typename?: "HostedInstanceDetailsResult";
      diskUsage?: { __typename?: "HostedDiskUsage"; total: number; used: number } | null;
    } | null;
  };
};

export type GetHomepageDynamicDataQueryVariables = Exact<{
  subscriptionStartedAt?: InputMaybe<Scalars["Int"]["input"]>;
  subscriptionBillingUnit?: InputMaybe<Scalars["String"]["input"]>;
  lang?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type GetHomepageDynamicDataQuery = {
  __typename?: "Query";
  homepageDynamicData: {
    __typename?: "HomepageSimpleDynamicData";
    blocs: Array<{
      __typename?: "HomepageSimpleDynamicBloc";
      isActive: boolean;
      id: string;
      text: string;
      title: string;
      subTitle: string;
      image: { __typename?: "HomepageSimpleDynamicBlocImage"; id: string; src: string };
      link: {
        __typename?: "HomepageSimpleDynamicBlocLink";
        href: string;
        id: string;
        referrerpolicy: string;
        rel: string;
        target: string;
        text: string;
        icon: string;
      };
    }>;
    formFeedback: {
      __typename?: "HomepageSimpleFormFeedback";
      id: string;
      text: string;
      link: {
        __typename?: "HomepageSimpleDynamicBlocLink";
        href: string;
        id: string;
        referrerpolicy: string;
        rel: string;
        target: string;
        text: string;
      };
    };
    promoBanners: Array<{
      __typename?: "HomepageSimplePromoBanner";
      id: string;
      icon: string;
      text: string;
      link: {
        __typename?: "HomepageSimpleDynamicBlocLink";
        href: string;
        id: string;
        referrerpolicy: string;
        rel: string;
        target: string;
        text: string;
      };
    }>;
  };
};

export const GetShopDomainInfosDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetShopDomainInfos" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "shopId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "ID" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getShopDomainInfos" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "shopId" },
                      value: { kind: "Variable", name: { kind: "Name", value: "shopId" } },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [{ kind: "Field", name: { kind: "Name", value: "instanceId" } }],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetShopDomainInfosQuery, GetShopDomainInfosQueryVariables>;
export const GetInstanceDetailsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetInstanceDetails" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "instanceId" } },
          type: { kind: "NonNullType", type: { kind: "NamedType", name: { kind: "Name", value: "String" } } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getInstanceDetails" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "instanceId" },
                value: { kind: "Variable", name: { kind: "Name", value: "instanceId" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "diskUsage" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "total" } },
                            { kind: "Field", name: { kind: "Name", value: "used" } },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetInstanceDetailsQuery, GetInstanceDetailsQueryVariables>;
export const GetHomepageDynamicDataDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetHomepageDynamicData" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "subscriptionStartedAt" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "subscriptionBillingUnit" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "lang" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "homepageDynamicData" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "subscriptionStartedAt" },
                value: { kind: "Variable", name: { kind: "Name", value: "subscriptionStartedAt" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "subscriptionBillingUnit" },
                value: { kind: "Variable", name: { kind: "Name", value: "subscriptionBillingUnit" } },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "lang" },
                value: { kind: "Variable", name: { kind: "Name", value: "lang" } },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "blocs" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "image" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "src" } },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "link" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "href" } },
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "referrerpolicy" } },
                            { kind: "Field", name: { kind: "Name", value: "rel" } },
                            { kind: "Field", name: { kind: "Name", value: "target" } },
                            { kind: "Field", name: { kind: "Name", value: "text" } },
                            { kind: "Field", name: { kind: "Name", value: "icon" } },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "isActive" } },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "text" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      { kind: "Field", name: { kind: "Name", value: "subTitle" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "formFeedback" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "link" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "href" } },
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "referrerpolicy" } },
                            { kind: "Field", name: { kind: "Name", value: "rel" } },
                            { kind: "Field", name: { kind: "Name", value: "target" } },
                            { kind: "Field", name: { kind: "Name", value: "text" } },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "text" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "promoBanners" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "icon" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "link" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            { kind: "Field", name: { kind: "Name", value: "href" } },
                            { kind: "Field", name: { kind: "Name", value: "id" } },
                            { kind: "Field", name: { kind: "Name", value: "referrerpolicy" } },
                            { kind: "Field", name: { kind: "Name", value: "rel" } },
                            { kind: "Field", name: { kind: "Name", value: "target" } },
                            { kind: "Field", name: { kind: "Name", value: "text" } },
                          ],
                        },
                      },
                      { kind: "Field", name: { kind: "Name", value: "text" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetHomepageDynamicDataQuery, GetHomepageDynamicDataQueryVariables>;
