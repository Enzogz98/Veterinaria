import React from 'react'
import { useState,useEffect } from 'react'
const MainPacientes = () => {
  return (
    <>
        <div>
            <div>
                <input type="text" />
                <button>Buscar</button>
            </div>
            <br />
            <div>
                <button>Agregar Cliente</button>
                <button>Agregar Paciente</button>
            </div>
            <br /><hr />
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Especie</th>
                            <th>Raza</th>
                            <th>Edad</th>
                            <th>Estado</th>
                            <th>Dueño</th>
                            <th>Dni Dueño</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default MainPacientes