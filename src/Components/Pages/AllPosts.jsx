import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Post from "../Posts/Post";


const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 35px;
  margin-right: 30px;
  margin-left: 30px;
  /* max-width: 960px; */
  font-size: 20px;

  @media (min-width: 768px) {
    margin-right: 65px;
    margin-left: 65px;
  }

  @media(min-width: 1440px){
    margin-right: 240px;
    margin-left: 240px;
  }

  .border {
    border-bottom: 1px solid black;
    width: 40%;
    max-width: 162px;
  }
`;

const Posts = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// const postsData = [
//   {
//     heading: "Lorem Impsum",
//     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui suscipit aliquid eos, similique atque sunt ipsum ducimus perspiciatis debitis praesentium, fugit ipsa rerum impedit facilis dolore veritatis ipsam fugiat molestias!",
//     author: "Girts Karcevskis",
//     get initials() {return this.author.split(" ")[0].split("")[0] + this.author.split(" ")[1].split("")[0]},
//     date: "28.02.2022",
//   },
//   {
//     heading: "Sed ut magna in tellus sodales",
//     text: "Brisket leberkas Kevin, alcatra pork chop filet mignon fatback sausage tongue biltong salami landjaeger cupim venison rump. Pancetta short ribs cupim meatball chislic picanha. Drumstick t-bone brisket meatball biltong chislic.",
//     author: "Thao Nguyen",
//     get initials() {return this.author.split(" ")[0].split("")[0] + this.author.split(" ")[1].split("")[0]},
//     date: "28.02.2022",
//   },
//   {
//     heading: "Lorem Impsum",
//     text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui suscipit aliquid eos, similique atque sunt ipsum ducimus perspiciatis debitis praesentium, fugit ipsa rerum impedit facilis dolore veritatis ipsam fugiat molestias!",
//     author: "Girts Karcevskis",
//     get initials() {return this.author.split(" ")[0].split("")[0] + this.author.split(" ")[1].split("")[0]},
//     date: "28.02.2022",
//   },
// ];



const AllPosts = () => {

  const [data, setData] = useState(null)

  const date = new Date(Date.now())
  const dateStr = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response => response.json())
    .then(res => setData(res))

  }, []);


  return (
    <>
      <Header>
        <div>All posts</div>
        <div className="border"></div>
      </Header>

      <Posts>
        {data && data.categories.map((post) => {
          return (
            <Post
              key={post.idCategory}
              heading={post.strCategory}
              img={post.strCategoryThumb}
              text={post.strCategoryDescription}
              author={'Girts Karcevskis'}
              initials={'GK'}
              date={dateStr}
            />
          );
        })}
      </Posts>
    </>
  );
};

export default AllPosts;
