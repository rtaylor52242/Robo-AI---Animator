/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { RobotIcon } from './icons';

interface AnimatorButtonProps {
  onClick: () => void;
  'aria-label': string;
  disabled?: boolean;
}

const AnimatorButton: React.FC<AnimatorButtonProps> = ({ onClick, 'aria-label': ariaLabel, disabled = false }) => {
  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`transition-transform transform focus:outline-none rounded-full flex flex-col items-center justify-center w-36 h-36 bg-indigo-600 text-white shadow-lg ${disabled ? 'filter grayscale opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95 duration-200 hover:bg-indigo-500'}`}
      aria-label={ariaLabel}
      aria-disabled={disabled}
    >
      <RobotIcon className="w-16 h-16 mb-1" />
      <span className="font-bold text-lg">Animate</span>
    </button>
  );
};

export default AnimatorButton;
