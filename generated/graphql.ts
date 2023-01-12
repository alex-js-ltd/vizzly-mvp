/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum Aggregate {
  Mean = 'mean',
  Sum = 'sum'
}

export enum Measure {
  QtyOrdered = 'qty_ordered',
  Total = 'total',
  Value = 'value'
}

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
  aggregate: Aggregate;
  dimension: DimensionKey;
  measure: Measure;
};

export enum DimensionKey {
  Category = 'category',
  Month = 'month',
  PaymentMethod = 'payment_method',
  Region = 'region'
}

export type OrdersQueryVariables = Exact<{
  dimension: DimensionKey;
  measure: Measure;
  aggregate: Aggregate;
}>;


export type OrdersQuery = { __typename?: 'Query', orders?: { __typename?: 'OrderResolver', data?: Array<number | null> | null, dimensions?: Array<string | null> | null } | null };


export const OrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"orders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"dimension"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"dimensionKey"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"measure"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Measure"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"aggregate"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Aggregate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"dimension"},"value":{"kind":"Variable","name":{"kind":"Name","value":"dimension"}}},{"kind":"Argument","name":{"kind":"Name","value":"measure"},"value":{"kind":"Variable","name":{"kind":"Name","value":"measure"}}},{"kind":"Argument","name":{"kind":"Name","value":"aggregate"},"value":{"kind":"Variable","name":{"kind":"Name","value":"aggregate"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"dimensions"}}]}}]}}]} as unknown as DocumentNode<OrdersQuery, OrdersQueryVariables>;