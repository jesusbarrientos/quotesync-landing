import {useEffect, useState} from "react";

export const useTheme = () => {
  const [ isDark, setIsDark ] = useState<boolean>()

  useEffect(() => {
    const mq = window.matchMedia(
      '(prefers-color-scheme: dark)',
    )

    if (mq.matches) {
      setIsDark(true)
    }

    function handleDarkModeChange(evt: MediaQueryListEvent) {
      setIsDark(evt.matches)
    }

    // This callback will fire if the perferred color scheme changes without a reload
    mq.addEventListener('change', handleDarkModeChange)

    return () => {
      mq.removeEventListener('change', handleDarkModeChange)
    }
  }, [])

  return {
    isDark,
    isLight: !isDark,
  }
}
