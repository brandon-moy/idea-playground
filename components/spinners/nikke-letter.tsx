import { cn } from "@/lib/utils";

interface NikkeLetterProps {
  letter: string;
  delay: string;
}

const NikkeLetter: React.FC<NikkeLetterProps> = ({ letter, delay }) => {
  return (
    <p className={cn("animate-letter-jump", `animation-delay-${delay}`)}>
      {letter}
    </p>
  );
};

export default NikkeLetter;
