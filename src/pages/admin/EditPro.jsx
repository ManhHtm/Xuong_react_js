import { zodResolver } from "@hookform/resolvers/zod";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import style from "../../assets/module/addPro.module.scss";
import IProducts, { getProducts } from "../../axios/axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";

const proSchema = z.object({
  title: z.string().min(1, { message: "Tên sản phẩm không được bỏ trống" }),
  price: z.number().min(0, { message: "Giá sản phẩm không được nhỏ hơn 0" }),
  description: z.string().optional(),
  thumbnail: z.string().optional(),
});
const EditPro = () => {
  const { dispatch } = useContext(ProductsContext);
  const nav = useNavigate();
  const { id } = useParams();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(proSchema),
  });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await IProducts.get(`/products/${id}`);
        reset(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const onSubmit = (data) => {
    (async () => {
      try {
        await IProducts.patch(`/products/${id}`, data);
        dispatch({ type: "EDIT_PRODUCTS", payload: { id, ...data } });
        if (confirm("Sửa thành công, quay lại trang danh sách ")) {
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
          <h1>Sửa sản phẩm</h1>
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
              Sửa sản phẩm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPro;
