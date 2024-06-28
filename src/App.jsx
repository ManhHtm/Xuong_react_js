import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";

import Home from "./pages/Home";
import { useEffect, useState } from "react";
import IProducts, { getProducts } from "./axios/axios";

import Dashboard from "./pages/admin/Dashboard";
import Detail from "./pages/Detail";
import ListPro from "./pages/admin/ListPro";
import AddPro from "./pages/admin/AddPro";
import EditPro from "./pages/admin/EditPro";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import LayoutClient from "./layout/LayoutClient";
import LayoutAdmin from "./layout/LayoutAdmin";
import ProductsForm from "./components/ProductsForm";
import PrivateRouter from "./components/PrivateRouter";

function App() {
  const nav = useNavigate();
  const [products, setProducts] = useState([]);

  // //Them
  // const handleSubmit = (data) => {
  //   (async () => {
  //     try {
  //       const res = await IProducts.post("/products", data);
  //       setProducts([...products, res.data]);
  //       if (confirm("Thêm thành công quay lại trang dánh sách")) {
  //         nav("/admin/listPro");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // };

  // //xoa

  // const handleDel = (id) => {
  //   (async () => {
  //     try {
  //       if (confirm("Xác nhận xóa sản phẩm")) {
  //         await IProducts.delete(`/products/${id}`);
  //         const newData = products.filter((item) => item.id !== id && item);
  //         setProducts(newData);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // };

  // //edit
  // const handleEdit = (data) => {
  //   (async () => {
  //     try {
  //       await IProducts.patch(`/products/${data.id}`, data);
  //       const newData = await getProducts();
  //       setProducts(newData);
  //       if (confirm("Sửa thành công, quay lại trang danh sách ")) {
  //         nav("/admin/listPro");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // };
  return (
    <>
      <main>
        <Routes>
          {/* client */}
          <Route patch="/" element={<LayoutClient />}>
            <Route path="/" element={<Home />} />
            <Route path="/products-detail/:id" element={<Detail />} />
          </Route>

          {/*admin  */}
          <Route path="/dashboard" element={<PrivateRouter />} />
          <Route patch="/dashboard" element={<LayoutAdmin />}>
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/admin/listPro" element={<ListPro />} />
            <Route path="/admin/addPro" element={<ProductsForm />} />
            <Route path="/admin/editPro/:id" element={<ProductsForm />} />
            {/* <Route path="/admin/addPro" element={<AddPro />} />
            <Route path="/admin/editPro/:id" element={<EditPro />} /> */}
          </Route>

          {/* login -register */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* not found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
