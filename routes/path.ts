import { ORIGIN } from "config";

export const path = {
  top: () => `${ORIGIN}`,
  events: (groupId: string) => `${ORIGIN}/groups/${groupId}/events`,
  expences: (groupId: string, eventId: string) =>
    `${ORIGIN}/groups/${groupId}/events/${eventId}/expences`,
  mypages: (userId: string) => `${ORIGIN}/mypages/${userId}`,
};
