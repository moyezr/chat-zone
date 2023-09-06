"use client";

import AddFriendButton from '@/components/AddFriendButton'
import { FC } from 'react'

interface AddPageProps {
  
}

const AddPage: FC<AddPageProps> = ({}) => {
    return (
        <main className='pt-8'>
            <h1 className='font-bold text-5xl mb-8'>Add a friend</h1>
            <AddFriendButton />
        </main>
    )
}

export default AddPage