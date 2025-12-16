import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const BookingItem = () => {
  return (
    <Card className="flex h-full w-full cursor-pointer flex-row items-center justify-between p-0">
      {/* ESQUERDA */}
      <div className="flex flex-col gap-4 p-4">
        <Badge>Confirmado</Badge>
        <div className="flex flex-col gap-2">
          <p className="font-bold">Corte de Cabelo</p>
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
            </Avatar>
            <p className="text-sm font-medium">Barbearia Mike Demerson</p>
          </div>
        </div>
      </div>

      {/* DIREITA */}
      <div className="judtify-center flex h-full w-26.5 flex-col items-center border-l py-3">
        <p className="text-xs capitalize">Dezembro</p>
        <p className="text-3xl">16</p>
        <p className="text-xs">09:40</p>
      </div>
    </Card>
  );
};

export default BookingItem;
