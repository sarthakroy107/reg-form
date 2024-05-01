"use client";
import { useState } from "react";
import CollegeAdminPanelSidebar from "./college-admin-sidebar";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
const CollegeAdminPanelLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full flex justify-center">
      <div className={cn(open ? 'w-[15%]' : 'collapse')}>
        <CollegeAdminPanelSidebar />
      </div>
      <div className={cn('w-[85%] flex flex-col justify-center items-center overflow-auto')}>
        <div className={cn('z-10 fixed top-0 bg-white p-3', open ? 'w-[85%]' : 'w-full right-0')}>
         <Menu className="p-0.5 hover:bg-slate-200 rounded-sm cursor-pointer" onClick={() => setOpen(!open)} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default CollegeAdminPanelLayout;
