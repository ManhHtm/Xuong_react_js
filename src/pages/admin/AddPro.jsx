import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import style from "../../assets/module/addPro.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";
import IProducts from "../../axios/axios";

const proSchema = z.object({
  title: z.string().min(1, { message: "Tên sản phẩm không được bỏ trống" }),
  price: z.number().min(0, { message: "Giá sản phẩm không được nhỏ hơn 0" }),
  description: z.string().optional(),
  thumbnail: z.string().optional(),
});
const AddPro = () => {
  const { dispatch } = useContext(ProductsContext);
  const nav = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(proSchema),
  });
  //them
  const onSubmit = (data) => {
    (async () => {
      try {
        const res = await IProducts.post("/products", data);
        dispatch({ type: "ADD_PRODUCTS", payload: res.data });
        if (confirm("Thêm thành công quay lại trang dánh sách")) {
          nav("/admin/listPro");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <div>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Thêm sản phẩm</h1>
        </div>
        <div className={style.link}>
          <Link to="/admin/listPro">Danh sách sản phẩm</Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="" className="form-label">
              Tên sản phẩm
            </label>
            <input
              type="text"
              name="title"
              className="form-control"
              {...register("title", { required: true })}
            />
            {errors.title && (
              <p className="text-danger">{errors.title.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="" className="form-label">
              Gia sản phẩm
            </label>
            <input
              type="number"
              name="price"
              className="form-control"
              {...register("price", { valueAsNumber: true })}
            />
            {errors.price && (
              <p className="text-danger">{errors.price.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="" className="form-label">
              Mô tả
            </label>
            <input
              className="form-control"
              name="description"
              rows={4}
              {...register("description", { required: true })}
            ></input>
          </div>

          <div>
            <label htmlFor="" className="form-label">
              Ảnh sản phẩm
            </label>
            <input
              type="text"
              name="thumbnail"
              className="form-control"
              {...register("thumbnail", { required: true })}
            />
          </div>
          <br />
          <div className="d-grid gap-2">
            <button className="btn btn-success" type="submit">
              Thêm sản phẩm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPro;
