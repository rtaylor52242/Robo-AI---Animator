/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const RoboLoader: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="w-24 h-24 border-4 border-dashed rounded-full animate-spin border-indigo-500"></div>
      <p className="mt-4 text-lg text-gray-300">Animating...</p>
    </div>
  );
};

export default RoboLoader;
