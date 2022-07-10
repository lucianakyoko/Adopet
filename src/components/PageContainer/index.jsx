import { Header } from "../Header";
import { Footer } from "../Footer";

import {
  PageWrapper,
  PageContentWrapper,
} from './style';

export function PageContainer({ user, children, bgColor, className }) {
  return(
    <PageWrapper color={bgColor} className={className}>
      <Header user={user}/>
      <PageContentWrapper>
        { children }
      </PageContentWrapper>
      <Footer />
    </PageWrapper>
  )
}