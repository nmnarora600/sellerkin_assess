"use client"

import * as React from "react"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChangeEvent } from 'react';
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
const[name, setName]=React.useState("");
const[email, setEmail]=React.useState("");
  const { toast } = useToast()
 const onSubmit= async(event: React.SyntheticEvent)=> {
    event.preventDefault()
    setIsLoading(true)
try {


let f = await fetch(`/api/sendmail`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 0,
    },
    body: JSON.stringify({ name, email }),
  });

  let res = await f.json();

 
    

if(res.success==true){
    toast({
        title: "Successfully Subscribed.",
        description: "Subscription successful, you will receive confirmation shortly.",
      })
      setEmail('');
      setName('');
}
else{
throw "Some Error Occured"
}

   
} catch (error) {
    toast({
        title: "Uh Oh, Something went wrong.",
        description: "There was a problem in processing your subscription.",
      })
      console.log(error)
}

    setIsLoading(false)
  }

  

  return (
    <div className={cn("grid gap-6", className)} {...props} suppressHydrationWarning>
      <form onSubmit={onSubmit} >
        <div className="grid gap-5">
          <div className="grid gap-2">
            <Label className="sr-only" htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Enter your name"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              name="name"
              value={name}
              disabled={isLoading}
              onChange={(event: ChangeEvent<HTMLInputElement>)=>{
                event.preventDefault();
            setName(event.target.value)
              }}
            />

            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              value={email}
              autoCorrect="off"
              disabled={isLoading}
              name="email"
              onChange={(event: ChangeEvent<HTMLInputElement>)=>{
                event.preventDefault();
            setEmail(event.target.value)}}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Send Details
          </Button>
        </div>
      </form>
     
  
    </div>
  )
}