import React from "react";

// http://localhost:3001/blogs/name => success

// http://localhost:3001/blogs/name/sub => success

interface Param {
  params: {
    blog: string;
  };
}

export default function BlogDetail({ params }: Param) {
  const { blog } = params;

  // if :  http://localhost:3001/blogs/hieu => success
  console.log(">>>>>", params); // >>>>> { blog: 'hieu' }
  console.log(">>>>>", blog); // [ 'hieu' ]

  // if :  http://localhost:3001/blogs/hieu/sub/alo => success
  console.log(">>>>>", params); // >>>>>  { blog: [ 'hieu', 'sub', 'alo' ] }
  console.log(">>>>>", blog); // [ 'hieu', 'sub', 'alo' ]

  // or

  return (
    <div>
      <h1>PostDetail name is {params.blog}</h1>
      <h1>PostDetail name is {blog}</h1>
    </div>
  );
}
