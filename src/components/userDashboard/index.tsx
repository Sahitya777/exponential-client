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
    <div className="min-h-screen bg-gray-950 text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 pt-6 mt-15">
        <nav className="mt-12">
          <ul>
            <li className="text-green-400 pl-4 py-2 flex items-center gap-2 bg-gray-600 cursor-pointer hover:bg-gray-600">
              <div className="bg-green-400 w-3 h-3 rounded-full"></div>
              Dashboard
            </li>
            <li className="text-gray-400 pl-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-600">
              <div className="bg-gray-400 w-3 h-3 rounded-full"></div>
              Integration
            </li>
            <li className="text-gray-400 pl-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-gray-600">
              <div className="bg-gray-400 w-3 h-3 rounded-full"></div>
              Settings
            </li>
          </ul>
        </nav>
      </div>
      {/* Main Dashboard */}
      <div className="ml-6 flex gap-4 mt-20">
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
