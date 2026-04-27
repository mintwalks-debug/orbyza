import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true)
      .order('created_at', { ascending: false })
      .limit(10);

    if (error) throw error;
    
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Blog API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
