/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import RoboLoader from './BananaLoader';

const LoadingOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <RoboLoader className="w-72 h-72" />
    </div>
  );
};

export default LoadingOverlay;
