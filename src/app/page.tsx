import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
export default function Home() {



  return (
    <>
  <center className="h-screen flex items-center justify-center flex-col gap-10">
    <HoverCard >
      <HoverCardTrigger className=" border-b-2 " >Hover <menu type="context"></menu></HoverCardTrigger>
      <HoverCardContent>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores iure neque aliquid eius blanditiis. Consectetur maiores sint quod, harum, adipisci dignissimos error a natus ipsa maxime, atque non excepturi ipsam?
      </HoverCardContent>
    </HoverCard>

        <Popover>
      <PopoverTrigger>Open</PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
    <Select>
      
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
      </center>
    </>
  );
}
