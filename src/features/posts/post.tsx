import React, {FC} from "react";
import styled from "styled-components";
import { shorten } from "./utils";
import {Post} from "./types";
import User from "../users/user";

const PostItem: FC<Post> = ({id, userId, title, body}) =>
  <Container key={id}>
    <Image src={`https://picsum.photos/500?random=${id}`} alt={title} />
    <Text>
      <Title>{title}</Title>
      <StyledUser id={userId} />
      <Body>{shorten(body)}</Body>
    </Text>
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
const Text = styled.article`
  padding: 0 1em;
`;
const StyledUser = styled(User)`
  font-size: .9em;
  color: gray;
`;
const Title = styled.h3`
  :first-letter{
    text-transform: capitalize;
  }
`;
const Body = styled.p`
  :first-letter{
    text-transform: capitalize;
  }
`;
