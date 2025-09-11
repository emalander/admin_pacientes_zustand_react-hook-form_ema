

type PatientDetailItemProps = {
    label:string,
    info:string
}

export default function PatientDetailItem({label, info}:PatientDetailItemProps) {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">{label}: {''}
    <span className="font-normal normal-case">
        {info}
    </span>
    </p>
  )
}
