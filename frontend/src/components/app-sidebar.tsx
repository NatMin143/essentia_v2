import { House, User, Computer } from "lucide-react";
import essentiaLogo from "/yin-yang.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export function AppSideBar() {
  const [isActive, setIsActive] = useState<string>("Home");

  const handleClick = (menuName: string) => {
    setIsActive(menuName);
  };

  interface MenuItem {
    label: string;
    icon: React.ComponentType<{ color?: string }>; 
    to: string; // Navigation path
  }

  interface MenuGroup {
    title: string;
    item: MenuItem[];
  }

  const menuItems: MenuGroup[] = [
    {
      title: "Dashboard",
      item: [
        {
          label: "Home",
          icon: House,
          to: "/",
        },
        {
          label: "Profiles",
          icon: User,
          to: "/profiles",
        },
        {
          label: "Spaces",
          icon: Computer,
          to: "/spaces",
        },
      ],
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader onClick={() => setIsActive("Home")}>
        <Link to="/" className="flex items-cente gap-1">
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg  text-sidebar-primary-foreground" >
            <img src={essentiaLogo} alt="Essentia Logo" className="w-6" />
          </div>
          <span className="text-xl font-bold">Essentia</span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        {menuItems.map((menuItem) => (
          <SidebarGroup key={menuItem.title}>
            <SidebarGroupLabel>{menuItem.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              {menuItem.item.map((item) => (
                <SidebarMenu key={item.label}>
                  <SidebarMenuItem className={`${isActive === item.label ? "border-l-3 border-[#0084ff]": ""} `}>
                    <SidebarMenuButton asChild tooltip={item.label} onClick={() => handleClick(item.label)}>
                      <Link to={item.to}>
                        <item.icon color="#0084ff" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
