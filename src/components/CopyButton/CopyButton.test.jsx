import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import CopyButton from './CopyButton';

describe('CopyButton', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('copies the advice text and shows a Copied! confirmation', async () => {
    // 1. Set up user-event FIRST. It installs its own fake clipboard.
    const user = userEvent.setup();

    // 2. THEN spy on that clipboard's writeText so we can check the call.
    const writeTextMock = vi
      .spyOn(navigator.clipboard, 'writeText')
      .mockResolvedValue(undefined);

    render(<CopyButton adviceText="Believe in yourself." />);

    const button = screen.getByRole('button', { name: /copy advice/i });
    await user.click(button);

    expect(writeTextMock).toHaveBeenCalledWith('Believe in yourself.');
    expect(await screen.findByText(/copied!/i)).toBeInTheDocument();
  });

  it('is disabled when no advice is available', () => {
    render(<CopyButton adviceText="" isDisabled />);

    const button = screen.getByRole('button', { name: /copy advice/i });
    expect(button).toBeDisabled();
  });
});