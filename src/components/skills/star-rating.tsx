function StarRating({ value = 0, max = 5, size = 16, className = "" }: {
  value?: number;
  max?: number;
  size?: number;
  className?: string;
}) {
  const stars = Array.from({ length: max }, (_, i) => i < value);
  return (
    <div className={`flex items-center gap-1 ${className}`} aria-label={`${value} sur ${max} étoiles`}>
      {stars.map((filled, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true"
             className={filled ? "fill-yellow-400 text-yellow-400" : "fill-none text-yellow-400"}>
          <path stroke="currentColor" strokeWidth={2}
                d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z"/>
        </svg>
      ))}
    </div>
  );
}

export default StarRating;
