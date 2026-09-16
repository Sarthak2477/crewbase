
import { Button } from "../components/ui/button";
import {caller} from '@/trpc/server'
const Page = async () => {
  const users = await caller.getUsers();
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <Button>{JSON.stringify(users)}</Button>
    </div>
  )
}
export default Page;