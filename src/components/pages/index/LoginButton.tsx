import {Button} from "@/components/ui/button.tsx";

export const LoginButton = () => {
  const openPlatform = () => {
    window.open('https://platform.quotesync.app', '__blank')
  }

  return (
    <Button onClick={openPlatform}>
      Iniciar Sesión
    </Button>
  )
}
