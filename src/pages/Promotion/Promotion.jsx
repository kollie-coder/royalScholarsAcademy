import React, { useState } from 'react';
import "./Promotion.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Promotioninfo from '../../components/promotionInfo/Promotioninfo';

const Promotion = () => {
 
  const [selected, setSelected] = useState('');

  const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
  };


  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
    <div className="new">
       
      <div className="newContainer">
       
       
        <div className="box-main-Pr">
        <div class="box-pr">
   <div className="box-body-pr">
   <h1 className='header-Pr'>Student Promotion Exercise</h1>
   
   <div>
   <Form.Select>
        <option disabled selected>Select Current Session</option> 
        <option>2018/2019</option>
        <option>2019/2020</option>
        <option>2020/2021</option>
        <option>2021/2022</option>
        <option>2022/2023</option>
        <option>2023/2024</option>
      </Form.Select>
      <br />
      <Form.Select>
        <option disabled selected>Select Current Class</option>
        <option>Primary 1</option>
        <option>Primary 2</option>
        <option>Primary 3</option>
        <option>Primary 4</option>
        <option>Js1</option>
        <option>Js2</option>
      </Form.Select>
      <br />
      <Form.Select>
        <option disabled selected>Select Student</option>
        <option>Ola</option>
        <option>Kola</option>
        <option>Ayo</option>
      </Form.Select>
      <br />
      <Form.Select>
        <option disabled selected>Select Class to be Promoted/Repeated</option>
        <option>Primary 1</option>
        <option>Primary 2</option>
        <option>Primary 3</option>
        <option>Primary 4</option>
        <option>Js1</option>
        <option>Js2</option>
      </Form.Select>
   <br />
      <InputGroup>
        
        <Form.Control as="textarea" aria-label="With textarea"  placeholder="Remark" />
      </InputGroup>
      </div>
   
 <div>
   <button type="submit" id="saveBtn-pr" className="promoteBtn">Promote Student</button>
  
			</div>
</div>
</div>


<div class="box-pr2">
   <div className="box-body-pr2">
   <div className='promotion-guide'>
          <p>Kindly Enter the promotion exercise at first term of the new academic session E.g <strong>First Term of 2022/2023 session</strong></p>
        
        </div>
			</div>
   </div>
</div>
 </div>
               
      </div>
      <div className='promotionInfoContainer'>
     <Promotioninfo />
     </div>
    </div>
    </div>
   

    
    
  );

}

export default Promotion

