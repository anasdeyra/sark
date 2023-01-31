import { FiCreditCard, FiSettings, FiLogOut } from "react-icons/fi";

export default function MblUserMenu() {
  return (
    <div className="mt-auto mb-4">
      <div className="flex flex-col gap-1">
        <button
          className={`flex items-center p-2 mx-1 text-[#344054] rounded-md hover:bg-gray-100 active:bg-gray-100`}
        >
          <FiSettings strokeWidth={2} size={20} className="mr-2" />
          <span className=" font-semibold">Settings</span>
        </button>
        <button
          className={`flex items-center p-2 mx-1 text-[#344054] rounded-md hover:bg-gray-100 active:bg-gray-100`}
        >
          <FiCreditCard strokeWidth={2} size={20} className="mr-2" />
          <span className=" font-semibold">Subscription</span>
        </button>
      </div>
      <div className="flex items-center justify-between border-t-[#EAECF0] border-t-[1px] mt-6 pt-6">
        <div className="shrink flex items-center gap-2 overflow-clip ">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="user"
            className="w-10 h-10 rounded-full"
          />
          <div className="max-w-[150px]">
            <h3 className="text-sm font-semibold text-[#344054]">
              Olivia Rhye
            </h3>
            <p className="text-sm text-gray-400 overflow-hidden text-ellipsis">
              olivia@untitledui.comolivia@untitledui.com
            </p>
          </div>
        </div>{" "}
        <FiLogOut className="p-2 box-content" size={16} color="#667085" />
      </div>
    </div>
  );
}
