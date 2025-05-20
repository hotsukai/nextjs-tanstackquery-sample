import { NextResponse } from 'next/server'

// モックユーザーデータ
const users = [
  { id: 1, name: 'user1', email: 'user1@example.com', role: 'admin' },
  { id: 2, name: 'user2', email: 'user2@example.com', role: 'user' },
  { id: 3, name: 'user3', email: 'user3@example.com', role: 'user' },
  { id: 4, name: 'user4', email: 'user4@example.com', role: 'manager' },
  { id: 5, name: 'user5', email: 'user5@example.com', role: 'user' },
]

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  // 0.5秒のディレイを追加（APIリクエストをシミュレート）
  await new Promise((resolve) => setTimeout(resolve, 500))

  const userId = parseInt(params.id)
  const user = users.find((u) => u.id === userId)

  try {
    // 全ユーザーを返す
    return NextResponse.json(user)
  } catch (error) {
    console.error('ユーザー一覧取得エラー:', error)
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました。' },
      { status: 500 }
    )
  }
} 