import React from "react";
import {useGetUserByIDQuery} from "./usersApi";

export default function User({id, ...rest}: {id: number}) {
  const { data } = useGetUserByIDQuery(id);
  return <div {...rest}>by {data ? data.name : 'user'}</div>
};
