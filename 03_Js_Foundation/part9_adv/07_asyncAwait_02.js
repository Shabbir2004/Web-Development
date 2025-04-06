function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post data fetched");
    }, 2000); // 2 SECONDS
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment data fetched");
    }, 3000); // 3 SECONDS
  });
}

async function getBlogData() {
  try {
    console.log("Fetching Blog data");

    //  const part1 = await fetchPostData();    // METHOD 1
    // const part2 = await fetchCommentData();

    const [part1, part2] = await Promise.all([   // METHOD 2 
      fetchPostData(),
      fetchCommentData(),
    ]);

    console.log(part1);
    console.log(part2);

    console.log("Fetching Data Completed....");
  } catch (error) {
    console.log("Error fetching blog data", error);
  }
}

getBlogData();
