import logo from "../assets/logos/hafiz-logo.jpeg";

interface LogoProps {
  compact?: boolean;
}

export default function Logo({ compact = false }: LogoProps) {
  return (
    <div className="flex items-center shrink-0">
      <img
        src={logo}
        alt="Hafiz Lifelong Interior"
        className={`
          block w-auto object-contain
          ${compact ? "h-10" : "h-14"}
        `}
      />
    </div>
  );
}