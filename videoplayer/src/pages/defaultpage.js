import React from "react";
import InputComponent from "../components/Input/input_component";
import ButtonComponent from "../components/button/button_component";
import Header from "../components/header";
import { useEffect, useState } from 'react';
import { Card, CardText, CardBody} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPlayer from 'react-player';

const Defaultpage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([])
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState('')
  const [notfound,setNotfound]=useState("false")
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("");
  }

  useEffect(() => {
    fetch("./responses/videolist.json")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setData(response)
      })
  })
  const callSearchFunction = (e) => {
    const info = [];
    data.filter(post => {
      if (searchValue === '') {
        setError("No data found")
        setFilteredData([])
      }
      else if (post.name.toLowerCase().includes(searchValue.toLowerCase())) {
        info.push(post)
        setFilteredData([...info])
        setError('')
        setNotfound("true")
      }
    })
    if(notfound==="false")
    {
      setError("No data found")
      setFilteredData([])
    }
    resetInputField();
  }
  return <>< div >
    <Header title={"Video Player"} />
  </div >
    <div className="container">
      <InputComponent change={handleSearchInputChanges} value={searchValue} />
      <ButtonComponent method={callSearchFunction} btn="search" />
    </div >
    <p>{error}</p>
    <div>
      <div>
        {filteredData.map((item) => (
          <Card style={{ width: '70%', margin: "auto" }}>
            <CardBody>
              <CardText>
                {item.name}
                <ReactPlayer
                  light={<img src={item.pic} alt='Thumbnail' />}
                  url={item.url}
                  width="100%"
                  height="100%"
                  controls
                />
              </CardText>
            </CardBody>
          </Card>
        ))}</div>
    </div>
    <div style={{ display: "flex", flexWrap: "wrap" }}>
    {
      data.map((item) => {
        if (error==='' && filteredData.length === 0) {
          return <>
            <Card style={{ width: '30%', marginLeft: '5px', marginTop: '5px' }}>
              <CardBody>
                <CardText>
                  {item.name}
                  <ReactPlayer
                    light={<img src={item.pic} alt='Thumbnail' />}
                    url={item.url}
                    width="100%"
                    height="100%"
                    controls
                  />
                </CardText>
              </CardBody>
            </Card></>
        }
      })}
  </div></>
}
export default Defaultpage