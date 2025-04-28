"use client"
import { FooterHeadings } from "./components/footer-heading"
import  {VerticalImageGallerys} from "./components/vertical-img-galery"
import { PaymentInfoBlock } from "./components/payment-info-block"
import { KeyFeatures } from "./components/key-features"
import { useMediaQuery } from "react-responsive"
import { RatingDescription } from "../product-info/components/rating-card"
import { Button } from "@/ui/button"

export function Footer() {
    const isMobile = useMediaQuery({maxWidth:640});
    
    return (
        <footer className="flex flex-col items-center bg-gradient-to-t from-[rgba(249,240,229,1)] via-[rgba(249,240,229,0.18)] to-[rgba(249,240,229,0)]">
            <div className="flex flex-col items-center justify-center text-center space-y-6 mt-[44px]">
                <FooterHeadings/>
                <VerticalImageGallerys/>
            </div>
            
               {!isMobile 
                    && 
                <> 
                    <PaymentInfoBlock /> 
                    <KeyFeatures />
                </>
               } 
        
               {isMobile && 
                    <>
                        <Button className="mt-[30px]"/>
                        <RatingDescription/>
                    </>
                }
               
        </footer>
    )
}


