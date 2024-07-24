import {OpenPlatformButton} from "@/components/pages/index/OpenPlatformButton.tsx";
import {useMQ} from "@/hooks/useMediaQuery.ts";
import {cn} from "@/lib/utils.ts";
import styles from '@/components/pages/index/LandingPage.module.scss'
import {useTheme} from "@/hooks/useTheme.ts";

export const LandingPage = () => {
  const { isMobile } = useMQ()
  const { isDark, isLight } = useTheme()

  const centeredOnMobile = cn({
    'text-center': isMobile
  })

  const sectionIssues = cn('flex gap-5', {
    'mt-52 justify-between': !isMobile,
    'mt-20 justify-center': isMobile
  })

  const sectionIssuesContent = cn(styles.sectionContent, 'flex-1 relative', {
    'min-w-[800px]': !isMobile,
    '!max-w-full': isMobile,
  })

  return (
    <article className={styles.landingPage}>
      <section className={centeredOnMobile}>
        <h1 className="text-4xl font-black my-5 mb-7">
          ¡No más hojas de cálculo!<br/>
          Presupuestos más rápidos<br/> y precisos
        </h1>

        <p className="!mb-7 text-lg text-muted-foreground">
          Ahorra tiempo y aumenta tu productividad con nuestra aplicación intuitiva para generar cotizaciones.
        </p>

        <OpenPlatformButton/>
      </section>

      <section className={sectionIssues}>
        {!isMobile && <div className="w-[40%]"/>}

        <div className={sectionIssuesContent}>
          {!isMobile && isLight && <img title="Hoja de cálculo con ejemplo de cotización" alt="Cotización en hoja de cálculo" src="/images/spreadsheet_light.webp" className={styles.spreadsheetImg}/>}
          {!isMobile && isDark && <img title="Hoja de cálculo con ejemplo de cotización" alt="Cotización en hoja de cálculo" src="/images/spreadsheet_dark.webp" className={styles.spreadsheetImg}/>}

          <div className={styles.sectionContentCard}>
            <h2>Desafíos Comunes en la Creación de Presupuestos</h2>
            <div>
              <h3>Perdiendo Tiempo Valioso</h3>
              <p>Crear cotizaciones desde cero puede llevar horas, robándote tiempo que podrías dedicar a hacer crecer
                tu
                negocio.</p>
            </div>
            <div>
              <h3>Modificaciones Interminables</h3>
              <p>Actualizar cotizaciones una y otra vez debido a cambios de los clientes puede ser frustrante y propenso
                a
                errores.</p>
            </div>
            <div>
              <h3>Cotizaciones Vencidas</h3>
              <p>Las cotizaciones tienen una vida útil. Si tu cliente tarda en decidir, necesitas crear nuevas
                cotizaciones, duplicando el trabajo.</p>
            </div>
            <div>
              <h3>Dependencia de Hojas de Cálculo</h3>
              <p>Las hojas de cálculo son útiles pero no están diseñadas para manejar cotizaciones complejas de manera
                eficiente.</p>
            </div>
          </div>
        </div>
      </section>

      {/*<section className={sectionIssues}>*/}
      {/*  <div className={sectionIssuesContent}>*/}
      {/*    {!isMobile && <img alt="Cotización en hoja de cálculo" src="/images/spreadsheet_dark.webp" className={styles.spreadsheetImg}/>}*/}

      {/*    <div className={styles.sectionContentCard}>*/}
      {/*      <h2>Desafíos Comunes en la Creación de Presupuestos</h2>*/}
      {/*      <div>*/}
      {/*        <h3>Perdiendo Tiempo Valioso</h3>*/}
      {/*        <p>Crear cotizaciones desde cero puede llevar horas, robándote tiempo que podrías dedicar a hacer crecer*/}
      {/*          tu*/}
      {/*          negocio.</p>*/}
      {/*      </div>*/}
      {/*      <div>*/}
      {/*        <h3>Modificaciones Interminables</h3>*/}
      {/*        <p>Actualizar cotizaciones una y otra vez debido a cambios de los clientes puede ser frustrante y propenso*/}
      {/*          a*/}
      {/*          errores.</p>*/}
      {/*      </div>*/}
      {/*      <div>*/}
      {/*        <h3>Cotizaciones Vencidas</h3>*/}
      {/*        <p>Las cotizaciones tienen una vida útil. Si tu cliente tarda en decidir, necesitas crear nuevas*/}
      {/*          cotizaciones, duplicando el trabajo.</p>*/}
      {/*      </div>*/}
      {/*      <div>*/}
      {/*        <h3>Dependencia de Hojas de Cálculo</h3>*/}
      {/*        <p>Las hojas de cálculo son útiles pero no están diseñadas para manejar cotizaciones complejas de manera*/}
      {/*          eficiente.</p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  {!isMobile && <div className="w-[40%]"/>}*/}
      {/*</section>*/}
    </article>
  );
}
