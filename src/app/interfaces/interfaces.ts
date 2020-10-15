

export interface Usuario{
    _id: string;
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
}