import { HiOutlineTruck } from "react-icons/hi";
import { MdOutlineMailOutline, MdOutlineHelpOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";


const MobileSidebar = ({ isOpen, onClose, data }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-72 bg-[#fe4536] text-white z-30 transform shadow-xl overflow-x-auto ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
      style={{ backdropFilter: 'blur(10px)' }}    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          {/* Close Button */}
          <button onClick={onClose} className="text-white focus:outline-none hover:opacity-75 transition-opacity">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg" >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <ul className="mt-4 flex-grow px-4 overflow-y-auto">
          {data.map((item) => (
            <li key={item.id} className="mb-4">
              {item.type === "MenuItem" && (
                <Link href={item.url} className="block py-2 px-3 rounded-md hover:bg-[#3d1152] transition-colors">
                  {item.label}
                </Link>
              )}
              {item.type === "MenuList" && (
                <div>
                  <span className="block font-semibold mb-1">{item.label}</span>
                  <ul className="pl-4 mt-2">
                    {item.children.map((child) => (
                      <li key={child.id} className="mb-2">
                        <Link href={child.url} className="block py-2 px-3 rounded-md hover:bg-[#3d1152] transition-colors">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Footer - Additional Elements */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex flex-col gap-y-4">
            {/* Delivery Info */}
            <div className="flex items-center hover:opacity-75 transition-opacity">
              <HiOutlineTruck size="20" className="mr-2" />
              <div className="text-sm">Free delivery over $300</div>
            </div>

            {/* Email */}
            <div className="flex items-center hover:opacity-75 transition-opacity">
              <MdOutlineMailOutline size="20" className="mr-2" />
              <div className="text-sm">office@email.com</div>
            </div>

            {/* Location */}
            <div className="flex items-center cursor-pointer hover:opacity-75 transition-opacity">
              <IoLocationOutline size="24" className="mr-2" />
              <div className="text-sm font-semibold">India</div>
            </div>

            {/* Login */}
            <div className="flex items-center cursor-pointer hover:opacity-75 transition-opacity">
              <AiOutlineUser size="24" className="mr-2" />
              <Link href="/login" className="hover:underline">
                <div className="text-sm font-semibold">Login</div>
              </Link>
            </div>

            {/* Help */}
            <div className="flex items-center cursor-pointer hover:opacity-75 transition-opacity">
              <MdOutlineHelpOutline size="24" className="mr-2" />
              <div className="text-sm font-semibold">Help</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
