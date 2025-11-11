"use client"
import React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { sideBarOptions } from "@/services/Constants"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function AppSidebar() {

    const path = usePathname();


  return (
    <Sidebar>
      <SidebarHeader className="flex flex-col items-center justify-center mt-5">
        <Image src={'/logo.png'} alt="Logo" width={150} height={75} className="w-[150px]" />
        <Button className="w-full mt-5">
          <Plus /> Create New Interview
        </Button>
      </SidebarHeader>
        <SidebarGroup>
          <SidebarContent>
          <SidebarMenu>
            {sideBarOptions.map((option, index) => (
              <SidebarMenuItem key={index} className= "p-1">
                <SidebarMenuButton asChild className={`p-5 ${path==option.path&&'bg-blue-50'}`}>
                    <Link href={option.path}>
                        <option.icon className={`${path==option.path&&'text-primary'}`} />
                        <span className={`font-medium text-[16px] ${path==option.path&&'text-primary'}`}>{option.name}</span>
                    </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
      </SidebarContent>
        </SidebarGroup>
      <SidebarFooter />
    </Sidebar>
  )
}