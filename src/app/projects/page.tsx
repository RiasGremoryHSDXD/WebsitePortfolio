import { ProjectsList } from './_components/ProjectsList';

export const metadata = {
  title: 'Projects | James Christopher Tagupa',
  description: 'Archive of software engineering projects, full-stack builds, and academic works.',
};

export default function ProjectsPage() {
  return (
    <div className="pt-16 max-w-6xl mx-auto px-6 py-20 md:py-28">
      <ProjectsList />
    </div>
  );
}
