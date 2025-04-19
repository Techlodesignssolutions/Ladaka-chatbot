"use client"

import { useState } from "react"
import ChatInterface from "@/components/chat-interface"
import Avatar from "@/components/avatar"

console.log('Page loading...')

export default function Home() {
  const [isChatVisible, setIsChatVisible] = useState(false)

  return (
    <>
      {isChatVisible ? (
        <ChatInterface onClose={() => setIsChatVisible(false)} />
      ) : (
        <div className="fixed bottom-4 right-4 z-50">
          <Avatar onClick={() => setIsChatVisible(true)} />
        </div>
      )}
    </>
  )
}
