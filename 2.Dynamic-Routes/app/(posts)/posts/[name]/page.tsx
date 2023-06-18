import React from "react";

// http://localhost:3001/posts/name => success

// http://localhost:3001/posts/name/sub => ERROR

interface Param {
  params: {
    name: string;
  };
  searchParams: any;
}

export default function PostDetail({ params, searchParams }: Param) {
  console.log(">>>>>", params); // >>>>> { name: 'hieu' }
  // or
  const { name } = params;

  console.log(">>>>>", name); // hieu

  // option
  // if : http://localhost:3001/posts/hieu?id=phanchihieu
  console.log("searchParams  >>>>>>", searchParams); // >>>>>> { id: 'phanchihieu' }

  // if : http://localhost:3001/posts/hieu?id=phanchihieu&working=true
  console.log("searchParams  >>>>>>", searchParams); //  >>>>>> { id: 'phanchihieu', working: 'true' }

  return (
    <div>
      <h1>PostDetail name is {params.name}</h1>
      <h1>PostDetail name is {name}</h1>
    </div>
  );
}
