// Configuration for different environments
export const config = {
  apiUrl: process.env.NODE_ENV === 'production' 
    ? 'https://your-vercel-domain.vercel.app' 
    : 'http://localhost:5000',
    
  assets: {
    basePath: process.env.NODE_ENV === 'production' 
      ? '/attached_assets' 
      : '/attached_assets'
  }
};

export const getAssetUrl = (path: string) => {
  return `${config.assets.basePath}/${path}`;
};