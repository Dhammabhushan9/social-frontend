import { PostIcon } from "@/icons/PostIcon";
import { 
    HomeIcon, 
    UserIcon 
  } from "lucide-react";

  
  import { ReactElement } from "react";
  
  export const SideBar = () => {
    return (
      <div className="flex  flex-col min-h-screen w-80 fixed top-0 left-0 bg-white border-2 gap-3 justify-center">
        <div className="my-6 mx-6 flex flex-col gap-3  ">
          <SidebarCard SideIcon={<HomeIcon />} SideText="Home" />
          <SidebarCard SideIcon={<UserIcon/>} SideText="Profile" />
          <SidebarCard SideIcon={<PostIcon/>} SideText="Post" />
        </div>
      </div>
    );
  };
  
  export function SidebarCard({ SideIcon, SideText }: { SideIcon: ReactElement; SideText: string }) {
    return (
      <div className="flex p-3 items-center gap-4 mx-9 hover:shadow-lg shadow-slate-700/60 rounded-2xl hover:bg-slate-100 cursor-pointer">
        {SideIcon}
        <span className="text-gray-800 font-medium">{SideText}</span>
      </div>
    );
  }
  