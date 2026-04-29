function Historial({ historial }) {
  return (
    <div>
      <h2>Historial</h2>

      <ul>
        {historial.map((item, index) => ( /*recorrer elementos de historial*/
          <li key={index}>{item}</li> /*crear un elemento de la lista por cada operaicon. index es posicion en la lista
           e item muestra el texto*/
        ))}
      </ul>
    </div>
  );
}

export default Historial;