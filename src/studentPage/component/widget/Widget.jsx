import "./widget.scss";
import PersonIcon from '@mui/icons-material/Person';
import InsertChartOutlinedTwoToneIcon from '@mui/icons-material/InsertChartOutlinedTwoTone';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
const Widget = ({ type }) => {
  let data;
  switch (type) {
    case "presentClass":
      data = {
        title: "Present Class",
        value : "PLAYGROUP",
        icon: (
          <PersonIcon
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
      case "resultStatus":
      data = {
        title: "Result Status",
        value: "✅   Uploaded",
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
