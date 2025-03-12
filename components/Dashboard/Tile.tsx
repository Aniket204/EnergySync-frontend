import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type TileProps = {
  title: string;
  amount: string;
  caption: string;
  Icon: LucideIcon;
};

const Tile = ({ title, amount, caption, Icon }: TileProps) => {
  return (
    <Card className="hover:bg-muted shadow-base rounded-lg border bg-card text-card-foreground">
      <CardContent>
        <div className="flex flex-row items-center justify-between pb-2">
          <h3 className="font-bold tracking-tight text-sm">{title}</h3>
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="pt-0">
          <div className="text-2xl font-bold">{amount}</div>
          <p className="text-xs text-muted-foreground">{caption}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Tile;
