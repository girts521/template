import React, {useState, useEffect} from "react";
import Card from "../Posts/Card";
import styled from "styled-components";

const HomeDiv = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 64px;  

@media (min-width: 1440px) {
    flex-direction: row;
    height: 80vh;
    /* padding-top: 232px;
    padding-bottom: 328px; */
    

   & :not(:last-child){
        margin-right: 25px;
    }
}
`

const Home = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => response.json())
        .then(res => {
            setData(res.categories.slice(0,3))
        })
    
      }, []);

    return(
        <HomeDiv>
        {data ? data.map((item) => {
            return(
                < Card key={item.idCategory} heading={item.strCategory}  img={item.strCategoryThumb}/>
            )
        }) : 'Loading...'}
        </HomeDiv>
    )
}

export default Home