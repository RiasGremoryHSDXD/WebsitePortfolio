import { TypingLab } from '@/features/games/typing-lab/TypingLab';

export const metadata = {
  title: 'Developer Lab | James Christopher Tagupa',
  description: 'Test your typing speed with real code snippets.',
};

export default function LabPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen flex flex-col items-center justify-center px-6">
      <div className="text-center mb-12">
        <p className="section-label">{"// Interactivity"}</p>
        <h1 className="section-title">
          Developer <span className="text-primary">Lab</span>
        </h1>
        <p className="text-foreground-muted mt-4 max-w-lg mx-auto">
          Warm up your fingers. Type the code snippets below as fast and accurately as possible.
        </p>
      </div>
      
      <TypingLab />
    </div>
  );
}
