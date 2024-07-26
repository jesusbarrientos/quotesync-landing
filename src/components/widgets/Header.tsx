import {Logo} from "@/components/widgets/Logo.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {LoginButton} from "@/components/pages/index/LoginButton.tsx";

export const Header = () => {
  return (
    <header className="h-14 sticky top-0 left-0 zHeaderBar bg-background">
      <div className="px-5 py-3 h-full flex items-center gap-2">
        <Logo size="sm"/>

        <div className="flex-1 flex justify-end">
          <LoginButton/>
        </div>
      </div>

      <Separator/>
    </header>
  )
}
