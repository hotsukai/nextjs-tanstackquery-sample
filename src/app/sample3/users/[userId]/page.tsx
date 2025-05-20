// app/user/[id]/page.tsx  (Server Component)
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { fetchUser } from '@/lib/fetch-user'
import { QueryClient } from '@tanstack/react-query'
import UserClient from './user-client'

export default async function Page({ params }: { params: { userId: string } }) {
  const userId = await params.userId;
  const queryClient = new QueryClient()
  // サーバーサイドでデータを取得し、queryClientにキャッシュとしてセット
  await queryClient.prefetchQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  })
  
  // HydrationBoundaryにdehydrateしたqueryClientを渡すことで、
  // queryClientの内容をサーバーが返却するHTMLに含める。
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <UserClient userId={userId} />
    </HydrationBoundary>
  )
}