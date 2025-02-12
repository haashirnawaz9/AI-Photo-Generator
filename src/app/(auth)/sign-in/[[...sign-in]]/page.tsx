import { SignIn } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'

export default async function Page() {
  const user = await currentUser();
  return (
    <div className='flex justify-center mt-14'>
          <SignIn />
    </div>
  )
}