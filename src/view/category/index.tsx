
import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Item from 'antd/lib/list/Item';
axios.defaults.baseURL="https://api-hmugo-web.itheima.net/api/public/v1";


function Category(){

  const [category, setCategory] = useState([]);

  const getCategory = () => {
    axios.get('/categories').then(res => {
      console.log(res);
      setCategory(res?.data?.message);
    })
  }

  useEffect(() => {
    getCategory();
  },[])

  return(
    <div className='category-com'>
      <div className='left-category'>
        {
          category && category.map((item, index) => {
            return(
              <div key={index}>
                <p>{item?.cat_name}</p>
                {
                  item?.children && item?.children.map((_item, _index) => {
                    return(
                      <div key={_index}>
                        <p>--{_item?.cat_name}</p>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
      <div className='detail-every-category'>

      </div>
    </div>
  )
}

export default Category;