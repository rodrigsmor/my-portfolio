import { NavigateButton } from "../../components/Buttons/NavigateButton"
import { Header } from "../../components/layouts/Header"
import { HomeSection, PageContainer, PageContentWrapper } from "./styled"

export const Home = () => {
  return (
    <PageContainer>
      <div></div>
      <HomeSection>
        <Header />
        <PageContentWrapper>
          <NavigateButton isPrevious />
          <NavigateButton />
        </PageContentWrapper>
      </HomeSection>
    </PageContainer>
  )
}