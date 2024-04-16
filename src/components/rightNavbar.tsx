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

      <DropdownMenu >
        <DropdownMenuTrigger className="rounded-full">
          <Avatar className="w-12 h-12 ">
            <AvatarImage src="https://i.postimg.cc/XYQrcrrr/mahsinmia1.jpg" />
            <AvatarFallback>M</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-5">
          <DropdownMenuLabel>{session?.user?.email}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* <DropdownMenuItem>{session?.user?.name}</DropdownMenuItem> */}
        </DropdownMenuContent>
      </DropdownMenu>
      {session && (
            <>
              <li>
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="p-2 px-5 -mt-1 bg-blue-800 rounded-full"
                >
                  Logout
                </button>
              </li>
            </>
          )}
    </div>
  );
};

export default RightNavbar;
