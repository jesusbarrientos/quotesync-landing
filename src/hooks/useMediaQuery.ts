import { useMediaQuery } from 'react-responsive'

export const useMQ = () => ({
  is4k              : useMediaQuery({ minWidth: 1921 }),
  isDesktopAndAbove : useMediaQuery({ minWidth: 1025 }),
  isDesktop         : useMediaQuery({ minWidth: 1025, maxWidth: 1920 }),
  isTabletAndAbove  : useMediaQuery({ minWidth: 992 }),
  isTablet          : useMediaQuery({ minWidth: 992, maxWidth: 1024 }),
  isTabletAndBelow  : useMediaQuery({ maxWidth: 1024 }),
  isMobile          : useMediaQuery({ maxWidth: 991 }),
})
