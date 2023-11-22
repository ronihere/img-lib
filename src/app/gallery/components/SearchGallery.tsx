'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import React, {useState} from "react"
export default function SearchGallery() {
    const [tagName, setTagName] = useState('');
    const router = useRouter();
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.replace(`/gallery?search=${encodeURIComponent(tagName)}`)
        router.refresh()
    }
  return (
    <form onSubmit={(e)=>submitHandler(e)}>
      <Label htmlFor="tag-Name" className="text-right">
              Album
          </Label>
          <div className="flex">
              
              <Input id="name" value={tagName} onChange={(e) => setTagName(e.target.value)} className="col-span-3" />
              <Button type="submit">Search</Button>
          </div>
    </form>
  )
}
