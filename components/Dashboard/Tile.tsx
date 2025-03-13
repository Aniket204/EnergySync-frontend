import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

type TileProps = {
  title: string;
  amount: string;
  caption: string;
  Icon: LucideIcon;
  bgColor: string;
};

const Tile = ({ title, amount, caption, Icon, bgColor }: TileProps) => {
  const percentageMatch = caption.match(/([+-]?\d+\.?\d*)%/);
  const percentage = percentageMatch ? percentageMatch[0] : null;
  const captionText = percentage ? caption.replace(percentage, "") : caption;

  return (
    <Card className="py-5 hover:bg-muted shadow-sm rounded-sm border bg-card text-card-foreground relative">
      <CardContent>
        <div className="flex flex-row items-center justify-between pb-2 relative">
          <h3 className="font-semibold tracking-tight text-sm">{title}</h3>
          <div className={`absolute top-0 right-0 rounded-full p-2 ${bgColor}`}>
            <Icon className="h-4 w-4 text-foreground"/>
          </div>
        </div>
        <div className="pt-0">
          <div className="text-2xl font-bold">{amount}</div>
          <p className="text-xs text-muted-foreground">
            {percentage ? (
              <>
                <span className={percentage.startsWith("-") ? "text-red-600" : "text-green-600"}>{percentage}</span>
                {captionText}
              </>
            ) : (
              caption
            )}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Tile;
