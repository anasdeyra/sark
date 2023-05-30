import React, { Fragment } from "react";
import { Badge } from "../App";

export default function Referrals() {
  return (
    <div className="card basis-[480px] grow overflow-hidden">
      <div className="px-6 py-5">
        <h2 className="font-semibold">Referrers</h2>
        <h3 className="text-[#475467] text-sm">
          Track how your rating compares to your industry average.
        </h3>
      </div>
      <div className="grid grid-cols-[minmax(150px,3fr)_minmax(150px,1fr)_minmax(150px,1fr)] max-sm:overflow-x-scroll">
        <div className="py-3 px-6 text-xs font-medium text-[#475467]">
          Title
        </div>
        <div className="py-3 px-6 text-xs font-medium text-[#475467]">
          Visitors
        </div>
        <div className="py-3 px-6 text-xs font-medium text-[#475467]">
          Page views
        </div>
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <Fragment key={i}>
              <div className="text-sm flex gap-x-2 items-center font-medium text-[#101828] border-t-[1px] border-t-[#EAECF0] py-3 px-6">
                <img
                  src="/fb.webp"
                  alt="fb icon"
                  className="aspect-square w-[18px]"
                />
                <span>Facebook</span>
              </div>
              <div className="border-t-[1px] border-t-[#EAECF0] py-3 px-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-[#101828]">
                    520
                  </span>
                  <Badge
                    badgeColor={"bg-[#ECFDF3]"}
                    color="text-[#12B76A]"
                    percentage={0.52}
                  />
                </div>
              </div>
              <div className="border-t-[1px] border-t-[#EAECF0] py-3 px-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-[#101828]">
                    520
                  </span>
                  <Badge
                    badgeColor={"bg-[#FEF3F2]"}
                    color="text-[#F04438]"
                    percentage={-0.52}
                  />
                </div>
              </div>
            </Fragment>
          ))}
      </div>
    </div>
  );
}
