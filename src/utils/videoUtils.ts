
export const getVimeoEmbedUrl = (url: string) => {
  if (!url) return '';
  const vimeoId = url.match(/vimeo\.com\/(\d+)/)?.[1];
  return vimeoId ? `https://player.vimeo.com/video/${vimeoId}?autoplay=1&loop=1&muted=1&background=1&quality=1080p` : '';
};
