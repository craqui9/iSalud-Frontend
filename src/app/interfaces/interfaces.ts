
export interface RespuestaUsuario {
  ok: boolean;
  usuarios: Usuario[];
}

export interface Usuario {
  _id?: string;
  rol?: string;
  nombre?: string;
  email?: string;
  password?: string;
  doctor?: string;
  __v?: number;
}

export interface RespuestaNoticia {
  ok: boolean;
  noticias: Usuario[];
}

export interface Noticia {
  _id?: string;
  titulo?: string;
  descripcion?: string;
  __v?: number;
}

//crear las interfaces necesarias usando el JSON to TS

