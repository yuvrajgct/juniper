import {
  BookOpen,
  Briefcase,
  Calendar,
  CheckSquare,
  CreditCard,
  Grid,
  Heart,
  Layout,
  List,
  Map,
  ShoppingCart,
  PieChart,
  Sliders,
  Users,
} from "react-feather";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GridViewIcon from "@mui/icons-material/GridView";
import GroupsIcon from "@mui/icons-material/Groups";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SettingsIcon from "@mui/icons-material/Settings";
import PinDropIcon from "@mui/icons-material/PinDrop";
import LanguageIcon from "@mui/icons-material/Language";
import NearMeIcon from "@mui/icons-material/NearMe";

const pagesSection = [
  {
    href: "/dashboard",
    icon: BusinessCenterIcon,
    title: "Associates",
    children: [
      {
        href: "/dashboard/default",
        title: "Dashboard",
      },
      {
        href: "/dashboard/analytics",
        title: "List",
      },
    ],
  },
  {
    href: "/pages",
    icon: GroupsIcon,
    title: "Client",
  },
  {
    href: "",
    icon: GroupsIcon,
    title: "Vendor",
    children: [
      {
        href: "",
        title: "All Vendor",
      },
      {
        href: "",
        title: "Payments",
      },
    ],
  },

  {
    href: "",
    icon: CurrencyRupeeIcon,
    title: "invoice",
  },
];

const elementsSection = [
  {
    href: "/components",
    icon: GroupsIcon,
    title: "Users and Access",
    children: [
      {
        href: "/components/alerts",
        title: "Users",
      },
      {
        href: "/components/accordion",
        title: "User Roles",
      },
    ],
  },
  {
    href: "/charts",
    icon: ApartmentIcon,
    title: "Organisation",
  },
  {
    href: "/forms",
    icon: GridViewIcon,
    title: "Department",
  },
  {
    href: "/tables",
    icon: GridViewIcon,
    title: "Designation",
  },
  {
    href: "/icons",
    icon: GridViewIcon,
    title: "Document-Type",
  },
  {
    href: "/maps",
    icon: CurrencyRupeeIcon,
    title: "Payroll Setup",
  },
  {
    href: "/icons",
    icon: CurrencyRupeeIcon,
    title: "Invoice",
    children: [
      {
        href: "",
        title: "Tax Rates",
      },
      {
        href: "",
        title: "Unit Type",
      },
    ],
  },
  {
    href: "/icons",
    icon: SettingsIcon,
    title: "Common Settings",
    children: [
      {
        href: "/icons",
        icon: LanguageIcon,
        title: "countries",
      },
      {
        href: "",
        icon: PinDropIcon,
        title: "States",
      },
      {
        href: "",
        icon: NearMeIcon,
        title: "Cities",
      },
    ],
  },
];

const navItems = [
  {
    title: "",
    pages: pagesSection,
  },
  {
    title: "SETTINGS",
    pages: elementsSection,
  },
];

export default navItems;
