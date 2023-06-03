import { recentlySeenCookie } from "./project";

export interface GuestUser {
  id: string;
  acceptCookies: boolean;
  recentlySeen: recentlySeenCookie;
}
