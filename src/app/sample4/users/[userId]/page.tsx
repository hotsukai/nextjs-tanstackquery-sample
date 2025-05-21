import { QueryClient, dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { fetchUserQuery } from './user-queries'
import UserClient from './user-client'

export default async function Page({ params }: { params: { userId: string } }) {
  const queryClient = new QueryClient()
  await fetchUserQuery(params.userId).prefetch(queryClient)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {/* Client Component 側へレンダリング */}
      <UserClient userId={params.userId} />
    </HydrationBoundary>
  )
}