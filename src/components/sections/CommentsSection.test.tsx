import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { CommentsSection } from './CommentsSection';

// Mock Firebase dependencies
vi.mock('@/lib/comments', () => ({
  subscribeToComments: vi.fn((cb) => { 
    cb([]); 
    return () => {}; 
  }),
  addComment: vi.fn().mockResolvedValue(undefined),
}));

describe('CommentsSection', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('rejects a comment over the 500-character limit before hitting Firestore', async () => {
    const user = userEvent.setup();
    render(<CommentsSection />);
    
    const nameInput = screen.getByLabelText(/name/i);
    const textarea = screen.getByLabelText(/comment/i);
    
    await user.type(nameInput, 'Test User');
    await user.click(textarea);
    await user.paste('a'.repeat(501));
    
    const postButton = screen.getByRole('button', { name: /post comment/i });
    await user.click(postButton);

    // Expect the validation error to appear
    expect(await screen.findByText(/Comment must be less than 500 characters/i)).toBeInTheDocument();
  });
});
