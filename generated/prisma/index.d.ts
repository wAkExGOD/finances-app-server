
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PurchaseCategory
 * 
 */
export type PurchaseCategory = $Result.DefaultSelection<Prisma.$PurchaseCategoryPayload>
/**
 * Model Purchase
 * 
 */
export type Purchase = $Result.DefaultSelection<Prisma.$PurchasePayload>
/**
 * Model ConfirmEmailToken
 * 
 */
export type ConfirmEmailToken = $Result.DefaultSelection<Prisma.$ConfirmEmailTokenPayload>
/**
 * Model PasswordRecoveryToken
 * 
 */
export type PasswordRecoveryToken = $Result.DefaultSelection<Prisma.$PasswordRecoveryTokenPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchaseCategory`: Exposes CRUD operations for the **PurchaseCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchaseCategories
    * const purchaseCategories = await prisma.purchaseCategory.findMany()
    * ```
    */
  get purchaseCategory(): Prisma.PurchaseCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchase`: Exposes CRUD operations for the **Purchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Purchases
    * const purchases = await prisma.purchase.findMany()
    * ```
    */
  get purchase(): Prisma.PurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.confirmEmailToken`: Exposes CRUD operations for the **ConfirmEmailToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConfirmEmailTokens
    * const confirmEmailTokens = await prisma.confirmEmailToken.findMany()
    * ```
    */
  get confirmEmailToken(): Prisma.ConfirmEmailTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordRecoveryToken`: Exposes CRUD operations for the **PasswordRecoveryToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordRecoveryTokens
    * const passwordRecoveryTokens = await prisma.passwordRecoveryToken.findMany()
    * ```
    */
  get passwordRecoveryToken(): Prisma.PasswordRecoveryTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    PurchaseCategory: 'PurchaseCategory',
    Purchase: 'Purchase',
    ConfirmEmailToken: 'ConfirmEmailToken',
    PasswordRecoveryToken: 'PasswordRecoveryToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "purchaseCategory" | "purchase" | "confirmEmailToken" | "passwordRecoveryToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PurchaseCategory: {
        payload: Prisma.$PurchaseCategoryPayload<ExtArgs>
        fields: Prisma.PurchaseCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseCategoryPayload>
          }
          findFirst: {
            args: Prisma.PurchaseCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseCategoryPayload>
          }
          findMany: {
            args: Prisma.PurchaseCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseCategoryPayload>[]
          }
          create: {
            args: Prisma.PurchaseCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseCategoryPayload>
          }
          createMany: {
            args: Prisma.PurchaseCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseCategoryPayload>[]
          }
          delete: {
            args: Prisma.PurchaseCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseCategoryPayload>
          }
          update: {
            args: Prisma.PurchaseCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseCategoryPayload>
          }
          deleteMany: {
            args: Prisma.PurchaseCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseCategoryPayload>[]
          }
          upsert: {
            args: Prisma.PurchaseCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchaseCategoryPayload>
          }
          aggregate: {
            args: Prisma.PurchaseCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchaseCategory>
          }
          groupBy: {
            args: Prisma.PurchaseCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseCategoryCountAggregateOutputType> | number
          }
        }
      }
      Purchase: {
        payload: Prisma.$PurchasePayload<ExtArgs>
        fields: Prisma.PurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findFirst: {
            args: Prisma.PurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          findMany: {
            args: Prisma.PurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          create: {
            args: Prisma.PurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          createMany: {
            args: Prisma.PurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          delete: {
            args: Prisma.PurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          update: {
            args: Prisma.PurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          deleteMany: {
            args: Prisma.PurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>[]
          }
          upsert: {
            args: Prisma.PurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasePayload>
          }
          aggregate: {
            args: Prisma.PurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchase>
          }
          groupBy: {
            args: Prisma.PurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<PurchaseCountAggregateOutputType> | number
          }
        }
      }
      ConfirmEmailToken: {
        payload: Prisma.$ConfirmEmailTokenPayload<ExtArgs>
        fields: Prisma.ConfirmEmailTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConfirmEmailTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmEmailTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConfirmEmailTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmEmailTokenPayload>
          }
          findFirst: {
            args: Prisma.ConfirmEmailTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmEmailTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConfirmEmailTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmEmailTokenPayload>
          }
          findMany: {
            args: Prisma.ConfirmEmailTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmEmailTokenPayload>[]
          }
          create: {
            args: Prisma.ConfirmEmailTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmEmailTokenPayload>
          }
          createMany: {
            args: Prisma.ConfirmEmailTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConfirmEmailTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmEmailTokenPayload>[]
          }
          delete: {
            args: Prisma.ConfirmEmailTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmEmailTokenPayload>
          }
          update: {
            args: Prisma.ConfirmEmailTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmEmailTokenPayload>
          }
          deleteMany: {
            args: Prisma.ConfirmEmailTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConfirmEmailTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConfirmEmailTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmEmailTokenPayload>[]
          }
          upsert: {
            args: Prisma.ConfirmEmailTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConfirmEmailTokenPayload>
          }
          aggregate: {
            args: Prisma.ConfirmEmailTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConfirmEmailToken>
          }
          groupBy: {
            args: Prisma.ConfirmEmailTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConfirmEmailTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConfirmEmailTokenCountArgs<ExtArgs>
            result: $Utils.Optional<ConfirmEmailTokenCountAggregateOutputType> | number
          }
        }
      }
      PasswordRecoveryToken: {
        payload: Prisma.$PasswordRecoveryTokenPayload<ExtArgs>
        fields: Prisma.PasswordRecoveryTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordRecoveryTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordRecoveryTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryTokenPayload>
          }
          findFirst: {
            args: Prisma.PasswordRecoveryTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordRecoveryTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryTokenPayload>
          }
          findMany: {
            args: Prisma.PasswordRecoveryTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryTokenPayload>[]
          }
          create: {
            args: Prisma.PasswordRecoveryTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryTokenPayload>
          }
          createMany: {
            args: Prisma.PasswordRecoveryTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordRecoveryTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryTokenPayload>[]
          }
          delete: {
            args: Prisma.PasswordRecoveryTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryTokenPayload>
          }
          update: {
            args: Prisma.PasswordRecoveryTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryTokenPayload>
          }
          deleteMany: {
            args: Prisma.PasswordRecoveryTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordRecoveryTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordRecoveryTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryTokenPayload>[]
          }
          upsert: {
            args: Prisma.PasswordRecoveryTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordRecoveryTokenPayload>
          }
          aggregate: {
            args: Prisma.PasswordRecoveryTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordRecoveryToken>
          }
          groupBy: {
            args: Prisma.PasswordRecoveryTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordRecoveryTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordRecoveryTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordRecoveryTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    purchaseCategory?: PurchaseCategoryOmit
    purchase?: PurchaseOmit
    confirmEmailToken?: ConfirmEmailTokenOmit
    passwordRecoveryToken?: PasswordRecoveryTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    purchases: number
    confirmEmailToken: number
    recoveryPasswordToken: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | UserCountOutputTypeCountPurchasesArgs
    confirmEmailToken?: boolean | UserCountOutputTypeCountConfirmEmailTokenArgs
    recoveryPasswordToken?: boolean | UserCountOutputTypeCountRecoveryPasswordTokenArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountConfirmEmailTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfirmEmailTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecoveryPasswordTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordRecoveryTokenWhereInput
  }


  /**
   * Count Type PurchaseCategoryCountOutputType
   */

  export type PurchaseCategoryCountOutputType = {
    purchases: number
  }

  export type PurchaseCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | PurchaseCategoryCountOutputTypeCountPurchasesArgs
  }

  // Custom InputTypes
  /**
   * PurchaseCategoryCountOutputType without action
   */
  export type PurchaseCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseCategoryCountOutputType
     */
    select?: PurchaseCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchaseCategoryCountOutputType without action
   */
  export type PurchaseCategoryCountOutputTypeCountPurchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    createdAt: Date | null
    password: string | null
    verified: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    createdAt: Date | null
    password: string | null
    verified: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    password: number
    verified: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    password?: true
    verified?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    password?: true
    verified?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    password?: true
    verified?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    createdAt: Date
    password: string
    verified: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    password?: boolean
    verified?: boolean
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    confirmEmailToken?: boolean | User$confirmEmailTokenArgs<ExtArgs>
    recoveryPasswordToken?: boolean | User$recoveryPasswordTokenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    password?: boolean
    verified?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    password?: boolean
    verified?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
    password?: boolean
    verified?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "createdAt" | "password" | "verified", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | User$purchasesArgs<ExtArgs>
    confirmEmailToken?: boolean | User$confirmEmailTokenArgs<ExtArgs>
    recoveryPasswordToken?: boolean | User$recoveryPasswordTokenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      purchases: Prisma.$PurchasePayload<ExtArgs>[]
      confirmEmailToken: Prisma.$ConfirmEmailTokenPayload<ExtArgs>[]
      recoveryPasswordToken: Prisma.$PasswordRecoveryTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      createdAt: Date
      password: string
      verified: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchases<T extends User$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, User$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    confirmEmailToken<T extends User$confirmEmailTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$confirmEmailTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfirmEmailTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recoveryPasswordToken<T extends User$recoveryPasswordTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$recoveryPasswordTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordRecoveryTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly password: FieldRef<"User", 'String'>
    readonly verified: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.purchases
   */
  export type User$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * User.confirmEmailToken
   */
  export type User$confirmEmailTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmEmailToken
     */
    select?: ConfirmEmailTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmEmailToken
     */
    omit?: ConfirmEmailTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmEmailTokenInclude<ExtArgs> | null
    where?: ConfirmEmailTokenWhereInput
    orderBy?: ConfirmEmailTokenOrderByWithRelationInput | ConfirmEmailTokenOrderByWithRelationInput[]
    cursor?: ConfirmEmailTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConfirmEmailTokenScalarFieldEnum | ConfirmEmailTokenScalarFieldEnum[]
  }

  /**
   * User.recoveryPasswordToken
   */
  export type User$recoveryPasswordTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecoveryToken
     */
    select?: PasswordRecoveryTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecoveryToken
     */
    omit?: PasswordRecoveryTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryTokenInclude<ExtArgs> | null
    where?: PasswordRecoveryTokenWhereInput
    orderBy?: PasswordRecoveryTokenOrderByWithRelationInput | PasswordRecoveryTokenOrderByWithRelationInput[]
    cursor?: PasswordRecoveryTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasswordRecoveryTokenScalarFieldEnum | PasswordRecoveryTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PurchaseCategory
   */

  export type AggregatePurchaseCategory = {
    _count: PurchaseCategoryCountAggregateOutputType | null
    _avg: PurchaseCategoryAvgAggregateOutputType | null
    _sum: PurchaseCategorySumAggregateOutputType | null
    _min: PurchaseCategoryMinAggregateOutputType | null
    _max: PurchaseCategoryMaxAggregateOutputType | null
  }

  export type PurchaseCategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type PurchaseCategorySumAggregateOutputType = {
    id: number | null
  }

  export type PurchaseCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type PurchaseCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type PurchaseCategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type PurchaseCategoryAvgAggregateInputType = {
    id?: true
  }

  export type PurchaseCategorySumAggregateInputType = {
    id?: true
  }

  export type PurchaseCategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type PurchaseCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type PurchaseCategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type PurchaseCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseCategory to aggregate.
     */
    where?: PurchaseCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseCategories to fetch.
     */
    orderBy?: PurchaseCategoryOrderByWithRelationInput | PurchaseCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchaseCategories
    **/
    _count?: true | PurchaseCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseCategoryMaxAggregateInputType
  }

  export type GetPurchaseCategoryAggregateType<T extends PurchaseCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchaseCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchaseCategory[P]>
      : GetScalarType<T[P], AggregatePurchaseCategory[P]>
  }




  export type PurchaseCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseCategoryWhereInput
    orderBy?: PurchaseCategoryOrderByWithAggregationInput | PurchaseCategoryOrderByWithAggregationInput[]
    by: PurchaseCategoryScalarFieldEnum[] | PurchaseCategoryScalarFieldEnum
    having?: PurchaseCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCategoryCountAggregateInputType | true
    _avg?: PurchaseCategoryAvgAggregateInputType
    _sum?: PurchaseCategorySumAggregateInputType
    _min?: PurchaseCategoryMinAggregateInputType
    _max?: PurchaseCategoryMaxAggregateInputType
  }

  export type PurchaseCategoryGroupByOutputType = {
    id: number
    name: string
    description: string
    _count: PurchaseCategoryCountAggregateOutputType | null
    _avg: PurchaseCategoryAvgAggregateOutputType | null
    _sum: PurchaseCategorySumAggregateOutputType | null
    _min: PurchaseCategoryMinAggregateOutputType | null
    _max: PurchaseCategoryMaxAggregateOutputType | null
  }

  type GetPurchaseCategoryGroupByPayload<T extends PurchaseCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseCategoryGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    purchases?: boolean | PurchaseCategory$purchasesArgs<ExtArgs>
    _count?: boolean | PurchaseCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchaseCategory"]>

  export type PurchaseCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["purchaseCategory"]>

  export type PurchaseCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["purchaseCategory"]>

  export type PurchaseCategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type PurchaseCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["purchaseCategory"]>
  export type PurchaseCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchases?: boolean | PurchaseCategory$purchasesArgs<ExtArgs>
    _count?: boolean | PurchaseCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchaseCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PurchaseCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PurchaseCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchaseCategory"
    objects: {
      purchases: Prisma.$PurchasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
    }, ExtArgs["result"]["purchaseCategory"]>
    composites: {}
  }

  type PurchaseCategoryGetPayload<S extends boolean | null | undefined | PurchaseCategoryDefaultArgs> = $Result.GetResult<Prisma.$PurchaseCategoryPayload, S>

  type PurchaseCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseCategoryCountAggregateInputType | true
    }

  export interface PurchaseCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchaseCategory'], meta: { name: 'PurchaseCategory' } }
    /**
     * Find zero or one PurchaseCategory that matches the filter.
     * @param {PurchaseCategoryFindUniqueArgs} args - Arguments to find a PurchaseCategory
     * @example
     * // Get one PurchaseCategory
     * const purchaseCategory = await prisma.purchaseCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseCategoryFindUniqueArgs>(args: SelectSubset<T, PurchaseCategoryFindUniqueArgs<ExtArgs>>): Prisma__PurchaseCategoryClient<$Result.GetResult<Prisma.$PurchaseCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurchaseCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseCategoryFindUniqueOrThrowArgs} args - Arguments to find a PurchaseCategory
     * @example
     * // Get one PurchaseCategory
     * const purchaseCategory = await prisma.purchaseCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseCategoryClient<$Result.GetResult<Prisma.$PurchaseCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCategoryFindFirstArgs} args - Arguments to find a PurchaseCategory
     * @example
     * // Get one PurchaseCategory
     * const purchaseCategory = await prisma.purchaseCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseCategoryFindFirstArgs>(args?: SelectSubset<T, PurchaseCategoryFindFirstArgs<ExtArgs>>): Prisma__PurchaseCategoryClient<$Result.GetResult<Prisma.$PurchaseCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchaseCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCategoryFindFirstOrThrowArgs} args - Arguments to find a PurchaseCategory
     * @example
     * // Get one PurchaseCategory
     * const purchaseCategory = await prisma.purchaseCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseCategoryClient<$Result.GetResult<Prisma.$PurchaseCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurchaseCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchaseCategories
     * const purchaseCategories = await prisma.purchaseCategory.findMany()
     * 
     * // Get first 10 PurchaseCategories
     * const purchaseCategories = await prisma.purchaseCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseCategoryWithIdOnly = await prisma.purchaseCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseCategoryFindManyArgs>(args?: SelectSubset<T, PurchaseCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurchaseCategory.
     * @param {PurchaseCategoryCreateArgs} args - Arguments to create a PurchaseCategory.
     * @example
     * // Create one PurchaseCategory
     * const PurchaseCategory = await prisma.purchaseCategory.create({
     *   data: {
     *     // ... data to create a PurchaseCategory
     *   }
     * })
     * 
     */
    create<T extends PurchaseCategoryCreateArgs>(args: SelectSubset<T, PurchaseCategoryCreateArgs<ExtArgs>>): Prisma__PurchaseCategoryClient<$Result.GetResult<Prisma.$PurchaseCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurchaseCategories.
     * @param {PurchaseCategoryCreateManyArgs} args - Arguments to create many PurchaseCategories.
     * @example
     * // Create many PurchaseCategories
     * const purchaseCategory = await prisma.purchaseCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseCategoryCreateManyArgs>(args?: SelectSubset<T, PurchaseCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchaseCategories and returns the data saved in the database.
     * @param {PurchaseCategoryCreateManyAndReturnArgs} args - Arguments to create many PurchaseCategories.
     * @example
     * // Create many PurchaseCategories
     * const purchaseCategory = await prisma.purchaseCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchaseCategories and only return the `id`
     * const purchaseCategoryWithIdOnly = await prisma.purchaseCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PurchaseCategory.
     * @param {PurchaseCategoryDeleteArgs} args - Arguments to delete one PurchaseCategory.
     * @example
     * // Delete one PurchaseCategory
     * const PurchaseCategory = await prisma.purchaseCategory.delete({
     *   where: {
     *     // ... filter to delete one PurchaseCategory
     *   }
     * })
     * 
     */
    delete<T extends PurchaseCategoryDeleteArgs>(args: SelectSubset<T, PurchaseCategoryDeleteArgs<ExtArgs>>): Prisma__PurchaseCategoryClient<$Result.GetResult<Prisma.$PurchaseCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurchaseCategory.
     * @param {PurchaseCategoryUpdateArgs} args - Arguments to update one PurchaseCategory.
     * @example
     * // Update one PurchaseCategory
     * const purchaseCategory = await prisma.purchaseCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseCategoryUpdateArgs>(args: SelectSubset<T, PurchaseCategoryUpdateArgs<ExtArgs>>): Prisma__PurchaseCategoryClient<$Result.GetResult<Prisma.$PurchaseCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurchaseCategories.
     * @param {PurchaseCategoryDeleteManyArgs} args - Arguments to filter PurchaseCategories to delete.
     * @example
     * // Delete a few PurchaseCategories
     * const { count } = await prisma.purchaseCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseCategoryDeleteManyArgs>(args?: SelectSubset<T, PurchaseCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchaseCategories
     * const purchaseCategory = await prisma.purchaseCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseCategoryUpdateManyArgs>(args: SelectSubset<T, PurchaseCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchaseCategories and returns the data updated in the database.
     * @param {PurchaseCategoryUpdateManyAndReturnArgs} args - Arguments to update many PurchaseCategories.
     * @example
     * // Update many PurchaseCategories
     * const purchaseCategory = await prisma.purchaseCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PurchaseCategories and only return the `id`
     * const purchaseCategoryWithIdOnly = await prisma.purchaseCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchaseCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchaseCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PurchaseCategory.
     * @param {PurchaseCategoryUpsertArgs} args - Arguments to update or create a PurchaseCategory.
     * @example
     * // Update or create a PurchaseCategory
     * const purchaseCategory = await prisma.purchaseCategory.upsert({
     *   create: {
     *     // ... data to create a PurchaseCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchaseCategory we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseCategoryUpsertArgs>(args: SelectSubset<T, PurchaseCategoryUpsertArgs<ExtArgs>>): Prisma__PurchaseCategoryClient<$Result.GetResult<Prisma.$PurchaseCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurchaseCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCategoryCountArgs} args - Arguments to filter PurchaseCategories to count.
     * @example
     * // Count the number of PurchaseCategories
     * const count = await prisma.purchaseCategory.count({
     *   where: {
     *     // ... the filter for the PurchaseCategories we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCategoryCountArgs>(
      args?: Subset<T, PurchaseCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchaseCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseCategoryAggregateArgs>(args: Subset<T, PurchaseCategoryAggregateArgs>): Prisma.PrismaPromise<GetPurchaseCategoryAggregateType<T>>

    /**
     * Group by PurchaseCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseCategoryGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchaseCategory model
   */
  readonly fields: PurchaseCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchaseCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    purchases<T extends PurchaseCategory$purchasesArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseCategory$purchasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PurchaseCategory model
   */
  interface PurchaseCategoryFieldRefs {
    readonly id: FieldRef<"PurchaseCategory", 'Int'>
    readonly name: FieldRef<"PurchaseCategory", 'String'>
    readonly description: FieldRef<"PurchaseCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PurchaseCategory findUnique
   */
  export type PurchaseCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseCategory
     */
    select?: PurchaseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseCategory
     */
    omit?: PurchaseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseCategory to fetch.
     */
    where: PurchaseCategoryWhereUniqueInput
  }

  /**
   * PurchaseCategory findUniqueOrThrow
   */
  export type PurchaseCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseCategory
     */
    select?: PurchaseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseCategory
     */
    omit?: PurchaseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseCategory to fetch.
     */
    where: PurchaseCategoryWhereUniqueInput
  }

  /**
   * PurchaseCategory findFirst
   */
  export type PurchaseCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseCategory
     */
    select?: PurchaseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseCategory
     */
    omit?: PurchaseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseCategory to fetch.
     */
    where?: PurchaseCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseCategories to fetch.
     */
    orderBy?: PurchaseCategoryOrderByWithRelationInput | PurchaseCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseCategories.
     */
    cursor?: PurchaseCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseCategories.
     */
    distinct?: PurchaseCategoryScalarFieldEnum | PurchaseCategoryScalarFieldEnum[]
  }

  /**
   * PurchaseCategory findFirstOrThrow
   */
  export type PurchaseCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseCategory
     */
    select?: PurchaseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseCategory
     */
    omit?: PurchaseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseCategory to fetch.
     */
    where?: PurchaseCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseCategories to fetch.
     */
    orderBy?: PurchaseCategoryOrderByWithRelationInput | PurchaseCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchaseCategories.
     */
    cursor?: PurchaseCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchaseCategories.
     */
    distinct?: PurchaseCategoryScalarFieldEnum | PurchaseCategoryScalarFieldEnum[]
  }

  /**
   * PurchaseCategory findMany
   */
  export type PurchaseCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseCategory
     */
    select?: PurchaseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseCategory
     */
    omit?: PurchaseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseCategoryInclude<ExtArgs> | null
    /**
     * Filter, which PurchaseCategories to fetch.
     */
    where?: PurchaseCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchaseCategories to fetch.
     */
    orderBy?: PurchaseCategoryOrderByWithRelationInput | PurchaseCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchaseCategories.
     */
    cursor?: PurchaseCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchaseCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchaseCategories.
     */
    skip?: number
    distinct?: PurchaseCategoryScalarFieldEnum | PurchaseCategoryScalarFieldEnum[]
  }

  /**
   * PurchaseCategory create
   */
  export type PurchaseCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseCategory
     */
    select?: PurchaseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseCategory
     */
    omit?: PurchaseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchaseCategory.
     */
    data: XOR<PurchaseCategoryCreateInput, PurchaseCategoryUncheckedCreateInput>
  }

  /**
   * PurchaseCategory createMany
   */
  export type PurchaseCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchaseCategories.
     */
    data: PurchaseCategoryCreateManyInput | PurchaseCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseCategory createManyAndReturn
   */
  export type PurchaseCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseCategory
     */
    select?: PurchaseCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseCategory
     */
    omit?: PurchaseCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many PurchaseCategories.
     */
    data: PurchaseCategoryCreateManyInput | PurchaseCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchaseCategory update
   */
  export type PurchaseCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseCategory
     */
    select?: PurchaseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseCategory
     */
    omit?: PurchaseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchaseCategory.
     */
    data: XOR<PurchaseCategoryUpdateInput, PurchaseCategoryUncheckedUpdateInput>
    /**
     * Choose, which PurchaseCategory to update.
     */
    where: PurchaseCategoryWhereUniqueInput
  }

  /**
   * PurchaseCategory updateMany
   */
  export type PurchaseCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchaseCategories.
     */
    data: XOR<PurchaseCategoryUpdateManyMutationInput, PurchaseCategoryUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseCategories to update
     */
    where?: PurchaseCategoryWhereInput
    /**
     * Limit how many PurchaseCategories to update.
     */
    limit?: number
  }

  /**
   * PurchaseCategory updateManyAndReturn
   */
  export type PurchaseCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseCategory
     */
    select?: PurchaseCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseCategory
     */
    omit?: PurchaseCategoryOmit<ExtArgs> | null
    /**
     * The data used to update PurchaseCategories.
     */
    data: XOR<PurchaseCategoryUpdateManyMutationInput, PurchaseCategoryUncheckedUpdateManyInput>
    /**
     * Filter which PurchaseCategories to update
     */
    where?: PurchaseCategoryWhereInput
    /**
     * Limit how many PurchaseCategories to update.
     */
    limit?: number
  }

  /**
   * PurchaseCategory upsert
   */
  export type PurchaseCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseCategory
     */
    select?: PurchaseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseCategory
     */
    omit?: PurchaseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchaseCategory to update in case it exists.
     */
    where: PurchaseCategoryWhereUniqueInput
    /**
     * In case the PurchaseCategory found by the `where` argument doesn't exist, create a new PurchaseCategory with this data.
     */
    create: XOR<PurchaseCategoryCreateInput, PurchaseCategoryUncheckedCreateInput>
    /**
     * In case the PurchaseCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseCategoryUpdateInput, PurchaseCategoryUncheckedUpdateInput>
  }

  /**
   * PurchaseCategory delete
   */
  export type PurchaseCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseCategory
     */
    select?: PurchaseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseCategory
     */
    omit?: PurchaseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseCategoryInclude<ExtArgs> | null
    /**
     * Filter which PurchaseCategory to delete.
     */
    where: PurchaseCategoryWhereUniqueInput
  }

  /**
   * PurchaseCategory deleteMany
   */
  export type PurchaseCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchaseCategories to delete
     */
    where?: PurchaseCategoryWhereInput
    /**
     * Limit how many PurchaseCategories to delete.
     */
    limit?: number
  }

  /**
   * PurchaseCategory.purchases
   */
  export type PurchaseCategory$purchasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    cursor?: PurchaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * PurchaseCategory without action
   */
  export type PurchaseCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchaseCategory
     */
    select?: PurchaseCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchaseCategory
     */
    omit?: PurchaseCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseCategoryInclude<ExtArgs> | null
  }


  /**
   * Model Purchase
   */

  export type AggregatePurchase = {
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  export type PurchaseAvgAggregateOutputType = {
    id: number | null
    price: number | null
    createdBy: number | null
    categoryId: number | null
  }

  export type PurchaseSumAggregateOutputType = {
    id: number | null
    price: number | null
    createdBy: number | null
    categoryId: number | null
  }

  export type PurchaseMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    createdBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: number | null
  }

  export type PurchaseMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: number | null
    createdBy: number | null
    createdAt: Date | null
    updatedAt: Date | null
    categoryId: number | null
  }

  export type PurchaseCountAggregateOutputType = {
    id: number
    name: number
    price: number
    createdBy: number
    createdAt: number
    updatedAt: number
    categoryId: number
    _all: number
  }


  export type PurchaseAvgAggregateInputType = {
    id?: true
    price?: true
    createdBy?: true
    categoryId?: true
  }

  export type PurchaseSumAggregateInputType = {
    id?: true
    price?: true
    createdBy?: true
    categoryId?: true
  }

  export type PurchaseMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
  }

  export type PurchaseMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
  }

  export type PurchaseCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    categoryId?: true
    _all?: true
  }

  export type PurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchase to aggregate.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Purchases
    **/
    _count?: true | PurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchaseMaxAggregateInputType
  }

  export type GetPurchaseAggregateType<T extends PurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchase[P]>
      : GetScalarType<T[P], AggregatePurchase[P]>
  }




  export type PurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchaseWhereInput
    orderBy?: PurchaseOrderByWithAggregationInput | PurchaseOrderByWithAggregationInput[]
    by: PurchaseScalarFieldEnum[] | PurchaseScalarFieldEnum
    having?: PurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchaseCountAggregateInputType | true
    _avg?: PurchaseAvgAggregateInputType
    _sum?: PurchaseSumAggregateInputType
    _min?: PurchaseMinAggregateInputType
    _max?: PurchaseMaxAggregateInputType
  }

  export type PurchaseGroupByOutputType = {
    id: number
    name: string
    price: number
    createdBy: number
    createdAt: Date
    updatedAt: Date
    categoryId: number
    _count: PurchaseCountAggregateOutputType | null
    _avg: PurchaseAvgAggregateOutputType | null
    _sum: PurchaseSumAggregateOutputType | null
    _min: PurchaseMinAggregateOutputType | null
    _max: PurchaseMaxAggregateOutputType | null
  }

  type GetPurchaseGroupByPayload<T extends PurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], PurchaseGroupByOutputType[P]>
        }
      >
    >


  export type PurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    category?: boolean | PurchaseCategoryDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    category?: boolean | PurchaseCategoryDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
    category?: boolean | PurchaseCategoryDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchase"]>

  export type PurchaseSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    categoryId?: boolean
  }

  export type PurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "createdBy" | "createdAt" | "updatedAt" | "categoryId", ExtArgs["result"]["purchase"]>
  export type PurchaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | PurchaseCategoryDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | PurchaseCategoryDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PurchaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | PurchaseCategoryDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Purchase"
    objects: {
      category: Prisma.$PurchaseCategoryPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: number
      createdBy: number
      createdAt: Date
      updatedAt: Date
      categoryId: number
    }, ExtArgs["result"]["purchase"]>
    composites: {}
  }

  type PurchaseGetPayload<S extends boolean | null | undefined | PurchaseDefaultArgs> = $Result.GetResult<Prisma.$PurchasePayload, S>

  type PurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchaseCountAggregateInputType | true
    }

  export interface PurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Purchase'], meta: { name: 'Purchase' } }
    /**
     * Find zero or one Purchase that matches the filter.
     * @param {PurchaseFindUniqueArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchaseFindUniqueArgs>(args: SelectSubset<T, PurchaseFindUniqueArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Purchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchaseFindUniqueOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchaseFindFirstArgs>(args?: SelectSubset<T, PurchaseFindFirstArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Purchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindFirstOrThrowArgs} args - Arguments to find a Purchase
     * @example
     * // Get one Purchase
     * const purchase = await prisma.purchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Purchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Purchases
     * const purchases = await prisma.purchase.findMany()
     * 
     * // Get first 10 Purchases
     * const purchases = await prisma.purchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchaseWithIdOnly = await prisma.purchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchaseFindManyArgs>(args?: SelectSubset<T, PurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Purchase.
     * @param {PurchaseCreateArgs} args - Arguments to create a Purchase.
     * @example
     * // Create one Purchase
     * const Purchase = await prisma.purchase.create({
     *   data: {
     *     // ... data to create a Purchase
     *   }
     * })
     * 
     */
    create<T extends PurchaseCreateArgs>(args: SelectSubset<T, PurchaseCreateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Purchases.
     * @param {PurchaseCreateManyArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchaseCreateManyArgs>(args?: SelectSubset<T, PurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Purchases and returns the data saved in the database.
     * @param {PurchaseCreateManyAndReturnArgs} args - Arguments to create many Purchases.
     * @example
     * // Create many Purchases
     * const purchase = await prisma.purchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Purchase.
     * @param {PurchaseDeleteArgs} args - Arguments to delete one Purchase.
     * @example
     * // Delete one Purchase
     * const Purchase = await prisma.purchase.delete({
     *   where: {
     *     // ... filter to delete one Purchase
     *   }
     * })
     * 
     */
    delete<T extends PurchaseDeleteArgs>(args: SelectSubset<T, PurchaseDeleteArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Purchase.
     * @param {PurchaseUpdateArgs} args - Arguments to update one Purchase.
     * @example
     * // Update one Purchase
     * const purchase = await prisma.purchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchaseUpdateArgs>(args: SelectSubset<T, PurchaseUpdateArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Purchases.
     * @param {PurchaseDeleteManyArgs} args - Arguments to filter Purchases to delete.
     * @example
     * // Delete a few Purchases
     * const { count } = await prisma.purchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchaseDeleteManyArgs>(args?: SelectSubset<T, PurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchaseUpdateManyArgs>(args: SelectSubset<T, PurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Purchases and returns the data updated in the database.
     * @param {PurchaseUpdateManyAndReturnArgs} args - Arguments to update many Purchases.
     * @example
     * // Update many Purchases
     * const purchase = await prisma.purchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Purchases and only return the `id`
     * const purchaseWithIdOnly = await prisma.purchase.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Purchase.
     * @param {PurchaseUpsertArgs} args - Arguments to update or create a Purchase.
     * @example
     * // Update or create a Purchase
     * const purchase = await prisma.purchase.upsert({
     *   create: {
     *     // ... data to create a Purchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Purchase we want to update
     *   }
     * })
     */
    upsert<T extends PurchaseUpsertArgs>(args: SelectSubset<T, PurchaseUpsertArgs<ExtArgs>>): Prisma__PurchaseClient<$Result.GetResult<Prisma.$PurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Purchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseCountArgs} args - Arguments to filter Purchases to count.
     * @example
     * // Count the number of Purchases
     * const count = await prisma.purchase.count({
     *   where: {
     *     // ... the filter for the Purchases we want to count
     *   }
     * })
    **/
    count<T extends PurchaseCountArgs>(
      args?: Subset<T, PurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PurchaseAggregateArgs>(args: Subset<T, PurchaseAggregateArgs>): Prisma.PrismaPromise<GetPurchaseAggregateType<T>>

    /**
     * Group by Purchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchaseGroupByArgs['orderBy'] }
        : { orderBy?: PurchaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Purchase model
   */
  readonly fields: PurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Purchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends PurchaseCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchaseCategoryDefaultArgs<ExtArgs>>): Prisma__PurchaseCategoryClient<$Result.GetResult<Prisma.$PurchaseCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Purchase model
   */
  interface PurchaseFieldRefs {
    readonly id: FieldRef<"Purchase", 'Int'>
    readonly name: FieldRef<"Purchase", 'String'>
    readonly price: FieldRef<"Purchase", 'Float'>
    readonly createdBy: FieldRef<"Purchase", 'Int'>
    readonly createdAt: FieldRef<"Purchase", 'DateTime'>
    readonly updatedAt: FieldRef<"Purchase", 'DateTime'>
    readonly categoryId: FieldRef<"Purchase", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Purchase findUnique
   */
  export type PurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findUniqueOrThrow
   */
  export type PurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase findFirst
   */
  export type PurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findFirstOrThrow
   */
  export type PurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchase to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Purchases.
     */
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase findMany
   */
  export type PurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter, which Purchases to fetch.
     */
    where?: PurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Purchases to fetch.
     */
    orderBy?: PurchaseOrderByWithRelationInput | PurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Purchases.
     */
    cursor?: PurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Purchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Purchases.
     */
    skip?: number
    distinct?: PurchaseScalarFieldEnum | PurchaseScalarFieldEnum[]
  }

  /**
   * Purchase create
   */
  export type PurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Purchase.
     */
    data: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
  }

  /**
   * Purchase createMany
   */
  export type PurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Purchase createManyAndReturn
   */
  export type PurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many Purchases.
     */
    data: PurchaseCreateManyInput | PurchaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase update
   */
  export type PurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Purchase.
     */
    data: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
    /**
     * Choose, which Purchase to update.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase updateMany
   */
  export type PurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
  }

  /**
   * Purchase updateManyAndReturn
   */
  export type PurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * The data used to update Purchases.
     */
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyInput>
    /**
     * Filter which Purchases to update
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Purchase upsert
   */
  export type PurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Purchase to update in case it exists.
     */
    where: PurchaseWhereUniqueInput
    /**
     * In case the Purchase found by the `where` argument doesn't exist, create a new Purchase with this data.
     */
    create: XOR<PurchaseCreateInput, PurchaseUncheckedCreateInput>
    /**
     * In case the Purchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchaseUpdateInput, PurchaseUncheckedUpdateInput>
  }

  /**
   * Purchase delete
   */
  export type PurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
    /**
     * Filter which Purchase to delete.
     */
    where: PurchaseWhereUniqueInput
  }

  /**
   * Purchase deleteMany
   */
  export type PurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Purchases to delete
     */
    where?: PurchaseWhereInput
    /**
     * Limit how many Purchases to delete.
     */
    limit?: number
  }

  /**
   * Purchase without action
   */
  export type PurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Purchase
     */
    select?: PurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Purchase
     */
    omit?: PurchaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchaseInclude<ExtArgs> | null
  }


  /**
   * Model ConfirmEmailToken
   */

  export type AggregateConfirmEmailToken = {
    _count: ConfirmEmailTokenCountAggregateOutputType | null
    _avg: ConfirmEmailTokenAvgAggregateOutputType | null
    _sum: ConfirmEmailTokenSumAggregateOutputType | null
    _min: ConfirmEmailTokenMinAggregateOutputType | null
    _max: ConfirmEmailTokenMaxAggregateOutputType | null
  }

  export type ConfirmEmailTokenAvgAggregateOutputType = {
    userId: number | null
  }

  export type ConfirmEmailTokenSumAggregateOutputType = {
    userId: number | null
  }

  export type ConfirmEmailTokenMinAggregateOutputType = {
    userId: number | null
    token: string | null
  }

  export type ConfirmEmailTokenMaxAggregateOutputType = {
    userId: number | null
    token: string | null
  }

  export type ConfirmEmailTokenCountAggregateOutputType = {
    userId: number
    token: number
    _all: number
  }


  export type ConfirmEmailTokenAvgAggregateInputType = {
    userId?: true
  }

  export type ConfirmEmailTokenSumAggregateInputType = {
    userId?: true
  }

  export type ConfirmEmailTokenMinAggregateInputType = {
    userId?: true
    token?: true
  }

  export type ConfirmEmailTokenMaxAggregateInputType = {
    userId?: true
    token?: true
  }

  export type ConfirmEmailTokenCountAggregateInputType = {
    userId?: true
    token?: true
    _all?: true
  }

  export type ConfirmEmailTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfirmEmailToken to aggregate.
     */
    where?: ConfirmEmailTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmEmailTokens to fetch.
     */
    orderBy?: ConfirmEmailTokenOrderByWithRelationInput | ConfirmEmailTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConfirmEmailTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmEmailTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmEmailTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConfirmEmailTokens
    **/
    _count?: true | ConfirmEmailTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConfirmEmailTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConfirmEmailTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConfirmEmailTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConfirmEmailTokenMaxAggregateInputType
  }

  export type GetConfirmEmailTokenAggregateType<T extends ConfirmEmailTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateConfirmEmailToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConfirmEmailToken[P]>
      : GetScalarType<T[P], AggregateConfirmEmailToken[P]>
  }




  export type ConfirmEmailTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConfirmEmailTokenWhereInput
    orderBy?: ConfirmEmailTokenOrderByWithAggregationInput | ConfirmEmailTokenOrderByWithAggregationInput[]
    by: ConfirmEmailTokenScalarFieldEnum[] | ConfirmEmailTokenScalarFieldEnum
    having?: ConfirmEmailTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConfirmEmailTokenCountAggregateInputType | true
    _avg?: ConfirmEmailTokenAvgAggregateInputType
    _sum?: ConfirmEmailTokenSumAggregateInputType
    _min?: ConfirmEmailTokenMinAggregateInputType
    _max?: ConfirmEmailTokenMaxAggregateInputType
  }

  export type ConfirmEmailTokenGroupByOutputType = {
    userId: number
    token: string
    _count: ConfirmEmailTokenCountAggregateOutputType | null
    _avg: ConfirmEmailTokenAvgAggregateOutputType | null
    _sum: ConfirmEmailTokenSumAggregateOutputType | null
    _min: ConfirmEmailTokenMinAggregateOutputType | null
    _max: ConfirmEmailTokenMaxAggregateOutputType | null
  }

  type GetConfirmEmailTokenGroupByPayload<T extends ConfirmEmailTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConfirmEmailTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConfirmEmailTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConfirmEmailTokenGroupByOutputType[P]>
            : GetScalarType<T[P], ConfirmEmailTokenGroupByOutputType[P]>
        }
      >
    >


  export type ConfirmEmailTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    token?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["confirmEmailToken"]>

  export type ConfirmEmailTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    token?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["confirmEmailToken"]>

  export type ConfirmEmailTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    token?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["confirmEmailToken"]>

  export type ConfirmEmailTokenSelectScalar = {
    userId?: boolean
    token?: boolean
  }

  export type ConfirmEmailTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "token", ExtArgs["result"]["confirmEmailToken"]>
  export type ConfirmEmailTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConfirmEmailTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ConfirmEmailTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ConfirmEmailTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConfirmEmailToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      token: string
    }, ExtArgs["result"]["confirmEmailToken"]>
    composites: {}
  }

  type ConfirmEmailTokenGetPayload<S extends boolean | null | undefined | ConfirmEmailTokenDefaultArgs> = $Result.GetResult<Prisma.$ConfirmEmailTokenPayload, S>

  type ConfirmEmailTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConfirmEmailTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConfirmEmailTokenCountAggregateInputType | true
    }

  export interface ConfirmEmailTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConfirmEmailToken'], meta: { name: 'ConfirmEmailToken' } }
    /**
     * Find zero or one ConfirmEmailToken that matches the filter.
     * @param {ConfirmEmailTokenFindUniqueArgs} args - Arguments to find a ConfirmEmailToken
     * @example
     * // Get one ConfirmEmailToken
     * const confirmEmailToken = await prisma.confirmEmailToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConfirmEmailTokenFindUniqueArgs>(args: SelectSubset<T, ConfirmEmailTokenFindUniqueArgs<ExtArgs>>): Prisma__ConfirmEmailTokenClient<$Result.GetResult<Prisma.$ConfirmEmailTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConfirmEmailToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConfirmEmailTokenFindUniqueOrThrowArgs} args - Arguments to find a ConfirmEmailToken
     * @example
     * // Get one ConfirmEmailToken
     * const confirmEmailToken = await prisma.confirmEmailToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConfirmEmailTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, ConfirmEmailTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConfirmEmailTokenClient<$Result.GetResult<Prisma.$ConfirmEmailTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConfirmEmailToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmEmailTokenFindFirstArgs} args - Arguments to find a ConfirmEmailToken
     * @example
     * // Get one ConfirmEmailToken
     * const confirmEmailToken = await prisma.confirmEmailToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConfirmEmailTokenFindFirstArgs>(args?: SelectSubset<T, ConfirmEmailTokenFindFirstArgs<ExtArgs>>): Prisma__ConfirmEmailTokenClient<$Result.GetResult<Prisma.$ConfirmEmailTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConfirmEmailToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmEmailTokenFindFirstOrThrowArgs} args - Arguments to find a ConfirmEmailToken
     * @example
     * // Get one ConfirmEmailToken
     * const confirmEmailToken = await prisma.confirmEmailToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConfirmEmailTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, ConfirmEmailTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConfirmEmailTokenClient<$Result.GetResult<Prisma.$ConfirmEmailTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConfirmEmailTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmEmailTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConfirmEmailTokens
     * const confirmEmailTokens = await prisma.confirmEmailToken.findMany()
     * 
     * // Get first 10 ConfirmEmailTokens
     * const confirmEmailTokens = await prisma.confirmEmailToken.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const confirmEmailTokenWithUserIdOnly = await prisma.confirmEmailToken.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends ConfirmEmailTokenFindManyArgs>(args?: SelectSubset<T, ConfirmEmailTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfirmEmailTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConfirmEmailToken.
     * @param {ConfirmEmailTokenCreateArgs} args - Arguments to create a ConfirmEmailToken.
     * @example
     * // Create one ConfirmEmailToken
     * const ConfirmEmailToken = await prisma.confirmEmailToken.create({
     *   data: {
     *     // ... data to create a ConfirmEmailToken
     *   }
     * })
     * 
     */
    create<T extends ConfirmEmailTokenCreateArgs>(args: SelectSubset<T, ConfirmEmailTokenCreateArgs<ExtArgs>>): Prisma__ConfirmEmailTokenClient<$Result.GetResult<Prisma.$ConfirmEmailTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConfirmEmailTokens.
     * @param {ConfirmEmailTokenCreateManyArgs} args - Arguments to create many ConfirmEmailTokens.
     * @example
     * // Create many ConfirmEmailTokens
     * const confirmEmailToken = await prisma.confirmEmailToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConfirmEmailTokenCreateManyArgs>(args?: SelectSubset<T, ConfirmEmailTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConfirmEmailTokens and returns the data saved in the database.
     * @param {ConfirmEmailTokenCreateManyAndReturnArgs} args - Arguments to create many ConfirmEmailTokens.
     * @example
     * // Create many ConfirmEmailTokens
     * const confirmEmailToken = await prisma.confirmEmailToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConfirmEmailTokens and only return the `userId`
     * const confirmEmailTokenWithUserIdOnly = await prisma.confirmEmailToken.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConfirmEmailTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, ConfirmEmailTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfirmEmailTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConfirmEmailToken.
     * @param {ConfirmEmailTokenDeleteArgs} args - Arguments to delete one ConfirmEmailToken.
     * @example
     * // Delete one ConfirmEmailToken
     * const ConfirmEmailToken = await prisma.confirmEmailToken.delete({
     *   where: {
     *     // ... filter to delete one ConfirmEmailToken
     *   }
     * })
     * 
     */
    delete<T extends ConfirmEmailTokenDeleteArgs>(args: SelectSubset<T, ConfirmEmailTokenDeleteArgs<ExtArgs>>): Prisma__ConfirmEmailTokenClient<$Result.GetResult<Prisma.$ConfirmEmailTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConfirmEmailToken.
     * @param {ConfirmEmailTokenUpdateArgs} args - Arguments to update one ConfirmEmailToken.
     * @example
     * // Update one ConfirmEmailToken
     * const confirmEmailToken = await prisma.confirmEmailToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConfirmEmailTokenUpdateArgs>(args: SelectSubset<T, ConfirmEmailTokenUpdateArgs<ExtArgs>>): Prisma__ConfirmEmailTokenClient<$Result.GetResult<Prisma.$ConfirmEmailTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConfirmEmailTokens.
     * @param {ConfirmEmailTokenDeleteManyArgs} args - Arguments to filter ConfirmEmailTokens to delete.
     * @example
     * // Delete a few ConfirmEmailTokens
     * const { count } = await prisma.confirmEmailToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConfirmEmailTokenDeleteManyArgs>(args?: SelectSubset<T, ConfirmEmailTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConfirmEmailTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmEmailTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConfirmEmailTokens
     * const confirmEmailToken = await prisma.confirmEmailToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConfirmEmailTokenUpdateManyArgs>(args: SelectSubset<T, ConfirmEmailTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConfirmEmailTokens and returns the data updated in the database.
     * @param {ConfirmEmailTokenUpdateManyAndReturnArgs} args - Arguments to update many ConfirmEmailTokens.
     * @example
     * // Update many ConfirmEmailTokens
     * const confirmEmailToken = await prisma.confirmEmailToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConfirmEmailTokens and only return the `userId`
     * const confirmEmailTokenWithUserIdOnly = await prisma.confirmEmailToken.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConfirmEmailTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, ConfirmEmailTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConfirmEmailTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConfirmEmailToken.
     * @param {ConfirmEmailTokenUpsertArgs} args - Arguments to update or create a ConfirmEmailToken.
     * @example
     * // Update or create a ConfirmEmailToken
     * const confirmEmailToken = await prisma.confirmEmailToken.upsert({
     *   create: {
     *     // ... data to create a ConfirmEmailToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConfirmEmailToken we want to update
     *   }
     * })
     */
    upsert<T extends ConfirmEmailTokenUpsertArgs>(args: SelectSubset<T, ConfirmEmailTokenUpsertArgs<ExtArgs>>): Prisma__ConfirmEmailTokenClient<$Result.GetResult<Prisma.$ConfirmEmailTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConfirmEmailTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmEmailTokenCountArgs} args - Arguments to filter ConfirmEmailTokens to count.
     * @example
     * // Count the number of ConfirmEmailTokens
     * const count = await prisma.confirmEmailToken.count({
     *   where: {
     *     // ... the filter for the ConfirmEmailTokens we want to count
     *   }
     * })
    **/
    count<T extends ConfirmEmailTokenCountArgs>(
      args?: Subset<T, ConfirmEmailTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConfirmEmailTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConfirmEmailToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmEmailTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConfirmEmailTokenAggregateArgs>(args: Subset<T, ConfirmEmailTokenAggregateArgs>): Prisma.PrismaPromise<GetConfirmEmailTokenAggregateType<T>>

    /**
     * Group by ConfirmEmailToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConfirmEmailTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConfirmEmailTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConfirmEmailTokenGroupByArgs['orderBy'] }
        : { orderBy?: ConfirmEmailTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConfirmEmailTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfirmEmailTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConfirmEmailToken model
   */
  readonly fields: ConfirmEmailTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConfirmEmailToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConfirmEmailTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConfirmEmailToken model
   */
  interface ConfirmEmailTokenFieldRefs {
    readonly userId: FieldRef<"ConfirmEmailToken", 'Int'>
    readonly token: FieldRef<"ConfirmEmailToken", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ConfirmEmailToken findUnique
   */
  export type ConfirmEmailTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmEmailToken
     */
    select?: ConfirmEmailTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmEmailToken
     */
    omit?: ConfirmEmailTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmEmailTokenInclude<ExtArgs> | null
    /**
     * Filter, which ConfirmEmailToken to fetch.
     */
    where: ConfirmEmailTokenWhereUniqueInput
  }

  /**
   * ConfirmEmailToken findUniqueOrThrow
   */
  export type ConfirmEmailTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmEmailToken
     */
    select?: ConfirmEmailTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmEmailToken
     */
    omit?: ConfirmEmailTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmEmailTokenInclude<ExtArgs> | null
    /**
     * Filter, which ConfirmEmailToken to fetch.
     */
    where: ConfirmEmailTokenWhereUniqueInput
  }

  /**
   * ConfirmEmailToken findFirst
   */
  export type ConfirmEmailTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmEmailToken
     */
    select?: ConfirmEmailTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmEmailToken
     */
    omit?: ConfirmEmailTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmEmailTokenInclude<ExtArgs> | null
    /**
     * Filter, which ConfirmEmailToken to fetch.
     */
    where?: ConfirmEmailTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmEmailTokens to fetch.
     */
    orderBy?: ConfirmEmailTokenOrderByWithRelationInput | ConfirmEmailTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfirmEmailTokens.
     */
    cursor?: ConfirmEmailTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmEmailTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmEmailTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfirmEmailTokens.
     */
    distinct?: ConfirmEmailTokenScalarFieldEnum | ConfirmEmailTokenScalarFieldEnum[]
  }

  /**
   * ConfirmEmailToken findFirstOrThrow
   */
  export type ConfirmEmailTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmEmailToken
     */
    select?: ConfirmEmailTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmEmailToken
     */
    omit?: ConfirmEmailTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmEmailTokenInclude<ExtArgs> | null
    /**
     * Filter, which ConfirmEmailToken to fetch.
     */
    where?: ConfirmEmailTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmEmailTokens to fetch.
     */
    orderBy?: ConfirmEmailTokenOrderByWithRelationInput | ConfirmEmailTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConfirmEmailTokens.
     */
    cursor?: ConfirmEmailTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmEmailTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmEmailTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConfirmEmailTokens.
     */
    distinct?: ConfirmEmailTokenScalarFieldEnum | ConfirmEmailTokenScalarFieldEnum[]
  }

  /**
   * ConfirmEmailToken findMany
   */
  export type ConfirmEmailTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmEmailToken
     */
    select?: ConfirmEmailTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmEmailToken
     */
    omit?: ConfirmEmailTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmEmailTokenInclude<ExtArgs> | null
    /**
     * Filter, which ConfirmEmailTokens to fetch.
     */
    where?: ConfirmEmailTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConfirmEmailTokens to fetch.
     */
    orderBy?: ConfirmEmailTokenOrderByWithRelationInput | ConfirmEmailTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConfirmEmailTokens.
     */
    cursor?: ConfirmEmailTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConfirmEmailTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConfirmEmailTokens.
     */
    skip?: number
    distinct?: ConfirmEmailTokenScalarFieldEnum | ConfirmEmailTokenScalarFieldEnum[]
  }

  /**
   * ConfirmEmailToken create
   */
  export type ConfirmEmailTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmEmailToken
     */
    select?: ConfirmEmailTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmEmailToken
     */
    omit?: ConfirmEmailTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmEmailTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a ConfirmEmailToken.
     */
    data: XOR<ConfirmEmailTokenCreateInput, ConfirmEmailTokenUncheckedCreateInput>
  }

  /**
   * ConfirmEmailToken createMany
   */
  export type ConfirmEmailTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConfirmEmailTokens.
     */
    data: ConfirmEmailTokenCreateManyInput | ConfirmEmailTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConfirmEmailToken createManyAndReturn
   */
  export type ConfirmEmailTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmEmailToken
     */
    select?: ConfirmEmailTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmEmailToken
     */
    omit?: ConfirmEmailTokenOmit<ExtArgs> | null
    /**
     * The data used to create many ConfirmEmailTokens.
     */
    data: ConfirmEmailTokenCreateManyInput | ConfirmEmailTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmEmailTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConfirmEmailToken update
   */
  export type ConfirmEmailTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmEmailToken
     */
    select?: ConfirmEmailTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmEmailToken
     */
    omit?: ConfirmEmailTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmEmailTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a ConfirmEmailToken.
     */
    data: XOR<ConfirmEmailTokenUpdateInput, ConfirmEmailTokenUncheckedUpdateInput>
    /**
     * Choose, which ConfirmEmailToken to update.
     */
    where: ConfirmEmailTokenWhereUniqueInput
  }

  /**
   * ConfirmEmailToken updateMany
   */
  export type ConfirmEmailTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConfirmEmailTokens.
     */
    data: XOR<ConfirmEmailTokenUpdateManyMutationInput, ConfirmEmailTokenUncheckedUpdateManyInput>
    /**
     * Filter which ConfirmEmailTokens to update
     */
    where?: ConfirmEmailTokenWhereInput
    /**
     * Limit how many ConfirmEmailTokens to update.
     */
    limit?: number
  }

  /**
   * ConfirmEmailToken updateManyAndReturn
   */
  export type ConfirmEmailTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmEmailToken
     */
    select?: ConfirmEmailTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmEmailToken
     */
    omit?: ConfirmEmailTokenOmit<ExtArgs> | null
    /**
     * The data used to update ConfirmEmailTokens.
     */
    data: XOR<ConfirmEmailTokenUpdateManyMutationInput, ConfirmEmailTokenUncheckedUpdateManyInput>
    /**
     * Filter which ConfirmEmailTokens to update
     */
    where?: ConfirmEmailTokenWhereInput
    /**
     * Limit how many ConfirmEmailTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmEmailTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ConfirmEmailToken upsert
   */
  export type ConfirmEmailTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmEmailToken
     */
    select?: ConfirmEmailTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmEmailToken
     */
    omit?: ConfirmEmailTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmEmailTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the ConfirmEmailToken to update in case it exists.
     */
    where: ConfirmEmailTokenWhereUniqueInput
    /**
     * In case the ConfirmEmailToken found by the `where` argument doesn't exist, create a new ConfirmEmailToken with this data.
     */
    create: XOR<ConfirmEmailTokenCreateInput, ConfirmEmailTokenUncheckedCreateInput>
    /**
     * In case the ConfirmEmailToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConfirmEmailTokenUpdateInput, ConfirmEmailTokenUncheckedUpdateInput>
  }

  /**
   * ConfirmEmailToken delete
   */
  export type ConfirmEmailTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmEmailToken
     */
    select?: ConfirmEmailTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmEmailToken
     */
    omit?: ConfirmEmailTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmEmailTokenInclude<ExtArgs> | null
    /**
     * Filter which ConfirmEmailToken to delete.
     */
    where: ConfirmEmailTokenWhereUniqueInput
  }

  /**
   * ConfirmEmailToken deleteMany
   */
  export type ConfirmEmailTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConfirmEmailTokens to delete
     */
    where?: ConfirmEmailTokenWhereInput
    /**
     * Limit how many ConfirmEmailTokens to delete.
     */
    limit?: number
  }

  /**
   * ConfirmEmailToken without action
   */
  export type ConfirmEmailTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConfirmEmailToken
     */
    select?: ConfirmEmailTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConfirmEmailToken
     */
    omit?: ConfirmEmailTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConfirmEmailTokenInclude<ExtArgs> | null
  }


  /**
   * Model PasswordRecoveryToken
   */

  export type AggregatePasswordRecoveryToken = {
    _count: PasswordRecoveryTokenCountAggregateOutputType | null
    _avg: PasswordRecoveryTokenAvgAggregateOutputType | null
    _sum: PasswordRecoveryTokenSumAggregateOutputType | null
    _min: PasswordRecoveryTokenMinAggregateOutputType | null
    _max: PasswordRecoveryTokenMaxAggregateOutputType | null
  }

  export type PasswordRecoveryTokenAvgAggregateOutputType = {
    userId: number | null
  }

  export type PasswordRecoveryTokenSumAggregateOutputType = {
    userId: number | null
  }

  export type PasswordRecoveryTokenMinAggregateOutputType = {
    userId: number | null
    token: string | null
  }

  export type PasswordRecoveryTokenMaxAggregateOutputType = {
    userId: number | null
    token: string | null
  }

  export type PasswordRecoveryTokenCountAggregateOutputType = {
    userId: number
    token: number
    _all: number
  }


  export type PasswordRecoveryTokenAvgAggregateInputType = {
    userId?: true
  }

  export type PasswordRecoveryTokenSumAggregateInputType = {
    userId?: true
  }

  export type PasswordRecoveryTokenMinAggregateInputType = {
    userId?: true
    token?: true
  }

  export type PasswordRecoveryTokenMaxAggregateInputType = {
    userId?: true
    token?: true
  }

  export type PasswordRecoveryTokenCountAggregateInputType = {
    userId?: true
    token?: true
    _all?: true
  }

  export type PasswordRecoveryTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordRecoveryToken to aggregate.
     */
    where?: PasswordRecoveryTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordRecoveryTokens to fetch.
     */
    orderBy?: PasswordRecoveryTokenOrderByWithRelationInput | PasswordRecoveryTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordRecoveryTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordRecoveryTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordRecoveryTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordRecoveryTokens
    **/
    _count?: true | PasswordRecoveryTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasswordRecoveryTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasswordRecoveryTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordRecoveryTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordRecoveryTokenMaxAggregateInputType
  }

  export type GetPasswordRecoveryTokenAggregateType<T extends PasswordRecoveryTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordRecoveryToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordRecoveryToken[P]>
      : GetScalarType<T[P], AggregatePasswordRecoveryToken[P]>
  }




  export type PasswordRecoveryTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordRecoveryTokenWhereInput
    orderBy?: PasswordRecoveryTokenOrderByWithAggregationInput | PasswordRecoveryTokenOrderByWithAggregationInput[]
    by: PasswordRecoveryTokenScalarFieldEnum[] | PasswordRecoveryTokenScalarFieldEnum
    having?: PasswordRecoveryTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordRecoveryTokenCountAggregateInputType | true
    _avg?: PasswordRecoveryTokenAvgAggregateInputType
    _sum?: PasswordRecoveryTokenSumAggregateInputType
    _min?: PasswordRecoveryTokenMinAggregateInputType
    _max?: PasswordRecoveryTokenMaxAggregateInputType
  }

  export type PasswordRecoveryTokenGroupByOutputType = {
    userId: number
    token: string
    _count: PasswordRecoveryTokenCountAggregateOutputType | null
    _avg: PasswordRecoveryTokenAvgAggregateOutputType | null
    _sum: PasswordRecoveryTokenSumAggregateOutputType | null
    _min: PasswordRecoveryTokenMinAggregateOutputType | null
    _max: PasswordRecoveryTokenMaxAggregateOutputType | null
  }

  type GetPasswordRecoveryTokenGroupByPayload<T extends PasswordRecoveryTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordRecoveryTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordRecoveryTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordRecoveryTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordRecoveryTokenGroupByOutputType[P]>
        }
      >
    >


  export type PasswordRecoveryTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    token?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordRecoveryToken"]>

  export type PasswordRecoveryTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    token?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordRecoveryToken"]>

  export type PasswordRecoveryTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    token?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordRecoveryToken"]>

  export type PasswordRecoveryTokenSelectScalar = {
    userId?: boolean
    token?: boolean
  }

  export type PasswordRecoveryTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "token", ExtArgs["result"]["passwordRecoveryToken"]>
  export type PasswordRecoveryTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordRecoveryTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordRecoveryTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasswordRecoveryTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordRecoveryToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      token: string
    }, ExtArgs["result"]["passwordRecoveryToken"]>
    composites: {}
  }

  type PasswordRecoveryTokenGetPayload<S extends boolean | null | undefined | PasswordRecoveryTokenDefaultArgs> = $Result.GetResult<Prisma.$PasswordRecoveryTokenPayload, S>

  type PasswordRecoveryTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordRecoveryTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordRecoveryTokenCountAggregateInputType | true
    }

  export interface PasswordRecoveryTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordRecoveryToken'], meta: { name: 'PasswordRecoveryToken' } }
    /**
     * Find zero or one PasswordRecoveryToken that matches the filter.
     * @param {PasswordRecoveryTokenFindUniqueArgs} args - Arguments to find a PasswordRecoveryToken
     * @example
     * // Get one PasswordRecoveryToken
     * const passwordRecoveryToken = await prisma.passwordRecoveryToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordRecoveryTokenFindUniqueArgs>(args: SelectSubset<T, PasswordRecoveryTokenFindUniqueArgs<ExtArgs>>): Prisma__PasswordRecoveryTokenClient<$Result.GetResult<Prisma.$PasswordRecoveryTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordRecoveryToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordRecoveryTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordRecoveryToken
     * @example
     * // Get one PasswordRecoveryToken
     * const passwordRecoveryToken = await prisma.passwordRecoveryToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordRecoveryTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordRecoveryTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordRecoveryTokenClient<$Result.GetResult<Prisma.$PasswordRecoveryTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordRecoveryToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordRecoveryTokenFindFirstArgs} args - Arguments to find a PasswordRecoveryToken
     * @example
     * // Get one PasswordRecoveryToken
     * const passwordRecoveryToken = await prisma.passwordRecoveryToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordRecoveryTokenFindFirstArgs>(args?: SelectSubset<T, PasswordRecoveryTokenFindFirstArgs<ExtArgs>>): Prisma__PasswordRecoveryTokenClient<$Result.GetResult<Prisma.$PasswordRecoveryTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordRecoveryToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordRecoveryTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordRecoveryToken
     * @example
     * // Get one PasswordRecoveryToken
     * const passwordRecoveryToken = await prisma.passwordRecoveryToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordRecoveryTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordRecoveryTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordRecoveryTokenClient<$Result.GetResult<Prisma.$PasswordRecoveryTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordRecoveryTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordRecoveryTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordRecoveryTokens
     * const passwordRecoveryTokens = await prisma.passwordRecoveryToken.findMany()
     * 
     * // Get first 10 PasswordRecoveryTokens
     * const passwordRecoveryTokens = await prisma.passwordRecoveryToken.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const passwordRecoveryTokenWithUserIdOnly = await prisma.passwordRecoveryToken.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends PasswordRecoveryTokenFindManyArgs>(args?: SelectSubset<T, PasswordRecoveryTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordRecoveryTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordRecoveryToken.
     * @param {PasswordRecoveryTokenCreateArgs} args - Arguments to create a PasswordRecoveryToken.
     * @example
     * // Create one PasswordRecoveryToken
     * const PasswordRecoveryToken = await prisma.passwordRecoveryToken.create({
     *   data: {
     *     // ... data to create a PasswordRecoveryToken
     *   }
     * })
     * 
     */
    create<T extends PasswordRecoveryTokenCreateArgs>(args: SelectSubset<T, PasswordRecoveryTokenCreateArgs<ExtArgs>>): Prisma__PasswordRecoveryTokenClient<$Result.GetResult<Prisma.$PasswordRecoveryTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordRecoveryTokens.
     * @param {PasswordRecoveryTokenCreateManyArgs} args - Arguments to create many PasswordRecoveryTokens.
     * @example
     * // Create many PasswordRecoveryTokens
     * const passwordRecoveryToken = await prisma.passwordRecoveryToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordRecoveryTokenCreateManyArgs>(args?: SelectSubset<T, PasswordRecoveryTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordRecoveryTokens and returns the data saved in the database.
     * @param {PasswordRecoveryTokenCreateManyAndReturnArgs} args - Arguments to create many PasswordRecoveryTokens.
     * @example
     * // Create many PasswordRecoveryTokens
     * const passwordRecoveryToken = await prisma.passwordRecoveryToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordRecoveryTokens and only return the `userId`
     * const passwordRecoveryTokenWithUserIdOnly = await prisma.passwordRecoveryToken.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordRecoveryTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordRecoveryTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordRecoveryTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordRecoveryToken.
     * @param {PasswordRecoveryTokenDeleteArgs} args - Arguments to delete one PasswordRecoveryToken.
     * @example
     * // Delete one PasswordRecoveryToken
     * const PasswordRecoveryToken = await prisma.passwordRecoveryToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordRecoveryToken
     *   }
     * })
     * 
     */
    delete<T extends PasswordRecoveryTokenDeleteArgs>(args: SelectSubset<T, PasswordRecoveryTokenDeleteArgs<ExtArgs>>): Prisma__PasswordRecoveryTokenClient<$Result.GetResult<Prisma.$PasswordRecoveryTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordRecoveryToken.
     * @param {PasswordRecoveryTokenUpdateArgs} args - Arguments to update one PasswordRecoveryToken.
     * @example
     * // Update one PasswordRecoveryToken
     * const passwordRecoveryToken = await prisma.passwordRecoveryToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordRecoveryTokenUpdateArgs>(args: SelectSubset<T, PasswordRecoveryTokenUpdateArgs<ExtArgs>>): Prisma__PasswordRecoveryTokenClient<$Result.GetResult<Prisma.$PasswordRecoveryTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordRecoveryTokens.
     * @param {PasswordRecoveryTokenDeleteManyArgs} args - Arguments to filter PasswordRecoveryTokens to delete.
     * @example
     * // Delete a few PasswordRecoveryTokens
     * const { count } = await prisma.passwordRecoveryToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordRecoveryTokenDeleteManyArgs>(args?: SelectSubset<T, PasswordRecoveryTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordRecoveryTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordRecoveryTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordRecoveryTokens
     * const passwordRecoveryToken = await prisma.passwordRecoveryToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordRecoveryTokenUpdateManyArgs>(args: SelectSubset<T, PasswordRecoveryTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordRecoveryTokens and returns the data updated in the database.
     * @param {PasswordRecoveryTokenUpdateManyAndReturnArgs} args - Arguments to update many PasswordRecoveryTokens.
     * @example
     * // Update many PasswordRecoveryTokens
     * const passwordRecoveryToken = await prisma.passwordRecoveryToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordRecoveryTokens and only return the `userId`
     * const passwordRecoveryTokenWithUserIdOnly = await prisma.passwordRecoveryToken.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PasswordRecoveryTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordRecoveryTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordRecoveryTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordRecoveryToken.
     * @param {PasswordRecoveryTokenUpsertArgs} args - Arguments to update or create a PasswordRecoveryToken.
     * @example
     * // Update or create a PasswordRecoveryToken
     * const passwordRecoveryToken = await prisma.passwordRecoveryToken.upsert({
     *   create: {
     *     // ... data to create a PasswordRecoveryToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordRecoveryToken we want to update
     *   }
     * })
     */
    upsert<T extends PasswordRecoveryTokenUpsertArgs>(args: SelectSubset<T, PasswordRecoveryTokenUpsertArgs<ExtArgs>>): Prisma__PasswordRecoveryTokenClient<$Result.GetResult<Prisma.$PasswordRecoveryTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordRecoveryTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordRecoveryTokenCountArgs} args - Arguments to filter PasswordRecoveryTokens to count.
     * @example
     * // Count the number of PasswordRecoveryTokens
     * const count = await prisma.passwordRecoveryToken.count({
     *   where: {
     *     // ... the filter for the PasswordRecoveryTokens we want to count
     *   }
     * })
    **/
    count<T extends PasswordRecoveryTokenCountArgs>(
      args?: Subset<T, PasswordRecoveryTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordRecoveryTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordRecoveryToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordRecoveryTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasswordRecoveryTokenAggregateArgs>(args: Subset<T, PasswordRecoveryTokenAggregateArgs>): Prisma.PrismaPromise<GetPasswordRecoveryTokenAggregateType<T>>

    /**
     * Group by PasswordRecoveryToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordRecoveryTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasswordRecoveryTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordRecoveryTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordRecoveryTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasswordRecoveryTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordRecoveryTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordRecoveryToken model
   */
  readonly fields: PasswordRecoveryTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordRecoveryToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordRecoveryTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PasswordRecoveryToken model
   */
  interface PasswordRecoveryTokenFieldRefs {
    readonly userId: FieldRef<"PasswordRecoveryToken", 'Int'>
    readonly token: FieldRef<"PasswordRecoveryToken", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PasswordRecoveryToken findUnique
   */
  export type PasswordRecoveryTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecoveryToken
     */
    select?: PasswordRecoveryTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecoveryToken
     */
    omit?: PasswordRecoveryTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordRecoveryToken to fetch.
     */
    where: PasswordRecoveryTokenWhereUniqueInput
  }

  /**
   * PasswordRecoveryToken findUniqueOrThrow
   */
  export type PasswordRecoveryTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecoveryToken
     */
    select?: PasswordRecoveryTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecoveryToken
     */
    omit?: PasswordRecoveryTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordRecoveryToken to fetch.
     */
    where: PasswordRecoveryTokenWhereUniqueInput
  }

  /**
   * PasswordRecoveryToken findFirst
   */
  export type PasswordRecoveryTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecoveryToken
     */
    select?: PasswordRecoveryTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecoveryToken
     */
    omit?: PasswordRecoveryTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordRecoveryToken to fetch.
     */
    where?: PasswordRecoveryTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordRecoveryTokens to fetch.
     */
    orderBy?: PasswordRecoveryTokenOrderByWithRelationInput | PasswordRecoveryTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordRecoveryTokens.
     */
    cursor?: PasswordRecoveryTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordRecoveryTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordRecoveryTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordRecoveryTokens.
     */
    distinct?: PasswordRecoveryTokenScalarFieldEnum | PasswordRecoveryTokenScalarFieldEnum[]
  }

  /**
   * PasswordRecoveryToken findFirstOrThrow
   */
  export type PasswordRecoveryTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecoveryToken
     */
    select?: PasswordRecoveryTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecoveryToken
     */
    omit?: PasswordRecoveryTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordRecoveryToken to fetch.
     */
    where?: PasswordRecoveryTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordRecoveryTokens to fetch.
     */
    orderBy?: PasswordRecoveryTokenOrderByWithRelationInput | PasswordRecoveryTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordRecoveryTokens.
     */
    cursor?: PasswordRecoveryTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordRecoveryTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordRecoveryTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordRecoveryTokens.
     */
    distinct?: PasswordRecoveryTokenScalarFieldEnum | PasswordRecoveryTokenScalarFieldEnum[]
  }

  /**
   * PasswordRecoveryToken findMany
   */
  export type PasswordRecoveryTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecoveryToken
     */
    select?: PasswordRecoveryTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecoveryToken
     */
    omit?: PasswordRecoveryTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordRecoveryTokens to fetch.
     */
    where?: PasswordRecoveryTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordRecoveryTokens to fetch.
     */
    orderBy?: PasswordRecoveryTokenOrderByWithRelationInput | PasswordRecoveryTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordRecoveryTokens.
     */
    cursor?: PasswordRecoveryTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordRecoveryTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordRecoveryTokens.
     */
    skip?: number
    distinct?: PasswordRecoveryTokenScalarFieldEnum | PasswordRecoveryTokenScalarFieldEnum[]
  }

  /**
   * PasswordRecoveryToken create
   */
  export type PasswordRecoveryTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecoveryToken
     */
    select?: PasswordRecoveryTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecoveryToken
     */
    omit?: PasswordRecoveryTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordRecoveryToken.
     */
    data: XOR<PasswordRecoveryTokenCreateInput, PasswordRecoveryTokenUncheckedCreateInput>
  }

  /**
   * PasswordRecoveryToken createMany
   */
  export type PasswordRecoveryTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordRecoveryTokens.
     */
    data: PasswordRecoveryTokenCreateManyInput | PasswordRecoveryTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordRecoveryToken createManyAndReturn
   */
  export type PasswordRecoveryTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecoveryToken
     */
    select?: PasswordRecoveryTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecoveryToken
     */
    omit?: PasswordRecoveryTokenOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordRecoveryTokens.
     */
    data: PasswordRecoveryTokenCreateManyInput | PasswordRecoveryTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordRecoveryToken update
   */
  export type PasswordRecoveryTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecoveryToken
     */
    select?: PasswordRecoveryTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecoveryToken
     */
    omit?: PasswordRecoveryTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordRecoveryToken.
     */
    data: XOR<PasswordRecoveryTokenUpdateInput, PasswordRecoveryTokenUncheckedUpdateInput>
    /**
     * Choose, which PasswordRecoveryToken to update.
     */
    where: PasswordRecoveryTokenWhereUniqueInput
  }

  /**
   * PasswordRecoveryToken updateMany
   */
  export type PasswordRecoveryTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordRecoveryTokens.
     */
    data: XOR<PasswordRecoveryTokenUpdateManyMutationInput, PasswordRecoveryTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordRecoveryTokens to update
     */
    where?: PasswordRecoveryTokenWhereInput
    /**
     * Limit how many PasswordRecoveryTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordRecoveryToken updateManyAndReturn
   */
  export type PasswordRecoveryTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecoveryToken
     */
    select?: PasswordRecoveryTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecoveryToken
     */
    omit?: PasswordRecoveryTokenOmit<ExtArgs> | null
    /**
     * The data used to update PasswordRecoveryTokens.
     */
    data: XOR<PasswordRecoveryTokenUpdateManyMutationInput, PasswordRecoveryTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordRecoveryTokens to update
     */
    where?: PasswordRecoveryTokenWhereInput
    /**
     * Limit how many PasswordRecoveryTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordRecoveryToken upsert
   */
  export type PasswordRecoveryTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecoveryToken
     */
    select?: PasswordRecoveryTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecoveryToken
     */
    omit?: PasswordRecoveryTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordRecoveryToken to update in case it exists.
     */
    where: PasswordRecoveryTokenWhereUniqueInput
    /**
     * In case the PasswordRecoveryToken found by the `where` argument doesn't exist, create a new PasswordRecoveryToken with this data.
     */
    create: XOR<PasswordRecoveryTokenCreateInput, PasswordRecoveryTokenUncheckedCreateInput>
    /**
     * In case the PasswordRecoveryToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordRecoveryTokenUpdateInput, PasswordRecoveryTokenUncheckedUpdateInput>
  }

  /**
   * PasswordRecoveryToken delete
   */
  export type PasswordRecoveryTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecoveryToken
     */
    select?: PasswordRecoveryTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecoveryToken
     */
    omit?: PasswordRecoveryTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryTokenInclude<ExtArgs> | null
    /**
     * Filter which PasswordRecoveryToken to delete.
     */
    where: PasswordRecoveryTokenWhereUniqueInput
  }

  /**
   * PasswordRecoveryToken deleteMany
   */
  export type PasswordRecoveryTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordRecoveryTokens to delete
     */
    where?: PasswordRecoveryTokenWhereInput
    /**
     * Limit how many PasswordRecoveryTokens to delete.
     */
    limit?: number
  }

  /**
   * PasswordRecoveryToken without action
   */
  export type PasswordRecoveryTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordRecoveryToken
     */
    select?: PasswordRecoveryTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordRecoveryToken
     */
    omit?: PasswordRecoveryTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordRecoveryTokenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt',
    password: 'password',
    verified: 'verified'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PurchaseCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type PurchaseCategoryScalarFieldEnum = (typeof PurchaseCategoryScalarFieldEnum)[keyof typeof PurchaseCategoryScalarFieldEnum]


  export const PurchaseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    categoryId: 'categoryId'
  };

  export type PurchaseScalarFieldEnum = (typeof PurchaseScalarFieldEnum)[keyof typeof PurchaseScalarFieldEnum]


  export const ConfirmEmailTokenScalarFieldEnum: {
    userId: 'userId',
    token: 'token'
  };

  export type ConfirmEmailTokenScalarFieldEnum = (typeof ConfirmEmailTokenScalarFieldEnum)[keyof typeof ConfirmEmailTokenScalarFieldEnum]


  export const PasswordRecoveryTokenScalarFieldEnum: {
    userId: 'userId',
    token: 'token'
  };

  export type PasswordRecoveryTokenScalarFieldEnum = (typeof PasswordRecoveryTokenScalarFieldEnum)[keyof typeof PasswordRecoveryTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
    verified?: BoolFilter<"User"> | boolean
    purchases?: PurchaseListRelationFilter
    confirmEmailToken?: ConfirmEmailTokenListRelationFilter
    recoveryPasswordToken?: PasswordRecoveryTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    verified?: SortOrder
    purchases?: PurchaseOrderByRelationAggregateInput
    confirmEmailToken?: ConfirmEmailTokenOrderByRelationAggregateInput
    recoveryPasswordToken?: PasswordRecoveryTokenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    password?: StringFilter<"User"> | string
    verified?: BoolFilter<"User"> | boolean
    purchases?: PurchaseListRelationFilter
    confirmEmailToken?: ConfirmEmailTokenListRelationFilter
    recoveryPasswordToken?: PasswordRecoveryTokenListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    verified?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    password?: StringWithAggregatesFilter<"User"> | string
    verified?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type PurchaseCategoryWhereInput = {
    AND?: PurchaseCategoryWhereInput | PurchaseCategoryWhereInput[]
    OR?: PurchaseCategoryWhereInput[]
    NOT?: PurchaseCategoryWhereInput | PurchaseCategoryWhereInput[]
    id?: IntFilter<"PurchaseCategory"> | number
    name?: StringFilter<"PurchaseCategory"> | string
    description?: StringFilter<"PurchaseCategory"> | string
    purchases?: PurchaseListRelationFilter
  }

  export type PurchaseCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    purchases?: PurchaseOrderByRelationAggregateInput
  }

  export type PurchaseCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: PurchaseCategoryWhereInput | PurchaseCategoryWhereInput[]
    OR?: PurchaseCategoryWhereInput[]
    NOT?: PurchaseCategoryWhereInput | PurchaseCategoryWhereInput[]
    description?: StringFilter<"PurchaseCategory"> | string
    purchases?: PurchaseListRelationFilter
  }, "id" | "name">

  export type PurchaseCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: PurchaseCategoryCountOrderByAggregateInput
    _avg?: PurchaseCategoryAvgOrderByAggregateInput
    _max?: PurchaseCategoryMaxOrderByAggregateInput
    _min?: PurchaseCategoryMinOrderByAggregateInput
    _sum?: PurchaseCategorySumOrderByAggregateInput
  }

  export type PurchaseCategoryScalarWhereWithAggregatesInput = {
    AND?: PurchaseCategoryScalarWhereWithAggregatesInput | PurchaseCategoryScalarWhereWithAggregatesInput[]
    OR?: PurchaseCategoryScalarWhereWithAggregatesInput[]
    NOT?: PurchaseCategoryScalarWhereWithAggregatesInput | PurchaseCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PurchaseCategory"> | number
    name?: StringWithAggregatesFilter<"PurchaseCategory"> | string
    description?: StringWithAggregatesFilter<"PurchaseCategory"> | string
  }

  export type PurchaseWhereInput = {
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    id?: IntFilter<"Purchase"> | number
    name?: StringFilter<"Purchase"> | string
    price?: FloatFilter<"Purchase"> | number
    createdBy?: IntFilter<"Purchase"> | number
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeFilter<"Purchase"> | Date | string
    categoryId?: IntFilter<"Purchase"> | number
    category?: XOR<PurchaseCategoryScalarRelationFilter, PurchaseCategoryWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PurchaseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    category?: PurchaseCategoryOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
  }

  export type PurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PurchaseWhereInput | PurchaseWhereInput[]
    OR?: PurchaseWhereInput[]
    NOT?: PurchaseWhereInput | PurchaseWhereInput[]
    name?: StringFilter<"Purchase"> | string
    price?: FloatFilter<"Purchase"> | number
    createdBy?: IntFilter<"Purchase"> | number
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeFilter<"Purchase"> | Date | string
    categoryId?: IntFilter<"Purchase"> | number
    category?: XOR<PurchaseCategoryScalarRelationFilter, PurchaseCategoryWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
    _count?: PurchaseCountOrderByAggregateInput
    _avg?: PurchaseAvgOrderByAggregateInput
    _max?: PurchaseMaxOrderByAggregateInput
    _min?: PurchaseMinOrderByAggregateInput
    _sum?: PurchaseSumOrderByAggregateInput
  }

  export type PurchaseScalarWhereWithAggregatesInput = {
    AND?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    OR?: PurchaseScalarWhereWithAggregatesInput[]
    NOT?: PurchaseScalarWhereWithAggregatesInput | PurchaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Purchase"> | number
    name?: StringWithAggregatesFilter<"Purchase"> | string
    price?: FloatWithAggregatesFilter<"Purchase"> | number
    createdBy?: IntWithAggregatesFilter<"Purchase"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Purchase"> | Date | string
    categoryId?: IntWithAggregatesFilter<"Purchase"> | number
  }

  export type ConfirmEmailTokenWhereInput = {
    AND?: ConfirmEmailTokenWhereInput | ConfirmEmailTokenWhereInput[]
    OR?: ConfirmEmailTokenWhereInput[]
    NOT?: ConfirmEmailTokenWhereInput | ConfirmEmailTokenWhereInput[]
    userId?: IntFilter<"ConfirmEmailToken"> | number
    token?: StringFilter<"ConfirmEmailToken"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ConfirmEmailTokenOrderByWithRelationInput = {
    userId?: SortOrder
    token?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ConfirmEmailTokenWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    token?: string
    AND?: ConfirmEmailTokenWhereInput | ConfirmEmailTokenWhereInput[]
    OR?: ConfirmEmailTokenWhereInput[]
    NOT?: ConfirmEmailTokenWhereInput | ConfirmEmailTokenWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId" | "token">

  export type ConfirmEmailTokenOrderByWithAggregationInput = {
    userId?: SortOrder
    token?: SortOrder
    _count?: ConfirmEmailTokenCountOrderByAggregateInput
    _avg?: ConfirmEmailTokenAvgOrderByAggregateInput
    _max?: ConfirmEmailTokenMaxOrderByAggregateInput
    _min?: ConfirmEmailTokenMinOrderByAggregateInput
    _sum?: ConfirmEmailTokenSumOrderByAggregateInput
  }

  export type ConfirmEmailTokenScalarWhereWithAggregatesInput = {
    AND?: ConfirmEmailTokenScalarWhereWithAggregatesInput | ConfirmEmailTokenScalarWhereWithAggregatesInput[]
    OR?: ConfirmEmailTokenScalarWhereWithAggregatesInput[]
    NOT?: ConfirmEmailTokenScalarWhereWithAggregatesInput | ConfirmEmailTokenScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"ConfirmEmailToken"> | number
    token?: StringWithAggregatesFilter<"ConfirmEmailToken"> | string
  }

  export type PasswordRecoveryTokenWhereInput = {
    AND?: PasswordRecoveryTokenWhereInput | PasswordRecoveryTokenWhereInput[]
    OR?: PasswordRecoveryTokenWhereInput[]
    NOT?: PasswordRecoveryTokenWhereInput | PasswordRecoveryTokenWhereInput[]
    userId?: IntFilter<"PasswordRecoveryToken"> | number
    token?: StringFilter<"PasswordRecoveryToken"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasswordRecoveryTokenOrderByWithRelationInput = {
    userId?: SortOrder
    token?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PasswordRecoveryTokenWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    token?: string
    AND?: PasswordRecoveryTokenWhereInput | PasswordRecoveryTokenWhereInput[]
    OR?: PasswordRecoveryTokenWhereInput[]
    NOT?: PasswordRecoveryTokenWhereInput | PasswordRecoveryTokenWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId" | "token">

  export type PasswordRecoveryTokenOrderByWithAggregationInput = {
    userId?: SortOrder
    token?: SortOrder
    _count?: PasswordRecoveryTokenCountOrderByAggregateInput
    _avg?: PasswordRecoveryTokenAvgOrderByAggregateInput
    _max?: PasswordRecoveryTokenMaxOrderByAggregateInput
    _min?: PasswordRecoveryTokenMinOrderByAggregateInput
    _sum?: PasswordRecoveryTokenSumOrderByAggregateInput
  }

  export type PasswordRecoveryTokenScalarWhereWithAggregatesInput = {
    AND?: PasswordRecoveryTokenScalarWhereWithAggregatesInput | PasswordRecoveryTokenScalarWhereWithAggregatesInput[]
    OR?: PasswordRecoveryTokenScalarWhereWithAggregatesInput[]
    NOT?: PasswordRecoveryTokenScalarWhereWithAggregatesInput | PasswordRecoveryTokenScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"PasswordRecoveryToken"> | number
    token?: StringWithAggregatesFilter<"PasswordRecoveryToken"> | string
  }

  export type UserCreateInput = {
    email: string
    createdAt?: Date | string
    password: string
    verified?: boolean
    purchases?: PurchaseCreateNestedManyWithoutCreatorInput
    confirmEmailToken?: ConfirmEmailTokenCreateNestedManyWithoutUserInput
    recoveryPasswordToken?: PasswordRecoveryTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    createdAt?: Date | string
    password: string
    verified?: boolean
    purchases?: PurchaseUncheckedCreateNestedManyWithoutCreatorInput
    confirmEmailToken?: ConfirmEmailTokenUncheckedCreateNestedManyWithoutUserInput
    recoveryPasswordToken?: PasswordRecoveryTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    purchases?: PurchaseUpdateManyWithoutCreatorNestedInput
    confirmEmailToken?: ConfirmEmailTokenUpdateManyWithoutUserNestedInput
    recoveryPasswordToken?: PasswordRecoveryTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    purchases?: PurchaseUncheckedUpdateManyWithoutCreatorNestedInput
    confirmEmailToken?: ConfirmEmailTokenUncheckedUpdateManyWithoutUserNestedInput
    recoveryPasswordToken?: PasswordRecoveryTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    createdAt?: Date | string
    password: string
    verified?: boolean
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurchaseCategoryCreateInput = {
    name: string
    description: string
    purchases?: PurchaseCreateNestedManyWithoutCategoryInput
  }

  export type PurchaseCategoryUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    purchases?: PurchaseUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type PurchaseCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    purchases?: PurchaseUpdateManyWithoutCategoryNestedInput
  }

  export type PurchaseCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    purchases?: PurchaseUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type PurchaseCategoryCreateManyInput = {
    id?: number
    name: string
    description: string
  }

  export type PurchaseCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseCreateInput = {
    name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: PurchaseCategoryCreateNestedOneWithoutPurchasesInput
    creator: UserCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateInput = {
    id?: number
    name: string
    price: number
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
  }

  export type PurchaseUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: PurchaseCategoryUpdateOneRequiredWithoutPurchasesNestedInput
    creator?: UserUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseCreateManyInput = {
    id?: number
    name: string
    price: number
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
  }

  export type PurchaseUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type ConfirmEmailTokenCreateInput = {
    token: string
    user: UserCreateNestedOneWithoutConfirmEmailTokenInput
  }

  export type ConfirmEmailTokenUncheckedCreateInput = {
    userId: number
    token: string
  }

  export type ConfirmEmailTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutConfirmEmailTokenNestedInput
  }

  export type ConfirmEmailTokenUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type ConfirmEmailTokenCreateManyInput = {
    userId: number
    token: string
  }

  export type ConfirmEmailTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type ConfirmEmailTokenUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type PasswordRecoveryTokenCreateInput = {
    token: string
    user: UserCreateNestedOneWithoutRecoveryPasswordTokenInput
  }

  export type PasswordRecoveryTokenUncheckedCreateInput = {
    userId: number
    token: string
  }

  export type PasswordRecoveryTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutRecoveryPasswordTokenNestedInput
  }

  export type PasswordRecoveryTokenUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type PasswordRecoveryTokenCreateManyInput = {
    userId: number
    token: string
  }

  export type PasswordRecoveryTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type PasswordRecoveryTokenUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PurchaseListRelationFilter = {
    every?: PurchaseWhereInput
    some?: PurchaseWhereInput
    none?: PurchaseWhereInput
  }

  export type ConfirmEmailTokenListRelationFilter = {
    every?: ConfirmEmailTokenWhereInput
    some?: ConfirmEmailTokenWhereInput
    none?: ConfirmEmailTokenWhereInput
  }

  export type PasswordRecoveryTokenListRelationFilter = {
    every?: PasswordRecoveryTokenWhereInput
    some?: PasswordRecoveryTokenWhereInput
    none?: PasswordRecoveryTokenWhereInput
  }

  export type PurchaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConfirmEmailTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasswordRecoveryTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    verified?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    verified?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    password?: SortOrder
    verified?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PurchaseCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type PurchaseCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PurchaseCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type PurchaseCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type PurchaseCategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PurchaseCategoryScalarRelationFilter = {
    is?: PurchaseCategoryWhereInput
    isNot?: PurchaseCategoryWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type PurchaseAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    createdBy?: SortOrder
    categoryId?: SortOrder
  }

  export type PurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type PurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    categoryId?: SortOrder
  }

  export type PurchaseSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    createdBy?: SortOrder
    categoryId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ConfirmEmailTokenCountOrderByAggregateInput = {
    userId?: SortOrder
    token?: SortOrder
  }

  export type ConfirmEmailTokenAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type ConfirmEmailTokenMaxOrderByAggregateInput = {
    userId?: SortOrder
    token?: SortOrder
  }

  export type ConfirmEmailTokenMinOrderByAggregateInput = {
    userId?: SortOrder
    token?: SortOrder
  }

  export type ConfirmEmailTokenSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type PasswordRecoveryTokenCountOrderByAggregateInput = {
    userId?: SortOrder
    token?: SortOrder
  }

  export type PasswordRecoveryTokenAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type PasswordRecoveryTokenMaxOrderByAggregateInput = {
    userId?: SortOrder
    token?: SortOrder
  }

  export type PasswordRecoveryTokenMinOrderByAggregateInput = {
    userId?: SortOrder
    token?: SortOrder
  }

  export type PasswordRecoveryTokenSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type PurchaseCreateNestedManyWithoutCreatorInput = {
    create?: XOR<PurchaseCreateWithoutCreatorInput, PurchaseUncheckedCreateWithoutCreatorInput> | PurchaseCreateWithoutCreatorInput[] | PurchaseUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCreatorInput | PurchaseCreateOrConnectWithoutCreatorInput[]
    createMany?: PurchaseCreateManyCreatorInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type ConfirmEmailTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<ConfirmEmailTokenCreateWithoutUserInput, ConfirmEmailTokenUncheckedCreateWithoutUserInput> | ConfirmEmailTokenCreateWithoutUserInput[] | ConfirmEmailTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConfirmEmailTokenCreateOrConnectWithoutUserInput | ConfirmEmailTokenCreateOrConnectWithoutUserInput[]
    createMany?: ConfirmEmailTokenCreateManyUserInputEnvelope
    connect?: ConfirmEmailTokenWhereUniqueInput | ConfirmEmailTokenWhereUniqueInput[]
  }

  export type PasswordRecoveryTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordRecoveryTokenCreateWithoutUserInput, PasswordRecoveryTokenUncheckedCreateWithoutUserInput> | PasswordRecoveryTokenCreateWithoutUserInput[] | PasswordRecoveryTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordRecoveryTokenCreateOrConnectWithoutUserInput | PasswordRecoveryTokenCreateOrConnectWithoutUserInput[]
    createMany?: PasswordRecoveryTokenCreateManyUserInputEnvelope
    connect?: PasswordRecoveryTokenWhereUniqueInput | PasswordRecoveryTokenWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<PurchaseCreateWithoutCreatorInput, PurchaseUncheckedCreateWithoutCreatorInput> | PurchaseCreateWithoutCreatorInput[] | PurchaseUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCreatorInput | PurchaseCreateOrConnectWithoutCreatorInput[]
    createMany?: PurchaseCreateManyCreatorInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type ConfirmEmailTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ConfirmEmailTokenCreateWithoutUserInput, ConfirmEmailTokenUncheckedCreateWithoutUserInput> | ConfirmEmailTokenCreateWithoutUserInput[] | ConfirmEmailTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConfirmEmailTokenCreateOrConnectWithoutUserInput | ConfirmEmailTokenCreateOrConnectWithoutUserInput[]
    createMany?: ConfirmEmailTokenCreateManyUserInputEnvelope
    connect?: ConfirmEmailTokenWhereUniqueInput | ConfirmEmailTokenWhereUniqueInput[]
  }

  export type PasswordRecoveryTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordRecoveryTokenCreateWithoutUserInput, PasswordRecoveryTokenUncheckedCreateWithoutUserInput> | PasswordRecoveryTokenCreateWithoutUserInput[] | PasswordRecoveryTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordRecoveryTokenCreateOrConnectWithoutUserInput | PasswordRecoveryTokenCreateOrConnectWithoutUserInput[]
    createMany?: PasswordRecoveryTokenCreateManyUserInputEnvelope
    connect?: PasswordRecoveryTokenWhereUniqueInput | PasswordRecoveryTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PurchaseUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<PurchaseCreateWithoutCreatorInput, PurchaseUncheckedCreateWithoutCreatorInput> | PurchaseCreateWithoutCreatorInput[] | PurchaseUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCreatorInput | PurchaseCreateOrConnectWithoutCreatorInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutCreatorInput | PurchaseUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: PurchaseCreateManyCreatorInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutCreatorInput | PurchaseUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutCreatorInput | PurchaseUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type ConfirmEmailTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConfirmEmailTokenCreateWithoutUserInput, ConfirmEmailTokenUncheckedCreateWithoutUserInput> | ConfirmEmailTokenCreateWithoutUserInput[] | ConfirmEmailTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConfirmEmailTokenCreateOrConnectWithoutUserInput | ConfirmEmailTokenCreateOrConnectWithoutUserInput[]
    upsert?: ConfirmEmailTokenUpsertWithWhereUniqueWithoutUserInput | ConfirmEmailTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConfirmEmailTokenCreateManyUserInputEnvelope
    set?: ConfirmEmailTokenWhereUniqueInput | ConfirmEmailTokenWhereUniqueInput[]
    disconnect?: ConfirmEmailTokenWhereUniqueInput | ConfirmEmailTokenWhereUniqueInput[]
    delete?: ConfirmEmailTokenWhereUniqueInput | ConfirmEmailTokenWhereUniqueInput[]
    connect?: ConfirmEmailTokenWhereUniqueInput | ConfirmEmailTokenWhereUniqueInput[]
    update?: ConfirmEmailTokenUpdateWithWhereUniqueWithoutUserInput | ConfirmEmailTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConfirmEmailTokenUpdateManyWithWhereWithoutUserInput | ConfirmEmailTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConfirmEmailTokenScalarWhereInput | ConfirmEmailTokenScalarWhereInput[]
  }

  export type PasswordRecoveryTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordRecoveryTokenCreateWithoutUserInput, PasswordRecoveryTokenUncheckedCreateWithoutUserInput> | PasswordRecoveryTokenCreateWithoutUserInput[] | PasswordRecoveryTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordRecoveryTokenCreateOrConnectWithoutUserInput | PasswordRecoveryTokenCreateOrConnectWithoutUserInput[]
    upsert?: PasswordRecoveryTokenUpsertWithWhereUniqueWithoutUserInput | PasswordRecoveryTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordRecoveryTokenCreateManyUserInputEnvelope
    set?: PasswordRecoveryTokenWhereUniqueInput | PasswordRecoveryTokenWhereUniqueInput[]
    disconnect?: PasswordRecoveryTokenWhereUniqueInput | PasswordRecoveryTokenWhereUniqueInput[]
    delete?: PasswordRecoveryTokenWhereUniqueInput | PasswordRecoveryTokenWhereUniqueInput[]
    connect?: PasswordRecoveryTokenWhereUniqueInput | PasswordRecoveryTokenWhereUniqueInput[]
    update?: PasswordRecoveryTokenUpdateWithWhereUniqueWithoutUserInput | PasswordRecoveryTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordRecoveryTokenUpdateManyWithWhereWithoutUserInput | PasswordRecoveryTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordRecoveryTokenScalarWhereInput | PasswordRecoveryTokenScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PurchaseUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<PurchaseCreateWithoutCreatorInput, PurchaseUncheckedCreateWithoutCreatorInput> | PurchaseCreateWithoutCreatorInput[] | PurchaseUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCreatorInput | PurchaseCreateOrConnectWithoutCreatorInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutCreatorInput | PurchaseUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: PurchaseCreateManyCreatorInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutCreatorInput | PurchaseUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutCreatorInput | PurchaseUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type ConfirmEmailTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ConfirmEmailTokenCreateWithoutUserInput, ConfirmEmailTokenUncheckedCreateWithoutUserInput> | ConfirmEmailTokenCreateWithoutUserInput[] | ConfirmEmailTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ConfirmEmailTokenCreateOrConnectWithoutUserInput | ConfirmEmailTokenCreateOrConnectWithoutUserInput[]
    upsert?: ConfirmEmailTokenUpsertWithWhereUniqueWithoutUserInput | ConfirmEmailTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ConfirmEmailTokenCreateManyUserInputEnvelope
    set?: ConfirmEmailTokenWhereUniqueInput | ConfirmEmailTokenWhereUniqueInput[]
    disconnect?: ConfirmEmailTokenWhereUniqueInput | ConfirmEmailTokenWhereUniqueInput[]
    delete?: ConfirmEmailTokenWhereUniqueInput | ConfirmEmailTokenWhereUniqueInput[]
    connect?: ConfirmEmailTokenWhereUniqueInput | ConfirmEmailTokenWhereUniqueInput[]
    update?: ConfirmEmailTokenUpdateWithWhereUniqueWithoutUserInput | ConfirmEmailTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ConfirmEmailTokenUpdateManyWithWhereWithoutUserInput | ConfirmEmailTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ConfirmEmailTokenScalarWhereInput | ConfirmEmailTokenScalarWhereInput[]
  }

  export type PasswordRecoveryTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordRecoveryTokenCreateWithoutUserInput, PasswordRecoveryTokenUncheckedCreateWithoutUserInput> | PasswordRecoveryTokenCreateWithoutUserInput[] | PasswordRecoveryTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordRecoveryTokenCreateOrConnectWithoutUserInput | PasswordRecoveryTokenCreateOrConnectWithoutUserInput[]
    upsert?: PasswordRecoveryTokenUpsertWithWhereUniqueWithoutUserInput | PasswordRecoveryTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordRecoveryTokenCreateManyUserInputEnvelope
    set?: PasswordRecoveryTokenWhereUniqueInput | PasswordRecoveryTokenWhereUniqueInput[]
    disconnect?: PasswordRecoveryTokenWhereUniqueInput | PasswordRecoveryTokenWhereUniqueInput[]
    delete?: PasswordRecoveryTokenWhereUniqueInput | PasswordRecoveryTokenWhereUniqueInput[]
    connect?: PasswordRecoveryTokenWhereUniqueInput | PasswordRecoveryTokenWhereUniqueInput[]
    update?: PasswordRecoveryTokenUpdateWithWhereUniqueWithoutUserInput | PasswordRecoveryTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordRecoveryTokenUpdateManyWithWhereWithoutUserInput | PasswordRecoveryTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordRecoveryTokenScalarWhereInput | PasswordRecoveryTokenScalarWhereInput[]
  }

  export type PurchaseCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PurchaseCreateWithoutCategoryInput, PurchaseUncheckedCreateWithoutCategoryInput> | PurchaseCreateWithoutCategoryInput[] | PurchaseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCategoryInput | PurchaseCreateOrConnectWithoutCategoryInput[]
    createMany?: PurchaseCreateManyCategoryInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type PurchaseUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<PurchaseCreateWithoutCategoryInput, PurchaseUncheckedCreateWithoutCategoryInput> | PurchaseCreateWithoutCategoryInput[] | PurchaseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCategoryInput | PurchaseCreateOrConnectWithoutCategoryInput[]
    createMany?: PurchaseCreateManyCategoryInputEnvelope
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
  }

  export type PurchaseUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PurchaseCreateWithoutCategoryInput, PurchaseUncheckedCreateWithoutCategoryInput> | PurchaseCreateWithoutCategoryInput[] | PurchaseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCategoryInput | PurchaseCreateOrConnectWithoutCategoryInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutCategoryInput | PurchaseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PurchaseCreateManyCategoryInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutCategoryInput | PurchaseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutCategoryInput | PurchaseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type PurchaseUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<PurchaseCreateWithoutCategoryInput, PurchaseUncheckedCreateWithoutCategoryInput> | PurchaseCreateWithoutCategoryInput[] | PurchaseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: PurchaseCreateOrConnectWithoutCategoryInput | PurchaseCreateOrConnectWithoutCategoryInput[]
    upsert?: PurchaseUpsertWithWhereUniqueWithoutCategoryInput | PurchaseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: PurchaseCreateManyCategoryInputEnvelope
    set?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    disconnect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    delete?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    connect?: PurchaseWhereUniqueInput | PurchaseWhereUniqueInput[]
    update?: PurchaseUpdateWithWhereUniqueWithoutCategoryInput | PurchaseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: PurchaseUpdateManyWithWhereWithoutCategoryInput | PurchaseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
  }

  export type PurchaseCategoryCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<PurchaseCategoryCreateWithoutPurchasesInput, PurchaseCategoryUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: PurchaseCategoryCreateOrConnectWithoutPurchasesInput
    connect?: PurchaseCategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPurchasesInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PurchaseCategoryUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<PurchaseCategoryCreateWithoutPurchasesInput, PurchaseCategoryUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: PurchaseCategoryCreateOrConnectWithoutPurchasesInput
    upsert?: PurchaseCategoryUpsertWithoutPurchasesInput
    connect?: PurchaseCategoryWhereUniqueInput
    update?: XOR<XOR<PurchaseCategoryUpdateToOneWithWhereWithoutPurchasesInput, PurchaseCategoryUpdateWithoutPurchasesInput>, PurchaseCategoryUncheckedUpdateWithoutPurchasesInput>
  }

  export type UserUpdateOneRequiredWithoutPurchasesNestedInput = {
    create?: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasesInput
    upsert?: UserUpsertWithoutPurchasesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchasesInput, UserUpdateWithoutPurchasesInput>, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type UserCreateNestedOneWithoutConfirmEmailTokenInput = {
    create?: XOR<UserCreateWithoutConfirmEmailTokenInput, UserUncheckedCreateWithoutConfirmEmailTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutConfirmEmailTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutConfirmEmailTokenNestedInput = {
    create?: XOR<UserCreateWithoutConfirmEmailTokenInput, UserUncheckedCreateWithoutConfirmEmailTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutConfirmEmailTokenInput
    upsert?: UserUpsertWithoutConfirmEmailTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutConfirmEmailTokenInput, UserUpdateWithoutConfirmEmailTokenInput>, UserUncheckedUpdateWithoutConfirmEmailTokenInput>
  }

  export type UserCreateNestedOneWithoutRecoveryPasswordTokenInput = {
    create?: XOR<UserCreateWithoutRecoveryPasswordTokenInput, UserUncheckedCreateWithoutRecoveryPasswordTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecoveryPasswordTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRecoveryPasswordTokenNestedInput = {
    create?: XOR<UserCreateWithoutRecoveryPasswordTokenInput, UserUncheckedCreateWithoutRecoveryPasswordTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRecoveryPasswordTokenInput
    upsert?: UserUpsertWithoutRecoveryPasswordTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRecoveryPasswordTokenInput, UserUpdateWithoutRecoveryPasswordTokenInput>, UserUncheckedUpdateWithoutRecoveryPasswordTokenInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PurchaseCreateWithoutCreatorInput = {
    name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: PurchaseCategoryCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateWithoutCreatorInput = {
    id?: number
    name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
  }

  export type PurchaseCreateOrConnectWithoutCreatorInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutCreatorInput, PurchaseUncheckedCreateWithoutCreatorInput>
  }

  export type PurchaseCreateManyCreatorInputEnvelope = {
    data: PurchaseCreateManyCreatorInput | PurchaseCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type ConfirmEmailTokenCreateWithoutUserInput = {
    token: string
  }

  export type ConfirmEmailTokenUncheckedCreateWithoutUserInput = {
    token: string
  }

  export type ConfirmEmailTokenCreateOrConnectWithoutUserInput = {
    where: ConfirmEmailTokenWhereUniqueInput
    create: XOR<ConfirmEmailTokenCreateWithoutUserInput, ConfirmEmailTokenUncheckedCreateWithoutUserInput>
  }

  export type ConfirmEmailTokenCreateManyUserInputEnvelope = {
    data: ConfirmEmailTokenCreateManyUserInput | ConfirmEmailTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PasswordRecoveryTokenCreateWithoutUserInput = {
    token: string
  }

  export type PasswordRecoveryTokenUncheckedCreateWithoutUserInput = {
    token: string
  }

  export type PasswordRecoveryTokenCreateOrConnectWithoutUserInput = {
    where: PasswordRecoveryTokenWhereUniqueInput
    create: XOR<PasswordRecoveryTokenCreateWithoutUserInput, PasswordRecoveryTokenUncheckedCreateWithoutUserInput>
  }

  export type PasswordRecoveryTokenCreateManyUserInputEnvelope = {
    data: PasswordRecoveryTokenCreateManyUserInput | PasswordRecoveryTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseUpsertWithWhereUniqueWithoutCreatorInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutCreatorInput, PurchaseUncheckedUpdateWithoutCreatorInput>
    create: XOR<PurchaseCreateWithoutCreatorInput, PurchaseUncheckedCreateWithoutCreatorInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutCreatorInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutCreatorInput, PurchaseUncheckedUpdateWithoutCreatorInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutCreatorInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutCreatorInput>
  }

  export type PurchaseScalarWhereInput = {
    AND?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    OR?: PurchaseScalarWhereInput[]
    NOT?: PurchaseScalarWhereInput | PurchaseScalarWhereInput[]
    id?: IntFilter<"Purchase"> | number
    name?: StringFilter<"Purchase"> | string
    price?: FloatFilter<"Purchase"> | number
    createdBy?: IntFilter<"Purchase"> | number
    createdAt?: DateTimeFilter<"Purchase"> | Date | string
    updatedAt?: DateTimeFilter<"Purchase"> | Date | string
    categoryId?: IntFilter<"Purchase"> | number
  }

  export type ConfirmEmailTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: ConfirmEmailTokenWhereUniqueInput
    update: XOR<ConfirmEmailTokenUpdateWithoutUserInput, ConfirmEmailTokenUncheckedUpdateWithoutUserInput>
    create: XOR<ConfirmEmailTokenCreateWithoutUserInput, ConfirmEmailTokenUncheckedCreateWithoutUserInput>
  }

  export type ConfirmEmailTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: ConfirmEmailTokenWhereUniqueInput
    data: XOR<ConfirmEmailTokenUpdateWithoutUserInput, ConfirmEmailTokenUncheckedUpdateWithoutUserInput>
  }

  export type ConfirmEmailTokenUpdateManyWithWhereWithoutUserInput = {
    where: ConfirmEmailTokenScalarWhereInput
    data: XOR<ConfirmEmailTokenUpdateManyMutationInput, ConfirmEmailTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type ConfirmEmailTokenScalarWhereInput = {
    AND?: ConfirmEmailTokenScalarWhereInput | ConfirmEmailTokenScalarWhereInput[]
    OR?: ConfirmEmailTokenScalarWhereInput[]
    NOT?: ConfirmEmailTokenScalarWhereInput | ConfirmEmailTokenScalarWhereInput[]
    userId?: IntFilter<"ConfirmEmailToken"> | number
    token?: StringFilter<"ConfirmEmailToken"> | string
  }

  export type PasswordRecoveryTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: PasswordRecoveryTokenWhereUniqueInput
    update: XOR<PasswordRecoveryTokenUpdateWithoutUserInput, PasswordRecoveryTokenUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordRecoveryTokenCreateWithoutUserInput, PasswordRecoveryTokenUncheckedCreateWithoutUserInput>
  }

  export type PasswordRecoveryTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: PasswordRecoveryTokenWhereUniqueInput
    data: XOR<PasswordRecoveryTokenUpdateWithoutUserInput, PasswordRecoveryTokenUncheckedUpdateWithoutUserInput>
  }

  export type PasswordRecoveryTokenUpdateManyWithWhereWithoutUserInput = {
    where: PasswordRecoveryTokenScalarWhereInput
    data: XOR<PasswordRecoveryTokenUpdateManyMutationInput, PasswordRecoveryTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type PasswordRecoveryTokenScalarWhereInput = {
    AND?: PasswordRecoveryTokenScalarWhereInput | PasswordRecoveryTokenScalarWhereInput[]
    OR?: PasswordRecoveryTokenScalarWhereInput[]
    NOT?: PasswordRecoveryTokenScalarWhereInput | PasswordRecoveryTokenScalarWhereInput[]
    userId?: IntFilter<"PasswordRecoveryToken"> | number
    token?: StringFilter<"PasswordRecoveryToken"> | string
  }

  export type PurchaseCreateWithoutCategoryInput = {
    name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutPurchasesInput
  }

  export type PurchaseUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    price: number
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseCreateOrConnectWithoutCategoryInput = {
    where: PurchaseWhereUniqueInput
    create: XOR<PurchaseCreateWithoutCategoryInput, PurchaseUncheckedCreateWithoutCategoryInput>
  }

  export type PurchaseCreateManyCategoryInputEnvelope = {
    data: PurchaseCreateManyCategoryInput | PurchaseCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type PurchaseUpsertWithWhereUniqueWithoutCategoryInput = {
    where: PurchaseWhereUniqueInput
    update: XOR<PurchaseUpdateWithoutCategoryInput, PurchaseUncheckedUpdateWithoutCategoryInput>
    create: XOR<PurchaseCreateWithoutCategoryInput, PurchaseUncheckedCreateWithoutCategoryInput>
  }

  export type PurchaseUpdateWithWhereUniqueWithoutCategoryInput = {
    where: PurchaseWhereUniqueInput
    data: XOR<PurchaseUpdateWithoutCategoryInput, PurchaseUncheckedUpdateWithoutCategoryInput>
  }

  export type PurchaseUpdateManyWithWhereWithoutCategoryInput = {
    where: PurchaseScalarWhereInput
    data: XOR<PurchaseUpdateManyMutationInput, PurchaseUncheckedUpdateManyWithoutCategoryInput>
  }

  export type PurchaseCategoryCreateWithoutPurchasesInput = {
    name: string
    description: string
  }

  export type PurchaseCategoryUncheckedCreateWithoutPurchasesInput = {
    id?: number
    name: string
    description: string
  }

  export type PurchaseCategoryCreateOrConnectWithoutPurchasesInput = {
    where: PurchaseCategoryWhereUniqueInput
    create: XOR<PurchaseCategoryCreateWithoutPurchasesInput, PurchaseCategoryUncheckedCreateWithoutPurchasesInput>
  }

  export type UserCreateWithoutPurchasesInput = {
    email: string
    createdAt?: Date | string
    password: string
    verified?: boolean
    confirmEmailToken?: ConfirmEmailTokenCreateNestedManyWithoutUserInput
    recoveryPasswordToken?: PasswordRecoveryTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPurchasesInput = {
    id?: number
    email: string
    createdAt?: Date | string
    password: string
    verified?: boolean
    confirmEmailToken?: ConfirmEmailTokenUncheckedCreateNestedManyWithoutUserInput
    recoveryPasswordToken?: PasswordRecoveryTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPurchasesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
  }

  export type PurchaseCategoryUpsertWithoutPurchasesInput = {
    update: XOR<PurchaseCategoryUpdateWithoutPurchasesInput, PurchaseCategoryUncheckedUpdateWithoutPurchasesInput>
    create: XOR<PurchaseCategoryCreateWithoutPurchasesInput, PurchaseCategoryUncheckedCreateWithoutPurchasesInput>
    where?: PurchaseCategoryWhereInput
  }

  export type PurchaseCategoryUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: PurchaseCategoryWhereInput
    data: XOR<PurchaseCategoryUpdateWithoutPurchasesInput, PurchaseCategoryUncheckedUpdateWithoutPurchasesInput>
  }

  export type PurchaseCategoryUpdateWithoutPurchasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseCategoryUncheckedUpdateWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutPurchasesInput = {
    update: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
    create: XOR<UserCreateWithoutPurchasesInput, UserUncheckedCreateWithoutPurchasesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchasesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchasesInput, UserUncheckedUpdateWithoutPurchasesInput>
  }

  export type UserUpdateWithoutPurchasesInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    confirmEmailToken?: ConfirmEmailTokenUpdateManyWithoutUserNestedInput
    recoveryPasswordToken?: PasswordRecoveryTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPurchasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    confirmEmailToken?: ConfirmEmailTokenUncheckedUpdateManyWithoutUserNestedInput
    recoveryPasswordToken?: PasswordRecoveryTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutConfirmEmailTokenInput = {
    email: string
    createdAt?: Date | string
    password: string
    verified?: boolean
    purchases?: PurchaseCreateNestedManyWithoutCreatorInput
    recoveryPasswordToken?: PasswordRecoveryTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutConfirmEmailTokenInput = {
    id?: number
    email: string
    createdAt?: Date | string
    password: string
    verified?: boolean
    purchases?: PurchaseUncheckedCreateNestedManyWithoutCreatorInput
    recoveryPasswordToken?: PasswordRecoveryTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutConfirmEmailTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutConfirmEmailTokenInput, UserUncheckedCreateWithoutConfirmEmailTokenInput>
  }

  export type UserUpsertWithoutConfirmEmailTokenInput = {
    update: XOR<UserUpdateWithoutConfirmEmailTokenInput, UserUncheckedUpdateWithoutConfirmEmailTokenInput>
    create: XOR<UserCreateWithoutConfirmEmailTokenInput, UserUncheckedCreateWithoutConfirmEmailTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutConfirmEmailTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutConfirmEmailTokenInput, UserUncheckedUpdateWithoutConfirmEmailTokenInput>
  }

  export type UserUpdateWithoutConfirmEmailTokenInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    purchases?: PurchaseUpdateManyWithoutCreatorNestedInput
    recoveryPasswordToken?: PasswordRecoveryTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutConfirmEmailTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    purchases?: PurchaseUncheckedUpdateManyWithoutCreatorNestedInput
    recoveryPasswordToken?: PasswordRecoveryTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutRecoveryPasswordTokenInput = {
    email: string
    createdAt?: Date | string
    password: string
    verified?: boolean
    purchases?: PurchaseCreateNestedManyWithoutCreatorInput
    confirmEmailToken?: ConfirmEmailTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRecoveryPasswordTokenInput = {
    id?: number
    email: string
    createdAt?: Date | string
    password: string
    verified?: boolean
    purchases?: PurchaseUncheckedCreateNestedManyWithoutCreatorInput
    confirmEmailToken?: ConfirmEmailTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRecoveryPasswordTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRecoveryPasswordTokenInput, UserUncheckedCreateWithoutRecoveryPasswordTokenInput>
  }

  export type UserUpsertWithoutRecoveryPasswordTokenInput = {
    update: XOR<UserUpdateWithoutRecoveryPasswordTokenInput, UserUncheckedUpdateWithoutRecoveryPasswordTokenInput>
    create: XOR<UserCreateWithoutRecoveryPasswordTokenInput, UserUncheckedCreateWithoutRecoveryPasswordTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRecoveryPasswordTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRecoveryPasswordTokenInput, UserUncheckedUpdateWithoutRecoveryPasswordTokenInput>
  }

  export type UserUpdateWithoutRecoveryPasswordTokenInput = {
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    purchases?: PurchaseUpdateManyWithoutCreatorNestedInput
    confirmEmailToken?: ConfirmEmailTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRecoveryPasswordTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    purchases?: PurchaseUncheckedUpdateManyWithoutCreatorNestedInput
    confirmEmailToken?: ConfirmEmailTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PurchaseCreateManyCreatorInput = {
    id?: number
    name: string
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: number
  }

  export type ConfirmEmailTokenCreateManyUserInput = {
    token: string
  }

  export type PasswordRecoveryTokenCreateManyUserInput = {
    token: string
  }

  export type PurchaseUpdateWithoutCreatorInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: PurchaseCategoryUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type PurchaseUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type ConfirmEmailTokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type ConfirmEmailTokenUncheckedUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type ConfirmEmailTokenUncheckedUpdateManyWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type PasswordRecoveryTokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type PasswordRecoveryTokenUncheckedUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type PasswordRecoveryTokenUncheckedUpdateManyWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type PurchaseCreateManyCategoryInput = {
    id?: number
    name: string
    price: number
    createdBy: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PurchaseUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutPurchasesNestedInput
  }

  export type PurchaseUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchaseUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdBy?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}