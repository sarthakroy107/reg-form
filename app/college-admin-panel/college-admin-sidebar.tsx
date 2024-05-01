"use client";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { LucideChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";

const CollegeAdminPanelSidebar = () => {
  const [counsellingOpen, setCounsellingOpen] = React.useState<boolean>(false);
  return (
    <div className="min-h-screen w-[15%] bg-[#1a2639] fixed top-0 left-0 flex flex-col items-center py-4 text-white/75">
      <div className="font-semibold text-lg pb-3 flex gap-x-3 items-center">
        <Image src={'https://pbs.twimg.com/profile_images/1622255266850045962/lcEGBqwx_400x400.png'} alt="Logo" height={50} width={50} className="w-10 h-10" />
        <p>CodeLek M.S</p>
      </div>
      <Separator className="bg-white/35"/>
      <div className="w-full px-2">
        <p className="college-sidebar">Generate Merit List</p>
        <Separator className="bg-white/20" />
        <button
          onClick={() => setCounsellingOpen(!counsellingOpen)}
          className="flex justify-between items-center college-sidebar"
        >
          <p>Counselling</p>
          <LucideChevronDown className={cn(counsellingOpen && "rotate-180")} />
        </button>
        {counsellingOpen && (
          <div className="w-full pl-1">
            <Separator className="bg-white/5" />
            <p className="college-sidebar font-normal">Start Counselling</p>
            <p className="college-sidebar font-normal">End Counselling</p>
            <p className="college-sidebar font-normal">Admission</p>
          </div>
        )}
        <Separator className="bg-white/20" />
        <p className="college-sidebar">Payment details</p>
      </div>
    </div>
  );
};

export default CollegeAdminPanelSidebar;
