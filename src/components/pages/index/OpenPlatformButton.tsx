import {Button} from "@/components/ui/button.tsx";

export const OpenPlatformButton = () => {
  const openPlatform = () => {
    window.open('https://platform.quotesync.app', '__blank')
  }

  return (
    <Button onClick={openPlatform}>
      Empieza Gratis Ahora
    </Button>
  )
}
