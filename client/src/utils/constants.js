export const POST_CATEGORIES = {
  UNCATEGORIZED: 'uncategorized',
  JAVASCRIPT: 'javascript',
  REACTJS: 'reactjs',
  NEXTJS: 'nextjs'
};

export const IMAGE_UPLOAD_CONFIG = {
  MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ACCEPTED_TYPES: ['image/jpeg', 'image/png', 'image/webp']
};

export const API_ENDPOINTS = {
  AUTH: {
    GOOGLE: '/api/auth/google',
    SIGNIN: '/api/auth/signin',
    SIGNOUT: '/api/auth/signout'
  },
  POSTS: {
    CREATE: '/api/post/create',
    GET: '/api/post/getposts',
    UPDATE: '/api/post/updatepost',
    DELETE: '/api/post/deletepost'
  }
};

export const IMAGE_CONFIG = {
  MAX_SIZE: 2 * 1024 * 1024, // 2MB
  ACCEPTED_TYPES: ['image/jpeg', 'image/png', 'image/webp']
};