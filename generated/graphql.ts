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
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  data?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Query = {
  __typename?: 'Query';
  orders?: Maybe<OrderResolver>;
};


export type QueryOrdersArgs = {
  xaxis?: InputMaybe<Scalars['String']>;
  yaxis?: InputMaybe<Scalars['String']>;
};

export type OrdersQueryVariables = Exact<{
  xaxis?: InputMaybe<Scalars['String']>;
  yaxis?: InputMaybe<Scalars['String']>;
}>;


export type OrdersQuery = { __typename?: 'Query', orders?: { __typename?: 'OrderResolver', data?: Array<number | null> | null, categories?: Array<string | null> | null } | null };


export const OrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"orders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"xaxis"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"yaxis"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"xaxis"},"value":{"kind":"Variable","name":{"kind":"Name","value":"xaxis"}}},{"kind":"Argument","name":{"kind":"Name","value":"yaxis"},"value":{"kind":"Variable","name":{"kind":"Name","value":"yaxis"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"}},{"kind":"Field","name":{"kind":"Name","value":"categories"}}]}}]}}]} as unknown as DocumentNode<OrdersQuery, OrdersQueryVariables>;