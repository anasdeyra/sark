import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

import {
  FiArrowDown,
  FiArrowRight,
  FiArrowUp,
  FiCalendar,
} from "react-icons/fi";
import { Fragment, useState } from "react";

import { usePopper } from "react-popper";

const DATA1 = [
  {
    name: "January 2023",
    uv: 1000,
    pv: 2000,
  },
  {
    name: "February 2023",
    uv: 2000,
    pv: 2000,
  },
  {
    name: "March 2023",
    uv: 5000,
    pv: 2000,
  },
  {
    name: "April 2023",
    uv: 4000,
    pv: 2000,
  },
  {
    name: "May 2023",
    uv: 5000,
    pv: 2000,
  },
  {
    name: "June 2023",
    uv: 3000,
    pv: 2000,
  },
  {
    name: "July 2023",
    uv: 5000,
    pv: 2000,
  },
  {
    name: "August 2023",
    uv: 6000,
    pv: 3000,
  },
  {
    name: "September 2023",
    uv: 4000,
    pv: 3000,
  },
  {
    name: "October 2023",
    uv: 2000,
    pv: 5000,
  },
  {
    name: "November 2023",
    uv: 3000,
    pv: 6000,
  },
  {
    name: "December 2023",
    uv: 6000,
    pv: 7000,
  },
];

const DATA2 = [
  {
    name: "January 2023",
    s: 1000,
  },
  {
    name: "February 2023",
    s: 2000,
  },
  {
    name: "March 2023",
    s: 5000,
  },
  {
    name: "April 2023",
    s: 4000,
  },
  {
    name: "May 2023",
    s: 5000,
  },
  {
    name: "June 2023",
    s: 3000,
  },
  {
    name: "July 2023",
    s: 5000,
  },
  {
    name: "August 2023",
    s: 6000,
  },
  {
    name: "September 2023",
    s: 4000,
  },
  {
    name: "October 2023",
    s: 2000,
  },
  {
    name: "November 2023",
    s: 3000,
  },
  {
    name: "December 2023",
    s: 2000,
  },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          boxShadow:
            "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
        }}
        className="border-[#F2F4F7] border-[1px] px-2 py-1 rounded-lg bg-white"
      >
        <p className="text-[#475467] text-xs">{payload[0].payload.name}</p>
        <p className="text-[#111827] font-semibold mt-[2px]">
          {payload[0].value}
        </p>
      </div>
    );
  }

  return null;
};

export default function App() {
  const [referenceElement, setReferenceElement] = useState();
  const [popperElement, setPopperElement] = useState();
  const { styles, attributes } = usePopper(referenceElement, popperElement);
  return (
    <div className="max-w-[1224px] mx-auto max-xl:mx-4">
      <Header />
      <div className="mt-7 flex md:items-end flex-col md:flex-row">
        <div>
          <h2 className="md:text-3xl text-2xl text-[#111928] font-semibold">
            Hello, Bar
          </h2>
          <h3 className="text-[#131622] mt-1">
            Track, manage and forecast your customers and orders.
          </h3>
        </div>
        <Popover className="relative mr-auto md:ml-auto md:mr-0 mt-6 md:mt-0">
          <Popover.Button ref={setReferenceElement} className="button ">
            <FiCalendar size={20} />
            Jan 6, 2022 &ndash; Jan 13, 2022
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel
              ref={setPopperElement}
              style={styles.popper}
              {...attributes.popper}
              className={"absolute w-max mt-2"}
            >
              <Calendar
                handleChange={({ startDate, endDate }) => {
                  console.log({ startDate, endDate });
                }}
              />
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
      <div className=" grid mt-7">
        <div className="max-sm:flex-col flex gap-6 flex-wrap">
          <OnlineCard />
          <SubsCard />
          <PrCard />
        </div>
        <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-6 mt-6">
          <ChartCard
            data={DATA1}
            heading={"Analytics overview"}
            subHeading={"Track how your rating compares to your."}
            labels={[
              { key: "uv", name: "Visitors" },
              { key: "pv", name: "Page views" },
            ]}
          />
          <ChartCard
            data={DATA2}
            labels={[{ key: "s", name: "Subscribers" }]}
            heading={"Subscribers overview"}
            subHeading="Track how your rating compares to your industry average."
          />
        </div>
      </div>
      <div className="flex mt-7 flex-wrap gap-6">
        <Table
          heading={"Title"}
          subHeading={
            "Track how your rating compares to your industry average."
          }
        />
        <Referrals />
      </div>
      <Footer />
    </div>
  );
}

function Index({ label, value, percentage, isActive, onClick }) {
  const color = percentage < 0 ? "text-[#F04438]" : "text-[#12B76A]";
  const badgeColor = percentage < 0 ? "bg-[#FEF3F2]" : "bg-[#ECFDF3]";

  return (
    <div
      onClick={onClick}
      className={`${
        isActive ? "bg-[#F3F4F5]" : "bg-white hover:bg-slate-50"
      } cursor-pointer rounded-md px-2 py-1`}
    >
      <span className="text-xs text-[#101828] font-medium">{label}</span>
      <div className="flex gap-1 items-center">
        <span className="font-semibold text-[rgb(16,24,40)]">
          {value?.toLocaleString()}{" "}
        </span>
        <Badge percentage={percentage} color={color} badgeColor={badgeColor} />
      </div>
    </div>
  );
}

export function Badge({ percentage, color, badgeColor }) {
  let stat = Math.abs(percentage * 100).toFixed(0);
  if (stat === "NaN") {
    stat = "N/A";
  }

  return stat === "N/A" ? (
    <span className="text-sm font-medium text-[#101828]">{stat}</span>
  ) : (
    <div
      className={`flex items-center gap-1 text-sm font-medium rounded-xl pl-2 pr-[10px] py-[2px] ${badgeColor} ${color}`}
    >
      {percentage < 0 ? <FiArrowDown /> : <FiArrowUp />}
      <span>{stat}%</span>
    </div>
  );
}

function ChartCard({ data, heading, subHeading, labels }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const pr =
    data[data.length - 1][labels[activeIndex].key] /
      data[data.length - 2][labels[activeIndex].key] -
    1;

  const color = pr < 0 ? "#F04438" : "#12B76A";

  return (
    <div
      style={{ boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.05)" }}
      className=" rounded-xl flex flex-col  border-[#EAECF0] bg-white border-[1px] "
    >
      <div className="mt-5 mx-6  mb-10">
        <div className="flex flex-col ">
          <span className="font-semibold text-[#101828]">{heading}</span>
          <span className="text-sm text-[#475467] ">{subHeading}</span>
        </div>

        <div className="flex items-center">
          <div className="flex gap-4 mt-5">
            {labels.map((label, index) => {
              const percentage =
                data[data.length - 1][label.key] /
                  data[data.length - 2][label.key] -
                1;
              return (
                <Index
                  key={index}
                  label={label.name}
                  value={data[data.length - 1][label.key]}
                  percentage={percentage}
                  isActive={activeIndex === index && labels.length > 1}
                  onClick={() => setActiveIndex(index)}
                />
              );
            })}
          </div>
        </div>
      </div>
      <ResponsiveContainer width={"100%"} height={125}>
        <AreaChart
          data={data}
          margin={{
            bottom: 0,
            left: 0,
            right: 0,
            top: 8,
          }}
        >
          <defs>
            <linearGradient
              id={labels[activeIndex].key}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor={color} stopOpacity={0.18} />
              <stop offset="100%" stopColor={color} stopOpacity={0.0} />
            </linearGradient>
          </defs>
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey={labels[activeIndex].key}
            stroke={color}
            strokeWidth={2}
            fillOpacity={1}
            fill={`url(#${labels[activeIndex].key})`}
            activeDot={{
              r: 5,
              fill: "#fff",
              stroke: color,
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

import { IoChatbubblesOutline } from "react-icons/io5";
import { TbUserCircle } from "react-icons/tb";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Table from "./components/Table";
import Referrals from "./components/Referrals";
import { Popover, Transition } from "@headlessui/react";
import Calendar from "./components/Calendar";

function PrCard() {
  return (
    <div className="max-sm:order-1 card flex overflow-hidden flex-grow-[1]">
      <div className="py-5 px-6 flex flex-col flex-grow">
        <p className="font-semibold text-sm">
          Get unlimited, upgrade to premium
        </p>
        <div className="mt-3 flex flex-col gap-2 mb-2">
          <div className="flex  items-center gap-[6px]">
            <div className="rounded-full p-[5px] bg-[#F4EBFF] text-[#7F56D9]">
              <IoChatbubblesOutline size={14} />
            </div>
            <p className="text-xs font-medium">text</p>
          </div>
          <div className="flex  items-center gap-[6px]">
            <div className="rounded-full p-[5px] bg-[#F4EBFF] text-[#7F56D9]">
              <IoChatbubblesOutline size={14} />
            </div>
            <p className="text-xs font-medium">text</p>
          </div>
        </div>
        <div className="self-end flex items-center gap-1 mt-auto text-[#2B59FF] text-xs font-medium">
          <a href="#">Upgrade now</a>
          <FiArrowRight size={14} />
        </div>
      </div>
      <img src="/pr.png" alt="premium" className="ml-auto object-cover" />
    </div>
  );
}

function OnlineCard({ count = 2000 }) {
  return (
    <div className="max-sm:order-2 card flex-grow px-5 py-6 flex flex-col ">
      <TbUserCircle
        style={{
          background: "#D1FADF",
          borderRadius: "50%",
          border: "8px solid #ECFDF3",
          padding: "5px",
          boxSizing: "content-box",
          marginBottom: "10px",
        }}
        size={16}
        color="#039855"
      />
      <div className="mt-auto">
        <p className="text-sm font-semibold text-[#101828]">Online Now</p>
        <p className="font-semibold text-4xl text-[#101828]">
          {count.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

function SubsCard() {
  return (
    <div className="max-sm:order-3 card flex-grow-[2] px-5 py-6 flex flex-col">
      <div className="flex flex-col mb-3">
        <p className="text-sm font-semibold">New Subscribers</p>
        <p className="text-sm text-[#4E575C] mt-1">
          Latest people who subscribed you
        </p>
      </div>
      <div className="mt-auto flex gap-2">
        <Avatar
          name="John Doe"
          image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <Avatar
          name="Petter Doe"
          image="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
        <Avatar
          name="Son Doe"
          image="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=600"
        />
      </div>
    </div>
  );
}

function Avatar({ name, image }) {
  return (
    <img
      src={image}
      alt={name}
      className="rounded-full w-[45px] h-[45px] object-cover"
    />
  );
}
