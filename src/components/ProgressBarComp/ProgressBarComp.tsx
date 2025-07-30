import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

interface ProgressBarCompProps {
  data: number;
}

const ProgressBarComp: React.FC<ProgressBarCompProps> = ({ data }) => {
  // Clamp the progress value between 0 and 100
  const progress = Math.min(Math.max(data, 0), 100);
  
  // Determine variant based on progress
  const getVariant = (value: number) => {
    if (value >= 75) return 'success';
    if (value >= 50) return 'info';
    return 'primary';
  };

  return (
    <div className="progress-wrapper" data-testid="progress-wrapper">
      <ProgressBar 
        now={progress}
        variant={getVariant(progress)}
        animated
      />
    </div>
  )
}

export default ProgressBarComp