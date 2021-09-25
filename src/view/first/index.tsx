import React, {useState, useEffect} from 'react'
// import {withRouter} from 'react-router-dom'
import { Button, Carousel, Row, Col  } from 'antd';
import axios from 'axios';
import './index.css'

axios.defaults.baseURL="https://api-hmugo-web.itheima.net/api/public/v1";



function First(props){
  console.log('first组件。。。。。');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [firstInfo, setFirstInfo] = useState([]);
  const [carouselInfo, setCarouselInfo] = useState([]);
  const [classifyNavInfo, setClassifyNavInfo] = useState([]);
  const [floorInfo, setFloorInfo] = useState([])

  // 获取轮播图数据
  const getCarouselData = () => {
    axios.get('/home/swiperdata').then(res => {
      setCarouselInfo(res?.data?.message || [])
    })
  }
  // 获取分类导航
  const getClassifyNavData = () => {
    axios.get('/home/catitems').then(res => {
      setClassifyNavInfo(res?.data?.message || [])
    })
  }

  // 获取楼层数据
  const getFloorInfo = () => {
    axios.get('/home/floordata').then(res => {    
      setFloorInfo(res?.data?.message || [])
    })
  }

  useEffect(() => {
    getCarouselData();
    getClassifyNavData();
    getFloorInfo();
  },[])

  console.log(floorInfo);
  
  return(
    <div className='first-com'>
      {/* 轮播图> */}
      <Carousel>
        {
          carouselInfo && carouselInfo.map((item, index) => {
            return(
              <div key={index} className='every-carousel'>
                <img src={item?.image_src} alt='' />
              </div>
            )
          })
        }
      </Carousel>
      {/* 分类导航 */}
      <Row>
        {
          classifyNavInfo && classifyNavInfo.map((item, index) => {
            return(
              <Col key={index}>
                <div>
                  <img src={item.image_src} alt=""/>
                </div>
              </Col>
            )
          })
        }
      </Row>


      {/* 楼层基本信息 */}
      {
        floorInfo && floorInfo.map((item, index) => {
          return(
            <div className='every-floor-info' key={index}>
                <p>{item?.floor_title?.name}</p>
                {
                  item?.product_list && item?.product_list.map((_item, _index) => {
                    return(
                      <img key={_index} src={_item?.image_src} alt=""/>
                    )
                  })
                }
            </div>
          )
        })
      }
    </div>
  )
}
export default First;


