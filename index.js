import productManager from "./productManager.js";

const manager = new productManager()

const env = async () => {
  let primerProducto = await manager.getProducts();
  console.log(primerProducto);
  
  const product = {
    title: "producto prueba",
    description:"Este es un producto prueba",
    price:200,
    thumbnail:"Sin imagen",
    code:"abc123",
    stock:25,

  }

  let result = await manager.addProduct(product)
  console.log(result)

  let result2 = await manager.addProduct(product)
  console.log(result2)

    const changes = {
        price:300,
        stock:15,
    }
    await manager.updateProduct(2,changes)
  
}
env()