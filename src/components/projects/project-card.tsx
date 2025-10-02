import { Card } from "@/components/ui/card";
import type { Project } from "@/types/project.type.ts";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a href={project.siteUrl} target="_blank" rel="noopener noreferrer">
      <Card
        className="cursor-pointer flex h-full flex-col overflow-hidden rounded-3xl ring-1 ring-border/60 bg-card p-0"
        role="button"
        tabIndex={0}
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={project.cover ?? "/covers/fallback.jpg"}
            alt={`${project.title} cover`}
            className="absolute inset-0 block h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          {project.role && (
            <div className="absolute bottom-3 left-3 rounded-xl border border-border bg-background/80 px-2 py-1 text-xs text-foreground shadow-sm">
              {project.role}
            </div>
          )}
        </div>

        <div className="flex grow flex-col px-4 pt-4">
          <h3
            className="text-xl font-bold leading-tight text-foreground min-h-[3.25rem] line-clamp-2"
          >
            {project.title}
          </h3>

          <div className="mt-3 flex min-h-[2rem] flex-wrap items-center gap-3">
            {project.techs.map((t) =>
              t.iconSrc ? (
                <img key={t.name} src={t.iconSrc} alt="" className="h-7 w-7 object-contain" />
              ) : null
            )}
          </div>

          <div className="mt-auto" />
        </div>

        <div className="border-t border-border px-4 py-3">
          <span className="text-xs text-muted-foreground">
            {project.start} - {project.end}
          </span>
        </div>
      </Card>
    </a>
  );
}
