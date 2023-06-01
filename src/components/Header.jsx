import { Logo } from "./Logo";
import {
  FiPlus,
  FiChevronDown,
  FiCreditCard,
  FiHelpCircle,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { HiOutlineGlobeAsiaAustralia } from "react-icons/hi2";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Drawer from "./Drawer";
import { HiMenuAlt1 } from "react-icons/hi";
import MblUserMenu from "./MblUserMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-[65px]">
      <header className="flex items-center py-4 px-4 min-[1000px]:px-0 bg-white border-b-[1px] border-b-[#D0D5DD] min-[1000px]:bg-transparent min-[1000px]:border-b-0 max-[1000px]:header">
        <Logo />
        <ul className="flex gap-1 ml-4 max-[1000px]:hidden">
          {NAV_ITEMS.map((item, index) => (
            <NavItem key={index} {...item} isActive={item.href === "/"} />
          ))}
        </ul>
        <div className="ml-auto flex items-center max-[1000px]:hidden">
          <button className="button ">
            <FiPlus className="-ml-1" size={20} />
            Add new
          </button>
          <button className="button ml-4">
            <HiOutlineGlobeAsiaAustralia className="-ml-1" size={20} />
            Button
          </button>
          <UserMenu
            image={
              "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            }
            name={"Olivia Rhye"}
            email={"olivia@untitledui.com"}
          />
        </div>
        <div className="ml-auto flex items-center min-[1000px]:hidden">
          <button className="button p-1.5">
            <FiPlus size={18} />
            <span className="sr-only"> Add new</span>
          </button>
          <button className="button ml-2 p-1.5 ">
            <HiOutlineGlobeAsiaAustralia size={18} />
            <span className="sr-only">Button</span>
          </button>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className="ml-3 transition active:scale-[0.95]"
          >
            <HiMenuAlt1 size={32} color="#667085" />
          </button>
          <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="flex flex-col h-full p-4">
              <Logo />
              <ul className="flex-col flex gap-1 w-full mt-5">
                {NAV_ITEMS.map((item, index) => (
                  <NavItem key={index} {...item} isActive={item.href === "/"} />
                ))}
              </ul>

              <MblUserMenu />
            </div>
          </Drawer>
        </div>
      </header>
    </div>
  );
}

function UserMenu({ name, email, image }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className={"ml-8 flex items-center cursor-pointer"}>
        <img
          src={image}
          alt="user"
          className="object-cover rounded-full h-10 w-10 mr-2"
        />
        <FiChevronDown
          strokeWidth={2.5}
          className="text-[#344054] box-content"
          size={20}
        />
      </Menu.Button>{" "}
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={
            "absolute z-[1] right-0 top-12 origin-top-right  rounded-lg bg-white focus:outline-none py-1 flex flex-col gap-1 min-w-[240px]"
          }
          style={{
            boxShadow:
              "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
          }}
        >
          <Menu.Item>
            {({ active }) => (
              <button
                className={`text-start items-center p-2 mx-1 text-[#344054] rounded-md ${
                  active ? "bg-gray-100" : ""
                }`}
              >
                <p className="text-sm font-semibold text-[#344054]">{name}</p>
                <p className="text-sm text-[#475467]">{email}</p>
              </button>
            )}
          </Menu.Item>
          <span className="h-[1px] bg-[#EAECF0]" />
          {MENU_ITEMS.map((item, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <button
                  className={`flex items-center p-2 mx-1 text-[#344054] rounded-md ${
                    active ? "bg-gray-100" : ""
                  }`}
                >
                  <item.icon strokeWidth={2} size={16} className="mr-2" />
                  <span className="text-sm font-medium">{item.title}</span>
                </button>
              )}
            </Menu.Item>
          ))}
          <span className="h-[1px] w-full left-0 bg-[#EAECF0]" />
          <Menu.Item>
            {({ active }) => (
              <button
                className={`flex items-center p-2 mx-1 text-[#344054] rounded-md ${
                  active ? "bg-gray-100" : ""
                }`}
              >
                <FiLogOut strokeWidth={2} size={16} className="mr-2" />
                <span className="text-sm font-medium">Log Out</span>
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function NavItem({ href, title, isActive }) {
  return (
    <a
      href={href}
      className={`font-semibold ${
        isActive ? "text-[#111827]" : "text-[#344054]"
      }`}
    >
      {" "}
      <li
        className={`px-3 py-2 rounded-md hover:bg-[#F3F4F5] ${
          isActive ? "bg-[#F3F4F5]" : ""
        }`}
      >
        {title}
      </li>
    </a>
  );
}

const MENU_ITEMS = [
  {
    icon: FiSettings,
    title: "Settings",
  },

  {
    icon: FiCreditCard,
    title: "Subscription",
  },
  {
    icon: FiHelpCircle,
    title: "Help Center",
  },
];

const NAV_ITEMS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Page 1",
    href: "/#",
  },
  {
    title: "Page 2",
    href: "/#",
  },
  {
    title: "Page 3",
    href: "/#",
  },
  {
    title: "Page 4",
    href: "/#",
  },
  {
    title: "Analytics",
    href: "/#",
  },
];
