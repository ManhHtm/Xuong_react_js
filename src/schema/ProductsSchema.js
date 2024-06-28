import * as z from "zod";
export const proSchema = z.object({
  title: z.string().min(1, { message: "Tên sản phẩm không được bỏ trống" }),
  price: z.number().min(0, { message: "Giá sản phẩm không được nhỏ hơn 0" }),
  description: z.string().optional(),
  thumbnail: z.any().optional(),
});
