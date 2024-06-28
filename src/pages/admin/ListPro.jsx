import React, { useContext } from "react";
import style from "../../assets/module/listPro.module.scss";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";
import IProducts from "../../axios/axios";
const ListPro = () => {
  const { state, dispatch } = useContext(ProductsContext);
  // console.log(data);
  const delPro = async (id) => {
    // console.log(id);
    try {
      if (confirm("Xac nhan xoa san pham")) {
        await IProducts.delete(`/products/${id}`);
        dispatch({ type: "DELETE_PRODUCTS", payload: id });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className={style.container}>
        <div className={style.title}>
          <h1>Danh sách sản phẩm</h1>
        </div>
        <div className={style.link}>
          <Link to="/admin/addPro">Thêm sản phẩm</Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Stt</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {state.products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>{p.price}</td>
                <td>{p.description}</td>
                <td>
                  <img src={p.thumbnail} alt="" />
                </td>
                <td>
                  <Link className="btn btn-dark" to={`/admin/editPro/${p.id}`}>
                    Sửa
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => delPro(p.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListPro;
