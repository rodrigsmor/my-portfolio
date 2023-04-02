import { useEffect, useRef } from "react"
import { useLocation } from "react-router-dom"
import { Header } from "../../components/layouts/Header"
import { Footer } from "../../components/layouts/Footer"
import { HomeSection } from "../../components/screens/HomeSection"
import { NavigateButton } from "../../components/Buttons/NavigateButton"
import { CurrentPageContentContainer, PageContainer, PageContentWrapper, HomeSectionWrapper } from "./styled"
import { ContactSection } from "../../components/screens/ContactSection"

export const Home = () => {
  const { pathname } = useLocation();
  const pageContainerRef = useRef();

  useEffect(() => {
    pageContainerRef.current?.childNodes.forEach((element) => {
      if ((pathname === '/' && element?.id === 'home') || pathname.includes(element?.id))
        element.scrollIntoView({ behavior: "smooth", block: "start"});
    })
  }, [ pathname ])

  return (
    <PageContainer>
      <div className='background-support'></div>
      <HomeSectionWrapper>
        <Header />
        <PageContentWrapper>
          <NavigateButton isPrevious />
          <NavigateButton />
          <CurrentPageContentContainer ref={pageContainerRef}>
            <HomeSection />
            <section id="about-me"></section>
            <section id="project"></section>
            <ContactSection />
          </CurrentPageContentContainer>
        </PageContentWrapper>
        <Footer />
      </HomeSectionWrapper>
    </PageContainer>
  )
}