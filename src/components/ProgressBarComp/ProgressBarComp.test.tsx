import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProgressBarComp from './ProgressBarComp';

describe('ProgressBarComp', () => {
  it('renders progress bar with correct progress value', () => {
    render(<ProgressBarComp data={75} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '75');
  });

  it('applies success variant when progress is >= 75', () => {
    render(<ProgressBarComp data={80} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveClass('bg-success');
  });

  it('applies info variant when progress is >= 50 and < 75', () => {
    render(<ProgressBarComp data={60} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveClass('bg-info');
  });

  it('applies primary variant when progress is < 50', () => {
    render(<ProgressBarComp data={40} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveClass('bg-primary');
  });

  it('renders with animation', () => {
    render(<ProgressBarComp data={50} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveClass('progress-bar-animated');
  });

  it('contains progress bar wrapper', () => {
    render(<ProgressBarComp data={50} />);
    const wrapper = screen.getByTestId('progress-wrapper');
    expect(wrapper).toHaveClass('progress-wrapper');
  });

  // Test edge cases
  it('handles 0% progress correctly', () => {
    render(<ProgressBarComp data={0} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '0');
  });

  it('handles 100% progress correctly', () => {
    render(<ProgressBarComp data={100} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '100');
    expect(progressBar).toHaveClass('bg-success');
  });

  // Test invalid inputs
  it('clamps negative progress values to 0', () => {
    render(<ProgressBarComp data={-10} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '0');
  });

  it('clamps progress values above 100 to 100', () => {
    render(<ProgressBarComp data={120} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '100');
  });
});
