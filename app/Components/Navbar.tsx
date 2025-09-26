"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "../context/globalContext";
import SearchDialog from "./SearchDialog/SearchDialog";
import ThemeDropdown from "./ThemeDropdown/ThemeDropdown";

function Navbar() {
  const router = useRouter();
  const { forecast } = useGlobalContext();

  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="left"></div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog />

        <div className="btn-group flex items-center gap-2">
          <Button
            className="book-hotel-btn flex items-center gap-2"
            variant="outline"
            onClick={() => {
              // Get the current city name from forecast data
              const cityName = forecast?.name || "current location";
              // Create a search URL for hotels in the current city
              const searchUrl = `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(cityName)}&checkin=&checkout=&group_adults=1&no_rooms=1&group_children=0`;
              window.open(searchUrl, "_blank");
            }}
          >
            Book Hotel
          </Button>
          <ThemeDropdown />

          {/* <Button
            className="source-code-btn flex items-center gap-2"
            onClick={() => {
              router.push("https//github.com");
            }}
          >
            {github} Source Code
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
