
import UserClient from "./user-client";

export default async function Sample1Page({ params }: { params: { userId: string } }) {
  const userId = await params.userId;
  return (
    <UserClient userId={userId} />
  );
}
