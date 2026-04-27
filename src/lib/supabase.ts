import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Initialize the Supabase client for public/client-side use
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper for server-side operations that require service-role permissions
export const getSupabaseAdmin = () => {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, serviceRoleKey);
};

export type Database = {
  public: {
    Tables: {
      user_profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          company_name: string | null;
          phone: string | null;
          created_at: string;
        };
      };
      blog_posts: {
        Row: {
          id: string;
          title: string;
          slug: string;
          content: string | null;
          excerpt: string | null;
          author_id: string | null;
          category: string | null;
          tags: string[] | null;
          published: boolean;
          created_at: string;
        };
      };
      case_studies: {
        Row: {
          id: string;
          title: string;
          slug: string | null;
          description: string | null;
          client_name: string | null;
          results: string | null;
          tags: string[] | null;
          featured_image_url: string | null;
          created_at: string;
        };
      };
      contact_submissions: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          company: string | null;
          message: string | null;
          service_interested: string | null;
          created_at: string;
        };
      };
    };
  };
};
