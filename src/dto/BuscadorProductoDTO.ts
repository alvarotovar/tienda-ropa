import { CategoriasProductos } from "../constantes/CategoriasProductosEnum";

export class BuscadorProductoDTO{
    public texto : string;
    public categoiaSeleccionada : CategoriasProductos;
}