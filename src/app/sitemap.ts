import { MetadataRoute } from 'next';
import { BASE_URL } from './lib/seo';

const routes = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/email', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/phone', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/date', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/time', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/alphanumeric', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/text-length', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/number-of-lines', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/affirmation', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/social-security-number', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/isbn', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/zip-code', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/credit-debit-card-number', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/numbers', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/domain', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/url-and-path', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/ip-address', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/unix-path', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/windows-path', priority: 0.8, changeFrequency: 'monthly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
