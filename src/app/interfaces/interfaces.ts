
//----------------------------USUARIO----------------------------
export interface RespuestaUsuario {
  ok: boolean;
  usuarios: Usuario[];
}

export interface Usuario {
  _id?: string;
  rol?: string;
  nombre?: string;
  dni?: string;
  password?: string;
  doctor?: string;
  fecha_nacimiento?: string;
  sexo?: string;
  __v?: number;
}
//--------------------------------------------------------
//----------------------------NOTICIA----------------------------
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
//--------------------------------------------------------
//----------------------------CITA----------------------------
export interface RespuestaCita {
  ok: boolean;
  citas: Cita[];
}

export interface Cita {
  resuelto?: boolean;
  _id?: string;
  usuario_paciente?: string;
  usuario_doctor?: string;
  nombre_paciente?: string;
  fecha?: string;
  hora?: string;
  motivo?: string;
  identificador?: number;
  __v?: number;
}

//crear las interfaces necesarias usando el JSON to TS

