import React, { useState } from "react";
import DashboardCard from "./dashboardCard";
import { campaignDetail } from "@/interfaces/interface";

const UserDashboard = () => {
  const [usercampaignDetails, setusercampaignDetails] = useState<campaignDetail[]>([
    {
      title: "Campaign 1",
      saved: 50000,
      calls: 40,
      details: [
        { label: "Messaged", value: 4012 },
        { label: "Contact Rate", value: "98%" },
        { label: "Replied", value: "761" },
        { label: "Replied", value: "21%" },
        { label: "Booked", value: 51 },
        { label: "Booked", value: "16%" },
        { label: "Sales", value: 5 },
        { label: "Sales", value: "20.2%" },
      ],
    },
    {
      title: "Campaign 2",
      saved: 50000,
      calls: 40,
      details: [
        { label: "Messaged", value: 4012 },
        { label: "Contact Rate", value: "98%" },
        { label: "Replied", value: "761" },
        { label: "Replied", value: "21%" },
        { label: "Booked", value: 51 },
        { label: "Booked", value: "16%" },
        { label: "Sales", value: 5 },
        { label: "Sales", value: "20.2%" },
      ],
    },
  ]);
  const [sidebarOptionSelected, setsidebarOptionSelected] = useState<number>(0) //0 for dashboard 1 for integration and 2 for settings
  return (
    <div className="min-h-screen bg-[#141318] text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#141318] border-r-2 border-[#272231] pt-6 mt-15">
        <nav className="mt-12">
          <ul className="uppercase">
            <li className="text-green-400 pl-4 py-2 flex items-center gap-2 bg-[#201b26] cursor-pointer hover:bg-[#201b26]">
              <div className="bg-[#60f7aa] w-5 h-5 rounded-full"></div>
              Dashboard
            </li>
            <li className="text-[#646e68]  pl-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-[#201b26]">
              <div className="bg-[#646e68] w-5 h-5 rounded-full"></div>
              Integration
            </li>
            <li className="text-[#646e68] pl-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-[#201b26]">
              <div className="bg-[#646e68] w-5 h-5 rounded-full"></div>
              Settings
            </li>
          </ul>
        </nav>
      </div>
      {/* Main Dashboard */}
      <div className="ml-6 flex gap-4 mt-20 max-w-3/5 overflow-auto">
        {usercampaignDetails.map((userCampaignDetail: campaignDetail, index: number) => (
          <DashboardCard
            title={userCampaignDetail.title}
            saved={userCampaignDetail.saved}
            calls={userCampaignDetail.calls}
            details={userCampaignDetail.details}
          />
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
