import { Header } from "@/modules/layout/header/header";
import { BenefitsBlock } from "@/modules/layout/benefits-block/benefits-block";
import { FounderMessage } from "@/modules/layout/connect-with-founder/founder-message";
import { ProductUsageOrdering } from "@/modules/layout/product-info/product-usage-ordering";
import { UserGeneratedContent } from "@/modules/layout/users-generated-content/user-generated-content";  
import { Infobaner } from "@/modules/layout/info-banner/info-banner";
import { FAQ } from "@/modules/layout/FAQ/faq";
import { Footer } from "@/modules/layout/footer/footer";

export default function Home() {

  return (
    <>        
        <Header/>
        <BenefitsBlock/>
        <FounderMessage/>
        <ProductUsageOrdering/>
        <UserGeneratedContent/>
        <FAQ/>
        <Infobaner/>
        <Footer/>
    </>
  );
}
