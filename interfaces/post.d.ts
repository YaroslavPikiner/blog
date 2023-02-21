export type IPostCard = {
  node?: IPosts;
  key?: string;
};

export interface IPosts {
  map?: any;
  key:? string;
  author: IAuthor;
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: FeaturedImage;
  categories: Category[];
}

export interface IPostsShort {
  slug?: string;
  name?: string;
}

export interface IAuthor {
  bio: string;
  name: string;
  id: string;
  photo: Photo;
}

export interface Photo {
  url: string;
}

export interface FeaturedImage {
  url: string;
}

export interface Category {
  name: string;
  slug: string;
}


export interface IAuthor {
  name: string;
  photo: {
    url: string;
  };
}

export interface IPost {
  post: {
    author: IAuthor;
    slug: string;
    featuredImage: {
        url: string
    };
    createdAt: string;
    title: string;
  };
}