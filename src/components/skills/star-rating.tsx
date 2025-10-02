import clsx from "clsx";

export type StarRatingProps = {
  value?: number;     // note sur max
  max?: number;       // nombre d'étoiles
  size?: number;      // taille en px
  className?: string; // classes utilitaires
};

export default function StarRating({value = 0, max = 5, size = 16, className = ""}: StarRatingProps) {
  const clamped = Math.max(0, Math.min(max, value));
  const stars = Array.from({ length: max }, (_, i) => i + 1);

  const label = `${clamped}/${max} étoiles`;

  return (
    <div
      className={clsx("inline-flex items-center gap-1", className)}
      role="img"
      aria-label={label}
      title={label}
    >
      {stars.map((i) => {
        const filledRatio = Math.max(0, Math.min(1, clamped - (i - 1)));
        return (
          <span
            key={i}
            className="relative inline-block"
            style={{ width: size, height: size }}
            aria-hidden="true"
          >
            {/* étoile vide (contour) */}
            <svg
              viewBox="0 0 24 24"
              width={size}
              height={size}
              className="block"
            >
              <path
                d="M12 2l2.9 5.88 6.49.94-4.7 4.58 1.11 6.47L12 17.77l-5.8 3.06 1.11-6.47-4.7-4.58 6.49-.94L12 2z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                opacity="0.35"
              />
            </svg>

            <span
              className="absolute left-0 top-0 overflow-hidden"
              style={{ width: `${filledRatio * 100}%`, height: size }}
            >
              <svg viewBox="0 0 24 24" width={size} height={size} className="block">
                <path
                  d="M12 2l2.9 5.88 6.49.94-4.7 4.58 1.11 6.47L12 17.77l-5.8 3.06 1.11-6.47-4.7-4.58 6.49-.94L12 2z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </span>
        );
      })}
    </div>
  );
}
