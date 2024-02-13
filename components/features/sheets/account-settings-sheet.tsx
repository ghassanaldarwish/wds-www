"use client";

import SheetRoot from "@/components/base/sheet";
import { Icons } from "@/components/ui/icons";
import { Calculator, Calendar, Settings, Smile, User } from "lucide-react";
import { signOut } from "next-auth/react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import Link from "next/link";
import useUser from "@/hooks/use-user";
const AccountSettingsSheet: any = ({ className, children }: any) => {
  const userQuery: any = useUser();
  console.log("userQuery", userQuery.data);
  return (
    <SheetRoot>
      <SheetRoot.Trigger>
        <Icons.gitHub className="w-8 h-8" />
      </SheetRoot.Trigger>

      <SheetRoot.Content>
        <Command className=" bg-transparent">
          <SheetRoot.Header className="px-3">
            <SheetRoot.Title>Sheet</SheetRoot.Title>
            <SheetRoot.Description>
              Make changes to your profile here. Click save when youre done.
            </SheetRoot.Description>
          </SheetRoot.Header>
          <CommandList>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </CommandItem>
              <CommandItem>
                <Icons.org className="mr-2 h-4 w-4" />
                <Link href={`/workspaces`}>Workspaces</Link>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
          <CommandSeparator />

          <CommandList>
            <CommandGroup heading="Leave">
              <CommandItem>
                <Icons.logOut className="mr-2 h-4 w-4" />
                <span onClick={() => signOut()}>Logout</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </SheetRoot.Content>
    </SheetRoot>
  );
};

export default AccountSettingsSheet;
