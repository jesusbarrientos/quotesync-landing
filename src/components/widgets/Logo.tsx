import {cn} from "@/lib/utils.ts";

type Props = {
  size?: 'sm' | 'md' | 'lg',
  className?: string,
}

export const Logo = ({ size = 'lg', className }: Props) => {
  const classes = cn('cursor-pointer text-foreground !no-underline', className, {
    'text-xl'  : size === 'sm',
    'text-3xl' : size === 'md',
    'text-5xl' : size === 'lg',
  })

  return (
    <a href="/" title="Aplicación para creación de cotizaciones eficientes" className={`font-extrabold tracking-tight ${classes}`}>
      QuoteSync
    </a>
  )
}
