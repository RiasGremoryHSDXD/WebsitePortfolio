'use client';

import React, { useState, useEffect } from 'react';
import { Timestamp } from 'firebase/firestore';
import { subscribeToComments, addComment, Comment } from '@/lib/comments';

export function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Fetch comments in real-time
  useEffect(() => {
    const unsubscribe = subscribeToComments(
      (commentsData) => {
        setComments(commentsData);
      },
      (err) => {
        console.error("Error fetching comments: ", err);
        if (err.message.includes('permission-denied')) {
          setError('Database permissions need to be updated to allow reading comments.');
        }
      }
    );

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !content.trim()) return;

    setIsSubmitting(true);
    setError('');

    try {
      await addComment(name, content);
      // Clear form on success
      setName('');
      setContent('');
    } catch (err: unknown) {
      console.error("Error adding comment: ", err);
      if (err instanceof Error && err.message.includes('permission-denied')) {
        setError('Database permissions need to be updated to allow writing comments.');
      } else {
        setError('Failed to post comment. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (timestamp: Timestamp | null) => {
    if (!timestamp) return 'Just now';
    const date = timestamp.toDate();
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <section id="comments" className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-10">
        <p className="section-label">Guestbook</p>
        <h2 className="section-title">Leave a Comment</h2>
        <p className="text-foreground-muted mt-2 text-sm md:text-base leading-relaxed">
          Questions, feedback, or just want to say hi? Drop a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Comment Form */}
        <div className="md:col-span-5">
          <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-2xl p-6 space-y-4 shadow-lg">
            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-xs">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
                suppressHydrationWarning
                className="w-full bg-background border border-border-bright rounded-lg px-4 py-2.5 text-sm text-foreground placeholder-[#484f58] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-xs font-semibold text-foreground-muted uppercase tracking-wider mb-2">
                Comment
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="What's on your mind?"
                required
                rows={4}
                suppressHydrationWarning
                className="w-full bg-background border border-border-bright rounded-lg px-4 py-2.5 text-sm text-foreground placeholder-[#484f58] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || !name.trim() || !content.trim()}
              className="w-full btn-primary py-2.5 flex justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Posting...' : 'Post Comment'}
            </button>
          </form>
        </div>

        {/* Comments List */}
        <div className="md:col-span-7">
          <div className="space-y-6">
            {comments.length === 0 ? (
              <div className="text-center py-12 border border-dashed border-border-bright rounded-2xl text-foreground-muted text-sm">
                No comments yet. Be the first to start the conversation!
              </div>
            ) : (
              comments.map((comment) => (
                <div key={comment.id} className="bg-surface border border-border rounded-xl p-5 hover:border-border-bright transition-colors group">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-foreground text-sm">{comment.name}</h4>
                    <span className="text-xs text-foreground-muted">
                      {formatDate(comment.createdAt)}
                    </span>
                  </div>
                  <p className="text-[#c9d1d9] text-sm leading-relaxed whitespace-pre-wrap">
                    {comment.content}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
