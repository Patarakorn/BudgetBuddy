import { Navigation } from "./navigation";
import { HeaderLogo } from "./headerLogo";
import { UserButton, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { WelcomeMessage } from "./welcomeMessage";
import { Filters } from "./Filters";

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-emerald-700 to-emerald-400 px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <ClerkLoaded>
            <UserButton />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="size-8 animate-spin text-slate-400" />
          </ClerkLoading>
        </div>
        <WelcomeMessage />
        <Filters />
      </div>
    </header>
  );
};
