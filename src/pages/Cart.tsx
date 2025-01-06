import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/hooks";
import { CartItemsList, CartTotals, SectionTitle } from "@/components";

const Cart = () => {
  // TODO:
  const user = null;

  const numItemsInCart = useAppSelector(
    (state) => state.cartState.numItemsInCart
  );

  if (numItemsInCart === 0) {
    return <SectionTitle text="Empty Cart" />;
  }

  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Button asChild className="mt-8 w-full">
              <Link to="/checkout">Proceed</Link>
            </Button>
          ) : (
            <Button asChild className="mt-8 w-full">
              <Link to="/login">Please login</Link>
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
