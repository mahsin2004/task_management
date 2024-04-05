import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function register() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="grid gap-3 bg-[#ffff] p-10  rounded-lg border-[1.5px] max-w-sm">
        <h2 className="text-3xl font-medium text-center mb-3">Register</h2>

        <div className="grid grid-cols-2 gap-2">
          <div className="grid items-center gap-2">
            <Label htmlFor="name" className="">
              Full Name
            </Label>
            <Input id="name" placeholder="name" className="" />
          </div>

          <div className="grid items-center gap-2">
            <Label htmlFor="picture">Photo</Label>
            <Input id="picture" type="file" className="cursor-pointer" />
          </div>
        </div>

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

        <Button>Create</Button>
      </div>
    </main>
  );
}
