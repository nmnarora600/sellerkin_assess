import { Metadata } from "next"
import Link from "next/link"
import { UserAuthForm } from "@/components/pageui"
import { Toaster } from "@/components/ui/toaster"
export const metadata: Metadata = {
  title: "Sellerkin Assessment",
  description: "Sellerkin Assessment by Naman Arora.",
}

export default function AuthenticationPage() {

  return (
    <>
  
      <div  className=" container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">

        <div className=" relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Sellerkin Assessment
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;To view more of my deployed projects visit <Link href={"www.namanarora.in"} target="_blank" className="font-semibold hover:underline underline-offset-2 ">My Portfolio</Link>&rdquo;
              </p>
              <footer className="text-sm">Naman Arora</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8 ">
          <div className=" mx-auto items-center flex w-full flex-col justify-center space-y-6 sm:w-[350px] md:relative absolute top-0 bottom-0 left-0 right-0">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Enter the Details
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your name and email below to subscribe.
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  )
}