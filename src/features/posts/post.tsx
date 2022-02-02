import React, {FC} from "react";
import styled from "styled-components";
import { shorten } from "./utils";
import {Post} from "./types";

const PostItem: FC<Post> = ({id, title, body}) =>
  <Container key={id}>
    <Image src={`https://picsum.photos/500?random=${id}`} alt={title} />
    <User />
    <Title>{title}</Title>
    <Body>{shorten(body)}</Body>
  </Container>;

export default PostItem;


const Container = styled.div`
  box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
  transition: all .3s ease-in-out;
  border-radius: 2px;
`;
const Image = styled.img`
  max-width: 100%;
`;
const User = styled.div``;
const Title = styled.h3`
  padding: 0 1em;
  :first-letter{
    text-transform: capitalize;
  }
`;
const Body = styled.p`
  padding: 0 1em;
  :first-letter{
    text-transform: capitalize;
  }
`;
