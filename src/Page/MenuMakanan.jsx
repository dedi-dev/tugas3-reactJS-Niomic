import React from "react";
import Header from "./Header";
import DaftarMakanan from "../Lib/DaftarMakanan";

class MenuMakanan extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h3 style={{ textAlign: "center" }}>Daftar Makanan Favorit</h3>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              {DaftarMakanan.map((makanan) => {
                return (
                  <td>
                    <center>
                      <img
                        src={makanan.img}
                        alt="Product Makanan"
                        width="150"
                        height="100"
                      />
                      <p>{makanan.namaMakanan}</p>
                      <p>Harga: Rp. {makanan.harga}</p>
                    </center>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MenuMakanan;
