
import { fetchUser } from "@/lib/fetch-user";
import UserClient from "./user-client";

export default async function Page({ params }: { params: { userId: string } }) {
  const userId = await params.userId;
  // サーバーサイドでデータを取得
  const initialUserData = await fetchUser(userId);
  
  // 取得したデータをinitialDataとしてクライアントコンポーネントにわたす
  return <UserClient userId={userId} initialData={initialUserData} />;
}

