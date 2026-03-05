'use client';

import React from 'react';
import styles from './TorchToggle.module.css';

interface TorchToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

const TorchToggle: React.FC<TorchToggleProps> = ({ 
  checked = false, 
  onChange,
  className = ''
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked);
    }
  };

  return (
    <label className={`${styles.container} ${className}`}>
      <input 
        checked={checked} 
        type="checkbox" 
        onChange={handleChange}
      />
      <div className={styles.checkmark}></div>
      <div className={styles.torch}>
        <div className={styles.head}>
          <div className={`${styles.face} ${styles.top}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`${styles.face} ${styles.left}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`${styles.face} ${styles.right}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className={styles.stick}>
          <div className={`${styles.side} ${styles.sideLeft}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`${styles.side} ${styles.sideRight}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </label>
  );
};

export default TorchToggle;
