import { ReactNode } from "react";

export interface Product {
  id: string;
  flavor: string;
  tagline: string;
  accentColor: string;
  bgColor: string;
  sizes: SizeOption[];
  img?: {
    small: string | undefined;
    large: string | undefined;
  };
}

export type SizeOption = {
  size: Size;
  label: string;
  price: string;
};

export type Size = "200ml" | "375ml";
export type Filter = "all" | Size;
