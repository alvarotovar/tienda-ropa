import { Producto } from "./Producto";
import { CategoriasProductos } from "../constantes/CategoriasProductosEnum";
import { BuscadorProductoDTO } from "../dto/BuscadorProductoDTO";

export class HomeModel{
    
    public categorias : CategoriasProductos[];
    public buscador : BuscadorProductoDTO;

    public productos : Producto[];
}