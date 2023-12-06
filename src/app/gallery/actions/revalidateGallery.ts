'use server'
import { revalidatePath } from 'next/cache';
export async function revalidate(route: string) {
    console.log('revalidating:::');
    revalidatePath(route);
}