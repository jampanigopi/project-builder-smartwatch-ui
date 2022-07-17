let smartWatch = {
    watch : document.querySelector(".watch"),
    hourSelector : document.querySelector(".hours"),
    minSelector : document.querySelector(".minutes"),
    secSelector : document.querySelector(".seconds"),
    daySelector : document.querySelector(".day"),
    monthSelector : document.querySelector(".month"),
    dateSelector : document.querySelector(".date"),
    opScreenLeft : document.querySelector(".opScreenLeft"),
    opScreenRight : document.querySelector(".opScreenRight"),
    watchBackground : document.querySelector(".background"),
    image : document.querySelector(".background img"),
    buttons : document.querySelector(".watch-buttons"),
    time : document.querySelector(".time"),
  
    setTime(day, month, date, hours, minutes, seconds) {
      this.daySelector.textContent = day;
      this.monthSelector.textContent = month;
      this.dateSelector.textContent = date;
      this.hourSelector.textContent = hours;
      this.minSelector.textContent = minutes;
      this.secSelector.textContent = seconds;
  
      if (hours <= 9) {
        this.hourSelector.textContent = `0${hours}`;
      }
  
      if (minutes <= 9) {
        this.minSelector.textContent = `0${minutes}`;
      }
  
      if (seconds <= 9) {
        this.secSelector.textContent = `0${seconds}`;
      }
    },
  
    openWatch() {
      const screenRight = this.opScreenRight.classList;
      const screenLeft = this.opScreenLeft.classList;
      const wbg = this.watchBackground.classList;
      const timeDisplay = this.time.classList;
      const current = "https://i.imgur.com/jYdK7hx.png";
      const buttons = this.buttons.classList;
      let watch = this.watch;
  
      // Screen left and right effect
      screenRight.toggle("opScreenRight-effect");
      screenLeft.toggle("opScreenLeft-effect");
      // Fade in effect on background and time display
      wbg.toggle("fadeIn-background");
      timeDisplay.toggle("fadeIn-time");
      // Slide in effect on the buttons
      buttons.toggle("slideIn-buttons");
  
      // Simulate clicked button
      watch.src = "https://i.imgur.com/JPONLNn.png";
      setTimeout(function() {
        watch.src = current;
      }, 150);
    },
  
    changeBackground() {
      let img = this.image;
      let watch = this.watch;
      const current = "https://i.imgur.com/jYdK7hx.png";
      let images = [
        "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=68a6f80071ad80e9c5e13bf86a58cd07&auto=format&fit=crop&w=256&q=60",
        "https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjF9&s=e4f266b3d08eca1acbeaf8e367e4244f&auto=format&fit=crop&w=256&q=60",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9e2448175103d36c873e2511d112d339&auto=format&fit=crop&w=256&q=60",
        "https://images.unsplash.com/photo-1517420878257-463729f65889?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b84f1bbee55b70460027ba6bad3c2099&auto=format&fit=crop&w=256&q=60",
        "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-0.3.5&s=405fd1e1a3a2a0578ba84a394549901e&auto=format&fit=crop&w=256&q=60",
        "https://images.unsplash.com/photo-1493514789931-586cb221d7a7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f8ab2656cca1f3fadd0cc4e254b27c8d&auto=format&fit=crop&w=256&q=60"
      ];
  
      const randomIndex = Math.floor(Math.random() * images.length);
      img.src = images[randomIndex];
  
      watch.src = "https://i.imgur.com/ixIKXfN.png";
      setTimeout(function() {
        watch.src = current;
      }, 150);
    }
  };
  
  function writeTime() {
    let getTime = new Date();
    let day = getTime.getDay();
    let month = getTime.getMonth();
    let date = getTime.getDate();
    let hours = getTime.getHours();
    let minutes = getTime.getMinutes();
    let seconds = getTime.getSeconds();
  
    const days = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ];
  
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
  
    smartWatch.setTime(days[day], months[month], date, hours, minutes, seconds);
  }
  
  function updateTime() {
    setInterval(writeTime, 1000);
  }