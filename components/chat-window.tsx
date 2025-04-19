"use client"

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

const ChatWindow: React.FC = () => {
  const [input, setInput] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      // Handle form submission
    }
  };

  return (
    <div className="flex flex-col h-[500px] w-[400px] bg-white rounded-lg shadow-lg">
      {/* Chat messages area */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="text-center">
          <Image
            src="/Avatar.jpeg"
            alt="LADAKA"
            width={120}
            height={120}
            className="rounded-full mx-auto"
          />
          <h2 className="text-xl mt-4">Hey there, I am LADAKA 👋</h2>
          <p className="mt-2">I'm ready to answer any questions you may have related to my Design Studio and services!</p>
        </div>
      </div>

      {/* Input area */}
      <div className="border-t p-4">
        <Input
          placeholder="Ask your Questions here!"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full rounded-full border-2 border-orange-600 focus:ring-orange-600 focus:border-orange-600"
        />
      </div>
    </div>
  );
};

export default ChatWindow; 