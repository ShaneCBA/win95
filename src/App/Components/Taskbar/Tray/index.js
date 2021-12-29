function Tray() {
    const getTime = () => {
        let date = new Date();
        let hour = date.getHours();
        let period = hour<12?"AM":"PM";
        hour = hour<10?"0"+hour:hour;
        let minute = date.getMinutes();
        minute = minute<10?"0"+minute:minute;
        return hour+":"+minute+" "+period;
    } 
    return (
      <div id="tray" className="frame inset">
          <div>
              {getTime()}
          </div>
      </div>
    );
}

export default Tray;