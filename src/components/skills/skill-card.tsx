'use client'

import StarRating from '@/components/skills/star-rating';
import Logo from '@/components/hero/logo.tsx';

export type SkillCardProps = {
  name: string;
  rating: number;
  years?: number;
  iconSrc?: string;
  iconSrcLight?: string;
  iconSrcDark?: string;
  themed?: boolean;
};

export function SkillCard({ name, rating, years, iconSrc, iconSrcLight, iconSrcDark, themed }: SkillCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl p-4 flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <Logo
          name={iconSrc ? undefined : name}
          iconSrc={iconSrc}
          iconSrcLight={iconSrcLight}
          iconSrcDark={iconSrcDark}
          themed={themed}
          size={28}
          className="h-7 w-7 object-contain"
          title={`${name} logo`}
        />
        <span className="font-medium text-black dark:text-white truncate">{name}</span>
      </div>

      <div className="flex items-center gap-2">
        <StarRating value={rating} />
        {typeof years === 'number' && (
          <span className="text-xs text-black/70 dark:text-white/70 whitespace-nowrap">
            {years} an{years > 1 ? 's' : ''}
          </span>
        )}
      </div>
    </div>
  );
}
