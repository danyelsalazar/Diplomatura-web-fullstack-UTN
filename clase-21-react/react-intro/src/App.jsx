//los parametros en react se llaman prop -> propiedad
function App({nombre}) {

  return (
    <>
      <h1>Introduccion a react con {nombre}</h1>
      <p>probando</p>
    </>
  )
}

//expor por defecto
export default App

//export nombrado, lo obligo a que se llame de tal manera
// export {App}