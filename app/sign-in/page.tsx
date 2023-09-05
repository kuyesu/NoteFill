import { auth } from '@/auth'
import { LoginButton } from '@/components/login-button'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default async function SignInPage() {
  const session = await auth()
  // redirect to home if user is already logged in
  if (session?.user) {
    redirect('/')
  }
  return (
    <div className="flex h-[calc(100vh-theme(spacing.16))] items-center justify-center py-10">
      <div className="grid space-y-16">
        <Image
          className=" transition-opacity duration-300 rounded-full select-none  hover:opacity-80"
          src="https://res.cloudinary.com/dwquzvfke/image/upload/v1693857047/bot00003_v3ebj9-removebg-preview_h5xjhu.png"
          alt="pandas"
          width={354}
          height={354}
        />
        <LoginButton />
      </div>
    </div>
  )
}
