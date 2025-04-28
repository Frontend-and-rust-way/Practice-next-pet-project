import { Description } from "@/ui/description"

export function UserFeedback(){
    return (
        <>  
        <div className="flex flex-col items-center justify-center"> 
            <Description className="text-[32px]"> 
                What are our fans saying?
            </Description>
            <p className=" text-center mb:text-left mb-[55px] w-[613px] max-w-full text-[rgba(103,104,105,1)] mt-[32px] text-[15px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fusce lobortis sapien facilisis tincidunt pellentesque.
                In eget ipsum et felis finibus consequat. Fusce non nibh luctus.
            </p>
        </div>
        </>
    )
}