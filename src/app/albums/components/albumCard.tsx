import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"


export function AlbumCard({name, path}: {name: string , path : string}) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Album <span className="font-bold text-lg">{name}</span></CardTitle>
        <CardDescription>View all assests in the <span className="font-bold text-lg">{name}</span> folder in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        {/* {name} */}
      </CardContent>
      <CardFooter className="flex justify-between">
        {/* <Button variant="outline">Cancel</Button> */}
        <Button asChild><Link href={`albums/${name}`}>Go To Album</Link></Button>
      </CardFooter>
    </Card>
  )
}
