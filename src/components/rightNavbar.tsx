"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { IoIosAdd, IoMdNotificationsOutline } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MdLogout } from "react-icons/md";

const RightNavbar: FC = () => {
  const { data: session } = useSession();
  return (
    <div className="p-[22px] flex gap-4 w-full justify-end border-b-[1.5px] border-[#EAEEF4]">
      <Button className="h-12 rounded-full">
        Add Members <IoIosAdd className="text-[23px] ml-1" />
      </Button>

      <div className="w-12 h-12 rounded-full border-[#EAEEF4] border-[1.5px] flex items-center justify-center bg-white">
        <IoMdNotificationsOutline className="text-2xl text-[#7E92A2]" />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-full">
          <Avatar className="w-12 h-12 ">
            <AvatarImage src="https://i.postimg.cc/XYQrcrrr/mahsinmia1.jpg" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-5">
          <DropdownMenuLabel>My Profile</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>{session?.user?.email}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {session && (
        <>
          <button
            onClick={() => {
              signOut();
            }}
            className="w-12 h-12 rounded-full border-[#EAEEF4] border-[1.5px] flex items-center justify-center bg-white"
          >
            <MdLogout className="text-2xl text-[#7E92A2]" />
          </button>
        </>
      )}
    </div>
  );
};

export default RightNavbar;
