import { MetadataRoute } from 'next';
import { projects } from '@/content/projects';

export const dynamic = 'force-static';


export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.jameschristopher.online';

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
    },
    ...projectUrls,
  ];
}
