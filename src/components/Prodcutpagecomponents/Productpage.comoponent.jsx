import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { device } from "../../device";
import ProductCard from "./product.card";
import Button from "@mui/material/Button";
import { sortProduct } from "../../features/product/productSlice";
import { Heading } from "../PlantCollection";
import FiltterMenu from "./filter.menu";
import { Pagination } from "@mui/material";
import gsap from "gsap";
import { CartAlert } from "../../features/cart/cartAlert";

const Cont = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;

  @media ${device.mobileS} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.mobileM} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SortFlex = styled.div`
  display: flex;
  justify-content: right;
  gap: 1%;
`;

export const Banner = styled.img`
  width: 100%;
`;

export function Paginate(array, page_size, page_number) {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}

export const ProductPageComponent = () => {
  const dispatch = useDispatch(),
    [flag, setFlag] = useState(false),
    [strength, setstrength] = useState(((20 / 6) | 0) + 1),
    [page, setpage] = useState(1),
    imgref = useRef();

  const Products = useSelector((state) => {
    const all = state.product.product;
    let sortState = state.product.sort;
    let filterState = state.product.fillter;

    if (sortState) {
      if (filterState) {
        let tmp = [...all].filter((el) => el.category === filterState);
        if (sortState === "ase") {
          return tmp.sort((a, b) => b.price - a.price);
        } else if (sortState === "dse") {
          return tmp.sort((a, b) => a.price - b.price);
        }
      } else {
        if (sortState === "ase") {
          return [...all].sort((a, b) => b.price - a.price);
        } else if (sortState === "dse") {
          return [...all].sort((a, b) => a.price - b.price);
        }
      }
    } else if (filterState) {
      return [...all].filter((el) => el.category === filterState);
    } else {
      return all;
    }
  });

  useEffect(() => {
    gsap.from(imgref.current, {
      opacity: 0,
      duration: 1.1,
      delay: 0.9,
    });

    let size = ((Products.length / 6) | 0) + 1;
    setstrength(size);
  }, [Products.length]);

  // console.log(Products);
  return (
    <>
      <br></br>
      <Banner
        ref={imgref}
        src="https://img.freepik.com/free-vector/hand-drawn-flat-design-gardening-twitch-banner_23-2149354617.jpg?w=2000"
      ></Banner>

      <br></br>
      <br></br>
      <Heading>Products</Heading>
      <br></br>

      <SortFlex>
        <Button
          variant="contained"
          onClick={(e) => {
            if (!flag) {
              dispatch(sortProduct("ase"));
            } else {
              dispatch(sortProduct("dse"));
            }
            setFlag(!flag);
          }}
        >
          sort
        </Button>
        <FiltterMenu></FiltterMenu>
      </SortFlex>
      <br></br>

      <Cont>
        {Products
          ? Paginate(Products, 6, page).map((el, idx) => {
              return (
                <ProductCard
                  key={el.id}
                  productname={el.title}
                  productPrice={el.price}
                  productimg={el.image}
                  productdescription={el.description}
                  whole={el}
                  catagory={el.category}
                  rating={el.rating.rate}
                />
              );
            })
          : ""}
      </Cont>
      <br></br>
      <SortFlex>
        <Pagination
          count={strength}
          page={page}
          onChange={(e, value) => {
            console.log(value);
            setpage(value);
          }}
        ></Pagination>
      </SortFlex>
      <CartAlert></CartAlert>
    </>
  );
};
