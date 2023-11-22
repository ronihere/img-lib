'use client'
import { useState } from "react"
import { usePathname } from 'next/navigation';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreateFolder } from "../gallery/actions/createFolder"


export default function Modal({ publicId }: { publicId: string }) {
  const pathname = usePathname();
  console.log('pathname', pathname)
    const [open, setOpen] = useState(false);
    const [albumName, setAlbumName] = useState("");
    const submitHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        await CreateFolder(publicId , albumName,pathname);
        setOpen(false);
    }
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Add to Album?</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Type an album you want to move this image into.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input id="name" value={albumName} onChange={(e)=>setAlbumName(e.target.value)} className="col-span-3" />
          </div>
         
        </div>
        <DialogFooter>
          <Button type="submit" onClick={(e)=>submitHandler(e)}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}


