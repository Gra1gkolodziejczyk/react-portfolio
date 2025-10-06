import { GraduationCap, Calendar, MapPin } from "lucide-react";
import type { EducationType } from "@/types/education.type.ts";

interface EducationCardProps {
  education: EducationType;
  index: number;
}

function EducationCard({ education, index }: EducationCardProps) {
  const isLeft = index % 2 === 0;

  return (
    <div>
      <div
        aria-hidden
        className="absolute left-[14px] top-6 size-2 rounded-full bg-primary shadow-md shadow-primary/30 ring-4 ring-primary/20 dark:ring-primary/25 sm:left-1/2 sm:-translate-x-1"
      />

      <div
        className={[
          "relative grid gap-3 rounded-2xl border border-white/60 bg-white/70 p-5 shadow-lg shadow-slate-900/5 backdrop-blur-md transition-colors dark:border-white/10 dark:bg-slate-900/40",
          "sm:max-w-[44%]",
          isLeft ? "sm:mr-auto sm:pl-6 sm:pr-5" : "sm:ml-auto sm:pl-5 sm:pr-6",
        ].join(" ")}
      >
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {education.title}
          </h3>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
            <Calendar className="size-3" />
            {education.period}
          </span>
        </div>

        <div className="flex flex-col items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
          <div className="inline-flex items-center gap-2 font-medium">
            <GraduationCap className="size-4 text-primary" />
            {education.school}
          </div>
          {education.location && (
            <div className="inline-flex items-center gap-1.5">
              <MapPin className="size-4 text-slate-400" />
              <span>{education.location}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
