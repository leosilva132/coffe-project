import { CreditCard } from 'phosphor-react'
import { PayElement, PayelementActive } from './styles'

interface PaymodeProps {
  type: string
  isActive: boolean
}

export function PayMode({ type, isActive }: PaymodeProps) {
  return isActive ? (
    <PayelementActive>
      <CreditCard size={16} color="#8047F8" />
      {type}
    </PayelementActive>
  ) : (
    <PayElement>
      <CreditCard size={16} color="#8047F8" />
      {type}
    </PayElement>
  )
}
