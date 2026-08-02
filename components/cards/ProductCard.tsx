import { Product, SizeOption } from "@/types/products";
import { Eye, ShoppingBagIcon, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function ProductCard({
  product,
  sizeOption,
  whatsAppNumber,
}: {
  product: Product;
  sizeOption: SizeOption;
  whatsAppNumber: string;
}) {
  const waMessage = encodeURIComponent(
    `Hi Beezips! I'd like to order the ${product.flavor} juice - ${sizeOption.label} (${sizeOption.size}). Can you confirm availability?`,
  );
  const [imgError, setImgError] = useState(false);

  return (
    <div className=" rounded-xl border border-ink/10 overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Placeholder image area — replace contents with <Image> once you have real photos */}
      <div
        className="relative h-36 sm:h-56 flex items-center justify-center overflow-hidden "
        // style={{ backgroundColor: product.bgColor }}
      >
        <ProductImage
          src={
            sizeOption.size === "200ml"
              ? (product.img?.small ?? "/product-placeholder.png")
              : (product.img?.large ?? "/product-placeholder.png")
          }
          alt={product.flavor}
        />

        {/* Size badge */}
        <span className="absolute top-8 right-0 bg-honey text-ink text-xs font-700 px-3 py-1 rounded-sm">
          {sizeOption.size}
        </span>
      </div>

      {/* Card body */}
      <div className="p-4 sm:p-6 flex flex-col flex-1 text-ink">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="font-display text-lg sm:text-xl font-700 leading-tight">
            {product.flavor}
          </h3>
          <span className="text-xs font-700 uppercase tracking-wide mt-1 whitespace-nowrap">
            {sizeOption.label}
          </span>
        </div>

        <p className="text-xs sm:text-sm mb-2 sm:mb-4 leading-relaxed">
          {product.tagline}
        </p>

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="font-display text-lg sm:text-2xl font-700">
              {sizeOption.price}
            </span>
            {/* <span className="text-xs">per bottle</span> */}
          </div>
          <div className="flex gap-2 justify-center">
            <a
              href={`https://wa.me/${whatsAppNumber}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-3/4 bg-ink/80 text-cream font-700 text-sm py-2 rounded-lg hover:bg-ink hover:text-cream transition-colors"
            >
              <ShoppingCart size={20} />
              {/* <WhatsAppIcon className="w-4 h-4" /> */}
              Buy now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const ProductImage = ({ src, alt }: { src: string; alt: string }) => {
  const [imgSrc, setImgSrc] = useState(src ?? "/product-placeholder.png");
  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className="object-contain"
      onError={() => setImgSrc("/product-placeholder.png")}
    />
  );
};

export default ProductCard;
