/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { XCircleIcon } from './icons';

interface HelpDialogProps {
  onClose: () => void;
}

const HelpDialog: React.FC<HelpDialogProps> = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="help-dialog-title"
    >
      <div
        className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl w-full max-w-lg text-gray-200 p-6 relative animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close help dialog"
        >
          <XCircleIcon className="w-7 h-7" />
        </button>
        <h2 id="help-dialog-title" className="text-2xl font-bold text-white mb-4">
          How to Animate
        </h2>
        <div className="space-y-4 text-lg">
          <p>Create your own animated GIFs in a few simple steps:</p>
          <ol className="list-decimal list-inside space-y-3 pl-2">
            <li>
              <strong>Choose a Style:</strong> Tap one of the emoji suggestions to set the artistic style for your animation.
            </li>
            <li>
              <strong>Describe the Scene:</strong> Write a short story or a description in the text box of what you'd like to see happen.
            </li>
            <li>
              <strong>Add an Image (Optional):</strong> For best results, use your camera or upload a photo of the subject you want to bring to life.
            </li>
            <li>
              <strong>Animate!</strong> Hit the big 'Animate' button and let the AI work its magic.
            </li>
            <li>
              <strong>Fine-Tune & Share:</strong> Once generated, you can adjust the animation speed, view the sprite sheet, and export your creation as a GIF to share with friends.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default HelpDialog;
