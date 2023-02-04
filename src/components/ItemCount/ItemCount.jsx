import { useState } from "react"

export const ItemCount = ({max, cantidad, setCantidad, onAdd}) => {

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }
  const handleSumar = () => {
    cantidad < max && setCantidad(cantidad + 1)
  }
  return(
    <div className="itemCountContain">
      <button onClick={handleRestar}>-</button>
      <span>{cantidad} {cantidad === 1 ? 'Unidad' : 'Unidades'}</span>
      <button onClick={handleSumar}>+</button>

      <button onClick={onAdd}>add Car</button>
    </div>
  )
}