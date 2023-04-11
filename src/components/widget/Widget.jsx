import "./widget.scss";
import GroupsIcon from '@mui/icons-material/Groups';
import InsertChartOutlinedTwoToneIcon from '@mui/icons-material/InsertChartOutlinedTwoTone';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
const Widget = ({ type }) => {
  let data;
  switch (type) {
    case "totalStudents":
      data = {
        title: "Total Students",
        value : 100,
        icon: (
          <GroupsIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "#fff",
              color: "#1E90FF"
            }}
          />
        ),
      };
      break;
      case "uploadedResults":
      data = {
        title: "Uploaded Results",
        value: 125,
        icon: (
          <InsertChartOutlinedTwoToneIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "#fff",
              color: "#1E90FF"
            }}
          />
        ),
      };
      break;
      case "currentSession":
      data = {
        title: "Current Session",
        value: "2022/2023",
        icon: (
          <SchoolOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "#fff",
              color: "#1E90FF"
            }}
          />
        ),
      };
      break;
      case "currentTerm":
      data = {
        title: "Current Term",
        value: "Second Term",
        icon: (
          <CalendarTodayOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "#fff",
              color: "#1E90FF"
            }}
          />
        ),
      };
      break;
      

    
  }

  return (
    <div className="widget">
      
      <div className="left">
        {data.icon}
      </div>
      <div className="right">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.value}
        </span>
      </div>
    </div>
  );
};

export default Widget;
