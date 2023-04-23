import React, { useState } from 'react';
import "./Results.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Form from 'react-bootstrap/Form';
import Resultinfo from '../../components/resultInfo/Resultinfo';


const Results = () => {
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
       
       
        <div className="box-main-re">
        <div class="box-re">
   <div className="box-body-re">
   <h1 className='header-re'>Upload Class Result</h1>
   
   <div>
    <Form>
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
        <option disabled selected>Select Term</option>
        <option>First Term</option>
        <option>Second Term</option>
        <option>Third Term</option>
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
   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        
        <Form.Control as="textarea" aria-label="With textarea" style={{height:"13rem"}}  placeholder="Remark" />
        </Form.Group>
    </Form>
   
      </div>
   
 
</div>
</div>


<div class="box-re2">
   <div className="box-body-re2">

   <h1 className='header-re'>Upload Class Result</h1>
   <div className='result-guide'>
          <p>Select Result Prepared in PDF format </p>
        
        </div>

        <Form.Group controlId="formFileLg" className="mb-3">
        
        <Form.Control type="file" multiple accept="application/pdf, application/vnd.ms-excel"  />
      </Form.Group>
                <div className="form-group">
                    <button className="btn btn-primary" type="submit">Upload Result</button>
                   </div>
			</div>
   </div>
</div>
 </div>
               
      </div>
      <div className='resultInfoContainer'>
       <Resultinfo />
    </div>
    </div>

    
    </div>
  )
}

export default Results

