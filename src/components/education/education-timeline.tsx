import { memo } from "react";
import type { EducationType } from "@/types/education.type.ts";
import EducationCard from "./education-card";


interface EducationTimelineProps {
  education: EducationType[];
}

function EducationTimeline({ education }: EducationTimelineProps) {
  return (
    <div
      className="relative mx-auto mt-12 max-w-3xl"
    >
      <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent dark:via-white/15 sm:left-1/2" />

      <ul className="space-y-8">
        {education.map((education, idx) => (
          <EducationCard
            key={education.id}
            education={education}
            index={idx}
          />
        ))}
      </ul>
    </div>
  );
}

export default memo(EducationTimeline);
