import { ConfidenceLevel } from '@/content/types';

const labelMap: Record<ConfidenceLevel, string> = {
  'high': 'High Confidence',
  'medium': 'Medium Confidence — Fork/Team',
  'low': 'Low Confidence',
  'not-verified': 'Role Not Verified',
};
const colorMap: Record<ConfidenceLevel, string> = {
  'high': 'border-primary text-primary',
  'medium': 'border-yellow-500 text-yellow-500',
  'low': 'border-muted text-muted',
  'not-verified': 'border-red-500 text-red-500',
};

export function ConfidenceBadge({ level }: { level: ConfidenceLevel }) {
  return (
    <span className={`font-mono text-xs border px-2 py-0.5 ${colorMap[level]}`}>
      {labelMap[level]}
    </span>
  );
}
