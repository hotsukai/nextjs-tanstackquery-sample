import { createQueryFactory } from "./query-factory";
import { fetchUser } from "@/lib/fetch-user";

export const fetchUserQuery = createQueryFactory(
  (userId: string) => ['user', userId], // keyFn
  (userId: string) => fetchUser(userId) // queryFn
);