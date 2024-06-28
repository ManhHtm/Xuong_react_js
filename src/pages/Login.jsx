import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import "../assets/scss/login.scss";
import { Link, useNavigate } from "react-router-dom";
import IProducts from "../axios/axios";

const proSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, { message: "Mật khẩu tối thiểu 6 ký tự" }),
  thumbnail: z.string().optional(),
});
const Login = () => {
  const nav = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(proSchema),
  });

  const onSubmit = (data) => {
    (async () => {
      try {
        const res = await IProducts.post(`/login`, data);
        localStorage.setItem("user", JSON.stringify(res.data));
        if (confirm("Đăng ký thanh công quay lại trang đăng nhập")) {
          nav("/");
        }
      } catch (error) {
        console.log(error);
        alert(error.response.data);
      }
    })();
  };
  return (
    <div>
      <div className="container">
        <div className="login">
          <div className="title-login">
            <h1>Đăng nhập</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="" className="form-label">
                Mật khẩu
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-danger">{errors.password.message}</p>
              )}
            </div>

            <div className="reg">
              <p>
                Bạn chưa có tài khoản?{" "}
                <Link to="/register" className="text-danger">
                  Đăng ký ngay
                </Link>
              </p>
            </div>
            <br />
            <div className="d-grid gap-2">
              <button className="btn btn-success" type="submit">
                Đăng nhập
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
