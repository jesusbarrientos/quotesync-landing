import {Separator} from "@/components/ui/separator.tsx";
import {Logo} from "@/components/widgets/Logo.tsx";

type Props = {
  className?: string,
  variant?: 'default' | 'minimal',
}

export const Footer = ({ className, variant = 'default' } : Props) => {
  const year = new Date().getFullYear()

  return (
    <footer className={`bg-background ${className}`}>
      <Separator />
      <div className="w-full pb-3 px-5">
        {variant === 'default' && (
          <div className="pt-7">
            <section className="flex gap-5 flex-wrap">
              <Logo className="!text-lg mr-2"/>

              <nav className="flex flex-col gap-2">
                <span className="text-sm font-medium leading-none">Contacto</span>
                <a href="mailto:hello@quotesync.app" title="Contacta al equipo experto de presupuestos" className="text-sm">hello@quotesync.app</a>
              </nav>

              <nav className="flex flex-col gap-2">
                <span className="text-sm font-medium leading-none">Legal</span>
                <a href="/terms-and-conditions" title="Conoce nuestros Términos y Condiciones" className="text-sm">Términos y condiciones</a>
                <a href="/privacy-policy" title="Conoce nuestra Política de privacidad" className="text-sm">Política de privacidad</a>
              </nav>
            </section>

            <span className="text-sm text-muted-foreground inline-block mt-5">
              © {year} Todos los derechos reservados.
            </span>
          </div>
        )}

        {variant === 'minimal' && (
          <div className="pt-3">
            <span className="text-sm text-muted-foreground inline-block">
            © {year} Todos los derechos reservados.
            </span>
          </div>
        )}
      </div>
    </footer>
  )
}
