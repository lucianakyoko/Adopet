import { Header } from "../Header";
import { Footer } from "../Footer";
import {
  PageWrapper,
  PageContentWrapper,
} from './style';

export function PageContainer({ children }) {
  return(
    <PageWrapper>
      <Header />
      <PageContentWrapper>
        { children }
      </PageContentWrapper>
      <Footer />
    </PageWrapper>
  )
}