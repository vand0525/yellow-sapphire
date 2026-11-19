import type { SVGProps } from 'react';
import {
  Award,
  CalendarDays,
  Handshake,
  HeartPulse,
  Landmark,
  ListSortDescending,
  Menu,
  Quote,
  Send,
  Info,
  ShieldCheck,
  ShoppingBag,
  Wrench,
  X,
  type LucideIcon,
} from 'lucide-react';
import styles from './Icon.module.css';

const iconMap = {
  heartPulse: HeartPulse,
  landmark: Landmark,
  shoppingBag: ShoppingBag,
  shieldCheck: ShieldCheck,
  quote: Quote,
  calendarDays: CalendarDays,
  wrench: Wrench,
  award: Award,
  handshake: Handshake,
  listSortDescending: ListSortDescending,
  menu: Menu,
  close: X,
  send: Send,
  info: Info,
} as const satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof iconMap;

const sizeMap = {
  sm: 20,
  md: 30,
  lg: 48,
  xl: 64,
} as const;

export type IconSize = keyof typeof sizeMap;

const strokeMap = {
  default: 2,
} as const;

export type IconStroke = keyof typeof strokeMap;

type IconProps = {
  name: IconName;
  size?: IconSize;
  stroke?: IconStroke;
  className?: string;
  'aria-hidden'?: boolean | 'true' | 'false';
  'aria-label'?: string;
} & Omit<SVGProps<SVGSVGElement>, 'name' | 'size' | 'stroke' | 'ref'>;

export function Icon({
  name,
  size = 'md',
  stroke = 'default',
  className,
  'aria-hidden': ariaHidden,
  'aria-label': ariaLabel,
  ...rest
}: IconProps) {
  const LucideGlyph = iconMap[name];
  const classes = className ? `${styles.root} ${className}` : styles.root;

  return (
    <LucideGlyph
      className={classes}
      size={sizeMap[size]}
      strokeWidth={strokeMap[stroke]}
      absoluteStrokeWidth={false}
      aria-hidden={ariaLabel ? ariaHidden : (ariaHidden ?? true)}
      aria-label={ariaLabel}
      {...rest}
    />
  );
}
