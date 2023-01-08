import { GraphQLResolveInfo } from 'graphql';
import { PrismaOrder, Context } from 'pages/api/graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = utils/query.server#CatKey | T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Order = {
  __typename?: 'Order';
  bi_st: Scalars['String'];
  category: Scalars['String'];
  city: Scalars['String'];
  county: Scalars['String'];
  cust_id: Scalars['Int'];
  customer_since: Scalars['String'];
  discount_amount: Scalars['Float'];
  discount_percent: Scalars['Float'];
  id: Scalars['Int'];
  item_id: Scalars['Int'];
  month: Scalars['String'];
  order_date: Scalars['String'];
  order_id: Scalars['Int'];
  payment_method: Scalars['String'];
  place_name: Scalars['String'];
  price: Scalars['Float'];
  qty_ordered: Scalars['Int'];
  ref_num: Scalars['Int'];
  region: Scalars['String'];
  sku: Scalars['String'];
  state: Scalars['String'];
  status: Scalars['String'];
  total: Scalars['Float'];
  value: Scalars['Float'];
  year: Scalars['Int'];
  zip: Scalars['Int'];
};

export type OrderResolver = {
  __typename?: 'OrderResolver';
  data?: Maybe<Array<Maybe<Scalars['Int']>>>;
  dimensions?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Query = {
  __typename?: 'Query';
  orders?: Maybe<OrderResolver>;
};


export type QueryOrdersArgs = {
  aggregate: Scalars['String'];
  chartType?: InputMaybe<Scalars['String']>;
  dimension?: InputMaybe<Scalars['String']>;
  measure?: InputMaybe<Scalars['String']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Order: ResolverTypeWrapper<PrismaOrder>;
  OrderResolver: ResolverTypeWrapper<OrderResolver>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  Order: PrismaOrder;
  OrderResolver: OrderResolver;
  Query: {};
  String: Scalars['String'];
};

export type OrderResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  bi_st?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  county?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cust_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  customer_since?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  discount_amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  discount_percent?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  item_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  month?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  order_id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  payment_method?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  place_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  qty_ordered?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  ref_num?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  region?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  year?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  zip?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderResolverResolvers<ContextType = Context, ParentType extends ResolversParentTypes['OrderResolver'] = ResolversParentTypes['OrderResolver']> = {
  data?: Resolver<Maybe<Array<Maybe<ResolversTypes['Int']>>>, ParentType, ContextType>;
  dimensions?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  orders?: Resolver<Maybe<ResolversTypes['OrderResolver']>, ParentType, ContextType, RequireFields<QueryOrdersArgs, 'aggregate'>>;
};

export type Resolvers<ContextType = Context> = {
  Order?: OrderResolvers<ContextType>;
  OrderResolver?: OrderResolverResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

