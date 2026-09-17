import { Metadata } from 'next';
import { ResumeView } from './_components/ResumeView';

export const metadata: Metadata = {
  title: 'Resume | James Christopher Tagupa',
  description: 'Software developer resume for James Christopher Tagupa.',
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background print:bg-white text-foreground print:text-black pt-20 print:pt-0 pb-16 print:pb-0">
      <main className="max-w-4xl mx-auto px-6 print:px-0">
        <ResumeView />
      </main>
    </div>
  );
}
