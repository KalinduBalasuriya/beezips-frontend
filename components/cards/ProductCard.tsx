import { Product, SizeOption } from "@/types/products";
import { Eye } from "lucide-react";
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
    <div className="bg-cream rounded-xl border border-ink/10 overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Placeholder image area — replace contents with <Image> once you have real photos */}
      <div
        className="relative h-56 flex items-center justify-center overflow-hidden "
        // style={{ backgroundColor: product.bgColor }}
      >
        <Image
          src={
            sizeOption.size === "200ml"
              ? (product.img?.small ?? "/product-placeholder.png")
              : (product.img?.large ?? "/product-placeholder.png")
          }
          alt={product.flavor}
          fill
          className="object-contain"
        />
        {/* <div className="flex flex-col items-center gap-3 opacity-80">
          <div className="w-20 h-20">{product.icon}</div>
          <span
            className="text-xs font-700 uppercase tracking-widest"
            style={{ color: product.accentColor }}
          >
            Placeholder image
          </span>
        </div> */}

        {/* Size badge */}
        <span className="absolute top-3 right-3 bg-honey text-ink text-xs font-700 px-2.5 py-1 rounded-md">
          {sizeOption.size}
        </span>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1 text-ink">
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="font-display text-xl font-700 leading-tight">
            {product.flavor}
          </h3>
          <span className="text-xs font-700 uppercase tracking-wide mt-1 whitespace-nowrap">
            {sizeOption.label}
          </span>
        </div>

        <p className="text-sm mb-4 leading-relaxed">{product.tagline}</p>

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="font-display text-2xl font-700">
              {sizeOption.price}
            </span>
            <span className="text-xs">per bottle</span>
          </div>
          <div className="flex gap-2 justify-center">
            <a
              href={`https://wa.me/${whatsAppNumber}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-2/3 border border-ink/30 hover:border-ink text-ink font-700 text-sm py-2 rounded-lg hover:bg-ink hover:text-cream transition-colors"
            >
              {/* <WhatsAppIcon className="w-4 h-4" /> */}
              Buy now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default ProductCard;
