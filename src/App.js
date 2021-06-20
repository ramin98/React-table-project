import React from 'react';
import './App.css';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return; 
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <thead>
        <th>Источники трафика</th>
        <th colSpan="6">Трафик</th>
        <th colSpan="3"><img width="15px" height="15px" src="https://testing1.alytics.ru/images/multichannel/crm.png"/>Продажи
        <div><img width="15px" height="15px" src="https://testing1.alytics.ru/images/goal_models/png/model_linear.png"/>Линейная модель</div></th>
        <th colSpan="3"><img width="15px" height="15px" src="https://testing1.alytics.ru/images/multichannel/composite.png"/>Цель с осн. GA
        <div><img width="15px" height="15px" src="https://testing1.alytics.ru/images/goal_models/png/composite.png"/>Состовная цель</div></th>
      </thead>
        <tr className="button_table">
          <td onClick={() => requestSort('name')} className="names">
          Название           
          </td>
          <td onClick={() => requestSort('price_1')}>
          Показы            
          </td>
          <td onClick={() => requestSort('price_2')}>
          Клики            
          </td>
          <td onClick={() => requestSort('price_3')}>
          Сеансы 
          </td>
          <td onClick={() => requestSort('price_4')}>
          CTR %             
          </td>
          <td onClick={() => requestSort('price_5')}>
          Цена клика            
          </td>
          <td onClick={() => requestSort('price_6')}>
          Затраты            
          </td>
          <td onClick={() => requestSort('price_7')}>
          Кол - во            
          </td>
          <td onClick={() => requestSort('price_8')}>
          CPA            
         </td>
          <td onClick={() => requestSort('price_9')}>
          Выручка            
          </td>
          <td onClick={() => requestSort('price_10')}>
          Кол - во            
          </td>
          <td onClick={() => requestSort('price_11')}>
          CPA            
          </td>
          <td onClick={() => requestSort('price_12')}>
          CR %            
          </td>
        </tr>
      <tr className="sums">
            <td className="sum">Итого</td>
            <td>3456</td>
            <td>6745</td>
            <td>1345</td>
            <td>5432</td>
            <td>1243</td>
            <td>5654</td>
            <td>1246</td>
            <td>8745</td>
            <td>1587</td>
            <td>1345</td>
            <td>2465</td>
            <td>2465</td>
      </tr>
      <tbody>
        {items.map((item) => (
          <tr key={item.id} className="tbody_">
            <td  className="name">{item.name}</td>
            <td>{item.price_1}</td>
            <td>{item.price_2}</td>
            <td>{item.price_3}</td>
            <td>{item.price_4}</td>
            <td>{item.price_5}</td>
            <td>{item.price_6}</td>
            <td>{item.price_7}</td>
            <td>{item.price_8}</td>
            <td>{item.price_9}</td>
            <td>{item.price_10}</td>
            <td>{item.price_11}</td>
            <td>{item.price_12}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function App() {
  return (
    <div className="App">
      <ProductTable
        products={[
          { id: 1, name: 'Пр Тр', 
          price_1:98, 
          price_2:123,
          price_3:1003,
          price_4:2367,
          price_5:1005,
          price_6:1002,
          price_7:567,
          price_8:1009,
          price_9:1007,
          price_10:12,
          price_11:1014,
          price_12:1011,
         },
          { id: 2, name: 'Яндекс Директ', 
          price_1:76, 
          price_2:321,
          price_3:567,
          price_4:1013,
          price_5:1005,
          price_6:10,
          price_7:1006,
          price_8:1009,
          price_9:1007,
          price_10:13,
          price_11:123,
          price_12:809,
         },
          { id: 3, name: 'Органический поиск', 
          price_1:55, 
          price_2:567,
          price_3:1003,
          price_4:1013,
          price_5:1005,
          price_6:257,
          price_7:1006,
          price_8:1009,
          price_9:1007,
          price_10:1010,
          price_11:1014,
          price_12:854,
        },
          { id: 4, name: 'Google Ads', 
          price_1:21, 
          price_2:467,
          price_3:1003,
          price_4:1013,
          price_5:467,
          price_6:174,
          price_7:1006,
          price_8:1009,
          price_9:1007,
          price_10:567,
          price_11:1013,
          price_12:234,
        },
          { id: 5, name: 'Переходы с сайтов',
          price_1:23, 
          price_2:1003,
          price_3:1003,
          price_4:367,
          price_5:1005,
          price_6:1002,
          price_7:16,
          price_8:569,
          price_9:1013,
          price_10:1010,
          price_11:1014,
          price_12:765,
        },
          { id: 6, name: 'Email рассылки', 
           price_1:45, 
          price_2:890,
          price_3:567,
          price_4:378,
          price_5:1013,
          price_6:1002,
          price_7:103,
          price_8:1009,
          price_9:10,
          price_10:1010,
          price_11:813,
          price_12:457,
        },
        ]}
      />
    </div>
  );
}