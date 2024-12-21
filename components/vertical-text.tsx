interface VerticalTextProps {
  text: string;
  className?: string;
}

export function VerticalText({ text, className = "" }: VerticalTextProps) {
  return (
    <div className={`absolute right-6 lg:right-12 top-24 flex flex-col items-center ${className}`}>
      <span 
        className="text-white text-sm tracking-widest mb-4"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        {text}
      </span>
      <div className="h-16 w-px bg-amber-400" />
    </div>
  )
}

