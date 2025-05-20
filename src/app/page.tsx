import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Next.js App Router with TanStack Query</h1>
      
      <div>
        <h2 className="text-xl font-semibold mb-2">参考記事</h2>
        <Link 
          href="https://zenn.dev/sirok/articles/nextjs-app-router-with-tanstack-query"
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Next.js App Routerで実現するTanStack Queryの3パターン
        </Link>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">サンプル</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <Link href="/sample1/users/1" className="text-blue-500 hover:underline">
              クライアントサイドフェッチ
            </Link>
          </li>
          <li>
            <Link href="/sample2/users/1" className="text-blue-500 hover:underline">
              initialData
            </Link>
          </li>
          <li>
            <Link href="/sample3/users/1" className="text-blue-500 hover:underline">
              Hydration
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
