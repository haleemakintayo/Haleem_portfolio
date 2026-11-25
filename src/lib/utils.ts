import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { ProjectScreenshot } from "../types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function normalizeScreenshots(
  screenshots?: (string | ProjectScreenshot)[],
  fallbackImage?: string,
  projectTitle = "Project"
): Required<ProjectScreenshot>[] {
  const list =
    screenshots && screenshots.length > 0
      ? screenshots
      : fallbackImage
        ? [fallbackImage]
        : [];

  return list.map((item, idx) =>
    typeof item === "string"
      ? {
          src: item,
          caption: "",
          alt: `${projectTitle} screenshot ${idx + 1}`,
        }
      : {
          src: item.src,
          caption: item.caption ?? "",
          alt: item.alt ?? `${projectTitle} screenshot ${idx + 1}`,
        }
  );
}

