import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  const { data, error } = await supabase
    .from('game_scores')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(10)

  if (error) {
    console.error('Error fetching scores:', error)
    return NextResponse.json({ error: 'データの取得に失敗しました' }, { status: 500 })
  }

  return NextResponse.json({ data })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const { data, error } = await supabase
      .from('game_scores')
      .insert([
        {
          user_name: body.userName,
          game_name: body.gameName,
          score: body.score,
        },
      ])
      .select()
      .single()

    if (error) {
      console.error('Error inserting score:', error)
      return NextResponse.json({ error: 'スコアの保存に失敗しました' }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (err) {
    console.error('Error processing request:', err)
    return NextResponse.json(
      { success: false, error: 'リクエストの処理に失敗しました' },
      { status: 400 },
    )
  }
}
