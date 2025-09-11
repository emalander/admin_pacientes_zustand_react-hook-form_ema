import { create } from "zustand"
import { v4 as uuidv4 } from 'uuid'
import { DraftPatient, Patient } from "./types"

type PatientState = {
  patients: Patient[]
  activeId: Patient['id']
  addPatient: (data: DraftPatient) => void
  deletePatient: (id: Patient['id']) => void
  getPatientById: (id: Patient['id']) => void
}

const createPatient = (patient: DraftPatient): Patient => {
  return { ...patient, id: uuidv4() }
}


export const usePatientStore = create<PatientState>((set) => ({
  patients: [], // tengo estado
  activeId:'',
  addPatient: (data) => { // tengo funcion
    const newPatient = createPatient(data)
    set((state) => ({
      patients: [...state.patients, newPatient]
    }))
  },
  deletePatient: (id) => {
    console.log(id)
    set((state)=> ({
      patients: state.patients.filter(patient => patient.id !== id)
    }))
  },
  getPatientById:(id)=> {
    console.log(id)
    set(()=> ({
      activeId:id,
    }))
  }
}))