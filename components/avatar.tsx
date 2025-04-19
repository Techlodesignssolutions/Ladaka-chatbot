"use client"

import dynamic from 'next/dynamic'
import Image from "next/image"

const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { ssr: false }
)

interface AvatarProps {
  onClick: () => void
}

export default function Avatar({ onClick }: AvatarProps) {
  return (
    <MotionDiv
      className="cursor-pointer relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {/* Speech Bubble */}
      <div className="absolute -top-12 right-0 bg-white p-2 rounded-xl shadow-md border-2 border-orange-600 z-10">
        <p className="text-orange-800 font-medium text-base">Any Questions?</p>
        {/* Triangle pointer */}
        <div className="absolute -bottom-2 right-8 w-3 h-3 bg-white border-r-2 border-b-2 border-orange-600 transform rotate-45"></div>
      </div>

      <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-orange-600 shadow-lg">
        <Image
          src="/Avatar.jpeg"
          alt="Chat Avatar"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-medium shadow-md w-32 text-center">
        Chat with LADAKA
      </div>
    </MotionDiv>
  )
}
