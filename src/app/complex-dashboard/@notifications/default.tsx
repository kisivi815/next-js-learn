import Card from "@/components/card";
import Link
 from "next/link";
export default function Notificaitons() {

    return (
        <>
            
            <Card>
                <div>Notificaitons</div>
                <Link href="/complex-dashboard/archived">Archived</Link>
            </Card>
          
        </>
    )
}