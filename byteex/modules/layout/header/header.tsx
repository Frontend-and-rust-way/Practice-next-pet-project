"use client"
import { AnnouncementBar } from "./components/announcement-bar"
import { IntroSection } from "./components/Intro-section"

export function Header() {

    return  (
        <header className=""> 
          <AnnouncementBar/>
          <IntroSection/>
        </header>
    )
}

