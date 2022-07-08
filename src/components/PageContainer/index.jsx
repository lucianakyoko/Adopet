import { Header } from "../Header";
import { Footer } from "../Footer";

import {
  PageWrapper,
  PageContentWrapper,
} from './style';

export function PageContainer({ children, bgColor, className }) {
  return(
    <PageWrapper color={bgColor} className={className}>
      <Header />
      <PageContentWrapper>
        { children }
      </PageContentWrapper>
      <Footer />
    </PageWrapper>
  )
}