// src/lib/queryFactory.ts
import {
  QueryClient,
  QueryKey,
  QueryFunction,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
  DefaultError,
} from '@tanstack/react-query'


export function createQueryFactory<
  TData = unknown,
  TError = DefaultError,
  // 呼び出し側が任意個の引数を渡せるように
  TArgs extends readonly unknown[] = readonly unknown[]
>(
  keyFn: (...args: TArgs) => QueryKey,
  fn: (...args: TArgs) => Promise<TData>
) {
  // ↓ 呼び出し時に実体化されるクロージャ
  return (...args: TArgs) => {
    const queryKey = keyFn(...args)
    const queryFn: QueryFunction<TData> = () => fn(...args)

    /** サーバー用：prefetchQuery ラッパー */
    const prefetch = (queryClient: QueryClient) =>
      queryClient.prefetchQuery({ queryKey, queryFn })

    /** クライアント用：useQuery ラッパー */
    const use = (
      options?: Omit<
        UseQueryOptions<TData, TError>,
        'queryKey' | 'queryFn'
      >
    ): UseQueryResult<TData, TError> =>
      useQuery({ queryKey, queryFn, ...options })

    return { queryKey, prefetch, use }
  }
}