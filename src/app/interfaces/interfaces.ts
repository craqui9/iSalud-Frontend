

export interface Usuario{
    rol: string;
    nombre: string;
    email: string;
    password: string;
    doctor: string;
}

export interface Cita{
    usuario_paciente: string;
    usuario_doctor: string;
    fecha: Date;
    resuelto: boolean;
}

export interface Tratamiento{
    usuario_paciente: string;
    usuario_doctor: string;
    nombre_tratamiento: string;
    descripcion: string;
    fecha_inicio: Date;
    fecha_final: Date;
}