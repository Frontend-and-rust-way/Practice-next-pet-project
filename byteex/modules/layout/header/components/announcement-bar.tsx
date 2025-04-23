
interface IAnnouncementBarProps {
    children: React.ReactNode;
  }
  
  export function AnnouncementBar({ children }: IAnnouncementBarProps) {
    return (
      <div
        className="
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
        {children}
      </div>
    );
  }
  