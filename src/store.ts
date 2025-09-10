import { create } from "zustand"
import { DraftPatient, Patient } from "./types"

type PatientState = {
    patients: Patient[]
    addPatient: (data: DraftPatient) => void
}

export const usePatientStore = create<PatientState>(()=> ({
    patients: [], // tengo estado
    addPatient:(data)=>{ // tengo funcion
        console.log(data)
    }
}))