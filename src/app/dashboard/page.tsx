import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const page = () => {
  return (
    <div className="grid items-start grid-cols-3 gap-4 p-[22px]">
      <div className="col-span-1 bg-[#EEF2F5] rounded-md p-4 border-[#e3eaf5] border-[1.5px]">
        <h4 className="font-semibold text-[#31373e]">To Do</h4>

        <div className="bg-white p-3 rounded-md mt-3">
          <Badge className="mr-1">Low Priority</Badge>
          <Badge className="mr-1" variant="secondary">
            Medium Priority
          </Badge>
          <Badge variant="destructive">High Priority</Badge>

          <h2 className="font-semibold mt-3">First Title</h2>
          <p className="text-sm mt-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis illum
            ab neque animi ipsam officia.
          </p>
        </div>

        <div className="mt-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full py-6">Add Task</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add Task</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid items-center gap-2">
                  <Label htmlFor="name" className="">
                    Title
                  </Label>
                  <Input
                    id="name"
                    placeholder="write task title"
                    className=""
                  />
                </div>
                <div className="grid items-center gap-2">
                  <Label htmlFor="username" className="">
                    Description
                  </Label>
                  <Textarea placeholder="write task description"></Textarea>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="col-span-1 bg-[#EEF2F5] rounded-md p-4 border-[#e3eaf5] border-[1.5px]">
        <h4 className="font-semibold text-[#31373e]">In Progress</h4>
      </div>

      <div className="col-span-1 bg-[#EEF2F5] rounded-md p-4 border-[#e3eaf5] border-[1.5px]">
        <h4 className="font-semibold text-[#31373e]">Done</h4>
      </div>
    </div>
  );
};

export default page;
