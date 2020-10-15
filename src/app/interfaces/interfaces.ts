
export interface RespuestaUsuario {
  ok: boolean;
  usuarios: Usuario[];
}

export interface Usuario {
  _id: string;
  rol: string;
  nombre: string;
  email: string;
  password: string;
  doctor: string;
  __v: number;
}

//hecho a mano
/* export interface Usuario{
    _id: string;
    __v: number;
    rol: string;
    nombre: string;
    email: string;
    password: string;
    doctor: string;
}

export interface Cita{
    _id: string;
    usuario_paciente: string;
    usuario_doctor: string;
    fecha: Date;
    resuelto: boolean;
}

export interface Tratamiento{
    _id: string;
    usuario_paciente: string;
    usuario_doctor: string;
    nombre_tratamiento: string;
    descripcion: string;
    fecha_inicio: Date;
    fecha_final: Date;
} */