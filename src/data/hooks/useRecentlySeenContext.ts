import { useContext } from "react";
import { RecentlySeenContext } from "@contexts/RecentlySeenContext";

export const useRecentlySeenContext = () => useContext(RecentlySeenContext);
