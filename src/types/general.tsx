export type BlogPost = {
    id: number;
    blog_author_id: number;
    blog_category_id: number;
    title: string;
    slug: string;
    content: string;
    published_at: string;
    seo_title: string | null;
    seo_description: string | null;
    image: string;
    created_at: string;
    updated_at: string;
  };

  