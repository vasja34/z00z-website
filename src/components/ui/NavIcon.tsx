import type { JSX, SVGProps } from "react";

type IconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;

function IconBase({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

const HomeIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="M3.5 8.5 10 3l6.5 5.5" />
    <path d="M5.5 7.8v8.2h9V7.8" />
    <path d="M8.3 16v-4.7h3.4V16" />
  </IconBase>
);

const BookIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H16v14H6.5A2.5 2.5 0 0 0 4 18.5z" />
    <path d="M4 4.5V18" />
    <path d="M8 6.5h5" />
  </IconBase>
);

const LayersIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="m10 3 6 3.1-6 3.1-6-3.1L10 3Z" />
    <path d="m4 10 6 3.1 6-3.1" />
    <path d="m4 13.8 6 3.2 6-3.2" />
  </IconBase>
);

const CodeIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="m7 6.2-3.5 3.8L7 13.8" />
    <path d="m13 6.2 3.5 3.8-3.5 3.8" />
    <path d="M11.2 4.5 8.8 15.5" />
  </IconBase>
);

const WalletIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="M4.5 6.5A2.5 2.5 0 0 1 7 4h7.5v12H7A2.5 2.5 0 0 1 4.5 13.5z" />
    <path d="M14.5 7.5h2v4h-2a2 2 0 1 1 0-4Z" />
    <path d="M7 4v2.5h7.5" />
  </IconBase>
);

const NetworkIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <circle cx="5" cy="10" r="1.7" />
    <circle cx="15" cy="5" r="1.7" />
    <circle cx="15" cy="15" r="1.7" />
    <path d="M6.5 9.2 13.4 5.8" />
    <path d="M6.5 10.8 13.4 14.2" />
    <path d="M15 6.8v6.4" />
  </IconBase>
);

const SparkIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="m10 2 1.4 4.6L16 8l-4.6 1.4L10 14l-1.4-4.6L4 8l4.6-1.4L10 2Z" />
    <path d="m15.5 13 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2Z" />
  </IconBase>
);

const UsersIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <circle cx="7" cy="7" r="2.2" />
    <circle cx="13.5" cy="7.8" r="1.8" />
    <path d="M3.8 15.5c.3-2.2 2.2-3.8 4.5-3.8s4.2 1.6 4.5 3.8" />
    <path d="M11.7 15.5c.2-1.7 1.6-3 3.3-3 1.2 0 2.3.6 2.9 1.6" />
  </IconBase>
);

const ShieldIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="M10 2.5 15.5 4v4.7c0 3.3-2.1 6.2-5.5 8.8C6.6 14.9 4.5 12 4.5 8.7V4z" />
    <path d="m7.6 10.2 1.7 1.7 3.5-4.2" />
  </IconBase>
);

const FlaskIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="M8 2.8h4" />
    <path d="M9 2.8v4.4L4.8 15a1.8 1.8 0 0 0 1.6 2.7h7.2a1.8 1.8 0 0 0 1.6-2.7L11 7.2V2.8" />
    <path d="M6.9 12.3h6.2" />
  </IconBase>
);

const SupportIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="M4.5 9.2a5.5 5.5 0 1 1 11 0v3.3a1.5 1.5 0 0 1-1.5 1.5H12.5" />
    <path d="M4.5 10.5H3.8A1.8 1.8 0 0 0 2 12.3v.9A1.8 1.8 0 0 0 3.8 15h.7Z" />
    <path d="M15.5 10.5h.7a1.8 1.8 0 0 1 1.8 1.8v.9a1.8 1.8 0 0 1-1.8 1.8h-.7Z" />
    <path d="M8.5 15h3" />
  </IconBase>
);

const ScalesIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="M10 3v12.5" />
    <path d="M5 6.5h10" />
    <path d="m6.5 6.5-2.5 4.3h5Z" />
    <path d="m13.5 6.5-2.5 4.3h5Z" />
    <path d="M7.2 17h5.6" />
  </IconBase>
);

const PaletteIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="M10 3a7 7 0 1 0 0 14h1.1a2 2 0 0 0 0-4H10a1.7 1.7 0 1 1 0-3.4h1.4A4.6 4.6 0 0 0 16 5c0-1.1-.4-2-1.1-2.6C13.7 1.6 11.9 1.2 10 3Z" />
    <circle cx="6.1" cy="8.1" r=".7" fill="currentColor" stroke="none" />
    <circle cx="8.5" cy="5.7" r=".7" fill="currentColor" stroke="none" />
    <circle cx="12.1" cy="5.8" r=".7" fill="currentColor" stroke="none" />
    <circle cx="13.7" cy="9.1" r=".7" fill="currentColor" stroke="none" />
  </IconBase>
);

const MapIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="m3 5 4-1.5 6 2 4-1.5v11L13 16.5l-6-2-4 1.5Z" />
    <path d="M7 3.5v11" />
    <path d="M13 5.5v11" />
  </IconBase>
);

const CompassIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <circle cx="10" cy="10" r="6.8" />
    <path d="m12.9 7.1-1.6 4.2-4.2 1.6 1.6-4.2 4.2-1.6Z" />
  </IconBase>
);

const ChartIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="M4 16V4" />
    <path d="M4 16h12" />
    <path d="m6.5 12 2.7-2.8 2.3 1.7 3.5-4.2" />
  </IconBase>
);

const MonitorIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <rect x="3" y="4" width="14" height="9.5" rx="1.5" />
    <path d="M8 16.5h4" />
    <path d="M10 13.5v3" />
  </IconBase>
);

const FileIcon: IconComponent = (props) => (
  <IconBase {...props}>
    <path d="M6 2.5h5l4 4V17.5H6z" />
    <path d="M11 2.5v4h4" />
  </IconBase>
);

const icons: Record<string, IconComponent> = {
  book: BookIcon,
  chart: ChartIcon,
  compass: CompassIcon,
  code: CodeIcon,
  demo: PaletteIcon,
  file: FileIcon,
  flask: FlaskIcon,
  home: HomeIcon,
  layers: LayersIcon,
  legal: ScalesIcon,
  map: MapIcon,
  monitor: MonitorIcon,
  network: NetworkIcon,
  palette: PaletteIcon,
  protocol: LayersIcon,
  research: FlaskIcon,
  scales: ScalesIcon,
  security: ShieldIcon,
  shield: ShieldIcon,
  spark: SparkIcon,
  support: SupportIcon,
  users: UsersIcon,
  wallet: WalletIcon,
};

export function NavIcon({
  className = "h-4 w-4",
  icon = "file",
}: {
  className?: string;
  icon?: string;
}) {
  const Icon = icons[icon] ?? icons.file;

  return <Icon className={`${className} block`} />;
}
