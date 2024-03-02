interface NikkeLetterProps {
  letter: String;
  delay: Number;
}

const NikkeLetter: React.FC<NikkeLetterProps> = ({ letter, delay }) => {
  return (
    <p className={`animate-[letter-jump_1s_linear_infinite] delay-${delay}`}>
      {letter}
    </p>
  );
};

export default NikkeLetter;
