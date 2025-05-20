import { User } from "@/type";

// データの取得関数
export async function fetchUser(userId: string, baseUrl?: string): User {
  const apiBaseUrl = baseUrl || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const res = await fetch(`${apiBaseUrl}/api/users/${userId}`);
  return res.json();
}