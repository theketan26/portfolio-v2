import { Download } from "lucide-react";
import AnimatedButton from "../AnimatedButton";
import { useAppSelector } from "@/store/hooks";

interface ResumeButtonProps {
    className?: string;
    withoutIcon?: boolean;
}

const ResumeButton: React.FC<ResumeButtonProps> = ({ className, withoutIcon = false }) => {
  const darkMode = useAppSelector((state) => state.theme.darkMode);
  
  return (
    <a
      href="https://knbuzoidgdotpolttair.supabase.co/storage/v1/object/public/resume/ketan-solanki-resume.pdf"
      download="ketan-solanki-resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <AnimatedButton
        gradientColorOne="#155dfc"
        gradientColorTwo={!darkMode ? "#333333" : "#ffffff"}
        backgroundColor={darkMode ? "#333333" : "#ffffff"}
        textColor={darkMode ? "#F3F4F6" : "#1F2937"}
      >
        <span className="flex items-center gap-3">
            {!withoutIcon ? <Download size={16} /> : "Download "}
          Resume
        </span>
      </AnimatedButton>
    </a>
  );
};

export default ResumeButton;
