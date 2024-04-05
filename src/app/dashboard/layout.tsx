import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DashboardHeader from "../../components/dashboardHeader";
import { IoIosAdd, IoMdNotificationsOutline } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { MdDashboard } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaListCheck } from "react-icons/fa6";
import { IoCalendarNumber, IoSettingsSharp } from "react-icons/io5";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <header className="flex items-center bg-[#FBFBFD]">
        <div className=" w-[95px] flex justify-center items-center">
          <DashboardHeader />
        </div>

        <div className="p-[22px] flex gap-4 w-full justify-end border-b-[1.5px] border-[#EAEEF4]">
          <Button className="h-12 rounded-full">
            Add Members <IoIosAdd className="text-[23px] ml-1" />
          </Button>

          <div className="w-12 h-12 rounded-full border-[#EAEEF4] border-[1.5px] flex items-center justify-center bg-white">
            <IoMdNotificationsOutline className="text-2xl text-[#7E92A2]" />
          </div>

          <Avatar className="w-12 h-12 ">
            <AvatarImage src="https://i.postimg.cc/XYQrcrrr/mahsinmia1.jpg" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main className="flex bg-[#F6FAFD]">
        <aside className="w-24 flex gap-4 pt-4 items-center flex-col bg-[#FBFBFD] min-h-[calc(100vh-93.5px)] border-r-[1.5px] border-[#EAEEF4]">
          <div className="w-12 h-12 rounded-full border-[#EAEEF4] border-[1.5px] flex items-center justify-center bg-white hover:bg-[#514EF3]">
            <MdDashboard className="text-2xl text-[#7E92A2] hover:text-white" />
          </div>

          <div className="w-12 h-12 rounded-full border-[#EAEEF4] border-[1.5px] flex items-center justify-center bg-white hover:bg-[#514EF3]">
            <BsFillPeopleFill className="text-2xl text-[#7E92A2] hover:text-white" />
          </div>

          <div className="w-12 h-12 rounded-full border-[#EAEEF4] border-[1.5px] flex items-center justify-center bg-white hover:bg-[#514EF3]">
            <FaListCheck className="text-2xl text-[#7E92A2] hover:text-white" />
          </div>

          <div className="w-12 h-12 rounded-full border-[#EAEEF4] border-[1.5px] flex items-center justify-center bg-white hover:bg-[#514EF3]">
            <IoCalendarNumber className="text-2xl text-[#7E92A2] hover:text-white" />
          </div>
          
          <div className="w-12 h-12 rounded-full border-[#EAEEF4] border-[1.5px] flex items-center justify-center bg-white hover:bg-[#514EF3]">
            <IoSettingsSharp className="text-2xl text-[#7E92A2] hover:text-white" />
          </div>
        </aside>
        <div className="w-full">{children}</div>
      </main>
    </section>
  );
}
