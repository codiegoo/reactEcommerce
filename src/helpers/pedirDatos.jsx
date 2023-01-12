import stockProductos from '../data/STOCK_DATA.json'

export const pedirDatos = () => {

  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(stockProductos)
    }, 2000)
  })
}

export const pedirItemPorId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = stockProductos.find((el) => el.id === id)

      if (item) {
        resolve(item)
      }else {
        reject({
          error: 'no se encontro ese producto'
        })
      }
    }, 2000)
  })
}