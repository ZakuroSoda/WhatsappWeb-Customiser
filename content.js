//User Defined Constants
var headerColor = "#111B21";
// var chatBGImageURL = "https://i.imgur.com/02HMWHU.png"; Old color scheme
// var chatBGImageURL = "https://i.imgur.com/C3XQfhf.png";
var chatBGImageURL = "https://i.imgur.com/Xit6r6N.png";

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

const customPage = async () => {
  var changed = false;
  while (!changed){
    try {
      await sleep(1000);
      document.querySelector("[data-testid='chatlist-header']").style.background = headerColor;
      document.querySelector("[data-testid='conversation-header']").style.background = headerColor;
      document.querySelector("[data-testid='conversation-panel-messages']").style.backgroundSize = "cover";
      document.querySelector("[data-testid='conversation-panel-messages']").style.backgroundImage = `url(${chatBGImageURL})`;
      
      if (document.querySelector("[data-testid='chatlist-header']").style.background == headerColor 
      && document.querySelector("[data-testid='conversation-header']").style.background == headerColor 
      && document.querySelector("[data-testid='conversation-panel-messages']").style.backgroundImage == `url(${chatBGImageURL})` 
      && document.querySelector("[data-testid='conversation-panel-messages']").style.backgroundSize == "cover")
      {
        changed = true;
      } 
    }
    catch(err){
      console.log(err);
    }
  }
  console.log("Custom Extension is Working");
}
customPage();

const privacyProtector = async () => {
  document.addEventListener("mousemove", function(event) {
    document.body.classList.remove('blurredElement');
    main();
  });

  document.addEventListener("keypress", function(event) {
      document.body.classList.remove('blurredElement');
      main();
  });

  const main = async () => {
      await sleep(30000);
      document.body.classList.add('blurredElement');
  }

  main()
}
// privacyProtector() I hate this

// const preserveDeleted = async () => {
//   // Prepare Shit
//   let messageStructList = document.querySelectorAll("[data-testid='msg-container']");
//   parentMessageStructList = [];
//   messageStructList.forEach((message) => {
//     parentMessageStructList.push(message.parentElement)
//   });

//   await sleep(200);

//   let newMessageStructList = document.querySelectorAll("[data-testid='msg-container']");
//   newParentMessageStructList = [];
//   newMessageStructList.forEach((message) => {
//     newParentMessageStructList.push(message.parentElement)
//   });

//   newParentMessageStructList.forEach((message, index) => {
//     message = JSON.stringify(message.innerHTML).toLowerCase();
//     if (message.includes("this message") && message.includes("deleted")){
//       //Future Code Goes Here:
//       //Shit the UID of the message changes on delete fml wasted 1 hour of my life
//     }
//   });
// } 
// // In development LOLZ