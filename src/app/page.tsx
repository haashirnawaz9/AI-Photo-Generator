import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Home() {
  return (
    <div className="">
      Home
      <Button>
        <Link href='/main'>Main Page</Link>
      </Button>
    </div>
  );
}
