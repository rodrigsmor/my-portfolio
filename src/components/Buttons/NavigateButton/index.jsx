import { IconContext } from "react-icons"
import { NavigateButtonWrapper } from "./styled"
import { useLocation, useNavigate } from "react-router-dom"
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi"

export const NavigateButton = ({ isPrevious = false }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  let isDisabled = ((isPrevious && pathname === '/') || (!isPrevious && pathname === '/contacts'));

  const paths = ['/', '/about-me', '/projects', '/contacts']

  return (
    <NavigateButtonWrapper 
      className={`${isPrevious ? 'previous' : 'next'}`} 
      disabled={isDisabled}
      title={`go to ${isPrevious ? 'previous' : 'next'} page`}
      aria-label={`go to ${isPrevious ? 'previous' : 'next'} page`}
      onClick={e => {
        let redirectTo = paths.indexOf(pathname) + (isPrevious ? -1 : +1);
        navigate(paths.at(redirectTo))
      }}
    >
      <IconContext.Provider value={{
        size: '24px'
      }}>
        {
          isPrevious ? (
            <HiOutlineArrowNarrowLeft />
          ) : (
            <HiOutlineArrowNarrowRight />
          )
        }
      </IconContext.Provider>
    </NavigateButtonWrapper>
  )
}