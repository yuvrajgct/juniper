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
    // href: "/dashboard",
    // icon: BusinessCenterIcon,
    // title: "Associates",
    // children: [
    //   {
    //     // href: "/invoices",
    //     href: "",
    //     title: "List",
    //   },
    // ],
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
      // {
      //   href: "/dashboard/saas",
      //   title: "SaaS",
      // },
    ],
  },
  {
    href: "/pages",
    icon: GroupsIcon,
    title: "Client",
    // children: [
    //   {
    //     href: "/pages/profile",
    //     title: "Profile",
    //   },
    //   {
    //     href: "/pages/settings",
    //     title: "Settings",
    //   },
    //   {
    //     href: "/pages/pricing",
    //     title: "Pricing",
    //   },
    //   {
    //     href: "/pages/chat",
    //     title: "Chat",
    //   },
    //   {
    //     href: "/pages/blank",
    //     title: "Blank Page",
    //   },
    // ],
  },
  // {
  //   href: "/projects",
  //   icon: Briefcase,
  //   title: "Projects",
  //   badge: "8",
  // },
  // {
  //   href: "/orders",
  //   icon: ShoppingCart,
  //   title: "Orders",
  // },
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
      // {
      //   href: "/components/avatars",
      //   title: "Avatars",
      // },
      // {
      //   href: "/components/badges",
      //   title: "Badges",
      // },
      // {
      //   href: "/components/buttons",
      //   title: "Buttons",
      // },
      // {
      //   href: "/components/cards",
      //   title: "Cards",
      // },
      // {
      //   href: "/components/chips",
      //   title: "Chips",
      // },
      // {
      //   href: "/components/dialogs",
      //   title: "Dialogs",
      // },
      // {
      //   href: "/components/lists",
      //   title: "Lists",
      // },
      // {
      //   href: "/components/menus",
      //   title: "Menus",
      // },
      // {
      //   href: "/components/pagination",
      //   title: "Pagination",
      // },
      // {
      //   href: "/components/progress",
      //   title: "Progress",
      // },
      // {
      //   href: "/components/snackbars",
      //   title: "Snackbars",
      // },
      // {
      //   href: "/components/tooltips",
      //   title: "Tooltips",
      // },
    ],
  },
  {
    href: "/charts",
    icon: ApartmentIcon,
    title: "Organisation",
    // children: [
    //   {
    //     href: "/charts/chartjs",
    //     title: "Chart.js",
    //   },
    //   {
    //     href: "/charts/apexcharts",
    //     title: "ApexCharts",
    //   },
    // ],
  },
  {
    href: "/forms",
    icon: GridViewIcon,
    title: "Department",
  },
  // children: [
  //   {
  //     href: "/forms/pickers",
  //     title: "Pickers",
  //   },
  //   {
  //     href: "/forms/selection-controls",
  //     title: "Selection Controls",
  //   },
  //   {
  //     href: "/forms/selects",
  //     title: "Selects",
  //   },
  //   {
  //     href: "/forms/text-fields",
  //     title: "Text Fields",
  //   },
  //   {
  //     href: "/forms/editors",
  //     title: "Editors",
  //   },
  //   {
  //     href: "/forms/formik",
  //     title: "Formik",
  //   },
  // ],
  // },
  {
    href: "/tables",
    icon: GridViewIcon,
    title: "Designation",
    // children: [
    //   {
    //     href: "/tables/simple-table",
    //     title: "Simple Table",
    //   },
    //   {
    //     href: "/tables/advanced-table",
    //     title: "Advanced Table",
    //   },
    //   {
    //     href: "/tables/data-grid",
    //     title: "Data Grid",
    //   },
    // ],
  },
  {
    href: "/icons",
    icon: GridViewIcon,
    title: "Document-Type",
  },
  // children: [
  //   {
  //     href: "/icons/material-icons",
  //     title: "Material Icons",
  //   },
  //   {
  //     href: "/icons/feather-icons",
  //     title: "Feather Icons",
  //   },
  // ],
  // },
  {
    href: "/maps",
    icon: CurrencyRupeeIcon,
    title: "Payroll Setup",
    // children: [
    //   {
    //     href: "/maps/google-maps",
    //     title: "Google Maps",
    //   },
    //   {
    //     href: "/maps/vector-maps",
    //     title: "Vector Maps",
    //   },
    // ],
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

// const docsSection = [
//   {
//     href: "/documentation/welcome",
//     icon: BookOpen,
//     title: "Documentation",
//   },
//   {
//     href: "/changelog",
//     icon: List,
//     title: "Changelog",
//     badge: "v4.1.0",
//   },
// ];

const navItems = [
  {
    title: "",
    pages: pagesSection,
  },
  {
    title: "SETTINGS",
    pages: elementsSection,
  },
  // {
  //   title: "Mira Pro",
  //   pages: docsSection,
  // },
];

export default navItems;
