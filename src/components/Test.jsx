// import React, { useContext, useEffect, useState } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import style from "../assets/module/addPro.module.scss";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import IProducts from "../axios/axios";
// import { ProductsContext } from "./../contexts/ProductsContext";
// import { proSchema } from "../schema/ProductsSchema";
// const { VITE_CLOUD_NAME, VITE_UPLOAD_PRESET } = import.meta.env;

// const ProductsForm = () => {
//   const { id } = useParams();
//   const { dispatch } = useContext(ProductsContext);
//   const nav = useNavigate();
//   const [thumbnailUrl, setThumbnailUrl] = useState(null);

//   // State để lưu trữ lựa chọn của người dùng
//   const [thumbnailOption, setThumbnailOption] = useState("keep");

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm({
//     resolver: zodResolver(proSchema),
//   });

//   useEffect(() => {
//     if (id) {
//       (async () => {
//         const { data } = await IProducts.get(`/products/${id}`);
//         console.log(data);
//         reset(data);
//         setThumbnailUrl(data.thumbnail);
//       })();
//     }
//   }, [id, reset]);

//   const uploadImage = async (file) => {
//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", VITE_UPLOAD_PRESET);

//     const response = await fetch(
//       `https://api.cloudinary.com/v1_1/${VITE_CLOUD_NAME}/image/upload`,
//       {
//         method: "POST",
//         body: formData,
//       }
//     );
//     const data = await response.json();
//     console.log(data);
//     return data.secure_url;
//   };

//   const onSubmit = async (product) => {
//     try {
//       let updatedProduct = { ...product };
//       // Kiểm tra lựa chọn của admin và xử lý tương ứng
//       switch (thumbnailOption) {
//         case "upload":
//           // Xử lý upload ảnh nếu admin chọn upload từ local
//           if (product.thumbnail && product.thumbnail[0]) {
//             const thumbnailUrl = await uploadImage(product.thumbnail[0]);
//             updatedProduct = { ...updatedProduct, thumbnail: thumbnailUrl };
//           }
//           break;
//         default:
//         // Giữ nguyên ảnh cũ khi không thay đổi
//         // Hoặc mặc định khi người dùng chọn "link ảnh online"
//         // Tôi sử dụng switch case để dễ mở rộng cho các tình huống trong tương lai
//       }

//       if (id) {
//         const { data } = await IProducts.patch(
//           `/products/${id}`,
//           updatedProduct
//         );
//         dispatch({
//           type: "UPDATE_PRODUCT",
//           payload: { id, product: updatedProduct },
//         });
//         console.log(data);
//       } else {
//         const { data } = await IProducts.post("/products", updatedProduct);
//         dispatch({ type: "ADD_PRODUCT", payload: data });
//         if (confirm("Thêm thành công, quay lại trang danh sách sản phẩm")) {
//           nav("/admin/listPro");
//         }
//         // console.log(data);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <div>
//       <div className={style.container}>
//         <div className={style.title}>
//           <h1>{id ? "Sửa sản phẩm" : "Thêm sản phẩm"}</h1>
//         </div>
//         <div className={style.link}>
//           <Link to="/admin/listPro">Danh sách sản phẩm</Link>
//         </div>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div>
//             <label htmlFor="" className="form-label">
//               Tên sản phẩm
//             </label>
//             <input
//               type="text"
//               name="title"
//               className="form-control"
//               {...register("title", { required: true })}
//             />
//             {errors.title && (
//               <p className="text-danger">{errors.title.message}</p>
//             )}
//           </div>

//           <div>
//             <label htmlFor="" className="form-label">
//               Gia sản phẩm
//             </label>
//             <input
//               type="number"
//               name="price"
//               className="form-control"
//               {...register("price", { valueAsNumber: true })}
//             />
//             {errors.price && (
//               <p className="text-danger">{errors.price.message}</p>
//             )}
//           </div>

//           <div>
//             <label htmlFor="" className="form-label">
//               Mô tả
//             </label>
//             <input
//               className="form-control"
//               name="description"
//               rows={4}
//               {...register("description", { required: true })}
//             ></input>
//           </div>

//           <div className="mb-3">
//             <label htmlFor="thumbnailOption" className="form-label">
//               Choose Thumbnail Option
//             </label>
//             <select
//               className="form-control"
//               id="thumbnailOption"
//               value={thumbnailOption}
//               onChange={(e) => setThumbnailOption(e.target.value)}
//             >
//               <option value="keep">Keep Current Thumbnail</option>
//               <option value="link">Add Thumbnail from Link</option>
//               <option value="upload">Upload Thumbnail from Local</option>
//             </select>
//           </div>

//           <div className="mb-3">
//             <label htmlFor="thumbnail" className="form-label">
//               Thumbnail
//             </label>
//             {thumbnailOption === "link" && (
//               <input
//                 type="text"
//                 className="form-control"
//                 id="thumbnail"
//                 {...register("thumbnail")}
//               />
//             )}
//             {thumbnailOption === "upload" && (
//               <input
//                 type="file"
//                 className="form-control"
//                 id="thumbnail"
//                 {...register("thumbnail", { required: true })}
//               />
//             )}
//             {errors.thumbnail?.message && (
//               <p className="text-danger">{errors.thumbnail?.message}</p>
//             )}
//             {thumbnailUrl && (
//               <img
//                 src={thumbnailUrl}
//                 alt="Product Thumbnail"
//                 style={{ maxWidth: "200px", marginTop: "10px" }}
//               />
//             )}
//           </div>
//           <br />
//           <div className="d-grid gap-2">
//             <button className="btn btn-success" type="submit">
//               {id ? "Sửa sản phẩm" : "Thêm sản phẩm"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ProductsForm;

// const onSubmit = (data) => {
//   if (id) {
//     (async () => {
//       try {
//         const res = await IProducts.patch(`/products/${id}`, data);
//         console.log(res);
//         dispatch({ type: "UPDATE_PRODUCTS", payload: res.data });
//         if (confirm("Sửa thành công quay lại trang dánh sách")) {
//           nav("/admin/listPro");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     })();
//   } else {
//     (async () => {
//       try {
//         const res = await IProducts.post("/products", data);
//         dispatch({ type: "ADD_PRODUCTS", payload: res.data });
//         if (confirm("Thêm thành công quay lại trang dánh sách")) {
//           nav("/admin/listPro");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     })();
//   }
// };
