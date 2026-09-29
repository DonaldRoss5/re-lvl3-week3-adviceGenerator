import { useState } from 'react';

/**
 * CopyButton copies the current advice text to the clipboard and shows a
 * brief confirmation once the copy succeeds.
 */
function CopyButton({ adviceText, isDisabled = false }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    if (!adviceText) {
      return;
    }

    try {
      await navigator.clipboard.writeText(adviceText);
      setIsCopied(true);
      window.setTimeout(() => setIsCopied(false), 2000);
    } catch {
      // Clipboard access can fail (permissions, unsupported browser);
      // we simply skip showing the confirmation in that case.
    }
  };

  return (
    <button
      type="button"
      className="copy-button"
      onClick={handleCopy}
      disabled={isDisabled}
      aria-live="polite"
    >
      {isCopied ? 'Copied!' : 'Copy advice'}
    </button>
  );
}

export default CopyButton;