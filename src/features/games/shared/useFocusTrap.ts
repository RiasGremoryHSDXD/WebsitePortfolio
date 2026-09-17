import { useEffect } from 'react';

export function useFocusTrap(ref: React.RefObject<HTMLElement | null>, isActive: boolean, onClose: () => void) {
  useEffect(() => {
    if (!isActive || !ref.current) return;

    const currentRef = ref.current;
    
    // Find all focusable elements inside the ref
    const focusableElementsString =
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    
    let focusableElements = Array.from(
      currentRef.querySelectorAll<HTMLElement>(focusableElementsString)
    );
    
    // Sort by tabindex if needed, but DOM order is usually fine
    
    if (focusableElements.length === 0) {
      // If no focusable elements, just make the container focusable
      currentRef.setAttribute('tabindex', '-1');
      focusableElements = [currentRef];
    }
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    currentRef.addEventListener('keydown', handleKeyDown);
    firstElement.focus();

    return () => {
      currentRef.removeEventListener('keydown', handleKeyDown);
    };
  }, [isActive, ref, onClose]);
}
