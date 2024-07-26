import { Editor } from '@/components/editor/Editor'
import Header from '@/components/Header'
import React from 'react'
import { SignedIn, SignInButton, SignedOut, UserButton } from '@clerk/nextjs'

const Document = () => {
  return (
    <div>
      <Header>
        <p className='text-white'>Right Side Test</p>

        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </Header>
      <Editor/>
      {/* Doc */}
    </div>
  )
}

export default Document
