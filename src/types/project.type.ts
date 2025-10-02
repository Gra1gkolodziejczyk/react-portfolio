import type { Tech } from "@/types/tech.type.ts";

export type Project = {
  id: string;
  title?: string;
  role?: string;
  cover?: string;
  description?: string;
  techs: Tech[];
  tasks?: string[];
  siteUrl?: string;
  start?: string;
  end?: string;
};
