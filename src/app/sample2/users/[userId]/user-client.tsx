'use client'

import { fetchUser } from "@/lib/fetch-user";
import { User } from "@/type";
import { useQuery } from "@tanstack/react-query";

export default function UserClient({ userId, initialData }: { userId: string, initialData: User }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
    initialData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{data.name}のプロフィール</div>;
}