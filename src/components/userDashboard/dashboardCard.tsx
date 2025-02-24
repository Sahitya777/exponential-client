import formatNumberEs from "@/functions/esnumberFormatter";
import { individualDetail } from "@/interfaces/interface";

const DashboardCard = ({
  title,
  saved,
  calls,
  details
}: {title:string,saved:number,calls:number,details:individualDetail[]}) => {
  return (
    <div className="bg-transparent border border-[#373346] p-4 rounded-sm shadow-lg w-80 h-4/5 min-h-fit">
      <div className="flex gap-2 items-center">
      <div className="bg-[#60f7aa] w-5 h-5 rounded-full">
      </div>
        <h2 className="text-[#8b8791] text-lg font-semibold">{title}</h2>
      </div>
      <div className="mt-1 flex p-1 pb-8 gap-16 bg-[#201b26]">
        <div>
          <p className="text-[#45e77f] text-2xl font-bold">${formatNumberEs(saved)}</p>
          <p className="text-[#5cc090] text-sm">SAVED</p>
        </div>
        <div>
          <p className="text-[#45e77f] text-2xl font-bold">{formatNumberEs(calls)}</p>
          <p className="text-[#5cc090] text-sm">CALLS</p>
        </div>
      </div>
      <div className="mt-4 text-gray-300 text-sm grid grid-cols-2  bg-[#201b26] pt-1 pb-10">
        {details.map((item:individualDetail, index:number) => (
          <div key={index} className="flex flex-col border border-[#3a3044] p-2">
            <p className="text-white text-2xl font-bold">{typeof(item.value)==="number"?formatNumberEs(item.value):item.value}</p>
            <p className="text-[#959ba0] text-sm uppercase">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DashboardCard;
