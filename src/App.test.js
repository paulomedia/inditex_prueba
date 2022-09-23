import { render } from "@testing-library/react";
import Footer from "./page/footer";

describe("Renderizados", () => {
  test("Renderizado del footer", () => {
    render(<Footer />);
  });
});

describe("Comparar", () => {
  const product = {
    id: "ZmGrkLRPXOTpxsU4jjAcv",
    brand: "Acer",
    model: "Iconia Talk S",
    price: "170",
    imgUrl:
      "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg",
  };
  const product2 = {
    id: "ZmGrkLRPXOTpxsU4jjAcv",
    brand: "Acer",
    model: "Iconia Talk S",
    price: "170",
    imgUrl:
      "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg",
  };

  test("Comprobamos que los objectos son iguales", () => {
    expect(product).toEqual(product2);
  });
});

describe("Verificar el tamaño del array", () => {
  test("getAll test", async () => {
    const data = [
      {
        id: "ZmGrkLRPXOTpxsU4jjAcv",
        brand: "Acer",
        model: "Iconia Talk S",
        price: "170",
        imgUrl:
          "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg",
      },
      {
        id: "cGjFJlmqNPIwU59AOcY8H",
        brand: "Acer",
        model: "Liquid Z6 Plus",
        price: "250",
        imgUrl:
          "https://front-test-api.herokuapp.com/images/cGjFJlmqNPIwU59AOcY8H.jpg",
      },
      {
        id: "8hKbH2UHPM_944nRHYN1n",
        brand: "Acer",
        model: "Liquid Z6",
        price: "120",
        imgUrl:
          "https://front-test-api.herokuapp.com/images/8hKbH2UHPM_944nRHYN1n.jpg",
      },
    ];

    expect(data).toHaveLength(data.length);
  });
});
