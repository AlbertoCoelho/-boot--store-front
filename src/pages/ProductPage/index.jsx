import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { getProducts, addProductToCart } from "../../services/api";
import {
  Container,
  Wrapper,
  Logo,
  NavigateBar,
  ProductContainer,
  ProductInfo,
} from "./style";

const ProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    (async () => {
      const response = await getProducts();
      setProduct(response.data.filter((item) => item._id === id));
    })();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Logo>
          <p>Card Game Store</p>
        </Logo>
        <NavigateBar>
          <Link to="/">
            <ion-icon name="storefront"></ion-icon>
          </Link>
          <Link to="/sign-in">
            <ion-icon name="person-circle"></ion-icon>
          </Link>
          <Link to="/carrinho">
            <ion-icon name="cart"></ion-icon>
          </Link>
        </NavigateBar>
        {product.length ? (
          <ProductContainer>
            <img src={product[0].img} alt={product[0].name} />
            <ProductInfo>
              <p>{product[0].name}</p>
              <p className="price">
                R${product[0].price.toString().replace(".", ",")}
              </p>
              <button
                onClick={() => addProductToCart({ productId: product[0]._id })}
              >
                Adicionar ao carrinho
              </button>
            </ProductInfo>
          </ProductContainer>
        ) : (
          <></>
        )}
      </Container>
    </Wrapper>
  );
};

export default ProductPage;
