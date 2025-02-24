import formatNumberEs from "@/functions/esnumberFormatter";
import { individualDetail } from "@/interfaces/interface";

const DashboardCard = ({
  title,
  saved,
  calls,
  details
}: any) => {
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg w-80 h-4/5 min-h-fit">
      <div className="flex gap-2 items-center border-b border-gray-700 pb-4">
      <div className="bg-green-400 w-3 h-3 rounded-full">
      </div>
        <h2 className="text-green-400 text-lg font-semibold">{title}</h2>
      </div>
      <div className="mt-4 flex gap-16">
        <div>
          <p className="text-green-400 text-2xl font-bold">${formatNumberEs(saved)}</p>
          <p className="text-green-400 text-sm">SAVED</p>
        </div>
        <div>
          <p className="text-green-400 text-2xl font-bold">{formatNumberEs(calls)}</p>
          <p className="text-green-400 text-sm">CALLS</p>
        </div>
      </div>
      <div className="mt-4 text-gray-300 text-sm grid grid-cols-2 gap-6">
        {details.map((item:individualDetail, index:number) => (
          <div key={index} className="flex flex-col">
            <p className="text-white text-2xl font-bold">{item.value}</p>
            <p className="text-gray-300 text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DashboardCard;
