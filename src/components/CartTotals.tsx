import { formatAsDollars } from "@/utils";
import { Separator } from "./ui/separator";
import { useAppSelector } from "@/hooks";
import { Card, CardTitle } from "./ui/card";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useAppSelector(
    (state) => state.cartState
  );

  return (
    <Card className="p-8 bg-muted">
      <CartTotalRow label="Subtotal" amount={cartTotal} />
      <CartTotalRow label="Shipping" amount={shipping} />
      <CartTotalRow label="Tax" amount={tax} />
      <CardTitle>
        <CartTotalRow label="Order Total" amount={orderTotal} lastRow />
      </CardTitle>
    </Card>
  );
};

export default CartTotals;

const CartTotalRow = ({
  label,
  amount,
  lastRow,
}: {
  label: string;
  amount: number;
  lastRow?: boolean;
}) => {
  return (
    <>
      <p className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{formatAsDollars(amount)}</span>
      </p>
      {!lastRow && <Separator className="my-2" />}
    </>
  );
};
