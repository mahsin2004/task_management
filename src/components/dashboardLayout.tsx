"use client"
import { ReactNode } from "react";
import { MdDashboard } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaListCheck } from "react-icons/fa6";
import { IoCalendarNumber, IoSettingsSharp } from "react-icons/io5";
import RightNavbar from "@/components/rightNavbar";
import DashboardHeader from "./dashboardHeader";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

interface DashboardLayoutCProps {
  children: ReactNode;
}

const DashboardLayoutC: React.FC<DashboardLayoutCProps> = ({children}) => {
    const { status } = useSession({
        required: true,
        onUnauthenticated() {
          // The user is not authenticated, handle it here.
          redirect("/")
        },
      })
    
      if (status === "loading") {
        return "Loading or not authenticated..."
      }
    
    return (
        <div>
            <header className="flex items-center bg-[#FBFBFD]">
        <div className=" w-[95px] flex justify-center items-center">
          <DashboardHeader />
        </div>
        <RightNavbar />
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
        </div>
    );
};

export default DashboardLayoutC;
