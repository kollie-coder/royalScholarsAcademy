import React,{useState} from 'react'
import StudentNabvar from '../../component/studentNavbar/StudentNabvar'
import StudentSidebar from '../../component/studentSidebar/StudentSidebar'
import Testimonialtable from '../../component/testimonialTable/Testimonialtable';
import "./studentTestimonial.scss";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';



const StudentTestimonials = () => {
  const [selected, setSelected] = useState('');

  const selectionChangeHandler = (event) => {
    setSelected(event.target.value);
  };
  return (
        

         <div className="list">
         <StudentSidebar />
    <div className="listContainer">
    <StudentNabvar />
    <div className="new">
       
      <div className="newContainer">
       
       
        <div className="box-main-St">
        <div class="box-st">
   <div className="box-body-st">
   <h1 className='header-St'>Student Comment</h1>
   
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
        <option disabled selected>Select Term</option>
        <option>First Term</option>
        <option>Second Term</option>
        <option>Third Term</option>
       
      </Form.Select>
      <br />
      
      <InputGroup>
        
        <Form.Control as="textarea" aria-label="With textarea" style={{height:"135px"}} placeholder="Comment" />
      </InputGroup>
      </div>
   
 <div>
   <button type="submit" id="saveBtn-pr" className="promoteBtn">Add Comment</button>
  
			</div>
</div>
</div>


</div>
 </div>
               
      </div>
      <div className='classInfoContainer'>

        <Testimonialtable />
     
     </div>
    </div>
    </div>
   

    
    
  );

}

export default StudentTestimonials