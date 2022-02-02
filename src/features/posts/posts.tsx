import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { useGetPostsQuery } from "./postsAPI";
import loader from "./Pendulum.gif";
import PostItem from "./post";

export default function Posts() {
  const { data, error, isLoading } = useGetPostsQuery();
  const [filterValue, setFilterValue] = useState('');
  const [displayData, setDisplayData] = useState(data);
  useEffect(() => {
    const value = filterValue.trim(). toLocaleLowerCase();
    if (value.length && data) {
      setDisplayData(data.filter(post=>
        post.title.toLocaleLowerCase().includes(value) || post.body.toLocaleLowerCase().includes(value)
      ))
    } else {
      setDisplayData(data);
    }
  },[filterValue, data]);

  return (
    <div>
      {error ? (
        <Error>We could not load the posts</Error>
      ) : isLoading ? (
        <Loading><img src={loader} alt="loading..."/></Loading>
      ) : displayData ? (
        <>
          <Header>
            <Title>Blog posts</Title>
            <Filter>
              <Input value={filterValue} onInput={e=>{setFilterValue(e.currentTarget.value)}} type="text"/>
              <Clear show={!!filterValue} onClick={()=>setFilterValue('')}>Clear</Clear>
            </Filter>
          </Header>
          <Container>
            {displayData.map(post => <PostItem {...post} />)}
          </Container>
        </>
      ) : null}
    </div>
  )
};

const Error = styled.div`
  border: 1px solid #a80000;
  box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
  background: #a80000;
  color: white;
  padding: 1em;
  width: 20em;
  margin: 1em auto;
  text-align: center;
`;
const Loading = styled.div`
  text-align: center;
  padding: 1em;
`;
const Header = styled.header`
  text-align: center;
`;
const Filter = styled.div`
  margin: 2em;
  display: flex;
  justify-content: center;
`;
const Title = styled.h1`
`;
const Input = styled.input`
  width: 20em;
  ${(props)=>!!props.value && css`
    width: 14em;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  ` };
`;
const Clear = styled.button<{ show: boolean }>`
  width: 6em;
  display: ${(props)=>props.show ? 'initial' : 'none' };
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: 0;
}
`;
const Container = styled.div`
  max-width: 2000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
  padding: 0 1em;
  grid-auto-rows: minmax(100px, auto);
  @media (max-width: 100em) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 55em) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 35em) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
