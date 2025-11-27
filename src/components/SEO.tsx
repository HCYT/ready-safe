import { useEffect } from 'react';
import { SITE_URL, SITE_NAME, getFullUrl } from '../config/seo';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  path: string;
  type?: 'website' | 'article';
  image?: string;
}

/**
 * SEO 組件 - 動態更新頁面的 meta 標籤
 * 使用 useEffect 直接操作 DOM，確保 SPA 路由切換時 meta 正確更新
 */
export default function SEO({
  title,
  description,
  keywords,
  path,
  type = 'website',
  image = '/og-image.png',
}: SEOProps) {
  useEffect(() => {
    const fullUrl = getFullUrl(path);
    const fullImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

    // 更新 title
    document.title = title;

    // 更新或創建 meta 標籤的輔助函數
    const updateMeta = (selector: string, content: string, attribute = 'content') => {
      let element = document.querySelector(selector) as HTMLMetaElement | null;
      if (element) {
        element.setAttribute(attribute, content);
      } else {
        element = document.createElement('meta');
        const [attrType, attrValue] = selector.replace('meta[', '').replace(']', '').split('=');
        element.setAttribute(attrType, attrValue.replace(/"/g, ''));
        element.setAttribute(attribute, content);
        document.head.appendChild(element);
      }
    };

    // 更新 link 標籤的輔助函數
    const updateLink = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (element) {
        element.href = href;
      } else {
        element = document.createElement('link');
        element.rel = rel;
        element.href = href;
        document.head.appendChild(element);
      }
    };

    // 基本 meta 標籤
    updateMeta('meta[name="description"]', description);
    if (keywords) {
      updateMeta('meta[name="keywords"]', keywords);
    }

    // Canonical URL
    updateLink('canonical', fullUrl);

    // Open Graph
    updateMeta('meta[property="og:title"]', title);
    updateMeta('meta[property="og:description"]', description);
    updateMeta('meta[property="og:url"]', fullUrl);
    updateMeta('meta[property="og:type"]', type);
    updateMeta('meta[property="og:image"]', fullImageUrl);
    updateMeta('meta[property="og:site_name"]', SITE_NAME);

    // Twitter Cards
    updateMeta('meta[name="twitter:title"]', title);
    updateMeta('meta[name="twitter:description"]', description);
    updateMeta('meta[name="twitter:url"]', fullUrl);
    updateMeta('meta[name="twitter:image"]', fullImageUrl);

  }, [title, description, keywords, path, type, image]);

  return null;
}
