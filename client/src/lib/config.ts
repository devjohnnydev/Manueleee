// Configuration for different environments
export const config = {
  apiUrl: process.env.NODE_ENV === 'production' 
    ? window.location.origin 
    : 'http://localhost:5000',
    
  assets: {
    basePath: '/assets'
  }
};

export const getAssetUrl = (path: string) => {
  return `${config.assets.basePath}/${path}`;
};