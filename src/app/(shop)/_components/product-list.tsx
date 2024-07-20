import {
  CompactCard,
  DetailedCard,
  GridCard,
  ListCard,
} from "@/components/shared/product-cards";
import { mockProducts } from "@/data/constants";
import { ProductListViewNameEnum } from "@/types";

const ProductList = ({
  viewOption,
}: {
  viewOption: ProductListViewNameEnum;
}) => {
  switch (viewOption) {
    case ProductListViewNameEnum.GridView:
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {mockProducts.map((product) => {
            return <GridCard product={product} key={product.id} />;
          })}
        </div>
      );
    case ProductListViewNameEnum.CompactView:
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {mockProducts.map((product) => {
            return <CompactCard product={product} key={product.id} />;
          })}
        </div>
      );
    case ProductListViewNameEnum.ListView:
      return (
        <div className="flex flex-col gap-2">
          {mockProducts.map((product) => (
            <ListCard product={product} key={product.id} />
          ))}
        </div>
      );
    case ProductListViewNameEnum.DetailedView:
      return (
        <div className="flex flex-col gap-6">
          {mockProducts.map((product) => (
            <DetailedCard product={product} key={product.id} />
          ))}
        </div>
      );
    default:
      return null;
  }
};
export default ProductList;
