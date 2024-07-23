import { MdOutlineSpaceDashboard,MdOutlineCalendarMonth } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { IoMdTime,IoIosNotificationsOutline } from "react-icons/io";

export const menu = [
    {icon: <MdOutlineSpaceDashboard/>, link: '/home'},
    {icon: <MdOutlineCalendarMonth/>, link: '/calendar'},
    {icon: <TiWeatherPartlySunny/>, link: '/weather'},

    {icon: <IoMdTime/>, link: ''},
    {icon: <IoIosNotificationsOutline/>, link: ''},
]