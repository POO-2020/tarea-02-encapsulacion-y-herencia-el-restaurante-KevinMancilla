import Producto from './producto.js';
import Precio from './precio.js';

export default class ElementoPedido {
  /**
   *
   * @param {Producto} producto Producto que se va a comprar
   * @param {number} cantidad Cantidad del producto que se va a comprar
   */
  constructor(cantidad, producto) {
    this._cantidad = cantidad;
    this._producto = producto;
  }

  getPrecio(){
    return this._producto.getPrecio()
  }

  getCantidad(){
    return this._cantidad
}

  getDescripcion() {
    let costoTotal = new Precio(this._cantidad * this._producto.getPrecio());
    return `${this._cantidad} x ${this._producto.getNombre()} ${costoTotal.getPrecio()}`;
  }
}
