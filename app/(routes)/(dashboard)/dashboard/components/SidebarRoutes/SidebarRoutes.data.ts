import { Calendar, Car, Heart, SquareGanttChart } from "lucide-react";

export const dataGeneralSidebar = [
  {
    icon: Car,
    label: "Autos",
    href: "/dashboard",
  },
  {
    icon: Calendar,
    label: "Autos reservados",
    href: "/reserves",
  },
  {
    icon: Heart,
    label: "Autos favoritos",
    href: "/loved-cars",
  },
];

export const dataAdminSidebar = [
  {
    icon: SquareGanttChart,
    label: "Autos manager",
    href: "/dashboard/admin/cars-manager",
  },
  {
    icon: Calendar,
    label: "Reservas manager",
    href: "/dashboard/admin/reserves-admin",
  },
];
