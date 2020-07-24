import React from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [{
  id: 1,
  image: 'https://lh3.googleusercontent.com/proxy/aeniChZeyam49HRwfyjzQfRW1UTT1Kmg2pa-XPDlcujPj4CSLbLSvHyR0XQ3M16uSBUn-ER2SMP0vaV-9YuF7SihVCzVCbm3KpzlMMhSl6wS62nuEiiH6vB6u-VDNI8b2wnOE0PVFpnfVUOIt68mCw',
  name: '박진우',
  birthday: '911226',
  gender: '남자',
  job: '웹퍼블리셔'
},
{
  id: 2,
  image: 'https://lh3.googleusercontent.com/proxy/aeniChZeyam49HRwfyjzQfRW1UTT1Kmg2pa-XPDlcujPj4CSLbLSvHyR0XQ3M16uSBUn-ER2SMP0vaV-9YuF7SihVCzVCbm3KpzlMMhSl6wS62nuEiiH6vB6u-VDNI8b2wnOE0PVFpnfVUOIt68mCw',
  name: '김남영',
  birthday: '970213',
  gender: '여자',
  job: '디자이너'
},
{
  id: 3,
  image: 'https://lh3.googleusercontent.com/proxy/aeniChZeyam49HRwfyjzQfRW1UTT1Kmg2pa-XPDlcujPj4CSLbLSvHyR0XQ3M16uSBUn-ER2SMP0vaV-9YuF7SihVCzVCbm3KpzlMMhSl6wS62nuEiiH6vB6u-VDNI8b2wnOE0PVFpnfVUOIt68mCw',
  name: 'Who',
  birthday: '911226',
  gender: '남자',
  job: '축구선수'
}]

function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          )
        })
      }      
    </div>
  );
}

export default App;
