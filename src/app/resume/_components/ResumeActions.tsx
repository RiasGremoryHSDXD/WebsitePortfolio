'use client';

export function ResumeActions() {
  return (
    <div className="flex gap-4 print:hidden mb-8 justify-end border-b border-border pb-6">
      <button
        onClick={() => window.print()}
        className="btn-secondary !text-sm !py-2"
      >
        Print
      </button>
      <a
        href="/resume.pdf"
        download="james-christopher-tagupa-resume.pdf"
        className="btn-primary !text-sm !py-2"
      >
        Download PDF
      </a>
    </div>
  );
}
