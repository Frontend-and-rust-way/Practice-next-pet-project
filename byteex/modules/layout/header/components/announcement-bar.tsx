"use client";
import { useMediaQuery } from 'react-responsive';
import { messages } from '../mock/mock-messages';

export function AnnouncementBar() {
  const isMobile = useMediaQuery({ maxWidth: 760 });
  const renderContent = () => {
    if (isMobile) {
      return <span>FREE SHIPPING on orders &gt; $200</span>;
    }
    return messages.map(message => (
      <span key={message}>{message}</span>
    ));
  };

  return (
    <div
      className="
        flex
        justify-center
        items-center
        gap-[20px]
        w-full 
        py-2 
        text-center 
        text-sm 
        text-gray-800 
        bg-tw-light-beige
        text-[11px]
      "
      role="status"
      aria-live="polite"
    >
      {renderContent()}
    </div>
  );
}
