import { AnnouncementBar } from "./components/announcement-bar"
import { IntroSection } from "./components/Intro-section"
export function Header(){

    return  (
        <header className="h-[36px]"> 
           <AnnouncementBar>
                CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE SHIPPING on orders &gt  $200 | easy 45 day return window.
            </AnnouncementBar>
            <IntroSection/>
        </header>
    )
}