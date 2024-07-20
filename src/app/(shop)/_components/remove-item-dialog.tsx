"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash } from "lucide-react";
import React, { useState } from "react";

interface RemoveItemDialogProps {
  onRemoveItem: (addToWishlist: boolean) => void;
}

export const RemoveItemDialog: React.FC<RemoveItemDialogProps> = ({
  onRemoveItem: removeItem,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [addToWishlistChecked, setAddToWishlistChecked] = useState(false);

  const handleRemove = () => {
    removeItem(addToWishlistChecked);
    setIsDialogOpen(false);
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="text-gray-400 hover:text-red-500 transition-colors"
        >
          <Trash className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Remove from Cart</DialogTitle>
          <DialogDescription>
            Are you sure you want to remove this item from your cart?
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2 py-4">
          <Checkbox
            id="add-to-wishlist"
            checked={addToWishlistChecked}
            onCheckedChange={(checked) =>
              setAddToWishlistChecked(checked as boolean)
            }
          />
          <label
            htmlFor="add-to-wishlist"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Add to Wishlist
          </label>
        </div>
        <DialogFooter className="flex flex-col space-y-2 sm:flex-row sm:space-y-0">
          <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleRemove}>Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
