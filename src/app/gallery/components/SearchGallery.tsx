'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import React, {useState , useEffect} from "react"
export default function SearchGallery({initialSearch}: {initialSearch: string}) {
    const [tagName, setTagName] = useState(initialSearch ? initialSearch : "");
    const router = useRouter();
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.replace(`/gallery?search=${encodeURIComponent(tagName)}`)
        router.refresh()
    }
    useEffect(() => {
        setTagName(initialSearch);
    },[initialSearch])
  return (
    <form onSubmit={(e)=>submitHandler(e)}>
      <Label htmlFor="tag-Name" className="text-right">
              Search By Tags
          </Label>
          <div className="flex gap-4">
              <Input id="name" value={tagName} onChange={(e) => setTagName(e.target.value)} className="col-span-3" />
              <Button type="submit" className="text-md">Search</Button>
          </div>
    </form>
  )
}
