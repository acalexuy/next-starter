// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace SampleSourceTypes {
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
  _Any: any;
};

export type Country = {
  code: Scalars['ID'];
  name: Scalars['String'];
  native: Scalars['String'];
  phone: Scalars['String'];
  continent: Continent;
  capital?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  languages: Array<Language>;
  emoji: Scalars['String'];
  emojiU: Scalars['String'];
  states: Array<State>;
};

export type Continent = {
  code: Scalars['ID'];
  name: Scalars['String'];
  countries: Array<Country>;
};

export type Language = {
  code: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  native?: Maybe<Scalars['String']>;
  rtl: Scalars['Boolean'];
};

export type State = {
  code?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  country: Country;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type CountryFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
  currency?: InputMaybe<StringQueryOperatorInput>;
  continent?: InputMaybe<StringQueryOperatorInput>;
};

export type ContinentFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type LanguageFilterInput = {
  code?: InputMaybe<StringQueryOperatorInput>;
};

export type Query = {
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  countries: Array<Country>;
  country?: Maybe<Country>;
  continents: Array<Continent>;
  continent?: Maybe<Continent>;
  languages: Array<Language>;
  language?: Maybe<Language>;
};


export type Query_entitiesArgs = {
  representations: Array<Scalars['_Any']>;
};


export type QuerycountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>;
};


export type QuerycountryArgs = {
  code: Scalars['ID'];
};


export type QuerycontinentsArgs = {
  filter?: InputMaybe<ContinentFilterInput>;
};


export type QuerycontinentArgs = {
  code: Scalars['ID'];
};


export type QuerylanguagesArgs = {
  filter?: InputMaybe<LanguageFilterInput>;
};


export type QuerylanguageArgs = {
  code: Scalars['ID'];
};

export type _Entity = Country | Continent | Language;

export type _Service = {
  /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
  sdl?: Maybe<Scalars['String']>;
};

  export type QuerySdk = {
      /** null **/
  _entities: InContextSdkMethod<Query['_entities'], Query_entitiesArgs, MeshContext>,
  /** null **/
  _service: InContextSdkMethod<Query['_service'], {}, MeshContext>,
  /** null **/
  countries: InContextSdkMethod<Query['countries'], QuerycountriesArgs, MeshContext>,
  /** null **/
  country: InContextSdkMethod<Query['country'], QuerycountryArgs, MeshContext>,
  /** null **/
  continents: InContextSdkMethod<Query['continents'], QuerycontinentsArgs, MeshContext>,
  /** null **/
  continent: InContextSdkMethod<Query['continent'], QuerycontinentArgs, MeshContext>,
  /** null **/
  languages: InContextSdkMethod<Query['languages'], QuerylanguagesArgs, MeshContext>,
  /** null **/
  language: InContextSdkMethod<Query['language'], QuerylanguageArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["sampleSource"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
