import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutContainer = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
  });

  const funcionDelFormulario = (evento) => {
    evento.preventDefault();

    // AXIOS.POST("dasdasdas", userData)
    console.log(userData);

    // ACA QUIERO VOLVER AL HOME
    navigate("/");
  };

  const funcionDeLosInput = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form onSubmit={funcionDelFormulario}>
        <input
          type="text"
          placeholder="nombre"
          name="name"
          onChange={funcionDeLosInput}
        />
        <input
          type="text"
          placeholder="apellido"
          name="lastName"
          onChange={funcionDeLosInput}
        />
        <button type="submit">Enviar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default CheckoutContainer;
