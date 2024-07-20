"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  removeFromCart,
  selectCartItems,
  updateQuantity,
} from "@/store/cart-slice";
import { CartItem as CartItemType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { QuantityControl } from "./quantity-control";
import { RemoveItemDialog } from "./remove-item-dialog";

const CartContent = () => {
  const cartItems = useSelector(selectCartItems);
  if (cartItems.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-lg font-medium">Your cart is empty</p>
        <Button asChild variant={"secondary"}>
          <Link href="/products">Browse Products</Link>
        </Button>
      </div>
    );
  }
  return (
    <ul className="space-y-6" aria-label="Cart items">
      {cartItems.map((item, index) => (
        <li
          key={item.id}
          className={cn(
            "pb-6",
            index !== cartItems.length - 1 && "border-b border-gray-200"
          )}
        >
          <CartItem item={item} />
        </li>
      ))}
    </ul>
  );
};
export default CartContent;

type CartItemProp = {
  item: CartItemType;
};
const CartItem: React.FC<CartItemProp> = ({ item }) => {
  const dispatch = useDispatch();

  function handleUpdateQuantity(quantity: number) {
    let updatedQty = {
      id: item.id,
      quantity,
    };
    dispatch(updateQuantity(updatedQty));
  }
  function handleRemoveFromCart(addToWishlist: boolean = false) {
    dispatch(removeFromCart(item.id));
    if (addToWishlist) console.log("Added to wishlist");
  }
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div className="flex items-center space-x-4">
        <CartItemImage imageSrc={item.image} altText={item.name} />
        <CartItemDetails
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      </div>
      <div className="flex items-center space-x-4 justify-between">
        <QuantityControl
          quantity={item.quantity}
          onChange={handleUpdateQuantity}
        />
        <RemoveItemDialog onRemoveItem={handleRemoveFromCart} />
      </div>
    </div>
  );
};

type CartItemImageProp = {
  imageSrc: string;
  altText: string;
};
const CartItemImage: React.FC<CartItemImageProp> = ({ imageSrc, altText }) => {
  return (
    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
      <Image
        src={imageSrc}
        alt={altText}
        fill
        sizes="80px"
        quality={85}
        className="object-cover transition-transform hover:scale-105"
      />
    </div>
  );
};

type CartItemDetailsProp = {
  name: string;
  price: number;
  quantity: number;
};
const CartItemDetails: React.FC<CartItemDetailsProp> = ({
  name,
  price,
  quantity,
}) => {
  return (
    <div>
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-base text-muted-foreground mt-1">
        ${price.toFixed(2)}
      </p>
      <dl>
        <div className="flex items-center justify-between space-x-3">
          <dt className="text-muted-foreground font-medium">Total:</dt>
          <dd className="text-muted-foreground font-medium">
            ${(price * quantity).toFixed(2)}
          </dd>
        </div>
      </dl>
    </div>
  );
};
