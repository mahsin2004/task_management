import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="grid gap-3 bg-[#ffff] p-10  rounded-lg border-[1.5px] max-w-sm">
        <h2 className="text-3xl font-medium text-center mb-3">Login</h2>
        
        <div className="grid items-center gap-2">
          <Label htmlFor="name" className="">
            Email
          </Label>
          <Input id="email" placeholder="email" className="" />
        </div>

        <div className="grid items-center gap-2">
          <Label htmlFor="name" className="">
            Password
          </Label>
          <Input id="name" placeholder="password" className="" />
        </div>

        <Button>Login</Button>
      </div>
    </main>
  );
}
