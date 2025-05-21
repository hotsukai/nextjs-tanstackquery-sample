'use client'
import { fetchUserQuery } from "./user-queries";
export default function UserClient({ userId }: { userId: string }) {
  const { data, isLoading, error } = fetchUserQuery(userId).use({
    staleTime: 60 * 1000,
  })

  if (isLoading) return <p>Loading...</p>
  if (error) return <div>Error: {error.message}</div>;

  return <div>{data?.name}のプロフィール</div>;
}