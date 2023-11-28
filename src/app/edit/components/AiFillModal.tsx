'use client'
import { MouseEvent, useState } from "react"
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
// import { CreateFolder } from "../gallery/actions/createFolder"


export default function SingleInputModal({inputState, setInputState, clickHandler, description, title, inputTitle }: {
    clickHandler: (input : string) => void;
    description: string;
    title: string;
    inputTitle: string;
    inputState: string;
    setInputState: React.Dispatch<React.SetStateAction<string>>
}) {
    // const [inputState, setInputState] = useState('');
    const [open, setOpen] = useState(false);
    const submitHandler = async () => {
        clickHandler(inputState)
        setOpen(false);
    }
  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">{title}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{inputTitle}</DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Album
            </Label>
            <Input id="name" value={inputState} onChange={(e)=>setInputState(e.target.value)} className="col-span-3" />
          </div>
         
        </div>
        <DialogFooter>
          <Button type="submit" onClick={()=>submitHandler()}>Make Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </div>
  )
}


